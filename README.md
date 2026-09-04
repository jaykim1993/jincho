# Jin Cho — Personal Academic Site

Personal academic portfolio for Hyunjin (Jin) Cho, built with Next.js App Router.

## Project Information

| | |
|---|---|
| **Client** | Jin Cho |
| **Developer** | Jay Kim |
| **Repository** | https://github.com/jaykim1993/jincho |
| **Production** | https://jincho.vercel.app |
| **Hosting** | [Vercel](https://vercel.com) |

## Deployment

The site is deployed on Vercel and connected directly to this GitHub repository.

- Pushing to the `main` branch automatically triggers a production deployment.
- Pull requests and other branches automatically receive their own preview deployment URLs.
- No manual deploy step is required — `git push` is the deployment mechanism.

## Getting Started (Local Development)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS 4** — theme tokens in `src/app/globals.css`, with light/dark mode via `ThemeToggle`
- **shadcn/ui**-style components (`src/components/ui/`) on top of `@base-ui/react`
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
    ProfileSidebar.tsx   # collapsible sidebar, persists across page navigation
    ProfileCard.tsx      # profile display (full or compact, per sidebar state)
    CopyEmailLink.tsx    # click-to-copy email address
    ThemeToggle.tsx
  lib/
    papers.ts           # publications data
    software.ts          # software/project data
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |

## Content Updates

Page content (bio, publications, posters, software, CV) lives in `src/app/*/page.tsx` and `src/lib/*.ts`. Editing these files and pushing to `main` will publish the change automatically within a few minutes.
