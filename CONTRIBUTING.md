# Contributing Guide — SFU Blueprint Website Revamp

This repo is in an active redesign. We are intentionally rebuilding pages to match the new wireframes.

## Quick Start (Local Setup)
1. Install Node.js (LTS recommended).
2. Clone the repo and install dependencies:
   - `npm install`
3. Start the dev server:
   - `npm start`
4. Open: `http://localhost:3000`

## Sourcing: Wireframes
- Figma/wireframes are the source of truth for layout, spacing, typography, and content placement.
- Do not “eyeball” spacing or invent UI. If the wireframe is unclear, ask in the project channel or comment on the ticket.

## Current Dev Approach: Clean Rebuild
We are rebuilding from blank/placeholder pages and implementing the new design section-by-section.

**Do not refactor old page layouts unless a ticket explicitly asks for it.**

## Where to Work
### Primary folders you will touch
- `src/pages/` — page-level components (route entry points)
- `src/components/` — reusable UI components
- `src/components/layout/` — shared layout wrappers (PageContainer, etc.)
- `src/constants/` — site content/data (project metadata, etc.)
- `public/` — static images and assets

### Avoid (unless ticket says otherwise)
- Legacy components and layout patterns not referenced in current tickets
- “Big cleanup” PRs (no drive-by refactors)

## Routing Notes
- Individual project pages use a dynamic route:
  - `/projects/:slug`
- Slugs come from `src/constants/projects.js`
- To add a new project later:
  - add a new object to `Projects` with a unique `slug`
  - do not add new routes or new page files

## Branching + PR Workflow
### Branch naming
Create branches from `main`:
- `ticket-<id>-short-description`
Examples:
- `ticket-12-home-hero`
- `ticket-18-footer-links`

### Commits
Keep commits scoped and readable:
- Prefer: `feat: ...`, `fix: ...`, `chore: ...`
- Avoid “misc changes” commits.

### PR Requirements
Every PR should include:
- What changed (1–3 bullets)
- Screenshots (if UI changed)
- How to test

## Tickets
Tickets should include:
- Link or screenshot of wireframe section
- What to build (scope)
- Acceptance criteria
- Out of scope

If your ticket is missing any of these, ask the tech lead/PM before starting.

## Definition of Done (for UI tickets)
- Matches wireframe for the assigned section
- Responsive behavior doesn’t break on mobile/desktop
- No console errors
- Passes basic navigation checks
- PR includes screenshots

## Need Help?
If you’re stuck:
1. Post the error + what you tried in the project channel
2. Tag a senior dev or tech lead
3. Include a screenshot + the relevant file path
