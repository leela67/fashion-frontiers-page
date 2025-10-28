# Color Palette Implementation Guide

## Quick Reference: How to Switch Color Palettes

This guide shows you exactly how to implement each of the 4 color palette options in your website.

---

## Current Implementation: Midnight Elegance ✨

The website currently uses the **Midnight Elegance** palette, which is recommended for luxury fashion brands.

---

## How to Switch Palettes

To change the color palette, update the `.dark` class in `src/index.css` (lines 92-139) with the values from your chosen palette below.

---

## Option 1: Midnight Elegance (Current) 🌙

**Best For:** High-end fashion, bridal collections, luxury couture  
**Mood:** Sophisticated, elegant, timeless

### Implementation (Already Applied)
```css
.dark {
  --background: 220 15% 8%;        /* Deep charcoal #121418 */
  --foreground: 40 20% 95%;        /* Warm white #F5F3EE */

  --card: 220 15% 12%;             /* Elevated surface #1A1D23 */
  --card-foreground: 40 20% 95%;   /* Warm white */

  --popover: 220 15% 12%;          /* Elevated surface */
  --popover-foreground: 40 20% 95%; /* Warm white */

  --primary: 359 66% 25%;          /* Deep burgundy #691516 */
  --primary-foreground: 40 20% 95%; /* Warm white */

  --secondary: 38 60% 79%;         /* Champagne gold #E6D7AF */
  --secondary-foreground: 220 15% 8%; /* Deep charcoal */

  --muted: 220 15% 18%;            /* Muted surface #272B33 */
  --muted-foreground: 40 10% 70%;  /* Muted text #B3AFA5 */

  --accent: 38 70% 65%;            /* Rich gold #D4B574 */
  --accent-foreground: 220 15% 8%; /* Deep charcoal */

  --destructive: 0 62% 50%;
  --destructive-foreground: 40 20% 95%;

  --border: 220 15% 20%;           /* Subtle borders #2E3239 */
  --input: 220 15% 20%;            /* Input backgrounds */
  --ring: 38 60% 79%;              /* Focus ring - champagne gold */
  
  --charcoal: 220 15% 8%;          /* Deep charcoal */
  --pearl: 220 15% 18%;            /* Pearl surface */
  
  --shadow-elegant: 0 10px 40px -10px hsl(0 0% 0% / 0.4);
  --shadow-hover: 0 20px 60px -15px hsl(0 0% 0% / 0.6);
  
  --sidebar-background: 220 15% 10%;
  --sidebar-foreground: 40 20% 95%;
  --sidebar-primary: 359 66% 25%;
  --sidebar-primary-foreground: 40 20% 95%;
  --sidebar-accent: 220 15% 15%;
  --sidebar-accent-foreground: 40 20% 95%;
  --sidebar-border: 220 15% 20%;
  --sidebar-ring: 38 60% 79%;
}
```

### Color Preview
- **Background:** Deep charcoal with warm undertones
- **Primary:** Rich burgundy (Rivaaj signature color)
- **Secondary:** Champagne gold for luxury accents
- **Accent:** Rich gold for highlights
- **Text:** Warm white for excellent readability

---

## Option 2: Noir Luxe 🖤

**Best For:** Modern fashion, contemporary collections, minimalist aesthetic  
**Mood:** Bold, modern, sleek

### Implementation
Replace the `.dark` class in `src/index.css` with:

```css
.dark {
  --background: 0 0% 5%;           /* Pure black #0D0D0D */
  --foreground: 0 0% 98%;          /* Pure white #FAFAFA */

  --card: 0 0% 10%;                /* Elevated surface #1A1A1A */
  --card-foreground: 0 0% 98%;     /* Pure white */

  --popover: 0 0% 10%;             /* Elevated surface */
  --popover-foreground: 0 0% 98%;  /* Pure white */

  --primary: 359 66% 25%;          /* Deep burgundy #691516 */
  --primary-foreground: 0 0% 98%;  /* Pure white */

  --secondary: 15 40% 65%;         /* Rose gold #C4A088 */
  --secondary-foreground: 0 0% 5%; /* Pure black */

  --muted: 0 0% 15%;               /* Muted surface #262626 */
  --muted-foreground: 0 0% 65%;    /* Muted text #A6A6A6 */

  --accent: 15 50% 70%;            /* Bright rose gold #D4B09A */
  --accent-foreground: 0 0% 5%;    /* Pure black */

  --destructive: 0 62% 50%;
  --destructive-foreground: 0 0% 98%;

  --border: 0 0% 18%;              /* Subtle borders #2E2E2E */
  --input: 0 0% 18%;               /* Input backgrounds */
  --ring: 15 40% 65%;              /* Focus ring - rose gold */
  
  --charcoal: 0 0% 5%;             /* Pure black */
  --pearl: 0 0% 15%;               /* Pearl surface */
  
  --shadow-elegant: 0 10px 40px -10px hsl(0 0% 0% / 0.5);
  --shadow-hover: 0 20px 60px -15px hsl(0 0% 0% / 0.7);
  
  --sidebar-background: 0 0% 8%;
  --sidebar-foreground: 0 0% 98%;
  --sidebar-primary: 359 66% 25%;
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent: 0 0% 12%;
  --sidebar-accent-foreground: 0 0% 98%;
  --sidebar-border: 0 0% 18%;
  --sidebar-ring: 15 40% 65%;
}
```

