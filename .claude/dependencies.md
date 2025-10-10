# Dependency Documentation

## Critical Dependencies

### framer-motion (^12.9.2)
**Purpose**: Animation library for all page transitions and interactive effects

**Used For**:
- Page transition animations
- Flame detachment/return animations
- Hover effects on cards and buttons
- Stagger animations for lists
- Scroll-based animations

**Update Caution**: ⚠️ **HIGH**
- Breaking changes in major versions
- Animation API changes can affect entire app
- Test thoroughly before updating

**Key Features Used**:
- `motion` components
- `AnimatePresence` for exit animations
- `useAnimation` hook
- `variants` pattern
- `whileHover` and `whileInView`

**Documentation**: https://www.framer.com/motion/

---

### next (15.3.1)
**Purpose**: React framework providing app structure and build system

**Used For**:
- App Router structure (though we use custom routing)
- Font optimization (Geist fonts)
- Build system and bundling
- TypeScript integration
- Production optimization

**Update Caution**: ⚠️ **MEDIUM**
- Maintains App Router directory structure
- Uses custom SPA navigation instead of Next.js router
- Font loading via `next/font`

**Key Features Used**:
- App Router (directory structure only)
- `next/font` for font optimization
- Turbopack dev server
- Automatic code splitting

**Documentation**: https://nextjs.org/docs

---

### react (^19.0.0)
**Purpose**: Core UI library

**Used For**:
- Component architecture
- State management (useState, useEffect)
- Context API (NavigationContext)
- Hooks system

**Update Caution**: ⚠️ **HIGH**
- Breaking changes between major versions
- React 19 is relatively new
- Coordinate updates with react-dom

**Documentation**: https://react.dev

---

### react-dom (^19.0.0)
**Purpose**: React rendering for web

**Used For**:
- DOM rendering
- Client-side hydration
- Event handling

**Update Caution**: ⚠️ **HIGH**
- Must match React version exactly
- Update together with React

**Documentation**: https://react.dev

---

## Dev Dependencies

### tailwindcss (^4)
**Purpose**: Utility-first CSS framework

**Used For**:
- All styling (no CSS modules)
- Responsive design
- Custom theme configuration
- Dark mode

**Update Caution**: ⚠️ **HIGH**
- Version 4 uses different config approach
- Breaking changes from v3
- Config via CSS imports instead of config file

**Key Features Used**:
- `@import "tailwindcss"` pattern
- `@theme inline` for custom properties
- Responsive utilities
- Custom color palette

**Documentation**: https://tailwindcss.com/docs

---

### @tailwindcss/postcss (^4)
**Purpose**: PostCSS plugin for Tailwind CSS 4

**Used For**:
- Processing Tailwind directives
- CSS transformation
- Build-time CSS generation

**Update Caution**: ⚠️ **MEDIUM**
- Must match Tailwind version
- Update together with tailwindcss

---

### typescript (^5)
**Purpose**: Type system for JavaScript

**Used For**:
- Type checking
- IDE autocomplete
- Code quality
- Interface definitions

**Update Caution**: ⚠️ **LOW**
- Generally safe to update minor versions
- Watch for strict mode changes

**Configuration**: `tsconfig.json`

**Documentation**: https://www.typescriptlang.org

---

### @types/react (^19)
**Purpose**: TypeScript types for React

**Update Caution**: ⚠️ **MEDIUM**
- Must match React version
- Update together with React

---

### @types/react-dom (^19)
**Purpose**: TypeScript types for React DOM

**Update Caution**: ⚠️ **MEDIUM**
- Must match react-dom version
- Update together with react-dom

---

### @types/node (^20)
**Purpose**: TypeScript types for Node.js

**Update Caution**: ⚠️ **LOW**
- Safe to update
- Matches Node.js version

---

### eslint (^9)
**Purpose**: Code linting and quality

**Used For**:
- Code quality checks
- Style enforcement
- Error detection

**Update Caution**: ⚠️ **LOW**
- Safe to update minor versions
- May need config updates for major versions

**Command**: `npm run lint`

---

### eslint-config-next (15.3.1)
**Purpose**: Next.js-specific ESLint rules

**Update Caution**: ⚠️ **LOW**
- Should match Next.js version
- Update together with Next.js

---

### @eslint/eslintrc (^3)
**Purpose**: ESLint configuration utilities

**Update Caution**: ⚠️ **LOW**
- Support dependency for ESLint

---

### tsx (^4.20.3)
**Purpose**: TypeScript execution

**Used For**:
- Running TypeScript files directly
- Build scripts
- Development utilities

**Update Caution**: ⚠️ **LOW**
- Safe to update

---

## Dependency Update Strategy

### Before Updating

1. **Check for breaking changes** in release notes
2. **Review migration guides** if available
3. **Backup current branch** or commit changes
4. **Update one major dependency at a time**

### Testing After Updates

1. Run `npm run build` to check for build errors
2. Run `npm run lint` to check for linting issues
3. Test all page transitions
4. Verify flame animations work
5. Check mobile responsiveness
6. Test in multiple browsers

### Safe Update Pattern

```bash
# Update patch versions (safe)
npm update

# Update specific package
npm install package-name@latest

# Check outdated packages
npm outdated

# View dependency tree
npm list --depth=0
```

### Risk Levels

**HIGH**: Test extensively, expect potential breaking changes
**MEDIUM**: Review changelog, test main features
**LOW**: Generally safe, but still test build

## Package Scripts

```json
{
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

### Script Usage

- **dev**: Development server with Turbopack (fast refresh)
- **build**: Production build (check for errors)
- **start**: Serve production build locally
- **lint**: Run ESLint checks

## Peer Dependencies

All peer dependencies are satisfied. No warnings in current setup.

## Security

### Check for vulnerabilities
```bash
npm audit
npm audit fix
```

### Update security patches
```bash
npm update --save
```

## Version Lock

`package-lock.json` ensures consistent installs across environments.

**Important**:
- Commit `package-lock.json` to version control
- Run `npm ci` in CI/CD (faster, stricter)
- Run `npm install` locally for development

## Future Dependency Considerations

### Potential Additions
- **Jest** - Unit testing
- **Playwright** - E2E testing
- **@vercel/analytics** - Analytics
- **sharp** - Image optimization
- **react-hook-form** - Form handling (if needed)

### Not Needed Currently
- React Router (using custom navigation)
- Redux/Zustand (Context API sufficient)
- Styled Components (using Tailwind)
- CSS Modules (using Tailwind)

---

**Last Updated**: 2025-10-09
