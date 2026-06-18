"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./site-pages.module.css";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success"; message: "Message sent. Thank you." }
  | { type: "error"; message: "Something went wrong. Please try again." };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalize(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const errorSummaryRef = useRef<HTMLParagraphElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    if (!errors.name && !errors.email && !errors.message) {
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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: normalize(formData.get("name")),
      email: normalize(formData.get("email")),
      message: normalize(formData.get("message")),
      company: normalize(formData.get("company")),
    };

    const nextErrors: FormErrors = {};

    if (!payload.name) {
      nextErrors.name = "Enter your name.";
    }

    if (!payload.email) {
      nextErrors.email = "Enter your email address.";
    } else if (!emailPattern.test(payload.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!payload.message) {
      nextErrors.message = "Enter a message.";
    }

    setErrors(nextErrors);
    setStatus({ type: "idle", message: "" });

    if (Object.keys(nextErrors).length > 0) {
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

      form.reset();
      setErrors({});
      setStatus({ type: "success", message: "Message sent. Thank you." });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form
      className={`${styles.contactForm} ${styles.contactPageForm}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <p
        id="contact-form-error-summary"
        ref={errorSummaryRef}
        className={`${styles.statusMessage} ${styles.contactPageStatus}`}
        role={errors.name || errors.email || errors.message ? "alert" : "status"}
        aria-live={errors.name || errors.email || errors.message ? "assertive" : "polite"}
      >
        {errors.name || errors.email || errors.message
          ? "Please correct the highlighted fields."
          : ""}
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
            className={`${styles.formInput} ${styles.contactPageInput}`}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={
              errors.name
                ? "contact-form-error-summary contact-name-error"
                : undefined
            }
          />
          <p
            id="contact-name-error"
            className={`${styles.fieldMessage} ${styles.contactPageFieldMessage}`}
          >
            {errors.name ?? ""}
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
            className={`${styles.formInput} ${styles.contactPageInput}`}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={
              errors.email
                ? "contact-form-error-summary contact-email-error"
                : undefined
            }
          />
          <p
            id="contact-email-error"
            className={`${styles.fieldMessage} ${styles.contactPageFieldMessage}`}
          >
            {errors.email ?? ""}
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
          className={`${styles.formTextarea} ${styles.contactPageTextarea}`}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={
            errors.message
              ? "contact-form-error-summary contact-message-error"
              : undefined
          }
        />
        <p
          id="contact-message-error"
          className={`${styles.fieldMessage} ${styles.contactPageFieldMessage}`}
        >
          {errors.message ?? ""}
        </p>
      </div>

      <div className={styles.visuallyHidden} aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
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
          {isSending ? "Sending..." : "Send message"}
        </button>
        <p
          className={`${styles.statusMessage} ${styles.contactPageStatus}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
