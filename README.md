# Bellamy Ombaso — Portfolio

A responsive, multi-page portfolio built with Next.js App Router, TypeScript, and CSS. App Router pages are server-rendered by default; the project uses local artwork and does not require image-host configuration.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Personalize the portfolio

- Update the biography and experience details in `app/about/page.tsx`.
- Update the project entries in `data/projects.ts` and replace the artwork in `public/images/` with your own if desired.
- Update the GitHub contact link in `app/contact/page.tsx` if your profile changes. Add an email address there if you want to publish one.
- Adjust the site styles in `app/globals.css`.

## Build and deploy

Run `npm run lint` to check the code and `npm run build` to create a production build, then `npm run start` to serve it locally. This project uses Next.js 16 and requires Node.js 20.9 or later. To deploy, import this repository into [Vercel](https://vercel.com/new); the Next.js framework and build settings are detected automatically. Other hosts that support Next.js can use the same build command.