### Color Preview
- **Background:** Pure black for maximum contrast
- **Primary:** Deep burgundy (maintained)
- **Secondary:** Rose gold for modern luxury
- **Accent:** Bright rose gold for highlights
- **Text:** Pure white for crisp readability

---

## Option 3: Twilight Couture 🌆

**Best For:** Contemporary fashion, festival collections, bold statements  
**Mood:** Vibrant, energetic, luxurious

### Implementation
Replace the `.dark` class in `src/index.css` with:

```css
.dark {
  --background: 230 25% 10%;       /* Deep navy #131825 */
  --foreground: 40 20% 95%;        /* Warm white #F5F3EE */

  --card: 230 25% 15%;             /* Elevated surface #1C2333 */
  --card-foreground: 40 20% 95%;   /* Warm white */

  --popover: 230 25% 15%;          /* Elevated surface */
  --popover-foreground: 40 20% 95%; /* Warm white */

  --primary: 280 60% 45%;          /* Royal purple #7A3BB8 */
  --primary-foreground: 40 20% 95%; /* Warm white */

  --secondary: 180 50% 50%;        /* Teal #40BFB3 */
  --secondary-foreground: 230 25% 10%; /* Deep navy */

  --muted: 230 20% 20%;            /* Muted surface #293040 */
  --muted-foreground: 40 10% 70%;  /* Muted text #B3AFA5 */

  --accent: 340 75% 55%;           /* Vibrant pink #E63980 */
  --accent-foreground: 40 20% 95%; /* Warm white */

  --destructive: 0 62% 50%;
  --destructive-foreground: 40 20% 95%;

  --border: 230 20% 25%;           /* Subtle borders #343F54 */
  --input: 230 20% 25%;            /* Input backgrounds */
  --ring: 280 60% 45%;             /* Focus ring - royal purple */
  
  --charcoal: 230 25% 10%;         /* Deep navy */
  --pearl: 230 20% 20%;            /* Pearl surface */
  
  --shadow-elegant: 0 10px 40px -10px hsl(230 25% 0% / 0.4);
  --shadow-hover: 0 20px 60px -15px hsl(230 25% 0% / 0.6);
  
  --sidebar-background: 230 25% 12%;
  --sidebar-foreground: 40 20% 95%;
  --sidebar-primary: 280 60% 45%;
  --sidebar-primary-foreground: 40 20% 95%;
  --sidebar-accent: 230 25% 18%;
  --sidebar-accent-foreground: 40 20% 95%;
  --sidebar-border: 230 20% 25%;
  --sidebar-ring: 280 60% 45%;
}
```

### Color Preview
- **Background:** Deep navy for rich depth
- **Primary:** Royal purple for bold statements
- **Secondary:** Teal for vibrant contrast
- **Accent:** Vibrant pink for energy
- **Text:** Warm white for readability

---

## Option 4: Warehouse Pro 💼

**Best For:** Warehouse management, inventory systems, admin panels  
**Mood:** Professional, functional, clear

### Implementation
Replace the `.dark` class in `src/index.css` with:

```css
.dark {
  --background: 210 20% 12%;       /* Professional dark #1A1F28 */
  --foreground: 210 10% 95%;       /* Cool white #F0F2F5 */

  --card: 210 20% 16%;             /* Elevated surface #232A35 */
  --card-foreground: 210 10% 95%;  /* Cool white */

  --popover: 210 20% 16%;          /* Elevated surface */
  --popover-foreground: 210 10% 95%; /* Cool white */

  --primary: 210 80% 50%;          /* Professional blue #1A7FCC */
  --primary-foreground: 210 10% 95%; /* Cool white */

  --secondary: 45 90% 55%;         /* Amber warning #F5C842 */
  --secondary-foreground: 210 20% 12%; /* Professional dark */

  --muted: 210 15% 22%;            /* Muted surface #313A47 */
  --muted-foreground: 210 10% 70%; /* Muted text #B0B5BD */

  --accent: 160 60% 45%;           /* Success green #2DB87D */
  --accent-foreground: 210 10% 95%; /* Cool white */

  --destructive: 0 62% 50%;
  --destructive-foreground: 210 10% 95%;

  --border: 210 15% 28%;           /* Subtle borders #3D4754 */
  --input: 210 15% 28%;            /* Input backgrounds */
  --ring: 210 80% 50%;             /* Focus ring - professional blue */
  
  --charcoal: 210 20% 12%;         /* Professional dark */
  --pearl: 210 15% 22%;            /* Pearl surface */
  
  --shadow-elegant: 0 10px 40px -10px hsl(210 20% 0% / 0.4);
  --shadow-hover: 0 20px 60px -15px hsl(210 20% 0% / 0.6);
  
  --sidebar-background: 210 20% 14%;
  --sidebar-foreground: 210 10% 95%;
  --sidebar-primary: 210 80% 50%;
  --sidebar-primary-foreground: 210 10% 95%;
  --sidebar-accent: 210 20% 18%;
  --sidebar-accent-foreground: 210 10% 95%;
  --sidebar-border: 210 15% 28%;
  --sidebar-ring: 210 80% 50%;
}
```

