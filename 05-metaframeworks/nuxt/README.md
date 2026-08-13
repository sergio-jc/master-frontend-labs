# Nuxt Lab — Rural Houses

![Nuxt - Detail page](/docs/detail-page.png)

### 📘 Overview

A hands-on lab focused on **Nuxt 4 / Vue 3**, built as part of a metaframeworks module. The goal was to implement a small "rural houses" booking-style app — a listing screen and a detail screen — consuming a mock REST API, while choosing a rendering strategy (SSG, ISR, SSR…) that fits each screen's needs. This same exercise was solved with two other metaframeworks in this repo ([Next.js](../next) and [TanStack Start](../tanstack-start)) so they can be compared side by side.

> [!Note]
> This app depends on the companion mock API server in [`../api-server`](../api-server). It must be running on `http://localhost:3001` for the app to fetch houses and images. See [Getting Started](#-getting-started).

---

### 🗂️ Features implemented

- **Houses list** (`/`) — grid of rural houses with image, city, price, and average rating.
- **House detail** (`/[id]`) — hero image, description, amenities, characteristics (bedrooms/beds/bathrooms) and reviews.
- **Search / filter** — debounced (500ms) search input built with a custom `useDebounce` composable that filters houses by name, synced to the URL via the `?search=` query param through a `useUpdateSearchParams` composable.
- **Reserve button** — triggers a `vue-sonner` toast confirming the (mocked) reservation; no real booking is persisted.
- **Custom error page** — `app/error.vue` intercepts thrown errors (`createError({ statusCode: 404, fatal: true })`) and shows a dedicated 404 UI with a "back to home" action.
- **Image optimization** — `@nuxt/image`'s `<NuxtImg>` component, converting images to `webp` on the fly via Nuxt's built-in IPX image proxy.

---

### ⚙️ Rendering strategy

| Page | Route | Strategy | Why |
|---|---|---|---|
| Houses list | `/` | **Static Site Generation (SSG)** | Small, mostly static catalog — safe to serve as static HTML; search is a client-side filter over the already-fetched data, so it doesn't need a fresh request per query. |
| House detail | `/[id]` | **Static Site Generation (SSG)** | Once published, a house's info barely changes — a great fit for pre-rendering at build time for instant loads at zero per-request cost. |

Achieved with Nuxt's **Hybrid Rendering** (`routeRules: { "/**": { prerender: true } }`), plus `nitro.prerender.crawlLinks: true` so Nitro discovers the dynamic `/1`, `/2`… ids by following the links on `/`.

---

### 🛠️ Technologies

| Technology | Usage |
|---|---|
| Nuxt 4 | Meta-framework, file-based routing, hybrid rendering / prerendering |
| Vue 3 | UI library (Composition API, `<script setup>`) |
| TypeScript | Static typing |
| Tailwind CSS 4 (`@tailwindcss/vite`) | Utility-first styling (SSR-compatible) |
| `@nuxt/image` | Image optimization (`<NuxtImg>`, on-the-fly `webp`) |
| lucide-vue-next | Icons |
| vue-sonner | Toast notifications (reserve button) |
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

**3. Install and run the Nuxt app** (in a separate terminal)

```bash
cd nuxt
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

**Environment variables**

Optional — this app already runs with the defaults in `nuxt.config.ts`. Copy [`.env.example`](./.env.example) to `.env` (Nuxt auto-loads `.env`, not `.env.local` like the other two labs) and adjust the values if needed — each variable is documented with a short comment in that file.

```bash
cp .env.example .env
```

**Production build (static)**

```bash
pnpm build     # or `pnpm generate` — pre-renders every page into .output/public
pnpm preview   # serves the generated static site locally
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
