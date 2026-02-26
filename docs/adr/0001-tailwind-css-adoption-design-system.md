# ADR 0001: Adopt Tailwind CSS with @apply for Design System Components

**Status:** Accepted

**Date:** 2026-02-26

---

## Context

The design system library (`libs/design-system`) currently uses CSS Modules with traditional CSS styling for all components (Button, Toggle, Chip, etc.). Tailwind CSS v4.2.1 has been installed across the entire monorepo with the `@tailwindcss/vite` plugin already configured in the design-system's Vite build configuration, but it is not being utilized.

We needed to decide on an approach to adopt Tailwind CSS in the design system while maintaining consistency, readability, and maintainability across all components.

---

## Decision

**We will adopt Tailwind CSS using the CSS Modules + @apply pattern for all design system components.**

This means:

- Keep the existing CSS Modules pattern (`.module.css` files)
- Use Tailwind's `@apply` directive to apply utility classes within CSS rules
- Update components progressively, starting with the Chip component as a reference implementation
- Maintain semantic CSS class names (`.container`, `.button`, etc.) while leveraging Tailwind's utility classes

### Example Implementation

**chip.module.css:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.container {
  @apply px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium inline-block;
}

.container:hover {
  @apply bg-blue-600 transition-colors duration-200 ease-in-out;
}
```

**chip.tsx:**

```tsx
import styles from './chip.module.css';

export interface ChipProps {
  label: string;
  color?: 'blue' | 'green' | 'red' | 'purple';
}

export function Chip({ label, color = 'blue' }: ChipProps) {
  return <span className={styles['container']}>{label}</span>;
}
```

---

## Rationale

### Why @apply + CSS Modules (Not Direct Tailwind Classes)

1. **Consistency with Existing Pattern**

   - All current design-system components already use CSS Modules (Button, Toggle, etc.)
   - Switching to direct Tailwind classes would break this established convention
   - Gradual adoption allows for consistent patterns across the design system

2. **Cleaner JSX**

   - Avoids long, hard-to-read `className` attributes with dozens of utility classes
   - Keeps component markup focused on structure, not styling
   - Example: `className={styles['container']}` instead of `className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium inline-block"`

3. **Centralized Styling Logic**

   - All styling rules are in one place (the CSS file)
   - Easier to maintain and modify styles without touching JSX
   - Simpler to audit and understand styling decisions

4. **Better for Design System Libraries**

   - Design system components should encapsulate styling details
   - CSS Modules provide natural encapsulation
   - Consumers of the design system get clean, simple component APIs

5. **Future Theme Customization**

   - Easier to implement theming via CSS variables when styles are centralized
   - Cleaner integration with design tokens
   - Simpler to create multiple themes without duplicating components

6. **Leverages Build Pipeline**
   - Tailwind's `@tailwindcss/vite` plugin is already configured
   - Utility classes are tree-shaken and optimized automatically
   - No additional configuration needed

---

## Alternatives Considered

### Alternative 1: Direct Tailwind Classes (Without CSS Modules)

**Example:**

```tsx
<span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium inline-block hover:bg-blue-600">{label}</span>
```

**Pros:**

- Simpler learning curve for Tailwind-first developers
- No need to context-switch between CSS and JSX
- Faster initial development

**Cons:**

- Long, difficult-to-read className strings directly in JSX
- Breaks consistency with existing design-system components
- Harder to maintain and refactor styles
- Less suitable for a library that should hide implementation details

**Decision:** Rejected in favor of CSS Modules + @apply for maintainability and consistency.

### Alternative 2: Traditional CSS (No Tailwind)

**Example:**

```css
.container {
  padding: 4px 12px;
  background-color: #3b82f6;
  color: white;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
}
```

**Pros:**

- Familiar to all developers
- No need to learn Tailwind

**Cons:**

- Tailwind is already installed and configured
- Misses opportunity to standardize on Tailwind ecosystem
- Duplicates values instead of using Tailwind's design tokens
- No tree-shaking benefits

**Decision:** Rejected in favor of Tailwind adoption.

---

## Consequences

### Positive

- ✅ Consistent styling approach across design-system components
- ✅ Cleaner JSX without long utility class strings
- ✅ Easier to maintain and modify component styles
- ✅ Leverages Tailwind's optimized utility classes
- ✅ Foundation for future theming and design token integration
- ✅ Clear precedent and pattern for other design-system components to follow

### Negative

- ⚠️ Developers must understand both Tailwind utilities and CSS Modules
- ⚠️ Slightly more files to maintain (CSS files in addition to JSX)
- ⚠️ Small learning curve for developers unfamiliar with `@apply` directive

### Migration Path

- Start with Chip component as reference implementation
- Apply same pattern to Button, Toggle, and other components
- Update component documentation with usage examples
- Consider creating component variants for common color/size combinations as needed

---

## Implementation Details

### Files Modified

- `libs/design-system/src/lib/components/chip/chip.module.css` - Added Tailwind directives and @apply rules
- `libs/design-system/src/lib/components/chip/chip.tsx` - Updated to accept props and render configurable chip

### Build Configuration

- No changes needed; `@tailwindcss/vite` plugin already configured in `libs/design-system/vite.config.ts`

### Testing

- CSS modules are processed correctly by Vite
- Tailwind directives are compiled to CSS
- Component renders with expected styles

---

## References

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [@apply Directive](https://tailwindcss.com/docs/functions-and-directives#apply)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

---

## Sign-Off

- **Proposed by:** Development Team
- **Date:** 2026-02-26
- **Status:** Ready for Implementation
