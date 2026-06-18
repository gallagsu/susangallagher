# Susan Gallagher Portfolio

Portfolio site built with Next.js App Router.

## Development

```bash
npm run dev
```

## Contact Form Setup

The contact form posts to `app/api/contact/route.ts` and sends mail server-side using Resend's HTTP API.

Set the following values in `.env.local`:

```bash
CONTACT_TO_EMAIL=your-inbox@example.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
RESEND_API_KEY=your_resend_api_key
```

Notes:

- `CONTACT_TO_EMAIL` stays server-side only and is never exposed to the client.
- `CONTACT_FROM_EMAIL` must be a sender allowed by your Resend account.
- Do not commit real secrets.
