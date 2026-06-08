# Blueprint Website v2 - Technical Handover Documentation

## Project Overview

**Project Name:** Blueprint Website v2  
**Tech Stack:** React 19, TypeScript, Vite 7, TailwindCSS 3  
**Repository:** https://github.com/SFU-Blueprint/Blueprint-Website-v2  
**Node Version:** 22.x  
**Package Manager:** npm 10

---

## Getting Started

### Prerequisites

- **Node.js:** Version 22.x (Required)
- **npm:** Version 10 (Included with Node 22)
- **Git:** For version control

### Initial Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SFU-Blueprint/Blueprint-Website-v2.git
   cd Blueprint-Website-v2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## Project Structure

```
Blueprint-Website-v2/
├── public/                      # Static assets
│   └── images/                  # Image assets organized by section
│       ├── projects/            # Project case study images
│       ├── sponsor/             # Sponsor page images
│       └── student/             # Student/join us page images
├── src/
│   ├── components/              # React components
│   │   ├── case-study/          # Case study specific components
│   │   ├── footer/              # Footer components
│   │   ├── layout/              # Layout components
│   │   └── shared/              # Shared/reusable components
│   ├── constants/               # Static data and configurations
│   │   └── Team/                # Team member data by project
│   ├── pages/                   # Page-level components (routes)
│   ├── App.tsx                  # Main app component with routing
│   └── main.tsx                 # App entry point
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # TailwindCSS configuration
└── vite.config.ts              # Vite build configuration
```

---

## Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.0.0 | Core React library |
| `react-dom` | ^19.0.0 | React DOM rendering |
| `react-router-dom` | ^6.20.0 | Client-side routing |
| `tailwindcss` | ^3.3.5 | Utility-first CSS framework |
| `@rive-app/react-webgl2` | ^4.27.3 | Rive animations |
| `react-i18next` | ^14.0.3 | Internationalization |
| `i18next` | ^23.8.2 | i18n framework |
| `react-lazy-load-image-component` | ^1.6.0 | Lazy image loading |
| `web-haptics` | ^0.0.6 | Haptic feedback |
| `tailwind-scrollbar-hide` | ^4.0.0 | Scrollbar utilities |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `vite` | ^7.0.0 | Build tool and dev server |
| `@vitejs/plugin-react` | ^5.0.0 | React plugin for Vite |
| `typescript` | ^5.0.0 | TypeScript compiler |
| `@types/react` | ^19.0.0 | React TypeScript definitions |
| `@types/react-dom` | ^19.0.0 | React DOM TypeScript definitions |
| `daisyui` | ^4.6.0 | TailwindCSS component library |
| `vite-plugin-svgr` | ^4.5.0 | SVG as React components |

---

## Application Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `HomePage` | Landing page with dark nav |
| `/about` | `AboutPage` | About Blueprint |
| `/alumni` | `AlumniPage` | Alumni showcase |
| `/projectspage` | `ProjectsPage` | All projects overview |
| `/projects/:slug` | `IndividualProject` | Individual project case studies |
| `/students` | `StudentsPage` | Student information |
| `/join-us` | `StudentsPage` | Join us landing (same as students) |
| `/nonprofits` | `NonprofitsPage` | Non-profit partnerships |
| `/sponsor-us` | `SponsorUsPage` | Sponsorship opportunities |

---

## Recent Updates (June 2026)

### PR #135: Join Us Page Update
- **Merged:** June 7, 2026
- **Changes:**
  - Added `/join-us` route
  - Redesigned `StudentsPage` component (1048 lines changed)
  - Removed `/students` from dark navigation routes
  - Added 6 new images for join page

### PR #136: Sponsor Page
- **Merged:** June 8, 2026
- **Changes:**
  - Created new `SponsorUsPage` component
  - Added `/sponsor-us` route
  - Added 4 sponsor images
  - Includes testimonial from MOSAIC BC
  - Features funding cards (workshops, maintenance, equipment)

### PR #137: Reel Youth Case Study
- **Merged:** June 8, 2026
- **Changes:**
  - Added Reel Youth project case study
  - Fixed `MemberCard` hover state bug (now uses `isHovered` state)
  - Added custom image pile layout for case studies
  - Added 7 Reel Youth project images
  - Reorganized case studies order

---

## Key Components

### Navigation (`NavBar`)
- Dynamic dark/light mode based on route
- Dark nav only on homepage (`/`)
- Responsive design for mobile/tablet/desktop

### Case Studies (`CaseStudyLayout.tsx`)
- Reusable layout for project case studies
- Supports custom image pile formats
- Polaroid-style image displays
- Team member cards with hover effects

### Member Cards (`MemberCard.tsx`)
- Display team member information
- Hover effects with rotation and background color change
- Conditional LinkedIn linking
- Responsive sizing

---

## Styling & Design System

### TailwindCSS Configuration
Custom colors defined in `tailwind.config.js`:
- `bp-blue`: Primary brand color
- `bp-hover-blue`: Hover state
- `bp-pressed-blue`: Active state
- `bp-lightest-grey`: Background color
- `bp-accent-very-light-blue`: Accent backgrounds
- `bp-black`: Text color

### Typography
- **Headings:** Poppins font family
- **Special text:** Caveat font family
- Responsive text sizing with mobile/tablet/desktop variants

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

---

## Development Workflow

### Git Workflow
See `CONTRIBUTING.md` for detailed branching strategy and PR workflow.

**Basic workflow:**
1. Create feature branch: `ticket-<id>-description`
2. Make changes and commit
3. Push and create PR on GitHub
4. Merge after approval

---

## Deployment

### Build Process
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Environment Requirements
- Node.js 22.x
- npm 10
- Static file hosting (Netlify, Vercel, etc.)

---

## Testing Checklist

Before deploying:
- [ ] All routes load without errors
- [ ] Images display correctly on all pages
- [ ] Navigation works on mobile/tablet/desktop
- [ ] Case study pages render properly
- [ ] Member cards display with correct hover states
- [ ] Forms/links function correctly
- [ ] Build completes without errors
- [ ] TypeScript compiles without errors

---

## Contact & Resources

- **Repository:** https://github.com/SFU-Blueprint/Blueprint-Website-v2
- **Email:** sfublueprint@gmail.com
- **Tech Lead:** Caron Isaiah McPherson(Noracc)

---

## Maintenance Notes

### Adding New Case Studies
1. Add team data in `src/constants/Team/[ProjectName].tsx`
2. Update `src/constants/caseStudies.tsx`
3. Add images to `public/images/projects/[project-name]/`

### Adding New Routes
1. Create page in `src/pages/PageName.tsx`
2. Import and add route in `src/App.tsx`

### Updating Dependencies
See `DEPENDENCIES.md` for dependency management

---

**Last Updated:** June 8, 2026  
**Document Version:** 1.0
