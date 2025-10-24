# OneDrive Image URLs - Update Guide

## 📍 OneDrive Folder Location
https://1drv.ms/f/c/F30B5834B36E32BA/Eu8ilTuMf_lMug-pIDrggLgB3RdQGkIMkfjkCrrMJvD4nA?e=NFHGBj

## 📋 Images to Update

### Hero Images (Folders 1-3)
Located in: `src/data/oneDriveImages.ts`

```typescript
export const heroImages = {
  hero1: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",  // Replace with Folder 1 image
  hero2: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",  // Replace with Folder 2 image
  hero3: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",  // Replace with Folder 3 image
};
```

**Used in:**
- HeroCarousel (main homepage carousel)
- ImageGallery (moodboard section)

### Collection Images (Folders 4-7)
Located in: `src/data/oneDriveImages.ts`

```typescript
export const collectionImages = {
  collection1: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",  // Folder 4
  collection2: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",  // Folder 5
  collection3: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",  // Folder 6
  collection4: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",  // Folder 7
};
```

**Used in:**
- FeaturedCollection (featured collections carousel)
- CategoryExplorer (collection explorer section)
- Mega Menu carousels (Shop, Shop Women, Shop Men)

### Category Images (Folders 8-10)
Located in: `src/data/oneDriveImages.ts`

```typescript
export const categoryImages = {
  categoryWomen: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",  // Folder 8
  categoryMen: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",    // Folder 9
  categoryCollection: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1", // Folder 10
};
```

**Used in:**
- Mega Menu carousels (Shop Women, Shop Men)

### Store/Contact Images (Folders 11-12)
Located in: `src/data/oneDriveImages.ts`

```typescript
export const storeImages = {
  storeImage: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",  // Folder 11 or 12
};
```

**Used in:**
- ContactSection (store image on contact page)

### Logo
Located in: `src/data/oneDriveImages.ts`

```typescript
export const logoImage = "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1";  // Folder 12
```

**Used in:**
- Header (navigation logo)

## 🔗 How to Get Direct Download URLs

1. **Open OneDrive Folder:**
   - Go to: https://1drv.ms/f/c/F30B5834B36E32BA/Eu8ilTuMf_lMug-pIDrggLgB3RdQGkIMkfjkCrrMJvD4nA?e=NFHGBj

2. **For Each Image:**
   - Right-click on the image
   - Select "Copy link" or "Share"
   - Choose "Copy link" option
   - The URL will be in format: `https://1drv.ms/i/c/[FOLDER_ID]/[FILE_ID]`

3. **Add Download Parameter:**
   - Append `?download=1` to the end of the URL
   - Final format: `https://1drv.ms/i/c/[FOLDER_ID]/[FILE_ID]?download=1`

4. **Update in Code:**
   - Replace the placeholder URL in `src/data/oneDriveImages.ts`
   - Save the file
   - Run `npm run build` to verify

## ✅ Verification Checklist

- [ ] All 3 hero images updated
- [ ] All 4 collection images updated
- [ ] All 3 category images updated
- [ ] Store image updated
- [ ] Logo image updated
- [ ] Build completes successfully
- [ ] Images display correctly in browser
- [ ] Mega menu carousels show images
- [ ] Hero carousel rotates properly
- [ ] Contact page displays store image

## 📝 Notes

- URLs must include `?download=1` parameter for proper display
- Test images in different browsers to ensure compatibility
- Images should be optimized for web (compressed)
- Recommended image sizes:
  - Hero images: 1920x1080px or larger
  - Collection images: 800x1000px or larger
  - Category images: 800x1000px or larger
  - Store image: 1200x800px or larger
  - Logo: 300x300px or larger

