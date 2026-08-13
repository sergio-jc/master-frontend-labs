# Next.js Lab — Rural Houses

### 📘 Overview

A hands-on lab focused on **Next.js 16 (App Router)**, built as part of a metaframeworks module. The goal was to implement a small "rural houses" booking-style app — a listing screen and a detail screen — consuming a mock REST API, while choosing a rendering strategy (SSG, ISR, SSR…) that fits each screen's needs. This same exercise was solved with two other metaframeworks in this repo ([Nuxt](../nuxt) and [TanStack Start](../tanstack-start)) so they can be compared side by side.

> [!Note]
> This app depends on the companion mock API server in [`../api-server`](../api-server). It must be running on `http://localhost:3001` for the app to fetch houses and images. See [Getting Started](#-getting-started).

---

### 🗂️ Features implemented

- **Houses list** (`/`) — grid of rural houses with image, city, price, and average rating.
- **House detail** (`/[id]`) — hero image, description, amenities, characteristics (bedrooms/beds/bathrooms) and reviews.
- **Search / filter** — debounced (500ms) search input that filters houses by name, synced to the URL via the `?search=` query param (so it survives refreshes and back/forward navigation).
- **Reserve button** — triggers a `sonner` toast confirming the (mocked) reservation; no real booking is persisted.
- **Custom 404** — unknown house ids trigger Next.js `notFound()` and render `app/not-found.tsx`.
- **Image optimization** — `next/image` with `fill` + responsive `sizes`, configured via `remotePatterns` in `next.config.ts` to allow images served by the mock API.

---

### ⚙️ Rendering strategy

| Page | Route | Strategy | Why |
|---|---|---|---|
| Houses list | `/` | **Dynamic render + cached data (ISR-style)** | Needs to reflect the `?search=` query on every request, but the catalog itself changes rarely — so the page renders per-request while `getHouses()` is cached for 24h (`next: { revalidate, tags }`), avoiding an API call on every visit. |
| House detail | `/[id]` | **Static Site Generation (SSG)** | Once published, a house's info barely changes and the full set of ids is known ahead of time — a great fit for pre-rendering at build time (`generateStaticParams`) for instant loads at zero per-request cost. |

---

### 🛠️ Technologies

| Technology | Usage |
|---|---|
| Next.js 16 (App Router) | Routing, Server Components, data caching / ISR, image optimization |
| React 19 | UI library |
| TypeScript | Static typing |
| Tailwind CSS 4 | Utility-first styling (SSR-compatible, no runtime CSS-in-JS) |
| lucide-react | Icons |
| sonner | Toast notifications (reserve button) |
| pnpm | Package manager |

---

### 🚀 Getting Started

**1. Clone the repo**

```bash
git clone https://github.com/sergio-jc/master-frontend-labs.git
cd 05-metaframeworks
```

**2. Start the mock API server** (required — provides `/api/houses` and the house images)

```bash
cd api-server
pnpm install
pnpm start
# API running on http://localhost:3001
```

**3. Install and run the Next.js app** (in a separate terminal)

```bash
cd next
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

**Environment variables**

Copy [`.env.example`](./.env.example) to `.env.local` and adjust the values if needed — each variable is documented with a short comment in that file.

```bash
cp .env.example .env.local
```

**Production build**

```bash
pnpm build   # generates the optimized build (SSG pages are pre-rendered here)
pnpm start   # serves the app, port 3000
```

---

### 🧭 Navigating the app

| Screen | URL |
|---|---|
| Houses list (with search) | `http://localhost:3000/` |
| House detail | `http://localhost:3000/{id}` (e.g. `/1`) |

---

### 📄 Author & License

Solution by [@sergio-jc](https://github.com/sergio-jc), exercise from [Lemoncode](https://lemoncode.net/). See the [LICENSE](https://github.com/sergio-jc/master-frontend-labs/blob/main/LICENSE) file for more details.
