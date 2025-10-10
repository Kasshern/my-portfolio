---
description: Run comprehensive development tests and checks
---

Run the development server and perform comprehensive checks:

1. **TypeScript Validation**
   - Check for TypeScript errors across the codebase
   - Verify all type definitions are correct

2. **Page Transition Tests**
   - Test navigation between all pages (Home → Experience → Education → Skills → Projects → Videos → Contact)
   - Verify smooth Framer Motion transitions
   - Check that URL updates correctly for each page

3. **Flame Animation Tests**
   - Verify all 6 flame effects render correctly
   - Test flame detachment animations
   - Verify flame return animations on scroll
   - Check flame positioning on different screen sizes

4. **Mobile Responsiveness**
   - Test on viewport sizes: 375px, 414px, 768px
   - Verify flame positioning scales correctly
   - Check text readability and button sizes

5. **Code Quality**
   - Run ESLint and report any warnings/errors
   - Check for console errors in the browser

6. **Performance Check**
   - Verify animations run at 60fps
   - Check for any hydration warnings

Please provide a summary of all findings and any issues discovered.
