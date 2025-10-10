# Manual Testing Checklist

## Pre-Testing Setup

- [ ] Start dev server: `npm run dev`
- [ ] Open browser DevTools console
- [ ] Clear browser cache if needed
- [ ] Test in incognito/private mode for clean state

---

## Navigation Tests

### Basic Navigation
- [ ] Home page loads correctly
- [ ] All 6 flame effects visible around profile
- [ ] Flames positioned in circle formation
- [ ] Profile image displays correctly

### Hover Effects
- [ ] Hover over profile reveals navigation links
- [ ] Navigation labels appear with correct text
- [ ] Flame colors match navigation items
- [ ] Hover effects are smooth (no jank)
- [ ] Profile image transitions to photo on hover

### Page Transitions
- [ ] Click "Experience" - smooth transition
- [ ] Click "Education" - smooth transition
- [ ] Click "Skills" - smooth transition
- [ ] Click "Projects" - smooth transition
- [ ] Click "Videos" - smooth transition
- [ ] Click "Contact" - smooth transition
- [ ] Return to Home - smooth transition
- [ ] No flash of content during transitions
- [ ] No layout shift during transitions

### URL Management
- [ ] URL updates when navigating to Experience
- [ ] URL updates when navigating to Education
- [ ] URL updates when navigating to Skills
- [ ] URL updates when navigating to Projects
- [ ] URL updates when navigating to Videos
- [ ] URL updates when navigating to Contact
- [ ] Browser back button works correctly
- [ ] Browser forward button works correctly
- [ ] Direct URL access works: `http://localhost:3000/experience`
- [ ] Direct URL access works: `http://localhost:3000/education`
- [ ] Direct URL access works: `http://localhost:3000/skills`
- [ ] Direct URL access works: `http://localhost:3000/projects`
- [ ] Direct URL access works: `http://localhost:3000/videos`
- [ ] Direct URL access works: `http://localhost:3000/contact`

---

## Animation Tests

### Flame Animations
- [ ] Flames flicker/animate correctly
- [ ] Flame detachment animation smooth
- [ ] Flame moves to top-left corner
- [ ] Flame anchored state displays correctly
- [ ] Flame return animation triggers on scroll
- [ ] Flame return animation is smooth
- [ ] All flames maintain consistent animation style

### Page Animations
- [ ] Entry animations smooth (fade + slide)
- [ ] Exit animations smooth
- [ ] No animation overlap/conflict
- [ ] Animations run at 60fps (check DevTools Performance)
- [ ] Stagger animations on lists work correctly

### Profile Animations
- [ ] Profile flame animation runs continuously
- [ ] Profile photo fade-in on hover
- [ ] Profile photo fade-out on unhover
- [ ] No hydration mismatch warnings in console

---

## Responsive Tests

### Mobile (375px - iPhone SE)
- [ ] Page loads correctly
- [ ] Navigation accessible
- [ ] Flames positioned correctly (no overlap)
- [ ] Flame size appropriate for screen
- [ ] Text is readable
- [ ] Buttons/links are tappable (min 44x44px)
- [ ] No horizontal scroll
- [ ] Cards stack properly
- [ ] Images scale correctly

### Mobile (414px - iPhone 14)
- [ ] Page loads correctly
- [ ] Navigation accessible
- [ ] Layout looks good
- [ ] All interactive elements work

### Tablet (768px - iPad)
- [ ] Page loads correctly
- [ ] Navigation accessible
- [ ] Two-column layouts display correctly
- [ ] Flame positioning scales well
- [ ] Touch interactions work

### Desktop (1024px - Small Desktop)
- [ ] Page loads correctly
- [ ] Full layout displays
- [ ] Flame circle is proportional
- [ ] Hover effects work

### Desktop (1440px - Standard Desktop)
- [ ] Page loads correctly
- [ ] Content centered properly
- [ ] No excessive whitespace
- [ ] Optimal reading width

### Desktop (1920px - Large Desktop)
- [ ] Page loads correctly
- [ ] Content doesn't stretch too wide
- [ ] Layout maintains proportions
- [ ] Visual hierarchy maintained

---

## Content Tests

### Experience Page
- [ ] All job entries display
- [ ] Dates formatted correctly
- [ ] Company names and titles visible
- [ ] Descriptions readable
- [ ] Timeline or list layout works

### Education Page
- [ ] All education entries display
- [ ] Institutions and degrees visible
- [ ] Dates formatted correctly
- [ ] Descriptions readable

### Skills Page
- [ ] All skill categories display
- [ ] Skills organized logically
- [ ] Icons/badges display (if applicable)
- [ ] Layout is visually appealing

