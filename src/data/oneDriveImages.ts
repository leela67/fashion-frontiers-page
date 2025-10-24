// OneDrive Image URLs Configuration
// These URLs point to images stored in the OneDrive folder structure (12 subfolders)
//
// INSTRUCTIONS TO UPDATE URLS:
// 1. Go to: https://1drv.ms/f/c/F30B5834B36E32BA/Eu8ilTuMf_lMug-pIDrggLgB3RdQGkIMkfjkCrrMJvD4nA?e=NFHGBj
// 2. For each image in the 12 subfolders:
//    - Right-click the image
//    - Select "Copy link" or "Share"
//    - Get the direct download URL
//    - Replace the placeholder URL below with the actual URL
// 3. Format: https://1drv.ms/i/c/[FOLDER_ID]/[FILE_ID]?download=1

// Hero/Carousel Images (Folders 1-3)
export const heroImages = {
  hero1: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",
  hero2: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",
  hero3: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",
};

// Collection Images (Folders 4-7)
export const collectionImages = {
  collection1: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",
  collection2: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",
  collection3: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",
  collection4: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",
};

// Category Images (Folders 8-10)
export const categoryImages = {
  categoryWomen: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",
  categoryMen: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",
  categoryCollection: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",
};

// Store/Contact Images (Folders 11-12)
export const storeImages = {
  storeImage: "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1",
};

// Logo
export const logoImage = "https://1drv.ms/i/c/F30B5834B36E32BA/EuKqL5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z?download=1";

// Export all images as a single object for easy access
export const oneDriveImages = {
  ...heroImages,
  ...collectionImages,
  ...categoryImages,
  ...storeImages,
  logo: logoImage,
};

