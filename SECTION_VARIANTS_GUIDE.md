# Section Component - Dark Variants Guide

## 🎨 Overview

The Section component now includes **4 dark variants** with colorful gradient orbs and lighting effects. Each variant creates a different atmospheric background perfect for modern dark-themed designs.

---

## ✨ Available Variants

### 1. **dark-orbs** - Classic Three Orbs

```tsx
<Section variant="dark-orbs" padding="xl">
  {/* Your content */}
</Section>
```

**Visual Description:**

- **Gold orb** - Top left corner (-left-20, top-20)
- **Violet orb** - Bottom right corner (-right-20, bottom-20)
- **Blue orb** - Center (50%, 50%) with translation

**Best for:**

- Hero sections
- Landing page headers
- Main content areas
- Call-to-action sections

**Opacity:** 30% on container

---

### 2. **dark-mesh** - Multi-Point Gradient Mesh

```tsx
<Section variant="dark-mesh" padding="lg">
  {/* Your content */}
</Section>
```

**Visual Description:**

- **Violet orb** (30% opacity) - Top at 1/4 width
- **Pink orb** (25% opacity) - Top 1/3 at right 1/4
- **Blue orb** (20% opacity) - Bottom at 1/3 width
- **Gold orb** (15% opacity) - Bottom 1/4 at right 1/3

**Best for:**

- Feature grids
- Service showcases
- Portfolio sections
- Product displays

**Opacity:** 40% on container
**Background:** Gradient from gray-900 → black → gray-900

---

### 3. **dark-glow** - Directional Edge Lighting

```tsx
<Section variant="dark-glow" padding="md">
  {/* Your content */}
</Section>
```

**Visual Description:**

- **Top glow** - Radial gradient from violet to blue (800x400px)
- **Left glow** - Horizontal gradient from gold (600x300px)
- **Right glow** - Directional gradient from pink (500x500px)

**Best for:**

- Content-heavy sections
- Blog posts
- Documentation pages
- Text-focused areas

**Opacity:** 35% on container
**Positioning:** Glows overflow from edges (-40px offsets)

---

### 4. **dark-radial** - Strategic Radial Gradients

```tsx
<Section variant="dark-radial" padding="xl">
  {/* Your content */}
</Section>
```

**Visual Description:**
Four radial gradients at specific coordinates:

- **Gold** (20% opacity) at 20% 30%
- **Violet** (25% opacity) at 80% 20%
- **Blue** (20% opacity) at 40% 80%
- **Pink** (15% opacity) at 90% 70%

**Best for:**

- Pricing tables
- Comparison grids
- Data visualization
- Statistics sections

**Opacity:** 40% on background layer
**Falloff:** 40% radius for each radial gradient

---

## 🎯 Component Props

```tsx
interface SectionProps {
  variant?:
    | 'default'
    | 'gradient'
    | 'muted'
    | 'dark-orbs'
    | 'dark-mesh'
    | 'dark-glow'
    | 'dark-radial';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
  component?: React.ElementType;
  noContainer?: boolean;
  className?: string;
}
```

---

## 📏 Padding Sizes

```tsx
none: '';
sm: 'py-8 lg:py-12';
md: 'py-12 lg:py-16';
lg: 'py-16 lg:py-24';
xl: 'py-24 lg:py-32';
```

---

## 🎨 Color System

All variants use your Tailwind theme colors:

```tsx
bg - brand - gold; // RGB(240, 185, 11)
bg - brand - violet; // RGB(139, 92, 246)
bg - brand - blue; // RGB(37, 99, 235)
bg - brand - pink; // RGB(236, 72, 153)
```

With opacity modifiers:

- `/10` - 10% opacity
- `/15` - 15% opacity
- `/20` - 20% opacity
- `/25` - 25% opacity
- `/30` - 30% opacity

---

## 💡 Usage Examples

### Hero Section

```tsx
<Section variant="dark-orbs" padding="xl">
  <div className="text-center">
    <h1 className="text-6xl font-bold text-white mb-6">Welcome to Our Platform</h1>
    <p className="text-xl text-gray-300">Beautiful, modern design with colorful accents</p>
  </div>
</Section>
```

### Features Grid

```tsx
<Section variant="dark-mesh" padding="lg">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {features.map(feature => (
      <FeatureCard key={feature.id} {...feature} />
    ))}
  </div>
</Section>
```

### Content Section

```tsx
<Section variant="dark-glow" padding="md">
  <article className="prose prose-invert max-w-4xl mx-auto">
    <h2>Article Title</h2>
    <p>Your content here...</p>
  </article>
</Section>
```

### Pricing Table

```tsx
<Section variant="dark-radial" padding="xl">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {pricingPlans.map(plan => (
      <PricingCard key={plan.id} {...plan} />
    ))}
  </div>
</Section>
```

