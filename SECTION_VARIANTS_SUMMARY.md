# Section Dark Variants - Quick Reference

## 🎨 Visual Comparison

### Variant 1: dark-orbs

```
┌─────────────────────────────────────┐
│    🟡 (Gold)                        │
│                                     │
│                                     │
│          🔵 (Blue)                  │
│                                     │
│                                     │
│                        🟣 (Violet)  │
└─────────────────────────────────────┘

✨ 3 Orbs | Simple | Best for Heroes
```

### Variant 2: dark-mesh

```
┌─────────────────────────────────────┐
│      🟣 (Violet)    🩷 (Pink)       │
│                                     │
│           🟡 (Gold)                 │
│                                     │
│  🔵 (Blue)                          │
│                                     │
└─────────────────────────────────────┘

✨ 4 Orbs | Distributed | Best for Grids
```

### Variant 3: dark-glow

```
┌─────────────────────────────────────┐
│        🟣→🔵 (Radial Top)           │
│                                     │
│ 🟡→ (Left)            (Right) ←🩷  │
│                                     │
│                                     │
│                                     │
└─────────────────────────────────────┘

✨ 3 Glows | Directional | Best for Content
```

### Variant 4: dark-radial

```
┌─────────────────────────────────────┐
│   🟡                🟣              │
│                                     │
│           🔵                        │
│                                     │
│                          🩷         │
│                                     │
└─────────────────────────────────────┘

✨ 4 Radials | Strategic | Best for Data
```

---

## 🚀 Usage Matrix

| Variant         | Code                    | Orbs | Opacity | Background |
| --------------- | ----------------------- | ---- | ------- | ---------- |
| **dark-orbs**   | `variant="dark-orbs"`   | 3    | 30%     | Black      |
| **dark-mesh**   | `variant="dark-mesh"`   | 4    | 40%     | Gradient   |
| **dark-glow**   | `variant="dark-glow"`   | 3    | 35%     | Black      |
| **dark-radial** | `variant="dark-radial"` | 4    | 40%     | Black      |

---

## 📋 When to Use

### dark-orbs ✨

**Use for:**

- Hero sections
- Landing page headers
- Main CTAs
- Feature highlights

**Avoid for:**

- Dense content
- Multiple sections in a row
- Forms with many inputs

### dark-mesh 🎨

**Use for:**

- Feature grids
- Service cards
- Portfolio items
- Product showcases

**Avoid for:**

- Single column layouts
- Text-heavy content
- Minimalist designs

### dark-glow 💡

**Use for:**

- Blog posts
- Documentation
- About pages
- Long-form content

**Avoid for:**

- Data tables
- Comparison charts
- Dense grids

### dark-radial 🎯

**Use for:**

- Pricing tables
- Comparison grids
- Statistics
- Data visualization

**Avoid for:**

- Hero sections
- Full-width content
- Single focal points

---

## 🎨 Color Breakdown

### Orb Colors (from Tailwind)

```tsx
🟡 Gold:    rgb(240, 185, 11)   // #F0B90B
🟣 Violet:  rgb(139, 92, 246)   // #8B5CF6
🔵 Blue:    rgb(37, 99, 235)    // #2563EB
🩷 Pink:    rgb(236, 72, 153)   // #EC4899
```

### Opacity Levels

```tsx
/10  = 10%  (subtle accent)
/15  = 15%  (light presence)
/20  = 20%  (balanced)
/25  = 25%  (noticeable)
/30  = 30%  (strong presence)
```

---

## 💻 Code Examples

### Basic Usage

```tsx
// Simplest form
<Section variant="dark-orbs">
  <h1>Your Content</h1>
</Section>

// With padding
<Section variant="dark-mesh" padding="xl">
  <FeatureGrid />
</Section>

// Custom container size
<Section variant="dark-glow" padding="lg" containerSize="md">
  <Article />
</Section>

// No container (full width)
<Section variant="dark-radial" noContainer>
  <PricingTable />
</Section>
```

### Advanced Usage

```tsx
// Custom component type
<Section
  variant="dark-orbs"
  component="div"
  className="min-h-screen"
>
  <HeroContent />
</Section>

// Multiple sections
<>
  <Section variant="dark-orbs" padding="xl">
    <Hero />
  </Section>

  <Section variant="dark-mesh" padding="lg">
    <Features />
  </Section>

  <Section variant="dark-radial" padding="xl">
    <Pricing />
  </Section>
</>
```

---

## 📱 Mobile Behavior

All variants are fully responsive with:

