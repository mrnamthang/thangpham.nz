# thangpham.nz

Personal portfolio site. Astro + Tailwind, built as static files, hosted on Vercel.

## Editing text

- Page text: `src/content/pages/*.md`
- Services: `src/content/services/*.md` (one file each, `order` sets the order)
- Case studies: `src/content/case-studies/*.md` (`featured: true` shows it on the home page)
- Email, Calendly, Formspree ID, links, nav: `src/site.config.ts`
- About photo: put it in `src/assets/` and set `photo` in `src/content/pages/about.md`

Find all placeholders with `grep -rn TODO src`.

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Contact form (Formspree)

1. Sign up at formspree.io and create a form that sends to your email.
2. Copy the form ID (the part after `/f/` in the endpoint URL).
3. Paste it into `formspreeId` in `src/site.config.ts`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: Add New > Project > import the repo. Vercel detects Astro. Keep the defaults and deploy.
3. Every push to `main` now deploys to production. Other branches get preview URLs.

## Custom domain (Porkbun)

1. In Vercel: Project > Settings > Domains > add `thangpham.nz` and `www.thangpham.nz`. Choose to redirect `www` to the root domain.
2. In Porkbun: Domain Management > thangpham.nz > DNS. Delete the default parking records (`ALIAS` and `*` `CNAME` pointing to `pixie.porkbun.com`), then add:

   | Type  | Host | Answer                 |
   |-------|------|------------------------|
   | A     | (blank) | `76.76.21.21`       |
   | CNAME | www  | `cname.vercel-dns.com` |

   If Vercel's Domains page shows different values for your project, use those.
3. Wait for Vercel to show "Valid Configuration" (usually minutes, up to a few hours). Vercel adds the HTTPS certificate on its own.
4. Do not touch MX or TXT records you set up for email.
5. Add the site to Google Search Console and submit `https://thangpham.nz/sitemap-index.xml`.
