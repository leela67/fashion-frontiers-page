# Rivaaj Couture - Theme System

## Overview

This directory contains **4 standalone luxury theme variations** for the Rivaaj Couture fashion e-commerce website. Each theme is a complete, self-contained CSS file with all design tokens (colors, typography, gradients, shadows, etc.).

---

## 🎨 Available Themes

### 1. **Rivaaj Heritage** (Official Brand Theme) [DARK] ⭐
**File:** `rivaaj-heritage.css`

**Color Palette:**
- Primary: Deep Burgundy (#691516) - **Official Rivaaj Brand Color**
- Secondary: Champagne Gold (#E6D7AF) - **Official Luxury Accent**
- Background: Deep Warm Charcoal (#1F1815)

**Typography:**
- Headings: Cormorant Garamond (refined elegance with heritage feel)
- Body: Lora (readable serif with warmth and sophistication)

**Personality:**
- Authentic, heritage-focused, timeless
- Represents the rich cultural legacy of South Asian couture
- Sophisticated elegance with traditional roots
- **This is the official brand representation theme**

**Best For:**
- Official brand representation
- Signature collections
- Heritage and bridal lines
- Year-round primary theme
- When you want to showcase authentic Rivaaj brand identity

---

### 2. **Midnight Opulence** [DARK]
**File:** `midnight-opulence.css`

**Color Palette:**
- Primary: Deep Sapphire Blue (#0A1628)
- Secondary: Antique Gold (#D4AF37)
- Background: Deep Navy (#0F1419)

**Typography:**
- Headings: Playfair Display (elegant, sophisticated serif)
- Body: Inter (modern, clean sans-serif)

**Personality:**
- Sophisticated, mysterious, regal
- Inspired by night sky over Taj Mahal and royal Indian palaces
- Perfect for premium evening wear, bridal collections, VIP experiences

---

### 3. **Saffron Luxe** [LIGHT]
**File:** `saffron-luxe.css`

**Color Palette:**
- Primary: Saffron Gold (#E6A23C)
- Secondary: Deep Terracotta (#A0522D)
- Background: Warm Ivory (#F5F0E8)

**Typography:**
- Headings: Cormorant Garamond (refined, elegant serif)
- Body: Outfit (geometric, modern sans-serif)

**Personality:**
- Vibrant, celebratory, culturally rich
- Inspired by Indian weddings, marigold garlands, golden hour
- Ideal for festive collections, wedding season, daytime browsing

---

### 4. **Regal Noir** [DARK]
**File:** `regal-noir.css`

**Color Palette:**
- Primary: Deep Burgundy (#6B1B29)
- Secondary: Rose Gold (#B76E79)
- Background: Rich Charcoal/Black (#1A1A1A)

**Typography:**
- Headings: Cinzel (classical Roman serif, ultra-luxurious)
- Body: Raleway (elegant, refined sans-serif)

**Personality:**
- Bold, dramatic, ultra-luxurious
- Inspired by black diamonds, haute couture runways, metropolitan luxury
- Best for exclusive collections, high-fashion editorials, statement pieces

---

## 🔄 How to Switch Themes

### Method: Change the Import Statement

1. Open `src/index.css`
2. Find line 23 (the theme import line):
   ```css
   /* Import Active Theme - Change this line to switch themes */
   @import './themes/saffron-luxe.css';
   ```
3. Replace with your desired theme:
   ```css
   /* For Rivaaj Heritage (Official Brand Theme - RECOMMENDED) */
   @import './themes/rivaaj-heritage.css';

   /* For Midnight Opulence (Dark) */
   @import './themes/midnight-opulence.css';

   /* For Saffron Luxe (Light) */
   @import './themes/saffron-luxe.css';

   /* For Regal Noir (Dark) */
   @import './themes/regal-noir.css';
   ```
4. Save the file - Vite will hot-reload automatically

---

## 📋 What's Included in Each Theme

Each theme file contains complete definitions for:

✅ **Core Colors**
- Background, foreground, card, popover colors
- Primary, secondary, accent colors with hover states
- Neutral colors (muted, charcoal, pearl)
- UI elements (border, input, ring, destructive)

✅ **Semantic Colors**
- Overlay colors (light, dark, primary)
- Header colors (bg, transparent, scrolled, text)
- Hero section colors (overlay, text)
- Button colors (primary, secondary with hover states)

✅ **Typography System**
- Font family tokens (heading, body, display, accent)
- Legacy font names for backward compatibility
- Complete typography scale (xs to 9xl)

✅ **Visual Effects**
- Luxury gradients (luxury, gold, hero, overlay variants)
- Shadow system (elegant, hover, soft)
- Transition presets (smooth, elegant, fast)

✅ **Layout Tokens**
- Spacing system (xs to 3xl)
- Border radius scale (sm to full)
- Sidebar component colors

---

## 🎯 Recommended Usage Strategy

### **Default Theme: Rivaaj Heritage** ⭐
**Use as your primary theme** for official brand representation and year-round collections. This theme uses the official Rivaaj Couture brand colors (Deep Burgundy #691516 and Champagne Gold #E6D7AF) and should be your go-to choice for:
- Main website presence
- Signature collections
- Heritage and bridal lines
- Official brand communications

### **Alternative Themes for Variety:**

**Midnight Opulence** - Use for:
- Premium evening wear collections
- VIP customer experiences
- Luxury showcases

**Saffron Luxe** - Switch during:
- Wedding season (October-March in India)
- Festive periods (Diwali, Eid, Holi, etc.)
- Daytime events and trunk shows
- Spring/Summer collections

**Regal Noir** - Use for:
- Exclusive collection launches
- High-fashion editorial content
- Evening wear showcases
- Fall/Winter collections

---

## 🛠️ Technical Details

### File Structure
```
src/
├── index.css              # Main CSS file with theme import
└── themes/
    ├── midnight-opulence.css
    ├── saffron-luxe.css
    ├── regal-noir.css
    └── README.md          # This file
```

### CSS Variables Format
All colors use HSL format for consistency:
```css
--primary: 215 60% 10%;  /* HSL without hsl() wrapper */
```

This format is required by the Tailwind CSS configuration.

### Font Loading
All fonts are loaded via Google Fonts in `src/index.css`:
- Playfair Display
- Inter
- Cormorant Garamond
- Outfit
- Cinzel
- Raleway

---

## 🎨 Design Philosophy

### Color Theory

**Midnight Opulence (Sapphire + Gold)**
- Sapphire blue = Trust, royalty, depth
- Antique gold = Luxury, heritage, warmth
- Combination = Timeless elegance with cultural resonance

**Saffron Luxe (Saffron + Terracotta)**
- Saffron = Sacred, auspicious, celebratory (deeply Indian)
- Terracotta = Earthy, authentic, grounded
- Combination = Cultural authenticity meets modern luxury

**Regal Noir (Burgundy + Rose Gold)**
- Deep burgundy = Power, sophistication, drama
- Rose gold = Modern luxury, femininity, elegance
- Black background = Maximum contrast, editorial feel
- Combination = High-fashion drama with contemporary luxury

---

## 📊 Theme Comparison

| Theme | Mood | Best For | Time of Day | Season |
|-------|------|----------|-------------|---------|
| **Rivaaj Heritage** ⭐ | Authentic, Timeless | Official brand, Heritage | All day | Year-round |
| **Midnight Opulence** | Sophisticated, Exclusive | Premium collections, VIP | Evening | Year-round |
| **Saffron Luxe** | Warm, Celebratory | Festive wear, Weddings | Daytime | Wedding season |
| **Regal Noir** | Dramatic, Editorial | Exclusive launches | Evening | Year-round |

---

## 🚀 Testing Themes

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Change the theme import** in `src/index.css` (line 23):
   ```css
   /* For Rivaaj Heritage (Official Brand - RECOMMENDED) */
   @import './themes/rivaaj-heritage.css';

   /* For Midnight Opulence */
   @import './themes/midnight-opulence.css';

   /* For Saffron Luxe (currently active) */
   @import './themes/saffron-luxe.css';

   /* For Regal Noir */
   @import './themes/regal-noir.css';
   ```

3. **View the changes** at http://localhost:8081/fashion-frontiers-page/

4. **Test all pages:**
   - Homepage with hero carousel
   - Featured collections
   - Category explorer
   - Contact section
   - Footer

---

## 💡 Tips

- **A/B Testing**: Deploy different themes to different URLs to test customer preferences
- **Seasonal Campaigns**: Schedule theme changes to align with cultural events
- **Brand Consistency**: Stick to one theme for at least a season to build brand recognition
- **Performance**: Only one theme is loaded at a time, ensuring optimal performance

---

## 🔧 Customization

To customize a theme:

1. **Copy the theme file** you want to modify
2. **Edit the CSS variables** in the `:root` selector
3. **Update the import** in `src/index.css` to point to your custom theme
4. **Test thoroughly** across all components

All components automatically use the CSS variables, so changes propagate instantly.

---

## 📝 Notes

- All themes are production-ready
- No JavaScript required for theme switching
- Fully compatible with Tailwind CSS
- Mobile-responsive and optimized for luxury e-commerce
- Designed specifically for South Asian fashion market

---

**Created for Rivaaj Couture** - Luxury South Asian Fashion E-Commerce

