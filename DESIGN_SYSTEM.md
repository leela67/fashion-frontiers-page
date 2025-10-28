# Rivaaj Couture - Design System
## Dark Theme Fashion E-Commerce Design System

---

## 🎨 Color Palette Options

### Option 1: **Midnight Elegance** (Recommended for Luxury Fashion)
A sophisticated dark theme with deep burgundy accents and champagne gold highlights.

```css
/* Primary Colors */
--background: 220 15% 8%;           /* Deep charcoal #121418 */
--foreground: 40 20% 95%;           /* Warm white #F5F3EE */

/* Brand Colors */
--primary: 359 66% 25%;             /* Deep burgundy #691516 (Rivaaj signature) */
--primary-foreground: 40 20% 95%;  /* Warm white */

--secondary: 38 60% 79%;            /* Champagne gold #E6D7AF */
--secondary-foreground: 220 15% 8%; /* Deep charcoal */

/* Accent & Highlights */
--accent: 38 70% 65%;               /* Rich gold #D4B574 */
--accent-foreground: 220 15% 8%;   /* Deep charcoal */

/* Surface Colors */
--card: 220 15% 12%;                /* Elevated surface #1A1D23 */
--card-foreground: 40 20% 95%;     /* Warm white */

--muted: 220 15% 18%;               /* Muted surface #272B33 */
--muted-foreground: 40 10% 70%;    /* Muted text #B3AFA5 */

/* Borders & Inputs */
--border: 220 15% 20%;              /* Subtle borders #2E3239 */
--input: 220 15% 20%;               /* Input backgrounds */
--ring: 38 60% 79%;                 /* Focus ring - champagne gold */
```

**Best For:** High-end fashion, bridal collections, luxury couture
**Mood:** Sophisticated, elegant, timeless

---

### Option 2: **Noir Luxe** (Modern Dark Fashion)
A pure black theme with rose gold accents for contemporary luxury.

```css
/* Primary Colors */
--background: 0 0% 5%;              /* Pure black #0D0D0D */
--foreground: 0 0% 98%;             /* Pure white #FAFAFA */

/* Brand Colors */
--primary: 359 66% 25%;             /* Deep burgundy #691516 */
--primary-foreground: 0 0% 98%;    /* Pure white */

--secondary: 15 40% 65%;            /* Rose gold #C4A088 */
--secondary-foreground: 0 0% 5%;   /* Pure black */

/* Accent & Highlights */
--accent: 15 50% 70%;               /* Bright rose gold #D4B09A */
--accent-foreground: 0 0% 5%;      /* Pure black */

/* Surface Colors */
--card: 0 0% 10%;                   /* Elevated surface #1A1A1A */
--card-foreground: 0 0% 98%;       /* Pure white */

--muted: 0 0% 15%;                  /* Muted surface #262626 */
--muted-foreground: 0 0% 65%;      /* Muted text #A6A6A6 */

/* Borders & Inputs */
--border: 0 0% 18%;                 /* Subtle borders #2E2E2E */
--input: 0 0% 18%;                  /* Input backgrounds */
--ring: 15 40% 65%;                 /* Focus ring - rose gold */
```

**Best For:** Modern fashion, contemporary collections, minimalist aesthetic
**Mood:** Bold, modern, sleek

---

### Option 3: **Twilight Couture** (Vibrant Dark Theme)
A dark navy theme with vibrant jewel tones for a colorful yet elegant look.

```css
/* Primary Colors */
--background: 230 25% 10%;          /* Deep navy #131825 */
--foreground: 40 20% 95%;           /* Warm white #F5F3EE */

/* Brand Colors */
--primary: 280 60% 45%;             /* Royal purple #7A3BB8 */
--primary-foreground: 40 20% 95%;  /* Warm white */

--secondary: 180 50% 50%;           /* Teal #40BFB3 */
--secondary-foreground: 230 25% 10%; /* Deep navy */

/* Accent & Highlights */
--accent: 340 75% 55%;              /* Vibrant pink #E63980 */
--accent-foreground: 40 20% 95%;   /* Warm white */

/* Surface Colors */
--card: 230 25% 15%;                /* Elevated surface #1C2333 */
--card-foreground: 40 20% 95%;     /* Warm white */

--muted: 230 20% 20%;               /* Muted surface #293040 */
--muted-foreground: 40 10% 70%;    /* Muted text #B3AFA5 */

/* Borders & Inputs */
--border: 230 20% 25%;              /* Subtle borders #343F54 */
--input: 230 20% 25%;               /* Input backgrounds */
--ring: 280 60% 45%;                /* Focus ring - royal purple */
```

**Best For:** Contemporary fashion, festival collections, bold statements
**Mood:** Vibrant, energetic, luxurious

---

