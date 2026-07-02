# 🚀 Tuya Ray Panel MiniApp — Project Documentation

> A living document. Add new notes here as you build and debug your Ray project.

---

## 📦 Creating a New Ray Project

```bash
# Step 1 — Install Ray CLI globally
npm install -g @ray-js/create-app

# Step 2 — Scaffold the project
npx @ray-js/create-app my-first-ray-app

# Step 3 — Select template
# Choose the first option (written in Chinese) = Panel MiniApp template

# Step 4 — Install & run
cd my-first-ray-app
npm install
npm run start:tuya
```

---

## 🔧 Default Fixes (apply after every new project)

Every newly scaffolded Ray project has a few issues out of the box. Fix them in this order:

---

### Fix 1 — `tsconfig.json` (moduleResolution outdated)

The default `"moduleResolution": "node"` is outdated and causes TypeScript errors.

Replace the entire `tsconfig.json` with:

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "target": "ES2015",
    "module": "ESNext",
    "lib": ["ESNext", "DOM"],
    "declaration": true,
    "declarationMap": false,
    "emitDeclarationOnly": false,
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "noEmitOnError": false,
    "jsx": "react",
    "paths": {
      "ray": ["./node_modules/@ray-js/ray"],
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*.*", ".ray/**/*.*", "typings"],
  "exclude": ["node_modules", "dist", "public"]
}
```

**What changed:** `"moduleResolution"` → `"bundler"` and `"module"` → `"ESNext"`

---

### Fix 2 — Missing `src/index.module.less`

The build fails because `app.tsx` imports a `.less` file that does not exist yet.

**Step 1** — Create `src/index.module.less`:

```less
/* src/index.module.less */
.app {
  min-height: 100vh;
}
```

**Step 2** — Import it in `src/app.tsx`:

```tsx
import styles from "./index.module.less";
```

---

### Fix 3 — `tabBar` error in `routes.config.ts`

**Error message:**
```
raypack tabBar.list must have at least 2 and at most 5 tabs
```

The default template includes a `tabBar` with only 1 item (minimum is 2),
and `id` fields that the `Routes` type does not support.

Replace the entire `src/routes.config.ts` with:

```ts
import { Routes } from '@ray-js/types';

export const routes: Routes = [
  {
    route: '/',
    path: '/pages/home/index'
  },
  {
    route: '/detail/:uid',
    path: '/pages/detail/index'
  },
  {
    route: '/my',
    path: '/pages/my/index'
  }
];

// tabBar removed — not needed for a Panel MiniApp
```

**Two things removed:**
- The entire `tabBar` export → was causing the build error
- The `id` field from each route → not part of the `Routes` type

---

## ✅ Verify Everything Works

After all three fixes, run:

```bash
npm run build:tuya
```

Expected terminal output:
```
✔ Ray completed!
info build ------- build done -------
```

Zero errors. Warnings about `.less` imports and `configWebpack` are safe to ignore.

---

## 📁 Project File Structure

```
my-first-ray-app/
│
├── src/
│   ├── app.tsx                   # App entry — call initPanelEnvironment() here
│   ├── index.module.less         # Global styles (created manually — Fix 2)
│   ├── routes.config.ts          # Page routes (no tabBar, no id fields — Fix 3)
│   ├── global.config.ts          # Global constants
│   │
│   ├── pages/
│   │   ├── home/
│   │   │   ├── index.tsx         # Main panel screen
│   │   │   ├── index.config.ts   # Page title config
│   │   │   └── index.module.less # Page styles
│   │   ├── detail/
│   │   │   └── index.tsx
│   │   └── my/
│   │       └── index.tsx
│   │
│   └── components/
│       └── Foo.tsx               # Example component
│
├── typings/
│   └── index.d.ts                # Type declarations for .less imports
│
├── project.tuya.json             # Tuya MiniApp project config
├── ray.config.ts                 # Build config (target: tuya)
├── tsconfig.json                 # TypeScript config (fixed — Fix 1)
└── package.json
```

---

## ⬇️ Setting Up a Pulled / Cloned Project

After cloning or pulling the project on a new computer, only 2 commands are needed:

```bash
# Step 1 — Reinstall dependencies
npm install

# Step 2 — Build or run
npm run build:tuya    # production build
npm run start:tuya    # dev mode with hot reload
```

### Why only 2 commands?

`node_modules/` is excluded from GitHub via `.gitignore` — it never gets pushed.
Everything else (your code, config fixes, styles) is committed and comes with the repo.

> **Golden rule:**
> Anything you edit and commit → goes with the repo.
> `node_modules/` → never goes, always reinstalled via `npm install`.

### Do you need to redo the tsconfig / routes fixes?

**No.** Those fixes are changes to actual project files (`tsconfig.json`, `routes.config.ts`).
Anyone who pulls gets already-fixed versions automatically.

---

## 📝 Notes

<!-- Add your own notes below as you go -->