### Automatic Adjustments

- ✅ Orbs scale proportionally
- ✅ Positions maintain relative layout
- ✅ Blur effects optimized
- ✅ Opacity consistent
- ✅ No horizontal scroll

### Breakpoint Behavior

```tsx
Mobile   (< 640px):  Full effect
Tablet   (≥ 640px):  Full effect
Desktop  (≥ 1024px): Full effect
```

No media queries needed - works everywhere!

---

## ⚡ Performance Tips

### Best Performance → Worst

1. **dark-orbs** ⚡⚡⚡⚡⚡ (3 simple orbs)
2. **dark-mesh** ⚡⚡⚡⚡ (4 orbs, gradient bg)
3. **dark-glow** ⚡⚡⚡⚡ (3 complex gradients)
4. **dark-radial** ⚡⚡⚡ (4 radial gradients)

### Optimization Checklist

- ✅ Use `dark-orbs` for critical sections
- ✅ Limit to 3-4 dark variants per page
- ✅ Avoid nesting dark variants
- ✅ Test on low-end devices
- ✅ Consider prefers-reduced-motion

---

## 🎯 Section Composition

### Layer Stack (bottom to top)

```
┌──────────────────────────────────┐
│ 4. Content (z-10, relative)      │ ← Your components
├──────────────────────────────────┤
│ 3. Gradient Orbs (absolute)      │ ← Colorful effects
├──────────────────────────────────┤
│ 2. Background Container          │ ← Overflow control
├──────────────────────────────────┤
│ 1. Section Base (bg-black)       │ ← Solid foundation
└──────────────────────────────────┘
```

### CSS Classes Applied

```tsx
// Section
'bg-black relative py-24 lg:py-32';

// Background
'absolute inset-0 overflow-hidden opacity-30 pointer-events-none';

// Content Wrapper
'relative z-10';

// Orbs
'absolute w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl';
```

---

## 🎨 Customization Quick Guide

### Change Orb Colors

1. Update `tailwind.config.ts`
2. Modify brand color values
3. Restart dev server

### Adjust Opacity

1. Open `Section.tsx`
2. Find background div: `opacity-30`
3. Change to desired value: `opacity-20`, `opacity-40`, etc.

### Modify Positions

1. Open `Section.tsx`
2. Find `renderBackground()` function
3. Adjust position classes (top-20, left-1/4, etc.)

### Add New Variant

1. Add to TypeScript interface
2. Add to `variantStyles` Record
3. Add case to `renderBackground()` switch
4. Create gradient pattern

---

## 🔥 Pro Tips

### Combining with Other Components

```tsx
// Perfect with glass cards
<Section variant="dark-orbs">
  <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8">
    <GlassCard />
  </div>
</Section>

// Great with gradient text
<Section variant="dark-mesh">
  <h1 className="bg-gradient-to-r from-brand-gold to-brand-violet
                 bg-clip-text text-transparent">
    Gradient Title
  </h1>
</Section>
```

### Accessibility Considerations

- ✅ Background effects don't interfere with text contrast
- ✅ Content remains readable at all opacity levels
- ✅ No animation by default (respects prefers-reduced-motion)
- ✅ Semantic HTML structure maintained
- ✅ Keyboard navigation unaffected

---

## 📊 Variant Statistics

| Metric          | dark-orbs | dark-mesh | dark-glow | dark-radial |
| --------------- | --------- | --------- | --------- | ----------- |
| **Elements**    | 3         | 4         | 3         | 4           |
| **Render Cost** | Low       | Medium    | Medium    | High        |
| **Blur Radius** | 3xl       | 3xl       | 3xl       | 3xl         |
| **Opacity**     | 30%       | 40%       | 35%       | 40%         |
| **BG Layers**   | 1         | 2         | 1         | 1           |

---

## 🚦 Decision Tree

```
Do you need dark background with colors?
├─ Yes → Choose variant
│  ├─ Hero/CTA? → dark-orbs
│  ├─ Feature grid? → dark-mesh
│  ├─ Content section? → dark-glow
│  └─ Data/pricing? → dark-radial
└─ No → Use default/gradient/muted
```

---

## 📚 Learn More

- **Full Guide:** `SECTION_VARIANTS_GUIDE.md`
- **Demo Page:** `/section-variants`
- **Component:** `src/components/ui/Section.tsx`

---

**Quick Start:**

```bash
npm run dev
# Visit: http://localhost:3000/section-variants
```

**Choose → Implement → Ship!** 🚀
