## Vue Lab

### 📘 Overview

A hands-on lab focused on **Vue 3** built with `create-vue`. The application is a **Meal Planner** that lets users plan their weekly meals by day and meal type. It covers multi-view routing with Vue Router, global state management with Pinia (with persistence), a custom UI component system, and a modal-based form workflow.

---

### 🗂️ Views

The app is organized into three views accessible from the navigation bar:

#### 1. 🍽️ All Meals

The home view. Displays all planned meals in a responsive grid with a search input to filter by name. From here you can add new meals, edit existing ones, toggle favorites, or delete with a confirmation dialog.

![home page](/public/home.png)

#### 2. ❤️ Favorites

Shows only the meals marked as favorites, displayed in a minimal read-only card style.

![favorites page](/public/favorites.png)

#### 3. 🗓️ Week Visualizer

Displays the full week (Monday to Sunday) as a horizontal scrollable board. Each day column lists the meals assigned to it, with a button to clear the day's plan (with confirmation).

![week visualizer page](/public/week-visualizer.png)

---

### ✅ Implemented Features

- Add, edit and delete meals (name, description, day(s) of the week, meal type)
- Meal types: **Breakfast**, **Lunch** and **Dinner**
- A meal can be assigned to **multiple days** at once
- Toggle a meal as **favorite** from any view
- **Search** meals by name in the All Meals view
- **Confirmation dialog** before any destructive action (delete or clear a day)
- Modal form that auto-resets after submitting
- State is **persisted** across page reloads via `pinia-plugin-persistedstate`
- Custom reusable UI component library (`UIButton`, `UIInput`, `UISelect`, `UISection`)
- Responsive layout with **Tailwind CSS 4**

---

### 🛠️ Technologies

| Technology | Usage |
|---|---|
| Vue 3 | Main UI framework (Composition API + `<script setup>`) |
| TypeScript | Static typing |
| Vite 8 | Bundler and dev server |
| Vue Router 5 | SPA routing (3 views) |
| Pinia 3 | Global state management |
| pinia-plugin-persistedstate | State persistence via localStorage |
| Tailwind CSS 4 | Utility-first styling |
| Lucide Vue | Icon library |
| pnpm | Package manager |

---

### 🚀 Getting Started

**Install dependencies**

```bash
git clone https://github.com/sergio-jc/master-frontend-labs.git
cd 04-frameworks/vue
pnpm install
```

**Development server**

```bash
pnpm dev
```

**Production build**

```bash
pnpm build      # Type-checks and generates the bundle
pnpm preview    # Serves the generated bundle locally
```

**Navigating the app**

Opening `http://localhost:5173` takes you to the **All Meals** home view. You can also navigate directly to each section:

| View | Entry URL |
|---|---|
| All Meals | `http://localhost:5173/` |
| Favorites | `http://localhost:5173/favorites` |
| Week Visualizer | `http://localhost:5173/week-visualizer` |

---

### 📄 Author & License

Solutions by [@sergio-jc](https://github.com/sergio-jc), exercises from [Lemoncode](https://lemoncode.net/). See the [LICENSE](https://github.com/sergio-jc/master-frontend-labs/blob/main/LICENSE) file for more details.
