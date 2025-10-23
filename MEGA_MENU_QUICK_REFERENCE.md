# Mega Menu - Quick Reference Guide

## 🚀 Quick Start

The mega menu is fully integrated and ready to use. No additional setup required!

## 📝 How to Modify

### Add a New Menu Item

Edit `src/data/megaMenuData.ts`:

```typescript
{
  label: "New Category",
  href: "#new-category",
  hasDropdown: true,
  carouselImages: [image1, image2, image3],
  categories: [
    { label: "Subcategory 1", href: "#sub1" },
    { label: "Subcategory 2", href: "#sub2" },
  ],
  collections: [
    { label: "Collection 1", href: "#col1" },
    { label: "Collection 2", href: "#col2" },
  ],
}
```

### Change Carousel Speed

In `src/components/MegaMenuContent.tsx`:

```typescript
<MegaMenuCarousel 
  images={menuItem.carouselImages} 
  autoPlayInterval={3000}  // Change from 4000 to 3000 (milliseconds)
/>
```

### Update Carousel Images

In `src/data/megaMenuData.ts`:

```typescript
import newImage from "@/assets/new-image.jpg";

carouselImages: [newImage, image2, image3, image4],
```

### Customize Styling

All components use Tailwind CSS classes. Edit directly in component files:

- **MegaMenuCarousel.tsx**: Image sizing, arrow styling, indicators
- **MegaMenuSection.tsx**: Typography, spacing, hover effects
- **MegaMenuContent.tsx**: Layout, grid columns, padding
- **MegaMenu.tsx**: Link styling, dropdown positioning

## 🎯 Common Tasks

### Hide a Menu Item

Set `hasDropdown: false` in megaMenuData.ts:

```typescript
{
  label: "About",
  href: "#about",
  hasDropdown: false,  // No mega menu
  carouselImages: [],
  categories: [],
  collections: [],
}
```

### Change Link Colors on Hover

Edit `MegaMenuSection.tsx`:

```typescript
className="... hover:text-primary ..."  // Change 'primary' to another color
```

### Adjust Carousel Height

Edit `MegaMenuCarousel.tsx`:

```typescript
className="... h-48 lg:h-56 ..."  // Change h-48 and h-56 values
```

### Modify Grid Layout

Edit `MegaMenuContent.tsx`:

```typescript
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* Change grid-cols-1 and lg:grid-cols-3 for different layouts */}
</div>
```

## 🔧 Component Props

### MegaMenu
```typescript
interface MegaMenuProps {
  navLinks: MegaMenuCategory[];
}
```

### MegaMenuCarousel
```typescript
interface MegaMenuCarouselProps {
  images: string[];
  autoPlayInterval?: number;  // Default: 4000ms
}
```

### MegaMenuContent
```typescript
interface MegaMenuContentProps {
  menuItem: MegaMenuCategory;
}
```

### MegaMenuSection
```typescript
interface MegaMenuSectionProps {
  title: string;
  items: Array<{ label: string; href: string }>;
  showViewAll?: boolean;
  viewAllHref?: string;
}
```

## 📊 Data Structure

```typescript
interface MegaMenuCategory {
  label: string;                    // "Collections"
  href: string;                     // "#collections"
  hasDropdown: boolean;             // true
  carouselImages: string[];         // [img1, img2, ...]
  categories: Array<{               // Subcategories
    label: string;
    href: string;
  }>;
  collections: Array<{              // Collections
    label: string;
    href: string;
  }>;
}
```

## 🎨 Styling Classes

### Navigation Link
```typescript
"font-darker-grotesque text-sm font-medium tracking-wide uppercase"
```

### Hover Effects
```typescript
"hover:text-primary transition-colors duration-300"
```

### Active State
```typescript
"text-primary" // Applied when link is active
```

### Carousel Container
```typescript
"relative w-full h-48 lg:h-56 overflow-hidden rounded-sm bg-gray-100"
```

## 🐛 Troubleshooting

### Carousel not auto-playing
- Check `autoPlayInterval` prop in MegaMenuContent.tsx
- Verify images array is not empty
- Check browser console for errors

### Dropdown not appearing
- Ensure `hasDropdown: true` in megaMenuData.ts
- Check z-index values (should be z-50)
- Verify hover event is triggering

### Images not loading
- Check image paths in megaMenuData.ts
- Verify images exist in `src/assets/`
- Check browser network tab for 404 errors

### Styling not applying
- Clear browser cache
- Rebuild project: `npm run build`
- Check Tailwind CSS configuration

## 📱 Responsive Behavior

- **Mobile (< 768px)**: Accordion-style dropdown
- **Tablet (768px - 1024px)**: Simplified layout
- **Desktop (> 1024px)**: Full mega menu with carousel

## ⚡ Performance Tips

1. **Optimize Images**: Use compressed images for carousel
2. **Lazy Load**: Images load on demand
3. **Debounce**: Hover events are debounced
4. **CSS Transforms**: Animations use GPU acceleration

## 🔗 Related Files

- `src/components/Header.tsx` - Main header component
- `src/data/megaMenuData.ts` - Menu data configuration
- `src/components/MegaMenu.tsx` - Navigation component
- `src/components/MegaMenuContent.tsx` - Dropdown content
- `src/components/MegaMenuCarousel.tsx` - Image carousel
- `src/components/MegaMenuSection.tsx` - Category/collection section

## 📚 Documentation

- `MEGA_MENU_IMPLEMENTATION_PLAN.md` - Detailed implementation plan
- `MEGA_MENU_IMPLEMENTATION_SUMMARY.md` - Complete summary
- `MEGA_MENU_FILE_STRUCTURE.md` - File structure and dependencies

## ✅ Testing Checklist

- [ ] Hover over menu items on desktop
- [ ] Carousel auto-rotates
- [ ] Navigation arrows work
- [ ] Slide indicators work
- [ ] Links navigate correctly
- [ ] Mobile menu opens/closes
- [ ] Mobile categories expand/collapse
- [ ] Responsive on all screen sizes
- [ ] No console errors
- [ ] Build completes successfully

## 🎯 Next Steps

1. Replace placeholder images with real product images
2. Update href values to point to actual pages
3. Customize colors and styling to match brand
4. Add analytics tracking
5. Test on real devices
6. Deploy to production

