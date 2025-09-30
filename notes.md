# Project Setup Notes

## Initial Setup
- Cloned the repository from https://github.com/vercel/nextjs-subscription-payments
- Pushed to personal GitHub repo: https://github.com/anaonsxm/nextjs-subscription-payments
- Installed dependencies with `pnpm install`
- Set up environment variables in `.env.local`:
  - Supabase URL and keys from new database
  - Stripe test keys from sandbox account
  - Webhook secret from Stripe CLI
- Created test products in Stripe: Standard, Pro, Premium subscriptions

## Issues Encountered
- App exits with code 1 after starting dev server
- Deprecated packages in package.json
- npm warnings for unknown env configs (verify-deps-before-run, _jsr-registry)

## Updates Made
- Updated all dependencies to latest versions in package.json
- Installed updated packages with pnpm install
- Peer dependency warnings for eslint and typescript-eslint
- Updated README.md to reflect current setup and user's repo
- Removed sunset warning and outdated instructions
- Added quick start guide and simplified development section
- Fixed Next.js 15 compatibility issues:
  - Made createClient async and awaited cookies()
  - Updated all server-side usages to await createClient()
- Updated tsconfig.json target from es5 to es2017 to fix deprecated warning
- Dev server now runs without errors

## Supabase Local Setup
- Updated all Supabase and related dependencies to latest versions
- Fixed Supabase CLI installation by running postinstall script manually
- Started Supabase locally with `npx supabase start`
- Applied migrations automatically during startup
- Updated .env.local to use local Supabase instance
- Fixed PostCSS configuration for Tailwind CSS compatibility
- Downgraded Tailwind CSS to v3.4.17 for compatibility with existing codebase

## Current Status
- ✅ Supabase local instance running on `http://127.0.0.1:54321`
- ✅ Database tables created (products, prices, etc.)
- ✅ Test products manually inserted into local database
- ✅ Stripe webhook listener running
- ✅ Stripe fixtures created test products in Stripe dashboard
- ❌ Webhook forwarding from Stripe CLI to localhost not working
- ❌ Dev server having connectivity issues (may need restart)

## Next Steps
- Debug webhook forwarding from Stripe CLI to localhost
- Test manual product insertion to verify app functionality
- Fix webhook sync issue
- Test full payment flow once products are visible