### Color Preview
- **Background:** Professional dark blue-gray
- **Primary:** Professional blue for clarity
- **Secondary:** Amber for warnings/highlights
- **Accent:** Success green for positive actions
- **Text:** Cool white for professional look

---

## How to Enable Dark Theme

To activate any dark theme palette:

### Method 1: Manual Toggle (Temporary)
1. Open browser DevTools (F12)
2. Find the `<html>` tag
3. Add `class="dark"` to it
4. The dark theme will activate immediately

### Method 2: Permanent (Recommended)
Add this to your `src/App.tsx` or main layout component:

```typescript
// Add to the root element
<div className="dark min-h-screen">
  {/* Your app content */}
</div>
```

### Method 3: Theme Switcher (Future Enhancement)
Create a toggle button that adds/removes the `dark` class:

```typescript
const [isDark, setIsDark] = useState(false);

useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [isDark]);

// Toggle button
<button onClick={() => setIsDark(!isDark)}>
  {isDark ? '☀️ Light' : '🌙 Dark'}
</button>
```

---

## Comparison Table

| Feature | Midnight Elegance | Noir Luxe | Twilight Couture | Warehouse Pro |
|---------|------------------|-----------|------------------|---------------|
| **Background** | Deep charcoal | Pure black | Deep navy | Professional dark |
| **Primary** | Burgundy | Burgundy | Royal purple | Professional blue |
| **Secondary** | Champagne gold | Rose gold | Teal | Amber |
| **Accent** | Rich gold | Bright rose gold | Vibrant pink | Success green |
| **Mood** | Sophisticated | Modern | Energetic | Professional |
| **Best For** | Luxury fashion | Contemporary | Bold statements | Warehouse/Admin |
| **Contrast** | Medium-High | Very High | High | High |
| **Warmth** | Warm | Neutral | Cool | Cool |

---

## Testing Your Palette Choice

After switching palettes, test:
1. **Readability:** Text should be easily readable
2. **Contrast:** Check WCAG AA compliance (4.5:1 minimum)
3. **Brand Alignment:** Colors should match your brand identity
4. **User Preference:** Consider your target audience
5. **Accessibility:** Test with color blindness simulators

---

## Customizing Further

Want to create your own palette? Follow this structure:

```css
.dark {
  /* Base colors */
  --background: [H] [S]% [L]%;     /* Main background */
  --foreground: [H] [S]% [L]%;     /* Main text */
  
  /* Surface colors */
  --card: [H] [S]% [L]%;           /* Card backgrounds */
  --muted: [H] [S]% [L]%;          /* Muted elements */
  
  /* Brand colors */
  --primary: [H] [S]% [L]%;        /* Primary actions */
  --secondary: [H] [S]% [L]%;      /* Secondary actions */
  --accent: [H] [S]% [L]%;         /* Accents/highlights */
  
  /* Utility colors */
  --border: [H] [S]% [L]%;         /* Borders */
  --input: [H] [S]% [L]%;          /* Input fields */
  --ring: [H] [S]% [L]%;           /* Focus rings */
}
```

**Tips:**
- Keep lightness (L) values consistent within color groups
- Maintain sufficient contrast (use tools like WebAIM Contrast Checker)
- Test on multiple devices and lighting conditions
- Consider color psychology for your brand

---

## Resources

- **Color Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **HSL Color Picker:** https://hslpicker.com/
- **Coolors Palette Generator:** https://coolors.co/
- **Adobe Color:** https://color.adobe.com/

---

## Need Help?

If you need assistance choosing or customizing a palette:
1. Consider your brand identity and target audience
2. Test multiple options with real users
3. Use analytics to track user preferences
4. Refer to `DESIGN_SYSTEM.md` for detailed guidelines

---

## Quick Switch Commands

**For developers using the terminal:**

```bash
# Backup current palette
cp src/index.css src/index.css.backup

# Then manually edit src/index.css with your chosen palette
```

Remember to test thoroughly after switching palettes!

