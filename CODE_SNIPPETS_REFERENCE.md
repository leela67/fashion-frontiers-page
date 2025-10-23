# Code Snippets Reference

## Quick Code Examples

### 1. Using the Mega Menu in Header

```typescript
import MegaMenu from "@/components/MegaMenu";
import { megaMenuData } from "@/data/megaMenuData";

// In your Header component:
<MegaMenu navLinks={megaMenuData} />
```

### 2. Adding a New Menu Item

```typescript
// In src/data/megaMenuData.ts
{
  label: "New Category",
  href: "#new-category",
  hasDropdown: true,
  carouselImages: [image1, image2, image3, image4],
  categories: [
    { label: "Sub 1", href: "#sub1" },
    { label: "Sub 2", href: "#sub2" },
  ],
  collections: [
    { label: "Col 1", href: "#col1" },
    { label: "Col 2", href: "#col2" },
  ],
}
```

### 3. Customizing Carousel Speed

```typescript
// In MegaMenuContent.tsx
<MegaMenuCarousel 
  images={menuItem.carouselImages} 
  autoPlayInterval={3000}  // 3 seconds instead of 4
/>
```

### 4. Changing Carousel Height

```typescript
// In MegaMenuCarousel.tsx
<div className="... h-40 lg:h-64 ...">
  {/* Adjust h-40 and h-64 for different heights */}
</div>
```

### 5. Modifying Link Hover Color

```typescript
// In MegaMenuSection.tsx
className="... hover:text-accent ..."  // Change 'primary' to 'accent'
```

### 6. Adjusting Grid Layout

```typescript
// In MegaMenuContent.tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Change grid-cols values for different layouts */}
</div>
```

### 7. Hiding a Menu Item

```typescript
// In megaMenuData.ts
{
  label: "About",
  href: "#about",
  hasDropdown: false,  // No mega menu
  carouselImages: [],
  categories: [],
  collections: [],
}
```

### 8. Changing Animation Duration

```typescript
// In MegaMenu.tsx
className="... transition-all duration-500 ..."  // Change 300 to 500
```

### 9. Updating Carousel Images

```typescript
// In megaMenuData.ts
import newImage from "@/assets/new-image.jpg";

carouselImages: [newImage, image2, image3, image4],
```

### 10. Customizing Section Title

```typescript
// In MegaMenuSection.tsx
<h3 className="font-darker-grotesque text-xs font-bold tracking-widest uppercase">
  {title}
</h3>
```

## Component Props Reference

### MegaMenu Props
```typescript
interface MegaMenuProps {
  navLinks: MegaMenuCategory[];
}
```

### MegaMenuCarousel Props
```typescript
interface MegaMenuCarouselProps {
  images: string[];
  autoPlayInterval?: number;  // milliseconds, default: 4000
}
```

### MegaMenuContent Props
```typescript
interface MegaMenuContentProps {
  menuItem: MegaMenuCategory;
}
```

### MegaMenuSection Props
```typescript
interface MegaMenuSectionProps {
  title: string;
  items: Array<{ label: string; href: string }>;
  showViewAll?: boolean;
  viewAllHref?: string;
}
```

## Data Structure Reference

### MegaMenuCategory Interface
```typescript
interface MegaMenuCategory {
  label: string;                    // "Collections"
  href: string;                     // "#collections"
  hasDropdown: boolean;             // true/false
  carouselImages: string[];         // [img1, img2, ...]
  categories: Array<{
    label: string;
    href: string;
  }>;
  collections: Array<{
    label: string;
    href: string;
  }>;
}
```

## Tailwind CSS Classes Used

### Layout
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- `flex items-center justify-between`
- `relative group`

### Sizing
- `h-48 lg:h-56` (carousel height)
- `w-full max-w-6xl` (content width)
- `w-screen` (full width dropdown)

### Spacing
- `gap-8` (grid gap)
- `px-6 py-8` (padding)
- `mt-4` (margin top)

### Colors
- `bg-white` (background)
- `text-foreground` (text)
- `hover:text-primary` (hover state)
- `bg-primary` (button)

### Transitions
- `transition-all duration-300` (smooth transitions)
- `transition-opacity duration-500` (fade effect)
- `transition-transform` (rotation)

### Responsive
- `hidden lg:flex` (desktop only)
- `lg:hidden` (mobile only)
- `md:grid-cols-2` (tablet)
- `lg:grid-cols-3` (desktop)

## Common Modifications

### Change Primary Color
```typescript
// In tailwind.config.ts or index.css
--primary: 359 66% 25%;  // Change HSL values
```

### Adjust Spacing
```typescript
// In component files
className="gap-4"  // Change gap-8 to gap-4
className="px-4"   // Change px-6 to px-4
```

### Modify Typography
```typescript
// In component files
className="text-sm"  // Change text size
className="font-bold"  // Change font weight
```

### Update Breakpoints
```typescript
// In component files
className="md:grid-cols-2"  // Change breakpoint
className="lg:h-56"  // Change breakpoint
```

## Debugging Tips

### Check Carousel Images
```typescript
console.log(menuItem.carouselImages);  // Verify images array
```

### Verify Hover State
```typescript
console.log(activeLink);  // Check active link
console.log(isDropdownOpen);  // Check dropdown state
```

### Test Responsive
```typescript
// Use browser DevTools to test different screen sizes
// Mobile: 375px, Tablet: 768px, Desktop: 1024px+
```

### Check Build
```bash
npm run build  # Verify no errors
npm run dev    # Test in development
```

## Performance Optimization

### Lazy Load Images
```typescript
// Images are already lazy-loaded via Tailwind
// No additional configuration needed
```

### Optimize Animations
```typescript
// Use CSS transforms for better performance
transform: translateX(0);  // Better than left: 0;
```

### Debounce Events
```typescript
// Hover events are already debounced via group-hover
// No additional configuration needed
```

## Accessibility Features

### ARIA Labels
```typescript
<button aria-label="Previous slide">
  <ChevronLeft />
</button>
```

### Semantic HTML
```typescript
<nav>  {/* Navigation */}
<button>  {/* Interactive elements */}
<a href="#">  {/* Links */}
```

### Keyboard Navigation
```typescript
// All interactive elements are keyboard accessible
// Tab through navigation items
// Enter to activate
```

