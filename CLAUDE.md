# Design System Rules — ramina-psychologist-site

This is the marketing site for Ramina Kolbaya, a psychologist/art-therapist in Düsseldorf. It was built by porting a Figma Make export (single-page site, RU/UA/DE i18n) into idiomatic React. This doc reflects the actual conventions in the codebase today.

## ⚠️ CSS nesting gotcha (read this first)

**Native CSS nesting does NOT support Sass-style `&__element` string concatenation.** `.hero { &__inner { ... } }` silently fails to parse in real browsers — only `&:hover`, `&.modifier`, `& .child`, bare descendant selectors, and nested `@media`/`@supports` work. This caused a full layout collapse during initial build (confirmed via `document.styleSheets` — the nested rule just doesn't exist in the CSSOM, no console error).

**Rule for this repo: write BEM classes as flat top-level selectors** (`.hero { }`, `.hero__inner { }`, `.hero__content { }` — all top-level, not nested into each other). Nesting is only used *within* one of those flat rules for pseudo-classes (`&:hover`), descendant elements (`img { }`, `p { }`), and `@media (max-width: 1024px) { }`. See `src/App.css` for the working pattern.

## ⚠️ Two styling layers coexist — know which one you're in

Tailwind CSS v4 + shadcn/ui were added on top of the original plain-CSS setup (see §3a). This created **two parallel styling systems that must not blend**:

- **`src/sections/*.tsx` + `src/App.css`** — the original layer. Flat BEM classes, plain CSS, hand-written. This is still authoritative for all existing page sections. Don't rewrite a section's markup to Tailwind utility classes just because Tailwind is now available.
- **`src/components/ui/*.tsx`** — shadcn-generated primitives (Button, Dialog, Accordion, etc.), installed via `npx shadcn add <name>`. These use Tailwind utility classes internally by design — don't hand-convert them to BEM/App.css, that fights the CLI's update mechanism (`shadcn add --overwrite` re-generates the file from the registry).

When a section adopts a shadcn component, the component itself stays Tailwind-styled; the section's own layout/spacing around it stays in `App.css` as before, matching the existing `.block__inner` container pattern (§7).

## 1. Token Definitions

- **Location:** `src/index.css`, inside `:root`. Light-only (`color-scheme: light`) — the source design has no dark mode, so none was invented.
- **Format:** plain CSS custom properties, hand-written, no transform pipeline.
- **The palette is deliberately four colors** — white, near-black, a soft blue, and a light tan — everything else in `:root` is a *semantic role* built from those four (via flat hex/rgba, or `color-mix()` where a derived shade is needed), not a fifth color. Don't add a new hex value to fix a one-off contrast/hover problem — derive it from these four instead, the way `--accent-hover` does.
- **Current tokens:**

  ```css
  :root {
    --text: rgba(31, 31, 31, 0.72);   /* body copy — softened black, not a separate grey */
    --text-h: #1f1f1f;                /* headings, buttons, high-emphasis text */
    --bg: rgba(214, 208, 194, 0.35);  /* recessed panel / alternating-section fill — tan tint */
    --surface: #ffffff;               /* card fill, page canvas */
    --border: rgba(31, 31, 31, 0.12);
    --accent: #97c2ec;                /* soft blue — fills, hover states, focus rings, never small text (fails contrast) */
    --accent-hover: color-mix(in srgb, var(--accent) 45%, #1f1f1f 55%); /* the one blue dark enough to use as text */
    --accent-bg: rgba(151, 194, 236, 0.22);
    --neutral: #d6d0c2;                /* the tan, as a flat color (badges, dividers, `color-mix()` base for row hover states) */

    --sans: 'Manrope', system-ui, 'Segoe UI', Roboto, sans-serif;
  }
  ```

- **Contrast rule that shapes almost every component decision here:** `--accent` (`#97c2ec`) is too light to pass WCAG AA as text or as a background under white text (~1.9:1) — it only works as a fill *under dark text* (`--text-h`), or as a decorative/hover/focus touch. Every "primary" filled surface (buttons, the FAQ toggle, the floating call button, badges that used to be solid blue) uses `--text-h` (black) with white content instead; `--accent` shows up as the *hover* state of those same elements (bg flips to blue, text/icon flips to `--text-h`), as light tinted backgrounds (`--accent-bg`) behind dark text/icons, and as `--ring` for `:focus-visible`. If you introduce a new blue-filled element, run the same check before shipping it — don't assume the token name means it's always safe as-is.
- **Fonts:** Manrope only, loaded via `<link>` in `index.html` (weights 300–800) — not `@import` in CSS. There is no second/serif typeface; hierarchy is carried by `font-weight` and `font-size`, not a font-family switch (headings 700–800, subheadings/leads 500–600, body 400, small labels 600 + uppercase + letter-spacing).
- **Type floor:** body/paragraph copy is 18px minimum; nothing on the page (labels, dates, captions) goes below 14px, including inside `@media (max-width: 1024px)` — the root font-size does not shrink on mobile.
- If Figma variables need to be synced in, extend this same `:root` block — keeping the four-color discipline above.
- **shadcn/ui semantic tokens are bridged onto these same values**, not duplicated — see §3a. `--primary` = `var(--text-h)` (buttons are black, not blue — see the contrast rule above), `--background` = `var(--surface)`, `--secondary` = `var(--bg)`, `--ring` = `var(--accent)`, etc. There is still only one real color palette; shadcn's variable names are aliases onto it.

## 2. Component Library

- **`src/sections/`** — one flat `.tsx` file per page section (`Header`, `Hero`, `About`, `HowIWork`, `Experience`, `Education`, `Services`, `Process`, `Testimonials`, `Faq`, `Contact`, `Footer`, `FloatingCallButton`), composed in order by `src/App.tsx`. No per-component CSS files — all styling lives in the single `src/App.css` (see §7), matching the pre-existing project convention of one global stylesheet per scope.
- **`src/components/ui/`** — shadcn/ui primitives, generated by the CLI (see §3a). This is the one exception to "no `src/components/` yet": these are vendored, registry-managed files, not hand-authored reusable pieces, so the original reasoning for deferring `src/components/` doesn't apply to them. Don't hand-edit files in here beyond what `shadcn add` generates — re-run the CLI with `--overwrite` instead of patching by hand, so the files stay in sync with the registry.
- **No other `src/components/` yet** — nothing hand-authored is reused across more than one section. If a genuinely reusable *non-shadcn* piece emerges, that's still a case-by-case call, not before.
- **State is colocated, not lifted unnecessarily:** only `lang` (the active RU/UA/DE language) lives in `App.tsx` and is passed down as a prop, because every section needs it. `serviceIndex`/`currency` (in `Services.tsx`) and `faqOpenIndex` (in `Faq.tsx`) are local `useState` in the section that owns them — nothing else needs that state.
- **No Storybook, no component tests.**

## 3. Frameworks & Libraries

- **UI framework:** React 19, function components + hooks, `StrictMode` in `src/main.tsx`.
- **Language:** TypeScript, strict config (see `tsconfig.app.json`) — `noUnusedLocals`/`noUnusedParameters` are on, keep generated code clean.
- **Styling:** two layers, see §3a. Original sections: plain CSS, no CSS-in-JS/Modules (`src/index.css` for tokens + resets, `src/App.css` for flat BEM section styles). shadcn primitives: Tailwind v4 utility classes.
- **Build system:** Vite 8, `@vitejs/plugin-react`, `@tailwindcss/vite`. `npm run dev` / `npm run build` (`tsc -b && vite build`) / `npm run preview`.
- **Linting:** Oxlint (`npm run lint`). No Prettier/ESLint.
- **No routing, state management, or data-fetching library.** The whole site is one scrolling page with hash-anchor nav (`#about`, `#services`, etc.) — don't introduce React Router for this.

## 3a. Tailwind CSS + shadcn/ui

Added on top of the original plain-CSS setup specifically so shadcn/ui components could be pulled in via the CLI. Read the "two styling layers" warning near the top of this doc before touching either layer.

- **Tailwind CSS v4**, via `@tailwindcss/vite` (no `tailwind.config.js` — v4 is configured in CSS via `@theme inline` in `src/index.css`).
- **shadcn CLI:** `npx shadcn add <component>` to pull a component into `src/components/ui/`. Config lives in `components.json` (style: `radix-nova`, base color: `neutral`, icon library: `lucide`, CSS variables mode). Base primitives come from `radix-ui`; variants are built with `class-variance-authority` + `tailwind-merge`/`clsx` (via `src/lib/utils.ts`'s `cn()` helper).
- **Path alias:** `@/*` → `./src/*`, configured in `tsconfig.json`/`tsconfig.app.json` (`paths`, no `baseUrl` — deprecated under `moduleResolution: bundler`) and mirrored in `vite.config.ts`'s `resolve.alias`. This alias is **only** for shadcn-style imports (`@/components/ui/button`, `@/lib/utils`); existing section/i18n imports stay relative as before.
- **Token bridge, not a second palette:** `src/index.css`'s `:root` maps every shadcn semantic variable (`--background`, `--primary`, `--card`, etc.) onto the existing hand-written tokens from §1 (`--bg`, `--accent`, `--surface`, ...). The one deliberate exception is Tailwind's `accent` color family (`--color-accent` in `@theme inline`): shadcn uses `accent`/`accent-foreground` for a neutral menu/dropdown hover highlight, a different concept from this project's `--accent` (the brand blue). To avoid that name collision silently overwriting the brand color, `--color-accent` is wired to `var(--accent-bg)` (the existing light-blue tint token) instead of reusing the raw `--accent` variable name. If you re-run `shadcn init` or diff against a fresh scaffold, expect `--accent`/`--border` to come back as shadcn's own generic values — **do not accept those overwrites**; reapply the bridge in `src/index.css` instead.
- **No dark mode**, consistent with §7. The `@custom-variant dark (&:is(.dark *))` guard is kept (some generated components ship `dark:` utility classes), but no `.dark` class is ever applied anywhere and there's no toggle — those variants are permanently inert by design. Don't wire one up without an explicit ask.
- **Icons:** `lucide-react` was installed for shadcn components, and §6 now also uses it for all section-level decorative icons — one shared icon source across both layers.

## 4. Content & i18n

- **`src/i18n/content.ts`** is the single source of truth for all page copy in `ru` (default), `ua`, `de`. Exports a `Lang` type, a `translations: Record<Lang, TranslationStrings>` dictionary (flat string keys like `heroTitle`, `faqLead`), plus typed per-section data: `aboutItems`, `timeline`, `eduList`, `services`, `faqList`, `testimonials`.
- Sections read `translations[lang].someKey` — never hardcode UI copy in a section component. If new copy is needed, add the key to `TranslationStrings` and to all three language objects.
- `address` and `phone` (shared contact constants) also live in this file.

## 5. Asset Management

- **`src/assets/`** — imported raster/vector assets: `logo.svg`, `ramina-portrait.png`, `ramina-office.png`. Imported via ES `import` and used as `<img src={x} />`.
- **`public/`** — only `favicon.svg`. There is currently **no icon sprite** (the old Vite demo's `public/icons.svg` was removed since it was tied to placeholder content).
- **No CDN, no image-optimization pipeline.**

## 6. Icon System

- **Icons come from `lucide-react`**, imported individually per section (`import { MapPin } from 'lucide-react'`) — no shared sprite file, no icon-registry component. This replaced an earlier hand-drawn-`<svg>` convention: several of those one-off paths turned out semantically empty (a plain rectangle standing in for "languages", a plain circle for "ethics") or inconsistent in stroke width (1.3–1.8 across sections) once the whole site was audited together.
- **Consistent props everywhere:** `strokeWidth={1.75}` on every icon (a deliberate site-wide constant — don't reach for lucide's default of `2`, it reads heavier than the rest of the type). Size varies by role (`16`–`22` for inline/button icons, `20` for icon-in-circle badges), colored via the `color` prop — `"var(--accent)"` on light surfaces, `"#fff"` on accent-colored surfaces — never a hardcoded hex like the old `#1D79E9`.
- **Pick the icon for what it means**, not the first vaguely-round option — e.g. `Languages` for consultation languages, `ShieldCheck` for professional ethics, `MapPin` for an address, `Info` for a caveat note. If nothing in the lucide set fits, that's a signal to reconsider the icon's job in the layout before reaching for a custom path again.
- Decorative icons get `aria-hidden="true"`; icons that are the only content of an interactive element (none currently) would need an accessible label instead.
- Wrapper containers (`.contact__info-icon`, `.about__note-icon`, `.faq__toggle`, `.testimonial-video__play`, `.floating-call`) stay `display: flex; align-items: center; justify-content: center` so the icon's intrinsic `size` centers correctly — no change needed there when swapping which icon renders inside.

## 7. Styling Approach

- **One global stylesheet** (`src/App.css`) using **flat BEM class selectors** — see the nesting gotcha at the top of this doc. `src/index.css` holds tokens, `:root`/`body`/`#root` base rules, and bare-element defaults (`a`, `h1`–`h4`, `p`, `button`).
- **Layout pattern:** every section is `<section id="..." className="block">` wrapping a `.block__inner { max-width: 1152px; margin: 0 auto; padding: 0 32px; }` container (1088px for the header bar specifically). Reuse this `max-width`/`padding` pattern for any new section.
- **Responsive:** single breakpoint, `@media (max-width: 1024px)`, nested inline inside each flat rule that needs an override (padding reductions, font-size reductions, grid-to-single-column). Don't introduce additional breakpoints unless a specific design needs one.
- **Shared utility classes:** `.container`, `.badge`, `.section-head`, `.section-title`, `.section-lead` are reused across most sections for the badge/heading/lead-paragraph pattern that repeats throughout the page — reuse these rather than redefining per-section.
- **No dark mode** — `color-scheme: light` only.

## 8. Project Structure

```
.
├── index.html                  # Vite entry; loads Manrope + Playfair Display fonts
├── components.json             # shadcn/ui CLI config, see §3a
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                  # logo.svg, ramina-portrait.png, ramina-office.png
│   ├── components/
│   │   └── ui/                   # shadcn-generated primitives, see §2 and §3a
│   ├── i18n/
│   │   └── content.ts            # all copy + structured data, ru/ua/de, see §4
│   ├── lib/
│   │   └── utils.ts              # cn() helper for shadcn components, see §3a
│   ├── sections/                 # one file per page section, see §2
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── HowIWork.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Faq.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingCallButton.tsx
│   ├── App.tsx                   # composes sections, owns `lang` state
│   ├── App.css                   # all section styles, flat BEM, see §7
│   ├── index.css                 # tokens + base styles + Tailwind/shadcn theme bridge, see §1, §3a and §7
│   └── main.tsx                  # createRoot + StrictMode + App
├── vite.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── .oxlintrc.json
└── package.json
```

- **Path aliases:** `@/*` → `./src/*`, added for shadcn/ui (see §3a). Everything else (sections, i18n) still uses relative imports as before — don't retrofit existing imports to `@/`.

## Practical guidance for Figma → code in this repo

1. **Tokens first:** map Figma variables to the existing `--text`, `--bg`, `--accent`, etc. Extend `:root` in `src/index.css` for anything new.
2. **New page sections** → add a file in `src/sections/`, compose it into `App.tsx`, add its styles as flat top-level BEM rules appended to `src/App.css` (remember: no `&__x` nesting).
3. **New copy** → add keys to `src/i18n/content.ts` across all three languages, never hardcode strings in a section component.
4. **New icons** → `import { IconName } from 'lucide-react'` in the section that needs it, `strokeWidth={1.75}`, matching the existing pattern (§6). No custom `<svg>` paths.
5. **New photographic/raster assets** → `src/assets/`, imported via ES `import`.
6. Before writing any nested CSS, double check it doesn't rely on `&` + identifier concatenation — verify in the actual browser (`document.styleSheets`) if unsure, since parse failures here are silent.
7. **Adopting a shadcn/ui component** (Dialog, Accordion, etc.) → `npx shadcn add <name>`, then wire it into the relevant section. Keep the component's own markup/styling on Tailwind classes as generated; keep the section's surrounding layout in `App.css` per the existing BEM pattern. See §3a for the token bridge and the `--accent` naming-collision gotcha.
