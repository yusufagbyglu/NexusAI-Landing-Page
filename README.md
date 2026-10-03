## Newsletter (demo mode)

The footer form is a working demo of a production-style subscription flow:

- Server-side validation with Zod
- IP-based sliding-window rate limiting (Upstash Redis)
- Welcome email built with React Email, rendered on the server and shown in a sandboxed iframe
- In demo mode no email is sent and no address is stored

### Setup

Copy `.env.example` to `.env.local` and add your Upstash credentials.
