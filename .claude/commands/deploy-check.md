---
description: Pre-deployment validation checklist
---

Run comprehensive deployment validation:

## Build Validation
1. Run `npm run build` and verify:
   - No TypeScript errors
   - No ESLint errors
   - Build completes successfully
   - Check bundle sizes are reasonable

## Route Testing
2. Test all routes in production mode:
   - `/` (Home)
   - `/experience`
   - `/education`
   - `/skills`
   - `/projects`
   - `/videos`
   - `/contact`
   - Verify each loads correctly with direct URL access

## Production Bundle Testing
3. Start production server with `npm start`:
   - Verify all animations work
   - Check page transitions are smooth
   - Test navigation between all pages
   - Verify no console errors

## Browser Compatibility
4. Test in multiple browsers if possible:
   - Chrome/Edge
   - Firefox
   - Safari
   - Check for any browser-specific issues

## SEO & Meta Tags
5. Validate SEO elements:
   - Check meta tags are present
   - Verify Open Graph tags
   - Ensure proper page titles

## Performance Audit
6. Check performance metrics:
   - Initial page load time
   - Animation smoothness
   - Memory usage over time
   - No memory leaks during navigation

## Accessibility
7. Basic accessibility checks:
   - Keyboard navigation works
   - Focus indicators visible
   - Reduced motion preferences respected

Provide a comprehensive deployment readiness report with any blockers or warnings.
