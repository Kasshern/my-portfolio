# Coding Patterns & Reusable Code

## Adding a New Page

### Complete Checklist

- [ ] Add page type to `PageType` union in `NavigationContext.tsx`
- [ ] Add page type to `PageType` union in `MainLayout.tsx`
- [ ] Add page type to `PageType` union in `Home.tsx`
- [ ] Create component file: `src/components/pages/[PageName].tsx`
- [ ] Add navigation link to `navLinks` in `ProfileNavigation.tsx`
- [ ] Export component from `src/components/pages/index.ts`
- [ ] Add component to `pageComponents` mapping in `Home.tsx`
- [ ] Test navigation to/from new page
- [ ] Verify URL routing works
- [ ] Test mobile responsiveness

### Page Component Template

```typescript
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import DynamicSpacing from '../DynamicSpacing';

const PageName: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen pt-24 pb-12 px-6"
      >
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
              Page Title
            </h1>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Page description
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Your content here */}
          </div>
        </div>
      </motion.div>
      <DynamicSpacing />
    </>
  );
};

export default PageName;
```

## Framer Motion Variants

### Standard Page Variants

```typescript
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const pageTransition = {
  duration: 0.5,
  ease: "easeInOut"
};
```

### Stagger Children Pattern

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Usage:
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
  <motion.div variants={itemVariants}>Item 3</motion.div>
</motion.div>
```

### Card Hover Effects

```typescript
const cardVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

// Usage:
<motion.div
  variants={cardVariants}
  initial="rest"
  whileHover="hover"
  className="..."
>
  Card content
</motion.div>
```

## Flame Animation Pattern

### Reusable Flame Effect Code

```typescript
// Flame SVG component
const FlameEffect: React.FC<{ color: string; size?: number }> = ({
  color,
  size = 60
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="flame-core"
      style={{ '--flame-color': color } as React.CSSProperties}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d="M50,10 Q35,30 40,50 Q30,60 35,80 Q45,85 50,90 Q55,85 65,80 Q70,60 60,50 Q65,30 50,10 Z"
        fill={color}
        filter="url(#glow)"
        style={{ animation: 'flameCore 2s ease-in-out infinite' }}
      />
    </svg>
  );
};
```

### CSS Flame Animations

Available in `src/app/globals.css`:

- `flameCore` - Main flame body movement
- `flameRealistic` - More dynamic flame effect
- `flameWisp` - Particle-like wisps
- `fireFlicker` - Text glow/flicker effect

Usage:
```css
.my-flame {
  animation: flameCore 2s ease-in-out infinite;
}
```

## Navigation Pattern

### Using Navigation Context

```typescript
import { useNavigation } from '../NavigationContext';

const MyComponent: React.FC = () => {
  const { navigateToPage, currentPage } = useNavigation();

  const handleClick = () => {
    navigateToPage('experience');
  };

  return (
    <button onClick={handleClick}>
      Go to Experience
    </button>
  );
};
```

### Adding Navigation Link

In `ProfileNavigation.tsx`:

```typescript
const navLinks = [
  // Existing links...
  {
    label: 'New Page',
    href: '/new-page',
    angle: 270, // Position around circle (0-360)
    flameColor: '#FF6B6B' // Unique color
  }
];
```

**Angle Guide**:
- 0° = Right
- 90° = Bottom
- 180° = Left
- 270° = Top

## Responsive Design Patterns

### Mobile-First Breakpoints

```typescript
// Tailwind breakpoints
sm: '640px'   // Small devices
md: '768px'   // Medium devices
lg: '1024px'  // Large devices
xl: '1280px'  // Extra large
2xl: '1536px' // 2X large
```

### Common Responsive Patterns

```typescript
// Text sizing
className="text-2xl md:text-4xl lg:text-5xl"

// Spacing
className="px-4 md:px-6 lg:px-8"
className="py-8 md:py-12 lg:py-16"

// Grid layouts
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Flexbox
className="flex flex-col md:flex-row gap-4"
```

## Hydration-Safe Pattern

### Client-Side Only Rendering

```typescript
const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);

if (!isClient) {
  return null; // or loading skeleton
}

// Client-side code here
return (
  <div>
    {/* Browser-specific features */}
  </div>
);
```

## Color Palette

### Accent Colors

```typescript
const colors = {
  primary: '#6366F1',    // Indigo
  secondary: '#8B5CF6',  // Purple
  tertiary: '#EC4899',   // Pink
  success: '#10B981',    // Green
  warning: '#F59E0B'     // Amber
};
```

### Flame Colors (Used in Navigation)

```typescript
const flameColors = {
  experience: '#FF6B6B',  // Red
  education: '#4ECDC4',   // Cyan
  skills: '#FFE66D',      // Yellow
  projects: '#A8E6CF',    // Mint
  videos: '#FF6B9D',      // Pink
  contact: '#95E1D3'      // Aqua
};
```

## Card Component Pattern

### Standard Card

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="bg-background-elevated border border-border-subtle rounded-2xl p-6 md:p-8 hover:border-border-medium transition-colors"
>
  <h3 className="text-2xl font-bold mb-4 text-foreground">
    Card Title
  </h3>
  <p className="text-foreground-muted">
    Card content
  </p>
</motion.div>
```

### Card with Glow Effect

```typescript
<motion.div
  whileHover={{ scale: 1.02 }}
  className="bg-background-elevated border border-border-subtle rounded-2xl p-6 md:p-8 relative overflow-hidden group"
>
  {/* Glow effect on hover */}
  <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-2xl font-bold mb-4">Title</h3>
    <p>Content</p>
  </div>
</motion.div>
```

## Gradient Text Pattern

```typescript
<h1 className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
  Gradient Heading
</h1>
```

## Dynamic Spacing Usage

Always include at the end of page components:

```typescript
import DynamicSpacing from '../DynamicSpacing';

const MyPage = () => {
  return (
    <>
      {/* Page content */}
      <DynamicSpacing />
    </>
  );
};
```

## Intersection Observer Pattern

```typescript
const [isVisible, setIsVisible] = useState(false);
const elementRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    {
      threshold: 0.1,
      rootMargin: '0px'
    }
  );

  if (elementRef.current) {
    observer.observe(elementRef.current);
  }

  return () => {
    if (elementRef.current) {
      observer.unobserve(elementRef.current);
    }
  };
}, []);

return <div ref={elementRef}>{/* Content */}</div>;
```

## TypeScript Patterns

### Component Props

```typescript
interface ComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
}

const Component: React.FC<ComponentProps> = ({
  title,
  description,
  onAction,
  variant = 'primary',
  children
}) => {
  // Component logic
};
```

### Page Type Union

```typescript
type PageType =
  | 'home'
  | 'experience'
  | 'education'
  | 'skills'
  | 'projects'
  | 'videos'
  | 'contact';
```

## Performance Tips

### Optimize Re-renders

```typescript
// Use React.memo for components that don't need frequent updates
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Expensive render */}</div>;
});

// Use useCallback for event handlers
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies]);

// Use useMemo for expensive computations
const sortedData = useMemo(() => {
  return data.sort((a, b) => a.value - b.value);
}, [data]);
```

### Animation Performance

```typescript
// Prefer transform and opacity for animations
// ✅ Good - GPU accelerated
<motion.div
  animate={{
    opacity: 1,
    x: 100,
    scale: 1.5
  }}
/>

// ❌ Avoid - triggers layout reflow
<motion.div
  animate={{
    width: '100%',
    height: '500px',
    marginTop: '20px'
  }}
/>
```