### Option 4: **Warehouse Pro** (Professional Dark Theme)
A balanced dark theme optimized for warehouse/inventory management with excellent readability.

```css
/* Primary Colors */
--background: 210 20% 12%;          /* Professional dark #1A1F28 */
--foreground: 210 10% 95%;          /* Cool white #F0F2F5 */

/* Brand Colors */
--primary: 210 80% 50%;             /* Professional blue #1A7FCC */
--primary-foreground: 210 10% 95%; /* Cool white */

--secondary: 45 90% 55%;            /* Amber warning #F5C842 */
--secondary-foreground: 210 20% 12%; /* Professional dark */

/* Accent & Highlights */
--accent: 160 60% 45%;              /* Success green #2DB87D */
--accent-foreground: 210 10% 95%;  /* Cool white */

/* Surface Colors */
--card: 210 20% 16%;                /* Elevated surface #232A35 */
--card-foreground: 210 10% 95%;    /* Cool white */

--muted: 210 15% 22%;               /* Muted surface #313A47 */
--muted-foreground: 210 10% 70%;   /* Muted text #B0B5BD */

/* Borders & Inputs */
--border: 210 15% 28%;              /* Subtle borders #3D4754 */
--input: 210 15% 28%;               /* Input backgrounds */
--ring: 210 80% 50%;                /* Focus ring - professional blue */
```

**Best For:** Warehouse management, inventory systems, admin panels
**Mood:** Professional, functional, clear

---

## 📝 Typography System

### Font Pairings

#### Option 1: **Classic Elegance** (Current - Recommended)
- **Headings:** Playfair Display (Serif) - Elegant, high-contrast
- **Body:** Roboto (Sans-serif) - Clean, readable
- **Accent:** Crimson Text (Serif) - Editorial feel

#### Option 2: **Modern Luxury**
- **Headings:** Cormorant Garamond (Serif) - Refined, sophisticated
- **Body:** Inter (Sans-serif) - Modern, versatile
- **Accent:** Cinzel (Serif) - Luxury, classical

#### Option 3: **Contemporary Fashion**
- **Headings:** Bodoni Moda (Serif) - Fashion-forward, bold
- **Body:** Work Sans (Sans-serif) - Geometric, clean
- **Accent:** Italiana (Serif) - Stylish, distinctive

### Typography Scale
```css
/* Display */
--text-display: 72px / 1.1;
--text-display-weight: 700;

/* Headings */
--text-h1: 48px / 1.2;
--text-h2: 36px / 1.3;
--text-h3: 28px / 1.4;
--text-h4: 24px / 1.4;
--text-h5: 20px / 1.5;
--text-h6: 18px / 1.5;

/* Body */
--text-body-lg: 18px / 1.6;
--text-body: 16px / 1.6;
--text-body-sm: 14px / 1.6;

/* UI */
--text-caption: 12px / 1.5;
--text-overline: 11px / 1.5;
```

---

## 📐 Spacing System (Reduced Whitespace)

### Spacing Scale
```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
```

### Component Spacing Guidelines
- **Section Padding:** Reduce from 6rem to 3rem (mobile) and 8rem to 4rem (desktop)
- **Card Padding:** Reduce from 2rem to 1.5rem
- **Grid Gaps:** Reduce from 2rem to 1rem (mobile) and 3rem to 1.5rem (desktop)
- **Container Max Width:** Keep at 1400px but reduce side padding

---

## 🎭 Shadows & Effects

```css
/* Elevation System */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

/* Luxury Shadows (for dark theme) */
--shadow-luxury: 0 10px 40px -10px rgb(0 0 0 / 0.4);
--shadow-luxury-hover: 0 20px 60px -15px rgb(0 0 0 / 0.6);

/* Glow Effects */
--glow-gold: 0 0 20px rgb(230 215 175 / 0.3);
--glow-primary: 0 0 20px rgb(105 21 22 / 0.3);
```

---

## 🔄 Transitions & Animations

```css
/* Timing Functions */
--ease-elegant: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Durations */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 700ms;
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

---

## 🎯 Implementation Recommendations

1. **Start with Option 1 (Midnight Elegance)** - Best balance for fashion + warehouse
2. **Reduce all section padding by 40-50%** to maximize screen real estate
3. **Implement mobile-first responsive design** throughout
4. **Use the existing font pairing** (Playfair Display + Roboto) - it's already excellent
5. **Add smooth transitions** to all interactive elements
6. **Implement proper focus states** for accessibility
7. **Use CSS custom properties** for easy theme switching

---

## 🚀 Quick Implementation Guide

1. Update `src/index.css` with chosen color palette
2. Adjust spacing variables in components
3. Test on mobile devices first
4. Ensure proper contrast ratios (WCAG AA minimum)
5. Add theme switcher for multiple palette options (future enhancement)

