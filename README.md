# AfterCoffee LTD — website

Marketing site for **AfterCoffee LTD**, a quantitative **proprietary trading
firm** running systematic strategies in crypto markets. Built with **SvelteKit**
(Svelte 5).

Minimal & professional — navy accent (`#0a1f44`) on a white background.

## Pages

| Route         | Page                                          |
| ------------- | --------------------------------------------- |
| `/`           | Home                                          |
| `/about`      | About (team, bios with "See more" modal)      |
| `/strategies` | Strategies (alphas + how it works)            |
| `/contact`    | Contact (First / Last / Email → Formspree)    |
| `/legal`      | Legal (Terms, Privacy, Disclaimer)            |

> **Status: draft.** Structure, layout and styling are in place. Remaining
> placeholder copy is marked _"Placeholder — …"_ (or muted italic on the page).

## Where the content lives

- **Team & bios** — `src/lib/data/team.js` (`bio` = card, `bioFull` = "See more")
- **Strategies (alphas)** — `src/lib/data/strategies.js`
- **Company details** (address, company no., email, jurisdiction) — `src/lib/data/company.js`
- Page-specific placeholders live inline in the relevant `src/routes/**/+page.svelte`.

## Contact form

The site is static, so the form posts client-side to **Formspree**
(`FORM_ENDPOINT` in `src/routes/contact/+page.svelte` →
`https://formspree.io/f/xzdnawkv`), which emails the team, then shows the
thank-you state. Contact email: `paolo@aftercoffee.tech`.

## Legal

`/legal` contains **draft** Terms, Privacy and a proprietary-trading Disclaimer
with bracketed `[…]` placeholders (company no., jurisdiction, address, dates).
**Have qualified legal counsel review and finalise before relying on it.**

## Design tokens

Colours, spacing and type are CSS variables in `src/app.css` (`:root`).

## Develop

```sh
npm install
npm run dev        # http://localhost:5173
```

## Build

Statically prerendered via `@sveltejs/adapter-static` — output in `build/`,
deployable to any static host (Netlify, Vercel, GitHub Pages, S3, …).

```sh
npm run build
npm run preview    # preview the production build locally

# Preview exactly as GitHub Pages will serve it (under /<repo>):
BASE_PATH=/after_coffee_website npm run build && npm run preview
```

## Deploy to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and publishes on every push
to `main`. One-time setup:

1. **Make this folder its own git repo and push it to GitHub** (it isn't one yet):
   ```sh
   cd after_coffee_website
   git init && git add -A && git commit -m "AfterCoffee website"
   git branch -M main
   git remote add origin git@github.com:<user>/<repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment → Source: “GitHub Actions.”**
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The site will be at `https://<user>.github.io/<repo>/`.

### Base path — handled automatically

GitHub project sites are served from `/<repo>`, so the app is built with
`BASE_PATH=/<repo>` (the workflow derives it from the repo name). All internal
links use `base` from `$app/paths`, so they resolve correctly. You don't need to
change anything for a standard project site.

- **User/org site** (`<user>.github.io` repo): the workflow detects this and uses
  an empty base — no action needed.
- **Custom domain**: add `static/CNAME` containing your domain, and edit the
  “Compute base path” step in the workflow to always set `BASE_PATH=` (empty),
  since a custom domain serves from the root.

> `static/.nojekyll` is required (and included) so GitHub Pages serves
> SvelteKit’s `_app/` directory instead of stripping it as a Jekyll build.
