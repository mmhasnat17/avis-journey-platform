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

## Prez

> I separated the project into UI, backend, and business-rules packages so I could show how the system would scale. The frontend is responsible for rendering a clean experience, the NestJS BFF is responsible for orchestration, and the journey engine contains the recommendation logic. That makes the business rules reusable and testable.

> I also modeled AEM-style content by returning banner configuration from the backend instead of hardcoding it in the page. In a real platform, that content could come from AEM or another CMS.

## Commands for team to test

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

