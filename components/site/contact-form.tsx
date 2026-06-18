"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./site-pages.module.css";

type FormField = "name" | "email" | "message";

type FormValues = {
  name: string;
  email: string;
  message: string;
  company: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type FormStatus =
  | { type: "idle"; message: "" }
  | {
      type: "success";
      message: "Thank you for your message. I will be in touch shortly.";
    }
  | {
      type: "error";
      message: "Your message could not be sent right now. Please try again in a moment.";
    };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fieldLabels: Record<FormField, string> = {
  name: "the NAME field",
  email: "the EMAIL field",
  message: "the MESSAGE field",
};

function formatFieldList(fields: string[]) {
  if (fields.length <= 1) {
    return fields[0] ?? "";
  }

  if (fields.length === 2) {
    return `${fields[0]} and ${fields[1]}`;
  }

  return `${fields.slice(0, -1).join(", ")}, and ${fields.at(-1)}`;
}

function validateField(field: FormField, value: string) {
  const trimmedValue = value.trim();

  switch (field) {
    case "name":
      return trimmedValue ? undefined : "Name is required.";
    case "email":
      if (!trimmedValue) {
        return "Email is required.";
      }

      return emailPattern.test(trimmedValue)
        ? undefined
        : "Enter a valid email address, like name@example.com.";
    case "message":
      return trimmedValue ? undefined : "Message is required.";
  }
}

function validateValues(values: FormValues): FormErrors {
  return {
    name: validateField("name", values.name),
    email: validateField("email", values.email),
    message: validateField("message", values.message),
  };
}

export function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const errorSummaryRef = useRef<HTMLParagraphElement>(null);
  const statusRef = useRef<HTMLElement>(null);
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [touched, setTouched] = useState<Partial<Record<FormField, true>>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    const hasErrors = Boolean(errors.name || errors.email || errors.message);

    if (!hasErrors) {
      return;
    }

    if (errors.name) {
      nameRef.current?.focus();
      return;
    }

    if (errors.email) {
      emailRef.current?.focus();
      return;
    }

    if (errors.message) {
      messageRef.current?.focus();
    }
  }, [errors]);

  useEffect(() => {
    if (status.type === "idle") {
      return;
    }

    statusRef.current?.focus();
  }, [status]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.currentTarget;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }

    if (name === "name" || name === "email" || name === "message") {
      const field = name as FormField;

      if (touched[field]) {
        setErrors((currentErrors) => ({
          ...currentErrors,
          [field]: validateField(field, value),
        }));
      }
    }
  }

  function handleBlur(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.currentTarget;

    if (name !== "name" && name !== "email" && name !== "message") {
      return;
    }

    const field = name as FormField;

    setTouched((currentTouched) => ({
      ...currentTouched,
      [field]: true,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: validateField(field, value),
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
      company: values.company.trim(),
    };

    const nextErrors = validateValues(payload);

    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      message: true,
    });
    setStatus({ type: "idle", message: "" });

    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setValues({
        name: "",
        email: "",
        message: "",
        company: "",
      });
      setTouched({});
      setErrors({});
      setStatus({
        type: "success",
        message: "Thank you for your message. I will be in touch shortly.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Your message could not be sent right now. Please try again in a moment.",
      });
    } finally {
      setIsSending(false);
    }
  }

  const invalidFields = (Object.entries(errors) as [FormField, string | undefined][])
    .filter(([, error]) => Boolean(error))
    .map(([field]) => fieldLabels[field]);
  const errorCount = invalidFields.length;
  const errorSummary =
    errorCount > 0
      ? `Please check ${formatFieldList(invalidFields)} and try again.`
      : "";

  if (status.type === "success") {
    return (
      <section
        ref={statusRef}
        tabIndex={-1}
        className={`${styles.contactConfirmation} ${styles.contactPageConfirmation}`}
        aria-live="polite"
        aria-labelledby="contact-confirmation-title"
      >
        <h2
          id="contact-confirmation-title"
          className={`${styles.contactConfirmationTitle} ${styles.contactPageConfirmationTitle}`}
        >
          Thank you!
        </h2>
        <p
          className={`${styles.contactConfirmationMessage} ${styles.contactPageConfirmationMessage}`}
        >
          {status.message}
        </p>
      </section>
    );
  }

  return (
    <form
      className={`${styles.contactForm} ${styles.contactPageForm}`}
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isSending ? "true" : "false"}
    >
      <p
        id="contact-form-error-summary"
        ref={errorSummaryRef}
        tabIndex={errorCount > 0 ? -1 : undefined}
        className={`${styles.statusMessage} ${styles.contactPageStatus} ${
          errorCount > 0 ? styles.statusError : ""
        }`}
        role={errorCount > 0 ? "alert" : "status"}
        aria-live={errorCount > 0 ? "assertive" : "polite"}
      >
        {errorSummary}
      </p>
      <div className={styles.contactPageCompactRow}>
        <div className={`${styles.fieldGroup} ${styles.contactPageFieldGroup}`}>
          <label
            htmlFor="contact-name"
            className={`${styles.fieldLabel} ${styles.contactPageLabel}`}
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            ref={nameRef}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your name"
            className={`${styles.formInput} ${styles.contactPageInput}`}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={
              errors.name ? "contact-form-error-summary" : undefined
            }
          />
          <p
            id="contact-name-error"
            className={`${styles.fieldMessage} ${styles.contactPageFieldMessage}`}
          >
            {""}
          </p>
        </div>

        <div className={`${styles.fieldGroup} ${styles.contactPageFieldGroup}`}>
          <label
            htmlFor="contact-email"
            className={`${styles.fieldLabel} ${styles.contactPageLabel}`}
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            ref={emailRef}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="name@example.com"
            className={`${styles.formInput} ${styles.contactPageInput}`}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={
              errors.email ? "contact-form-error-summary" : undefined
            }
          />
          <p
            id="contact-email-error"
            className={`${styles.fieldMessage} ${styles.contactPageFieldMessage}`}
          >
            {""}
          </p>
        </div>
      </div>

      <div className={`${styles.fieldGroup} ${styles.contactPageFieldGroup}`}>
        <label
          htmlFor="contact-message"
          className={`${styles.fieldLabel} ${styles.contactPageLabel}`}
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          ref={messageRef}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${styles.formTextarea} ${styles.contactPageTextarea}`}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={
            errors.message
              ? "contact-form-error-summary"
              : undefined
          }
        />
        <p
          id="contact-message-error"
          className={`${styles.fieldMessage} ${styles.contactPageFieldMessage}`}
        >
          {""}
        </p>
      </div>

      <div className={styles.visuallyHidden} aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          value={values.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={`${styles.formActions} ${styles.contactPageActions}`}>
        <button
          type="submit"
          className={`${styles.pageButton} ${styles.contactPageButton}`}
          disabled={isSending}
        >
          {isSending ? "Sending message..." : "Send message"}
        </button>
        <p
          ref={statusRef}
          tabIndex={status.type !== "idle" ? -1 : undefined}
          className={`${styles.statusMessage} ${styles.contactPageStatus} ${
            status.type === "success"
              ? styles.statusSuccess
              : status.type === "error"
                ? styles.statusError
                : ""
          }`}
          role={status.type === "error" ? "alert" : "status"}
          aria-live={status.type === "error" ? "assertive" : "polite"}
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
