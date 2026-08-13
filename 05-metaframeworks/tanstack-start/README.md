# TanStack Start Lab — Rural Houses

![TanStack - Detail page](/docs/detail-page.png)

### 📘 Overview

A hands-on lab focused on **TanStack Start / TanStack Router (React 19)**, built as part of a metaframeworks module. The goal was to implement a small "rural houses" booking-style app — a listing screen and a detail screen — consuming a mock REST API, while choosing a rendering strategy (SSG, ISR, SSR…) that fits each screen's needs. This same exercise was solved with two other metaframeworks in this repo ([Next.js](../next) and [Nuxt](../nuxt)) so they can be compared side by side.

> [!Note]
> This app depends on the companion mock API server in [`../api-server`](../api-server). It must be running on `http://localhost:3001` for the app to fetch houses and images. See [Getting Started](#-getting-started).

---

### 🗂️ Features implemented

- **Houses list** (`/`) — grid of rural houses with image, city, price, and average rating.
- **House detail** (`/$id`) — hero image, description, amenities, characteristics (bedrooms/beds/bathrooms) and reviews.
- **Search / filter** — debounced (500ms) search input that filters houses by name; the term is kept as type-safe router search-param state (validated with **Zod** via `validateSearch`) and updated through `useNavigate`, so it's shareable/bookmarkable as `?search=`.
- **Reserve button** — triggers a `sonner` toast confirming the (mocked) reservation; no real booking is persisted.
- **Custom 404** — unknown house ids throw TanStack Router's `notFound()`, rendered by the root route's `notFoundComponent`.
- **Image optimization** — [`@unpic/react`](https://unpic.pics/) (framework-agnostic responsive `<Image>` component), used instead of a framework-coupled image component since TanStack Start doesn't ship its own.

---

### ⚙️ Rendering strategy

| Page | Route | Strategy | Why |
|---|---|---|---|
| Houses list | `/` | **Static Site Generation (SSG)** | Small, mostly static catalog — safe to serve as static HTML; search is a client-side filter over the already-fetched data, so it doesn't need a fresh request per query. |
| House detail | `/$id` | **Static Site Generation (SSG)** | Once published, a house's info barely changes — a great fit for pre-rendering at build time for instant loads at zero per-request cost. |

Both routes load their data through TanStack Router's **route `loader`s** (`getHouses`/`getHouse`). Enabling `prerender: { enabled: true }` in `vite.config.ts` makes `vite build` crawl the router's link graph from `/`, run those loaders, and emit static HTML per route (equivalent in spirit to Nuxt's `crawlLinks` or Next.js's `generateStaticParams`). Any route the crawler misses still falls back to on-demand SSR via the bundled Nitro server.

---

### 🛠️ Technologies

| Technology | Usage |
|---|---|
| TanStack Start | Meta-framework (Vite-based), SSR + build-time prerendering |
| TanStack Router | File-based routing, type-safe search params, route loaders |
| React 19 | UI library |
| TypeScript | Static typing |
| Zod | Search-params schema validation (`validateSearch`) |
| Tailwind CSS 4 (`@tailwindcss/vite`) | Utility-first styling (SSR-compatible) |
| `@unpic/react` | Framework-agnostic responsive image optimization |
| Nitro | Universal server used for SSR / production runtime |
| lucide-react | Icons |
| sonner | Toast notifications (reserve button) |
| Biome | Linting & formatting |
| Vitest + Testing Library | Testing setup |
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

**3. Install and run the TanStack Start app** (in a separate terminal)

```bash
cd tanstack-start
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
pnpm build
node .output/server/index.mjs   # serves the prerendered + SSR app, port 3000
```

### 🧭 Navigating the app

| Screen | URL |
|---|---|
| Houses list (with search) | `http://localhost:3000/` |
| House detail | `http://localhost:3000/{id}` (e.g. `/1`) |

---

### 📄 Author & License

Solution by [@sergio-jc](https://github.com/sergio-jc), exercise from [Lemoncode](https://lemoncode.net/). See the [LICENSE](https://github.com/sergio-jc/master-frontend-labs/blob/main/LICENSE) file for more details.
