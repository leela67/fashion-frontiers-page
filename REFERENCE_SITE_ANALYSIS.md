# Reference Site Analysis - Latest Collection Section

## Overview
Analysis of the Falguni Shane Peacock website (https://falgunishanepeacock.in/) "Latest Collection" section to understand the design patterns and behaviors to implement in the Rivaaj Couture website.

---

## Key Observations

### 1. Section Title Positioning ("Rang Mahal")
**Current State (Rivaaj Couture)**:
- Title is positioned at the top of the section
- Centered horizontally
- Separate from the content area

**Reference Site Behavior**:
- Title appears to be **vertically centered** within the left content area
- Positioned alongside the image/video carousel
- Creates a balanced visual layout
- Title and description are grouped together on the left

**Implementation**: Move title to be vertically centered with the image carousel on the right

---

### 2. Image and Video Size Hierarchy
**Current State (Rivaaj Couture)**:
- Images and videos appear to be similar sizes
- Side-by-side layout with equal proportions

**Reference Site Behavior**:
- **Images are LARGER** (primary focus)
- **Videos are SMALLER** (secondary element)
- Clear visual hierarchy established through size difference
- Images take up more screen real estate

**Implementation**: 
- Images: Larger container (approximately 60-70% of space)
- Videos: Smaller container (approximately 30-40% of space)
- Maintain aspect ratios for both

---

### 3. Image Carousel Animation/Movement
**Current State (Rivaaj Couture)**:
- Simple fade transition between images
- Static display when not transitioning

**Reference Site Behavior**:
- Images have a **smooth carousel effect**
- Appears to have a **moment/movement** animation
- Subtle transitions that create visual interest
- Smooth fade-in/fade-out with possible scale or slide effects
- Auto-rotates through images

**Implementation**:
- Add smooth transitions (fade + subtle scale or slide)
- Maintain auto-rotation (4-5 second intervals)
- Smooth easing functions for natural motion

---

### 4. Video Autoplay Behavior
**Current State (Rivaaj Couture)**:
- Videos display with controls
- No autoplay functionality
- Manual play required

**Reference Site Behavior**:
- Videos **autoplay automatically** when section comes into viewport
- Uses intersection observer or similar scroll detection
- Plays when user scrolls to the section
- Stops/pauses when scrolled away

**Implementation**:
- Use Intersection Observer API
- Trigger autoplay when section is 50% visible
- Pause when section leaves viewport
- Maintain muted state for autoplay (browser requirement)

---

### 5. Video Controls & Volume
**Current State (Rivaaj Couture)**:
- Standard HTML5 video controls visible
- Volume control available but not prominent

**Reference Site Behavior**:
- **Volume/sound controls are visible**
- Controls appear on hover or at the end of video
- Muted by default (for autoplay)
- User can unmute to hear audio
- Clean, minimal control interface

**Implementation**:
- Keep HTML5 controls visible
- Ensure volume control is accessible
- Start videos muted (browser autoplay requirement)
- Allow user to unmute

---

## Layout Structure

### Reference Site Layout
```
┌─────────────────────────────────────────────────────┐
│ LATEST COLLECTION (Section Title)                   │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Left Column (Text)    │  Right Column (Media)     │
│  ─────────────────────┼──────────────────────────  │
│  RANG MAHAL           │  ┌──────────────────────┐  │
│  (Vertically Centered)│  │                      │  │
│                       │  │   Image Carousel     │  │
│  Description Text     │  │   (Larger - 60-70%)  │  │
│                       │  │                      │  │
│  EXPLORE NOW Button   │  ├──────────────────────┤  │
│                       │  │                      │  │
│                       │  │   Video              │  │
│                       │  │   (Smaller - 30-40%) │  │
│                       │  │                      │  │
│                       │  └──────────────────────┘  │
│                       │                            │
│                       │  Navigation Controls       │
│                       │  (Arrows, Dots)            │
│                       │                            │
└─────────────────────────────────────────────────────┘
```

---

## Animation Specifications

### Image Carousel Animation
- **Type**: Fade + Subtle Scale/Slide
- **Duration**: 700-800ms
- **Easing**: ease-in-out
- **Auto-rotate Interval**: 4-5 seconds
- **Transition**: Smooth, natural motion

### Video Autoplay
- **Trigger**: Intersection Observer (50% visibility)
- **Behavior**: Auto-play when in viewport, pause when out
- **Audio**: Muted by default (browser requirement)
- **Controls**: Visible, user can unmute

---

## Responsive Behavior

### Desktop (1024px+)
- Left column: 1/3 width (text content)
- Right column: 2/3 width (media)
- Image: 60-70% of right column
- Video: 30-40% of right column
- Title: Vertically centered with image

### Tablet (768px - 1023px)
- Left column: Full width (stacked)
- Right column: Full width (stacked)
- Image: Larger proportion
- Video: Smaller proportion
- Title: Centered or left-aligned

### Mobile (< 768px)
- Single column layout
- Image: Full width
- Video: Full width below image
- Title: Top-aligned
- Smaller font sizes
- Adjusted spacing

---

## Implementation Checklist

- [ ] Move "Rang Mahal" title to be vertically centered
- [ ] Adjust video size to be smaller than images
- [ ] Implement image carousel animation (fade + scale/slide)
- [ ] Add Intersection Observer for video autoplay
- [ ] Ensure video controls are visible
- [ ] Test responsive behavior on all devices
- [ ] Verify smooth transitions and animations
- [ ] Test video autoplay on scroll
- [ ] Verify volume controls are accessible
- [ ] Cross-browser testing

---

## Technical Notes

### Intersection Observer
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Video is in viewport - autoplay
      videoElement.play();
    } else {
      // Video is out of viewport - pause
      videoElement.pause();
    }
  });
}, { threshold: 0.5 });
```

### CSS Animations
- Use `transition` for smooth effects
- Use `transform` for GPU acceleration
- Use `opacity` for fade effects
- Avoid layout-triggering properties

---

## Browser Compatibility

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

**Note**: Autoplay with sound requires user interaction first. Videos will start muted and user can unmute.

---

**Status**: Analysis Complete - Ready for Implementation

