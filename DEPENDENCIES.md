# Dependencies Documentation

## Node.js Project Dependencies

**Note:** This is a Node.js/React project. Dependencies are managed through `package.json` and `package-lock.json`.

## Installation

```bash
npm install
```

This command reads `package.json` and installs all required dependencies.

---

## Production Dependencies (Required for Runtime)

```json
{
  "@rive-app/react-webgl2": "^4.27.3",
  "autoprefixer": "^10.4.16",
  "i18next": "^23.8.2",
  "i18next-browser-languagedetector": "^7.2.0",
  "i18next-http-backend": "^2.4.3",
  "postcss": "^8.4.31",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-i18next": "^14.0.3",
  "react-lazy-load-image-component": "^1.6.0",
  "react-router-dom": "^6.20.0",
  "tailwind-scrollbar-hide": "^4.0.0",
  "tailwindcss": "^3.3.5",
  "web-haptics": "^0.0.6"
}
```

### Dependency Breakdown

**React Core:**
- `react@^19.0.0` - React library
- `react-dom@^19.0.0` - React DOM rendering
- `react-router-dom@^6.20.0` - Client-side routing

**Styling:**
- `tailwindcss@^3.3.5` - Utility-first CSS framework
- `autoprefixer@^10.4.16` - PostCSS plugin for vendor prefixes
- `postcss@^8.4.31` - CSS transformation tool
- `tailwind-scrollbar-hide@^4.0.0` - Tailwind scrollbar utilities

**Internationalization:**
- `react-i18next@^14.0.3` - React bindings for i18next
- `i18next@^23.8.2` - Internationalization framework
- `i18next-browser-languagedetector@^7.2.0` - Language detection
- `i18next-http-backend@^2.4.3` - Backend loading

**Features:**
- `@rive-app/react-webgl2@^4.27.3` - Rive animation support
- `react-lazy-load-image-component@^1.6.0` - Lazy loading images
- `web-haptics@^0.0.6` - Haptic feedback support

---

## Development Dependencies (Only for Development)

```json
{
  "@types/react": "^19.0.0",
  "@types/react-dom": "^19.0.0",
  "@vitejs/plugin-react": "^5.0.0",
  "daisyui": "^4.6.0",
  "typescript": "^5.0.0",
  "vite": "^7.0.0",
  "vite-plugin-svgr": "^4.5.0"
}
```

### Dev Dependency Breakdown

**TypeScript:**
- `typescript@^5.0.0` - TypeScript compiler
- `@types/react@^19.0.0` - TypeScript definitions for React
- `@types/react-dom@^19.0.0` - TypeScript definitions for React DOM

**Build Tools:**
- `vite@^7.0.0` - Build tool and dev server
- `@vitejs/plugin-react@^5.0.0` - React support for Vite
- `vite-plugin-svgr@^4.5.0` - SVG to React component plugin

**UI Components:**
- `daisyui@^4.6.0` - TailwindCSS component library

---

## System Requirements

```
Node.js: 22.x (Required)
npm: 10 (Included with Node.js 22)
```

Specified in `package.json`:
```json
"engines": {
  "node": "22.x"
},
"packageManager": "npm@10"
```

---

## Updating Dependencies

### Check for outdated packages:
```bash
npm outdated
```

### Update all dependencies:
```bash
npm update
```

### Update a specific package:
```bash
npm update package-name
```

### Install a new dependency:
```bash
# Production dependency
npm install package-name

# Development dependency
npm install --save-dev package-name
```

---

## Dependency Lock File

The `package-lock.json` file ensures consistent installations across all environments.

**Important:** Always commit `package-lock.json` to version control.

When pulling changes with updated dependencies:
```bash
npm ci  # Clean install based on package-lock.json
```

---

## Security

### Check for vulnerabilities:
```bash
npm audit
```

### Fix vulnerabilities:
```bash
npm audit fix
```

### Fix with breaking changes:
```bash
npm audit fix --force
```

---

## Python Projects vs Node.js Projects

**Note:** You mentioned `requirements.txt`, which is for Python projects. This is a Node.js project where:

| Python | Node.js |
|--------|---------|
| `requirements.txt` | `package.json` |
| `pip install -r requirements.txt` | `npm install` |
| `pip freeze > requirements.txt` | Dependencies auto-saved in `package.json` |

---

**Last Updated:** June 8, 2026
