<<<<<<< HEAD
# avis-journey-platform
avis journey app tcs interview demo
=======
# Avis Journey Platform (Mini)

A small, interview-ready monorepo that demonstrates the main ideas from the Avis UI Engineer role:

- TypeScript
- React
- Next.js App Router
- NestJS BFF
- pnpm workspaces / monorepo
- shared UI package
- shared types package
- shared journey engine package
- Tailwind CSS
- unit testing
- content-driven page configuration (AEM-style simulation)

## What the app demonstrates

This project models a post-booking customer journey:

1. A user enters a reservation ID
2. The Next.js frontend calls a NestJS BFF
3. The BFF composes reservation + customer data
4. A shared journey engine decides the recommended next actions
5. The UI renders those actions as reusable cards
6. The user can complete a vehicle upgrade and see updated state

## Monorepo structure

```text
avis-journey-platform/
  apps/
    web/              # Next.js App Router frontend
    bff/              # NestJS backend-for-frontend
  packages/
    types/            # Shared TypeScript contracts
    ui/               # Shared React UI components
    journey-engine/   # Shared business rules for journey actions
```

## Tech decisions

### Frontend
- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Reusable UI components from a shared package

### Backend
- NestJS
- Controller / Service / Module structure
- In-memory data for fast demo setup
- CORS enabled for local development

### Shared logic
- `@avis/types`: frontend/backend contract types
- `@avis/journey-engine`: journey recommendation rules
- `@avis/ui`: shared React components

## Local setup

### 1) Prerequisites
Install these first:

- Node.js 20 or newer
- pnpm

Install pnpm globally if needed:

```bash
npm install -g pnpm
```

### 2) Install dependencies
From the repo root:

```bash
pnpm install
```

### 3) Start the backend
Open terminal 1:

```bash
pnpm dev:bff
```

The backend runs on:

```text
http://localhost:3001
```

### 4) Start the frontend
Open terminal 2:

```bash
pnpm dev:web
```

The frontend runs on:

```text
http://localhost:3000
```

### 5) Demo reservation IDs

Use either of these:

```text
ABC123
VIP777
```

## Main demo flow

### Demo 1: Reservation lookup and journey orchestration
1. Open `http://localhost:3000`
2. Enter `ABC123`
3. Show how the frontend calls the NestJS BFF
4. Explain that the journey cards come from the shared journey engine

### Demo 2: Vehicle upgrade flow
1. On the journey page, click **Upgrade vehicle**
2. Choose a new vehicle class
3. Confirm the upgrade
4. Return to the dashboard and show the updated reservation

### Demo 3: Content-driven page configuration
1. Point out the hero banner at the top of the journey page
2. Explain that it is returned by the backend as content config
3. Mention that this simulates AEM-driven content and navigation

## Recommended interview walkthrough

### 1. Business framing (1-2 minutes)
Say:

> I focused on the post-booking customer journey because the job description emphasizes redirects and digital flows like pre-check-in, e-receipt, biometric readiness, and upgrades.

### 2. Live product demo (5-6 minutes)
Show:
- reservation lookup
- dashboard
- action cards
- upgrade flow
- updated reservation state

### 3. Architecture tour (4-5 minutes)
Show:
- `apps/web`
- `apps/bff`
- `packages/types`
- `packages/ui`
- `packages/journey-engine`

### 4. Code walkthrough (4-5 minutes)
Open these files:
- `packages/journey-engine/src/index.ts`
- `apps/bff/src/journey/journey.service.ts`
- `apps/web/app/journey/[id]/page.tsx`
- `apps/web/hooks/useJourney.ts`

## Suggested talking points

Use wording like this:

> I separated the project into UI, backend, and business-rules packages so I could show how the system would scale. The frontend is responsible for rendering a clean experience, the NestJS BFF is responsible for orchestration, and the journey engine contains the recommendation logic. That makes the business rules reusable and testable.

> I also modeled AEM-style content by returning banner configuration from the backend instead of hardcoding it in the page. In a real platform, that content could come from AEM or another CMS.

## Commands you may use during the interview

### Run both apps locally
```bash
pnpm dev:bff
pnpm dev:web
```

### Run tests
```bash
pnpm --filter @avis/journey-engine test
```

### Build everything
```bash
pnpm build
```

## GitHub setup

### Create a repo
1. Create a free GitHub account
2. Create a new repository, for example: `avis-journey-platform`
3. Do not initialize it with another README

### Push your code
From the project root:

```bash
git init
git add .
git commit -m "Initial Avis journey platform demo"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/avis-journey-platform.git
git push -u origin main
```

## Deploying the frontend on Vercel

This monorepo is best deployed as:
- **frontend on Vercel**
- **backend on Render**

Why:
- Vercel is the fastest path for the Next.js app
- Render is simpler for a long-running NestJS Node server

### Frontend on Vercel
1. Create a free Vercel account and connect GitHub
2. Import the repository
3. Set the **Root Directory** to `apps/web`
4. Add this environment variable:

```text
NEXT_PUBLIC_API_BASE_URL=https://YOUR-BACKEND-URL.onrender.com
```

5. Deploy

### Vercel build settings
For this project, the default framework detection should pick up Next.js. If Vercel asks for install/build commands, use:

- Install Command: `pnpm install`
- Build Command: `pnpm build`
- Output: leave default for Next.js

## Deploying the backend on Render

1. Create a free Render account and connect GitHub
2. Create a new **Web Service**
3. Select this repository
4. Configure:
   - Root Directory: `apps/bff`
   - Build Command: `pnpm install --filter bff... && pnpm --filter bff build`
   - Start Command: `pnpm --filter bff start`
5. Add environment variable:

```text
PORT=10000
```

6. Deploy

### Optional backend environment variable
You can keep the default frontend origin during local development. For production you can set:

```text
CORS_ORIGIN=https://YOUR-FRONTEND-PROJECT.vercel.app
```

## Local environment variables

### `apps/web/.env.local`
```text
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

### `apps/bff/.env`
```text
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

## What to emphasize to the interviewer

### Technical alignment
- TypeScript everywhere
- React hooks and reusable component patterns
- Next.js App Router
- NestJS BFF modules/services/controllers
- pnpm monorepo
- shared libraries
- testable business logic

### Product alignment
- post-booking redirect strategy
- vehicle upgrade
- pre-check-in / e-receipt / biometric as next actions
- content-driven experience

## If deployment is taking too long
Demo it locally. That is completely acceptable.

Use this line:

> I prioritized the working vertical slice and clean architecture first. The same repo is ready for deployment, but I wanted the product flow and service boundaries to be the strongest part of the demo.

## Known simplifications
This is intentionally a focused demo:
- no database
- no real auth
- no real AEM
- no real airline/rental APIs
- no multi-brand theming
- no full Storybook setup

Those are easy extension points you can talk about if asked.

## Good extension ideas if you have extra time
- add Storybook for `ActionCard`, `StatusPill`, `HeroBanner`
- add Playwright happy-path test
- add brand theme switcher
- add `e-receipt` action mutation
- add pre-check-in route
- add biometric eligibility explanation modal
>>>>>>> 68b1187 (Initial Avis TCS journey platform demo)
