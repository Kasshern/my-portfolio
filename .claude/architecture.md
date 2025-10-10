# Technical Architecture

## Overview

This is a Next.js 15 application that uses a **custom single-page application (SPA) navigation system** instead of Next.js's built-in file-based routing. The application features a unique flame-based navigation interface with smooth Framer Motion transitions.

## State Management Flow

```
NavigationContext (Provider)
    ↓
MainLayout (URL sync & page state)
    ↓
Home (Page orchestration)
    ↓
ProfileNavigation + Page Components
```

### NavigationContext
**Location**: `src/components/NavigationContext.tsx`

**Purpose**: Provides global navigation state and functions

**Exports**:
- `useNavigation()` hook
- `navigateToPage(page: PageType)` function
- `currentPage` state

**Usage**:
```typescript
const { navigateToPage, currentPage } = useNavigation();
```

### MainLayout
**Location**: `src/components/MainLayout.tsx`

**Responsibilities**:
1. Manages current page state
2. Synchronizes URL with page state via `window.history.pushState`
3. Handles browser back/forward navigation
4. Wraps Home in NavigationProvider

**Key Features**:
- URL parsing on mount
- `popstate` event listener for browser navigation
- Delayed page transitions (100ms) for smooth animations

### Home Component
**Location**: `src/components/pages/Home.tsx`

**Purpose**: Orchestrates ProfileNavigation and page rendering

**Contains**:
- ProfileNavigation component
- Conditional rendering of page components based on `currentPage`
- Page components mapping

## Navigation Flow

### User Interaction Sequence

1. **Hover over profile picture**
   - Flames and navigation links appear
   - ProfileNavigation manages hover state

2. **Click navigation link**
   - `navigateToPage()` called with target page
   - MainLayout updates URL
   - Small delay (100ms) for transition
   - `currentPage` state updates

3. **Page Transition**
   - Home component detects `currentPage` change
   - Framer Motion `AnimatePresence` handles exit animation
   - Old page component unmounts
   - New page component mounts with entry animation

4. **URL Synchronization**
   - URL updates without page reload
   - Browser history entry created
   - Back/forward buttons work correctly

## Animation Pipeline

### Framer Motion Integration

All page transitions use Framer Motion with this pattern:

```typescript
<AnimatePresence mode="wait">
  <motion.div
    key={currentPage}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <CurrentPageComponent />
  </motion.div>
</AnimatePresence>
```

### Flame Animation States

**ProfileNavigation flame journey**:
1. **Default**: Stationary around profile
2. **Departing**: Detaches and moves to top-left
3. **Anchored**: Fixed in top-left corner
4. **Returning**: Animates back to profile on scroll

**Intersection Observer** triggers return animation when user scrolls back to profile area.

## Component Hierarchy

```
src/app/
├── page.tsx (Entry point)
│   └── <MainLayout />
├── layout.tsx (Root layout, fonts)
└── globals.css (Tailwind + flame animations)

src/components/
├── MainLayout.tsx (SPA navigation shell)
├── NavigationContext.tsx (Global state)
├── ProfileNavigation.tsx (Flame navigation UI)
├── DynamicSpacing.tsx (Scroll behavior)
├── PageTransition.tsx (Legacy, may not be used)
└── pages/
    ├── index.ts (Named exports)
    ├── Home.tsx (Page orchestrator)
    ├── Experience.tsx
    ├── Education.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── Videos.tsx
    └── Contact.tsx
```

## Data Flow

### Adding a New Page

**5-Step Process**:

1. **Add page type** to `PageType` union in:
   - `NavigationContext.tsx`
   - `MainLayout.tsx`
   - `Home.tsx`

2. **Create component** in `src/components/pages/[PageName].tsx`
   - Use `"use client"` directive
   - Include DynamicSpacing component
   - Follow existing animation pattern

3. **Add navigation link** in `ProfileNavigation.tsx`:
   ```typescript
   {
     label: 'Page Name',
     href: '/page-name',
     angle: 180, // Position around circle
     flameColor: '#FF6B6B' // Unique color
   }
   ```

4. **Export component** from `src/components/pages/index.ts`:
   ```typescript
   export { default as PageName } from './PageName';
   ```

5. **Add to page mapping** in `Home.tsx`:
   ```typescript
   const pageComponents = {
     // ...
     'page-name': PageName
   };
   ```

## Performance Considerations

### Animation Performance
- **Target**: 60fps for all animations
- **Strategy**: Use GPU-accelerated properties (transform, opacity)
- **Monitoring**: Watch for janky transitions in dev tools

### Code Splitting
- Pages are dynamically rendered, not lazy-loaded
- Next.js handles automatic code splitting
- Consider React.lazy() for large components

### Bundle Size
- Framer Motion is the largest dependency
- Tailwind CSS is purged in production
- Monitor with `npm run build`

## Browser Compatibility

### URL Management
- Uses `window.history.pushState` (IE10+)
- Handles `popstate` events for back/forward
- Graceful degradation for older browsers

### CSS Features
- CSS Grid (modern browsers)
- CSS Custom Properties (modern browsers)
- Flexbox (wide support)
- Keyframe animations (wide support)

## Hydration Safety

### Client-Side Only Code

Components use `isClient` pattern to prevent hydration mismatches:

```typescript
const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);

// Only render browser-specific code when isClient is true
```

**Why needed**:
- Position calculations differ server/client
- Window/document access
- Intersection Observer API
- Animation initialization

## Styling Architecture

### Tailwind CSS 4

**Configuration**: Via CSS imports in `globals.css`

```css
@import "tailwindcss";

@theme inline {
  --color-accent-primary: var(--accent-primary);
  /* ... */
}
```

### CSS Custom Properties

**Defined in**: `src/app/globals.css`

**Categories**:
- Background colors (dark theme)
- Text colors (foreground variants)
- Accent colors (indigo/purple/pink palette)
- Gradients (hero, card, accent)
- Shadows (with glow effects)

### Flame Animations

**Keyframes**:
- `@keyframes fireFlicker` - Text glow effect
- `@keyframes flameCore` - Main flame body
- `@keyframes flameRealistic` - Realistic flame movement
- `@keyframes flameWisp` - Wispy flame particles

## TypeScript Configuration

**Path Aliases**:
```json
{
  "@/*": ["./src/*"]
}
```

**Strict Mode**: Enabled

**Target**: ES2017

## Known Architectural Decisions

### Why Custom Routing?

**Reasons**:
1. Needed fine-grained control over page transitions
2. Flame navigation requires custom animation orchestration
3. Single-page feel with expanding previews
4. More control over state during transitions

**Trade-offs**:
- Lost Next.js router features (middleware, layouts)
- Manual URL management
- Custom back/forward handling

### Why No Server Components?

**All components use** `"use client"` because:
- Heavy animation requirements
- Interactive flame effects
- State management throughout
- Framer Motion requires client-side

## Future Considerations

### Potential Improvements
- Lazy load page components
- Add page transition preloading
- Implement route prefetching
- Add loading states
- Error boundaries for each page

### Scalability
- Current architecture supports ~10-15 pages well
- Beyond that, consider:
  - Route-based code splitting
  - Virtual scrolling for lists
  - More aggressive lazy loading