### Projects Page
- [ ] All projects display
- [ ] Project images load
- [ ] Project descriptions readable
- [ ] Links work (if applicable)
- [ ] Hover effects on project cards

### Videos Page
- [ ] Videos display correctly
- [ ] Video embeds load
- [ ] Video titles visible
- [ ] Layout works for video grid

### Contact Page
- [ ] Contact information displays
- [ ] Links work (email, social media)
- [ ] Form functional (if applicable)
- [ ] No broken links

---

## Performance Tests

### Initial Load
- [ ] First paint < 2 seconds
- [ ] First contentful paint < 1.5 seconds
- [ ] Time to interactive < 3 seconds
- [ ] No long tasks blocking main thread

### Page Transitions
- [ ] Transition completes < 500ms
- [ ] No janky animations
- [ ] Smooth 60fps throughout
- [ ] No layout thrashing

### Memory Usage
- [ ] Navigate through all pages multiple times
- [ ] Memory doesn't grow excessively
- [ ] No memory leaks detected
- [ ] DevTools Memory profiler shows stable usage

### Bundle Size
- [ ] Run `npm run build`
- [ ] Check bundle sizes in output
- [ ] First Load JS < 300KB (ideally)
- [ ] No unusually large chunks

---

## Browser Compatibility

### Chrome/Edge (Chromium)
- [ ] All features work
- [ ] Animations smooth
- [ ] No console errors

### Firefox
- [ ] All features work
- [ ] Animations smooth
- [ ] No console errors
- [ ] Flame effects render correctly

### Safari (macOS)
- [ ] All features work
- [ ] Animations smooth
- [ ] No console errors
- [ ] Webkit-specific features work

### Safari (iOS)
- [ ] All features work
- [ ] Touch interactions work
- [ ] Animations smooth
- [ ] No scroll issues

---

## Console & Error Checks

### Console Errors
- [ ] No JavaScript errors
- [ ] No TypeScript errors
- [ ] No React warnings
- [ ] No hydration warnings
- [ ] No missing key warnings

### Network
- [ ] All assets load successfully
- [ ] No 404 errors
- [ ] No failed requests
- [ ] Fonts load correctly

### Accessibility Warnings
- [ ] No accessibility warnings
- [ ] No ARIA warnings
- [ ] No contrast issues flagged

---

## Accessibility Tests

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicators visible
- [ ] Navigation accessible via keyboard
- [ ] Enter/Space activates links/buttons
- [ ] Esc closes modals (if applicable)
- [ ] Tab order is logical

### Screen Reader (Test with VoiceOver/NVDA)
- [ ] Page structure announced correctly
- [ ] Headings hierarchy makes sense
- [ ] Links have meaningful text
- [ ] Images have alt text
- [ ] Navigation landmarks work

### Reduced Motion
- [ ] Set "prefers-reduced-motion" in OS
- [ ] Animations respect setting
- [ ] Page remains functional
- [ ] No jarring movements

### Color Contrast
- [ ] Text readable on backgrounds
- [ ] Links distinguishable
- [ ] Focus states visible
- [ ] Use DevTools Contrast checker

---

## Edge Cases

### Slow Connection
- [ ] Simulate slow 3G
- [ ] Page loads gracefully
- [ ] Loading states display (if applicable)
- [ ] Images lazy load properly

### Very Long Content
- [ ] Scroll behavior smooth
- [ ] DynamicSpacing works correctly
- [ ] Navigation remains accessible
- [ ] No layout breaks

### Empty States
- [ ] Handle missing data gracefully (if applicable)
- [ ] No console errors
- [ ] Appropriate messaging

### Rapid Navigation
- [ ] Click through pages rapidly
- [ ] No race conditions
- [ ] No broken animations
- [ ] State remains consistent

---

## Production Build Tests

### Build Process
- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Build completes without warnings

### Production Server
- [ ] Run `npm start`
- [ ] All pages work in production mode
- [ ] Assets load from correct paths
- [ ] Service worker functions (if applicable)

### Lighthouse Audit
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

---

## Final Checks

- [ ] All tests passing
- [ ] No critical issues found
- [ ] No console errors/warnings
- [ ] Ready for deployment

---

## Notes Section

Use this space to document any issues found:

```
Issue: [Description]
Severity: [Low/Medium/High/Critical]
Steps to Reproduce:
1.
2.
3.

Expected: [What should happen]
Actual: [What actually happens]
```

---

**Testing Date**: _________________

**Tested By**: _________________

**Build/Commit**: _________________

**Issues Found**: ___ Critical | ___ High | ___ Medium | ___ Low

**Status**: ⬜ Pass | ⬜ Pass with Issues | ⬜ Fail
