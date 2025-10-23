# Screenshot Analysis - FeaturedCollection Reference Design

## Overview
Detailed analysis of the Falguni Shane Peacock reference site screenshot showing the "Latest Collection" section.

---

## Key Observations from Screenshot

### 1. **Layout Structure**
- **Left Column**: Text content (heading, description, button)
- **Center Column**: Large image carousel (main focus)
- **Right Column**: Smaller video element
- **Ratio**: Approximately 1:2:1 or 1:3:1 (text : image : video)

### 2. **Heading "RANG MAHAL"**
- **Position**: Top-left of the left column
- **Alignment**: LEFT-ALIGNED (NOT centered)
- **Font**: Uppercase, bold, serif font
- **Size**: Large, prominent
- **Spacing**: Significant margin below heading
- **Color**: Dark/primary color

### 3. **Description Text**
- **Position**: Below heading, left column
- **Alignment**: LEFT-ALIGNED (NOT centered)
- **Font**: Smaller than heading, sans-serif
- **Line Height**: Generous spacing between lines
- **Width**: Constrained to left column width
- **Color**: Gray/muted color
- **Spacing**: Margin below text before button

### 4. **"EXPLORE NOW" Button**
- **Position**: Below description text, left column
- **Alignment**: LEFT-ALIGNED (NOT centered)
- **Style**: Pink/primary color background
- **Text**: Uppercase, bold
- **Size**: Medium, rectangular
- **Spacing**: Positioned at bottom of left column

### 5. **Image Carousel**
- **Position**: Center, takes up majority of space
- **Size**: Large, dominant element
- **Aspect Ratio**: Tall (portrait orientation, ~3:4)
- **Navigation**: Arrows positioned ON the image (overlaid)
- **Arrow Position**: Left arrow on left edge, right arrow on right edge
- **Arrow Style**: Subtle, semi-transparent or light colored
- **Indicators**: Dots below image (if visible)

### 6. **Navigation Arrows**
- **Position**: OVERLAID ON IMAGE (not below)
- **Left Arrow**: Positioned on left edge of image, vertically centered
- **Right Arrow**: Positioned on right edge of image, vertically centered
- **Style**: Subtle, possibly semi-transparent
- **Visibility**: Should be visible but not intrusive

### 7. **Video Element**
- **Position**: Right side of image carousel
- **Size**: Smaller than image (approximately 1/3 width)
- **Aspect Ratio**: Portrait (9:16)
- **Vertical Alignment**: CENTERED with image (middle height)
- **Spacing**: Gap between image and video

### 8. **Overall Vertical Alignment**
- **Text Column**: Top-aligned (NOT centered)
- **Image Column**: Centered vertically
- **Video Column**: Centered vertically with image
- **Result**: Text starts at top, image/video are centered

---

## Current Implementation Issues

### ❌ Issue 1: Text Alignment
- **Current**: Text is vertically centered
- **Should Be**: Text should be top-aligned
- **Fix**: Change `justify-center` to `justify-start`

### ❌ Issue 2: Navigation Arrows Position
- **Current**: Arrows are positioned below the image
- **Should Be**: Arrows should be overlaid ON the image
- **Fix**: Move arrows inside image container, use absolute positioning

### ❌ Issue 3: Video Vertical Alignment
- **Current**: Video may not be properly centered with image
- **Should Be**: Video center should align with image center
- **Fix**: Ensure proper vertical centering of video

### ❌ Issue 4: Grid Alignment
- **Current**: `items-center` centers all columns
- **Should Be**: Left column top-aligned, right columns centered
- **Fix**: Use custom alignment for different columns

### ❌ Issue 5: Indicators Position
- **Current**: Indicators below image
- **Should Be**: Indicators should be below image (this is correct)
- **Status**: ✅ Correct

---

## Required Changes

### Change 1: Grid Alignment
```
FROM: items-center (centers all)
TO: items-start (aligns to top)
```

### Change 2: Left Column Alignment
```
FROM: justify-center (vertically centered)
TO: justify-start (top-aligned)
```

### Change 3: Navigation Arrows
```
FROM: Positioned below image in separate container
TO: Positioned absolutely on image edges
```

### Change 4: Flex Container Alignment
```
FROM: items-start (aligns to top)
TO: items-center (centers image and video)
```

### Change 5: Image Container
```
FROM: Regular div
TO: Relative positioned container for arrow overlay
```

---

## Pixel-Perfect Specifications

### Left Column
- Width: ~25-30% on desktop
- Alignment: Top-left
- Heading: Top-aligned, left-aligned
- Description: Left-aligned, below heading
- Button: Left-aligned, below description
- Vertical Distribution: Top-aligned (not centered)

### Image Carousel
- Width: ~45-50% on desktop
- Aspect Ratio: 3:4 (portrait)
- Alignment: Vertically centered
- Arrows: Overlaid on image, left/right edges
- Indicators: Below image

### Video Element
- Width: ~20-25% on desktop
- Aspect Ratio: 9:16 (portrait)
- Alignment: Vertically centered with image
- Position: Right of image

---

## Implementation Strategy

1. Change grid alignment from `items-center` to `items-start`
2. Change left column from `justify-center` to `justify-start`
3. Create wrapper for image carousel with relative positioning
4. Move navigation arrows inside image container with absolute positioning
5. Position arrows on left/right edges, vertically centered
6. Ensure video is vertically centered with image using flex alignment
7. Test responsive behavior on all devices

---

## Expected Result

After implementing these changes:
- ✅ Text will be top-aligned on left
- ✅ Image will be centered vertically
- ✅ Video will be centered vertically with image
- ✅ Navigation arrows will be overlaid on image
- ✅ Layout will match reference site exactly
- ✅ Responsive behavior maintained

---

**Status**: Analysis Complete - Ready for Implementation

