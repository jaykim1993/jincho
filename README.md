# Jin Cho — Personal Site

Personal academic portfolio for Hyunjin (Jin) Cho, built with Next.js App Router.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS 4**, theme tokens defined in `src/app/globals.css` (light/dark via a `.dark` class, toggled by `ThemeToggle`)
- **shadcn/ui**-style `Button` (`src/components/ui/button.tsx`) on top of `@base-ui/react`
- **lucide-react** for icons

## Project Structure

```
src/
  app/
    layout.tsx        # root layout — Header, persistent ProfileSidebar, Footer
    page.tsx           # home
    about/              # bio, research focus, collaborating institutions
    papers/             # publications list
    posters/            # poster list
    software/           # software/project list
    cv/                 # education, professional experience, awards
  components/
    Header.tsx          # sticky, blurred nav bar
    Footer.tsx
    ProfileSidebar.tsx   # "use client" — owns the collapse/expand state
    ProfileCard.tsx      # pure display, driven by `collapsed` prop from the sidebar
    CopyEmailLink.tsx    # "use client" — click-to-copy email with a "Copied" tooltip
    ThemeToggle.tsx
```

## Notable implementation details

- **Profile sidebar persistence**: `ProfileSidebar` is rendered once in `app/layout.tsx`, not inside individual pages. Next.js layouts don't re-render on client-side navigation, so the sidebar (and its collapsed/expanded state) survives page transitions without remounting — the same mechanism that keeps `Header`/`Footer` stable.
- **Collapsible sidebar**: `ProfileSidebar` holds a `collapsed` boolean and passes it down to `ProfileCard`, which swaps between a full profile (photo, bio, university, location, links) and a compact icon-only rail.
- **Themed throughout**: all profile/sidebar UI uses semantic Tailwind tokens (`text-foreground`, `text-muted-foreground`, `border-border`, `bg-background`, etc.) instead of hardcoded colors, so it follows the site-wide light/dark theme.
- **Header/Footer width**: both match the sidebar+content container width (`max-w-6xl`) so their edges align with the page body; the header is sticky with a translucent blurred background.
- **Email interaction**: clicking the email link copies the address to the clipboard and shows a brief "Copied" tooltip, while the `mailto:` href is preserved so modifier-clicks and "copy link address" still work normally.
- **Content**: About/Papers/Posters/Software/CV pages are populated with Jin's bio, publications, posters, software projects, and CV details.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint
