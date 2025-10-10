# Git Commit Message Templates

## Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Types

### Feature
```
feat(component): add new feature

Implements [feature name] with [technical approach]

- Detail 1
- Detail 2
- Detail 3
```

**Example**:
```
feat(navigation): add blog page to flame navigation

Implements blog page with custom flame color and 315° positioning

- Created Blog.tsx component with article grid
- Added blog route to ProfileNavigation
- Updated all PageType unions
- Integrated with existing animation system
```

---

### Fix
```
fix(component): resolve issue

Fixes issue where [problem description]

- Root cause: [explanation]
- Solution: [approach]
- Tested on: [browsers/devices]
```

**Example**:
```
fix(animation): resolve flame positioning on mobile

Fixes issue where flames were misaligned on screens < 640px

- Root cause: calculatePositions used fixed radius
- Solution: Added responsive radius calculation
- Tested on: iPhone SE, iPhone 14, iPad
```

---

### Refactor
```
refactor(component): improve implementation

Simplifies [component/feature] by [approach]

- Changes made
- Performance impact
- No breaking changes
```

**Example**:
```
refactor(navigation): streamline page transition logic

Simplifies state management in MainLayout

- Extracted transition logic to custom hook
- Reduced re-renders by 40%
- Improved code readability
- No breaking changes to API
```

---

### Style
```
style(component): update styling

Updates [visual aspect] to [reason]

- Changed from X to Y
- Maintains responsive behavior
- Follows design system
```

**Example**:
```
style(cards): enhance hover effects

Updates card hover animations for better visual feedback

- Increased scale from 1.01 to 1.02
- Added subtle glow effect on hover
- Maintains 60fps performance
- Follows existing animation patterns
```

---

### Performance
```
perf(component): optimize performance

Improves [metric] by [amount/approach]

- Optimization technique
- Before/after metrics
- Trade-offs if any
```

**Example**:
```
perf(pages): implement lazy loading

Improves initial bundle size by 35%

- Lazy load page components with React.lazy()
- Added loading skeletons for transitions
- Reduced initial JS from 245KB to 159KB
- Maintains smooth page transitions
```

---

### Documentation
```
docs: update documentation

Updates [documentation type] to [reflect changes/improve clarity]

- Added/Updated: [sections]
- Fixed: [issues]
```

**Example**:
```
docs: add flame navigation guide

Updates architecture.md with flame navigation patterns

- Added flame positioning angle guide
- Documented color palette
- Included code examples
- Updated component hierarchy diagram
```

---

### Build
```
build: update build configuration

[Changes to build system]

- Updated [tool/dependency]
- Reason: [explanation]
- Impact: [description]
```

**Example**:
```
build: upgrade to Next.js 15.3.1

Updates Next.js from 15.2.0 to 15.3.1

- Includes Turbopack improvements
- Fixes hydration warnings
- No breaking changes in this minor update
```

---

### Dependencies
```
chore(deps): update dependencies

Updates [dependency] from [version] to [version]

- Breaking changes: [yes/no]
- Migration steps: [if applicable]
- Tested: [confirmation]
```

**Example**:
```
chore(deps): update framer-motion to 12.9.2

Updates framer-motion from 12.8.0 to 12.9.2

- Breaking changes: None
- Includes performance improvements
- All animations tested and working
- Maintains 60fps target
```

---

### Test
```
test: add tests for component

Adds test coverage for [component/feature]

- Test cases: [list]
- Coverage: [percentage if known]
- Test type: [unit/integration/e2e]
```

**Example**:
```
test: add tests for navigation context

Adds unit tests for NavigationContext

- Tests page navigation flow
- Tests URL synchronization
- Tests browser back/forward
- Coverage: 95% of NavigationContext.tsx
```

---

## Scope Examples

Common scopes in this project:

- `navigation` - Navigation system and routing
- `animation` - Animation and transitions
- `flame` - Flame effects and ProfileNavigation
- `pages` - Page components
- `layout` - Layout components
- `styles` - Styling and CSS
- `deps` - Dependencies
- `config` - Configuration files
- `docs` - Documentation

## Commit Message Guidelines

### Do's ✅

1. **Use imperative mood** ("add" not "added")
2. **Be specific** about what changed
3. **Explain why**, not just what
4. **Reference issues** if applicable (#123)
5. **Keep subject line under 72 characters**
6. **Use body for detailed explanation**
7. **List breaking changes** in footer

### Don'ts ❌

1. ❌ Don't use past tense ("added", "fixed")
2. ❌ Don't be vague ("fix stuff", "update code")
3. ❌ Don't exceed 72 chars in subject
4. ❌ Don't forget to explain breaking changes
5. ❌ Don't include unnecessary details

## Breaking Changes

When introducing breaking changes:

```
feat(navigation)!: change navigation API

BREAKING CHANGE: navigateToPage() now requires PageType instead of string

Migration:
- Before: navigateToPage('home')
- After: navigateToPage('home' as PageType)

This change improves type safety and prevents invalid routes.
```

## Co-Authoring

When collaborating or pair programming:

```
feat(component): add new feature

Implementation details...

Co-authored-by: Name <email@example.com>
```

## Examples of Good Commits

### Feature Addition
```
feat(pages): add testimonials page

Implements new testimonials page with carousel

- Created Testimonials.tsx with testimonial cards
- Added testimonial data structure
- Integrated with flame navigation (225° angle)
- Implemented smooth carousel transitions
- Fully responsive on all devices
```

### Bug Fix
```
fix(flame): prevent flame overlap on small screens

Fixes issue where flames overlapped on screens < 375px

- Reduced flame radius from 200px to 150px on mobile
- Adjusted flame size from 60px to 45px
- Maintained visual hierarchy
- Tested on iPhone SE (smallest viewport)
```

### Performance Optimization
```
perf(animation): optimize flame rendering

Reduces animation CPU usage by 50%

- Moved from JS animations to CSS keyframes
- Used will-change for GPU acceleration
- Reduced paint operations per frame
- Maintains visual quality
- All flame effects still smooth at 60fps
```

### Refactoring
```
refactor(pages): extract common card component

DRY improvement for card components across pages

- Created reusable Card component
- Extracted common hover effects
- Reduced code duplication by 200 lines
- Maintains all existing functionality
- No visual changes
```

## Quick Reference

| Type | When to Use |
|------|-------------|
| `feat` | New feature or capability |
| `fix` | Bug fix |
| `refactor` | Code change without behavior change |
| `style` | Visual/CSS changes only |
| `perf` | Performance improvement |
| `docs` | Documentation only |
| `test` | Adding/updating tests |
| `build` | Build system or dependencies |
| `chore` | Maintenance tasks |

---

**Remember**: Good commit messages help your future self and collaborators understand the project history!
