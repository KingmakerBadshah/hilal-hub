# HilalHub Qurbani OS — Next.js Skeleton

Ready-to-run Next.js starter for HilalHub Pvt Ltd with TailwindCSS, routes for Packages, Track, Vendor, and Admin; plus API stubs for checkout, tracking, and logins.

## Quick Start
```bash
# 1) Extract and install
pnpm i   # or: npm i  |  yarn

# 2) Configure environment
cp .env.example .env.local
# update ADMIN_DASHBOARD_KEY etc.

# 3) Run
pnpm dev   # http://localhost:3000
```

## Structure
- `app/` — App Router pages
- `app/api/*` — API routes (stubs)
- `components/` — add UI components here
- `lib/` — helper libraries

## Next Steps
- Wire payments (Easypaisa / Stripe)
- Hook database (Firebase / Prisma)
- Add WhatsApp Business webhook
- Replace admin cookie with real auth (Auth.js / Clerk)
- Add vendor media upload (S3/Cloud Storage with signed URLs)
