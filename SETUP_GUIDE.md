# Quick Setup Guide - Blueprint Website v2

## 🚀 Quick Start (5 Minutes)

### Step 1: Prerequisites
Ensure you have:
- **Node.js 22.x** installed ([Download here](https://nodejs.org/))
- **Git** installed
- A code editor (VS Code recommended)

### Step 2: Clone & Install
```bash
# Clone the repository
git clone https://github.com/SFU-Blueprint/Blueprint-Website-v2.git
cd Blueprint-Website-v2

# Install dependencies
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

Open your browser to `http://localhost:5173` 🎉

---

## 📋 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## 🗂️ Project Structure (Quick Reference)

```
src/
├── pages/           ← Add new pages here
├── components/      ← Reusable components
├── constants/       ← Data and configurations
└── App.tsx          ← Main routing

public/
└── images/          ← Static images
```

---

## 🔗 Key Routes

After running `npm run dev`:

| URL | Page |
|-----|------|
| `http://localhost:5173/` | Homepage |
| `http://localhost:5173/about` | About page |
| `http://localhost:5173/students` | Students page |
| `http://localhost:5173/join-us` | Join us page |
| `http://localhost:5173/sponsor-us` | Sponsor page |
| `http://localhost:5173/projects/:slug` | Project case studies |

---

## 🔧 Common Development Tasks

### Adding a New Page
1. Create component in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
   ```tsx
   import NewPage from "./pages/NewPage";
   
   // In Routes:
   <Route path="/new-page" element={<NewPage />} />
   ```

### Adding Images
Place images in `public/images/[category]/` and reference as:
```tsx
<img src="/images/category/image.jpg" alt="description" />
```

### Working with Styles
This project uses **TailwindCSS**. Add classes directly to elements:
```tsx
<div className="flex items-center justify-center p-4 bg-blue-500">
  Content
</div>
```

---

## 🌿 Git Workflow

### Starting New Work
```bash
# Update your local main
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name
```

### Making Changes
```bash
# Check what changed
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new sponsor section"

# Push to GitHub
git push origin feature/your-feature-name
```

### Creating a PR
1. Go to GitHub repository
2. Click "Pull Requests" → "New Pull Request"
3. Select your branch
4. Fill in description
5. Request review

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use a different port
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### TypeScript Errors
Check `tsconfig.json` settings and ensure all `@types/*` packages are installed.

---

## 📚 Additional Documentation

- **Full Technical Docs:** See `TECHNICAL_HANDOVER.md`
- **Dependencies Info:** See `DEPENDENCIES.md`
- **Contributing Guide:** See `CONTRIBUTING.md`

---

## 🆘 Getting Help

- **Repository Issues:** [GitHub Issues](https://github.com/SFU-Blueprint/Blueprint-Website-v2/issues)
- **Email:** sfublueprint@gmail.com
- **Documentation:** Check the docs folder for detailed guides

---

## ✅ Development Checklist

Before submitting a PR:
- [ ] Code runs without errors (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] Changes tested on mobile/tablet/desktop
- [ ] No TypeScript errors
- [ ] Images optimized and properly placed
- [ ] Committed with clear message
- [ ] PR description filled out

---

**Need more details?** Check `TECHNICAL_HANDOVER.md` for comprehensive documentation.

**Last Updated:** June 8, 2026
