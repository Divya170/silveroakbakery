# Silver Oak Bakery — Project Overview

This repository contains the Silver Oak Bakery site: a NestJS backend API and a Next.js frontend, sharing one SQLite database.

**Top-level layout**

```
silveroakbakery/
│
├── backend/                 # NestJS (TypeScript)
│   ├── src/
│   ├── package.json
│   └── ...
│
├── frontend/                # Next.js
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── database/
│   └── app.sqlite           # SQLite3 — shared data file
│
├── package.json              # root convenience scripts
└── README.md
```

## Run the projects

Install everything:

```bash
npm run install:all
```

Backend (NestJS API, http://localhost:3001):

```bash
npm run dev:backend
```

Frontend (Next.js, http://localhost:3000):

```bash
npm run dev:frontend
```

Run each in its own terminal for local development. Other useful scripts (run from `backend/` or `frontend/` directly): `npm run build`, `npm test`, `npm run lint`.

## Database

Both apps share a single SQLite file at `database/app.sqlite` (path is configured in `backend/src/app.module.ts`). It's created automatically on first run if missing, and TypeORM (`synchronize: true`) keeps the schema in sync with the entities in `backend/src/**/*.entity.ts`.

Because it's a single file, sharing or backing up the database is just copying `database/app.sqlite` — no export/import step needed. Stop the backend first so everything is flushed to disk before copying.

Tables: `product`, `testimonial`, `gallery_item`, `contact_message`, `special_order`, `user`. The `user` table is upserted (by email) whenever someone submits the Contact or Special Orders form.

## Deploying

Because the frontend and backend are independent apps that only talk over HTTP (`NEXT_PUBLIC_API_URL` in `frontend/.env.local`), they can be deployed separately (e.g. frontend on Vercel, backend anywhere that can run Node + persist a file). If deploying the backend somewhere with ephemeral disk (most serverless platforms), make sure `database/app.sqlite` lives on a persistent volume, or switch to a hosted database — SQLite's single-file model doesn't survive a container restart on ephemeral storage.

## Images

Product, gallery, hero, and team images are original flat-design SVG illustrations under `frontend/public/images/` (`scenes/`, `products/`, `gallery/`, `team/`, `icons/`), wired in through `frontend/src/lib/media.ts` and the `ImagePlaceholder` component.
