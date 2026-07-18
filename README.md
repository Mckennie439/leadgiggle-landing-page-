# Avalanche Creations

Marketing website for Avalanche Creations, an interior design company based in
Garden Estate, Nairobi, serving clients across Kenya.

Built with React, TypeScript, Vite, Tailwind CSS, React Router, and Supabase.

## Development

```bash
npm install
cp .env.example .env   # fill in your Supabase project credentials
npm run dev
```

## Available Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Environment Variables

See `.env.example`. The app reads Supabase credentials via
`VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`, used for blog/portfolio data
and for resolving image URLs hosted in Supabase Storage.

## Deployment

The project is configured for static/SPA deployment on Vercel (`vercel.json`
handles the SPA rewrite, redirects, and security/cache headers). Set the
environment variables above in the Vercel project settings before deploying.

## SEO

- Per-page meta titles, descriptions, Open Graph, and Twitter Card tags via
  `SEOOptimizer` (`src/components/common/SEOOptimizer.tsx`).
- JSON-LD structured data (LocalBusiness/Organization, Service, Article,
  Project, FAQ, Breadcrumb) via `StructuredData`
  (`src/components/common/StructuredData.tsx`) and a site-wide LocalBusiness
  schema in `index.html`.
- `public/sitemap.xml` and `public/robots.txt` are maintained by hand — when
  adding a new route, portfolio project, or blog post, add a corresponding
  `<url>` entry to the sitemap.