---

## 🔧 Technical Implementation

### Architecture

Each dark variant:

1. Sets `bg-black relative` as base styles
2. Renders background effects in absolute positioned div
3. Adds `pointer-events-none` to prevent interaction blocking
4. Wraps content in `relative z-10` for proper layering

### Background Rendering

```tsx
const renderBackground = () => {
  switch (variant) {
    case 'dark-orbs':
      return <OrbsBackground />;
    case 'dark-mesh':
      return <MeshBackground />;
    // ... etc
  }
};
```

### Layer Structure

```
Section (relative)
├── Background Layer (absolute, pointer-events-none)
│   └── Gradient orbs/effects
└── Content Layer (relative z-10)
    └── Container (optional)
        └── Children
```

---

## 📱 Mobile Responsiveness

All variants are fully responsive:

### Orb Sizes

- Desktop: `w-96 h-96` (384px)
- Mobile: Proportionally scaled with viewport

### Blur Intensity

- All variants: `blur-3xl` (48px blur radius)
- Consistent across breakpoints for performance

### Positioning

- Relative positions (%) maintain layout across screen sizes
- Absolute positions with negative margins create edge bleeds
- Center positioning uses translate transforms

---

## ⚡ Performance Considerations

### Optimizations Applied:

1. **pointer-events-none** - Prevents event handling on decorative layers
2. **Overflow hidden** - Clips orbs outside bounds
3. **GPU acceleration** - Uses transforms for positioning
4. **Static backgrounds** - No animations by default
5. **Opacity layers** - Lower opacity reduces render cost

### Best Practices:

- Use `dark-radial` for best mobile performance (single layer)
- Avoid nesting multiple dark variants
- Consider reducing blur on low-end devices
- Test on actual devices, not just DevTools

---

## 🎭 Variant Comparison

| Variant         | Orbs | Complexity | Performance | Mobile     | Best Use          |
| --------------- | ---- | ---------- | ----------- | ---------- | ----------------- |
| **dark-orbs**   | 3    | Low        | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐ | Heroes, CTAs      |
| **dark-mesh**   | 4    | Medium     | ⭐⭐⭐⭐    | ⭐⭐⭐⭐   | Features, Grids   |
| **dark-glow**   | 3    | Medium     | ⭐⭐⭐⭐    | ⭐⭐⭐⭐   | Content, Articles |
| **dark-radial** | 4    | High       | ⭐⭐⭐      | ⭐⭐⭐⭐   | Pricing, Data     |

---

## 🎨 Customization

### Changing Colors

Modify in `tailwind.config.ts`:

```ts
colors: {
  brand: {
    gold: '#F0B90B',
    violet: '#8B5CF6',
    blue: '#2563EB',
    pink: '#EC4899',
  }
}
```

### Adjusting Opacity

In Section.tsx, modify the opacity classes:

```tsx
className = 'absolute inset-0 overflow-hidden opacity-30';
//                                              ↑ Change this
```

### Adding New Variants

1. Add variant name to TypeScript interface
2. Add to `variantStyles` Record
3. Add case to `renderBackground()` switch
4. Create your custom gradient pattern

---

## 🐛 Troubleshooting

**Issue:** Orbs not visible

- ✅ Check Tailwind config includes brand colors
- ✅ Verify opacity values aren't too low
- ✅ Ensure `overflow-hidden` isn't hiding orbs

**Issue:** Content not clickable

- ✅ Verify `pointer-events-none` on background layer
- ✅ Check z-index values (content should be z-10)
- ✅ Ensure no absolute positioned elements covering content

**Issue:** Performance lag on mobile

- ✅ Reduce blur radius from `blur-3xl` to `blur-2xl`
- ✅ Lower opacity of background layer
- ✅ Use simpler variants (dark-orbs over dark-radial)

---

## 📚 Related Components

- **Container** - Wraps content with max-width constraints
- **Typography** - Text components with consistent styling
- **Card** - Glass morphism cards that work well with dark variants

---

## 🔗 Demo Page

View live examples at: `/section-variants`

Shows all four variants with:

- Visual demonstrations
- Usage examples
- Code snippets
- Best practice guides

---

## 🚀 Quick Start

1. **Choose a variant** based on your content type
2. **Set padding** according to content density
3. **Add your content** - it will automatically layer correctly
4. **Test on mobile** to ensure responsiveness

Example:

```tsx
<Section variant="dark-orbs" padding="xl">
  <YourComponent />
</Section>
```

That's it! The Section component handles all the background effects automatically.

---

**Version:** 2.0  
**Last Updated:** January 2025  
**Variants:** 7 total (3 original + 4 dark)
