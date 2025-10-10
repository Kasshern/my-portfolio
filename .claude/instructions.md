# Claude Code Instructions

## Always Follow These Guidelines

### Animation Guidelines
- **Preserve 60fps performance** - All animations must run smoothly
- **Test reduced motion** - Respect `prefers-reduced-motion` preferences
- **Use Framer Motion** - Consistent animation library across the project
- **Flame aesthetic** - Maintain consistency with existing color palette and effects

### Navigation Pattern
- **Follow 5-step process** when adding pages (documented in CLAUDE.md)
- **Use custom SPA navigation** - Do NOT use Next.js router
- **URL synchronization** - Always update URL with `window.history.pushState`

### Component Standards
- **Use "use client" directive** - All interactive components require this
- **Hydration safety** - Use `isClient` checks for browser-specific code
- **DynamicSpacing component** - All page components need this for proper scroll behavior
- **Functional components** - Prefer functional over class components

### Testing Requirements
- **Test mobile viewports**: 375px, 414px, 768px
- **Test desktop viewports**: 1024px, 1440px, 1920px
- **Verify flame positioning** scales correctly across all sizes
- **Check animations** are smooth on all devices

### Code Style
- **TypeScript strict mode** - All code must be properly typed
- **Named exports** - Export from `index.ts` files
- **Tailwind 4 CSS imports** - Use `@import "tailwindcss"` pattern
- **Path aliases** - Use `@/*` for imports from `src/`

### Architecture Principles
- **State management**: NavigationContext → MainLayout → Home → Pages
- **No page reloads** - All navigation is client-side
- **Browser compatibility** - Support back/forward navigation
- **Accessibility** - Keyboard navigation and focus management

## When Adding New Features

1. Check if it affects navigation flow
2. Verify animation performance impact
3. Test on mobile and desktop
4. Update relevant documentation
5. Ensure TypeScript types are correct

## Common Patterns

### Adding a Page
Use the `/new-page` slash command for guided assistance.

### Animation Variants
Reuse existing Framer Motion variants from other page components.

### Flame Effects
Reference `src/app/globals.css` for flame animation keyframes.
