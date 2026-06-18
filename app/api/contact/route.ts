import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function errorResponse(status = 500) {
  return NextResponse.json(
    { message: "Something went wrong. Please try again." },
    { status },
  );
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return errorResponse(400);
  }

  const name = normalize((payload as Record<string, unknown>)?.name);
  const email = normalize((payload as Record<string, unknown>)?.email);
  const message = normalize((payload as Record<string, unknown>)?.message);
  const company = normalize((payload as Record<string, unknown>)?.company);

  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message || !emailPattern.test(email)) {
    return errorResponse(400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Missing contact email environment variables.");
    return errorResponse(500);
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Contact email request failed.", await response.text());
    return errorResponse(500);
  }

  return NextResponse.json({ ok: true });
}
