# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 15, React 19, Framer Motion, and Tailwind CSS 4. Features a unique flame-based navigation system with animated page transitions.

## Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack at http://localhost:3000

# Build & Deploy
npm run build           # Production build
npm start               # Start production server

# Code Quality
npm run lint            # Run ESLint
```

## Architecture

### Core Navigation Pattern

The application uses a **custom single-page navigation system** instead of Next.js's built-in routing:

- **MainLayout** (`src/components/MainLayout.tsx`): Root component managing page state and URL synchronization via `window.history.pushState`. Wraps everything in `NavigationProvider`.
- **NavigationContext** (`src/components/NavigationContext.tsx`): Provides `useNavigation()` hook with `navigateToPage()` and `currentPage` state.
- **Home** (`src/components/pages/Home.tsx`): Orchestrates ProfileNavigation and conditionally renders page components (Experience, Education, Skills, Projects, Videos, Contact) based on navigation state.

### Flame Navigation System

**ProfileNavigation** (`src/components/ProfileNavigation.tsx`) implements the signature UI:

- 6 flame effects positioned in a circle around profile image (calculated via `calculatePositions()`)
- Each flame has a unique color and maps to a page section
- On click: flame detaches, animates to top-left corner with "departing" → "anchored" → "returning" journey states
- Intersection Observer triggers return animation when user scrolls back to profile
- Profile image toggles between pure flame animation (default) and photo on hover

### Page Structure

**Entry Point Flow:**
1. `src/app/page.tsx` → renders `<MainLayout />`
2. `MainLayout` → wraps `<Home />` in `NavigationProvider`
3. `Home` → contains `<ProfileNavigation />` + conditionally renders page components

**Page Components** (`src/components/pages/`):
- Each exported from `index.ts`
- Rendered dynamically in Home based on navigation state
- Use `DynamicSpacing` component for scroll-based bottom padding

### Styling & Animation

- **Tailwind 4**: Uses `@tailwindcss/postcss` plugin, config via CSS imports
- **Framer Motion**: All page transitions, flame animations, and profile interactions
- **Custom animations**: Flame effects use SVG paths with CSS keyframe animations
- **Responsive**: Mobile/desktop breakpoints adjust flame positioning radius and UI scaling

## Key Files

- `src/components/MainLayout.tsx` - Navigation state management & URL sync
- `src/components/NavigationContext.tsx` - Navigation context provider
- `src/components/ProfileNavigation.tsx` - Flame navigation UI (859 lines)
- `src/components/pages/Home.tsx` - Page orchestration
- `src/app/layout.tsx` - Root layout with Geist fonts
- `src/app/globals.css` - Tailwind directives & custom flame animations

## Important Patterns

### Navigation Flow
When adding/modifying pages:
1. Add page type to `PageType` union in NavigationContext, MainLayout, and Home
2. Create component in `src/components/pages/`
3. Add to `navLinks` array in ProfileNavigation with angle and flame color
4. Export from `src/components/pages/index.ts`
5. Add to `pageComponents` map in Home

### Client-Side Rendering
All interactive components use `"use client"` directive (required for hooks and animations).

### Hydration Safety
ProfileNavigation uses `isClient` state to prevent hydration mismatches with position calculations and animations.

## TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017
