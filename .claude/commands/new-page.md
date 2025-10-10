---
description: Guide for adding a new page to the portfolio
---

I'll help you add a new page to the portfolio. This follows the established architecture pattern.

Please provide:
1. **Page name** (e.g., "Blog", "Testimonials", "Awards")
2. **Flame color** (e.g., "#FF6B6B", "#4ECDC4", "#FFE66D")
3. **Angle position** (degrees, 0-360, for flame placement around profile)

Once you provide these details, I will:

1. Create the page component in `src/components/pages/[PageName].tsx`
2. Add the page type to `PageType` union in:
   - `src/components/NavigationContext.tsx`
   - `src/components/MainLayout.tsx`
   - `src/components/pages/Home.tsx`
3. Add navigation link to `navLinks` array in `src/components/ProfileNavigation.tsx`
4. Export the component from `src/components/pages/index.ts`
5. Add to `pageComponents` map in `src/components/pages/Home.tsx`

The new page will automatically get:
- Flame-based navigation
- Smooth page transitions
- URL routing
- Mobile responsiveness
- DynamicSpacing component integration
