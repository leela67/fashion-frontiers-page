// Menu Builder Utility - Converts API categories to MegaMenu structure
import { ApiCategory } from "@/services/api";
import { MegaMenuCategory } from "@/data/megaMenuData";
import collectionImg1 from "@/assets/collection-1.jpg";
import collectionImg2 from "@/assets/collection-2.jpg";
import collectionImg3 from "@/assets/collection-3.jpg";
import collectionImg4 from "@/assets/collection-4.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryCollection from "@/assets/category-collection.jpg";

/**
 * Build dynamic mega menu structure from API categories
 * @param categories - Array of API categories
 * @returns Array of MegaMenuCategory objects
 */
export function buildMegaMenuFromCategories(categories: ApiCategory[]): MegaMenuCategory[] {
  // Group categories by type and gender
  const clothingCategories = categories.filter((cat) => cat.category_type === "CLOTHING");
  const occasionCategories = categories.filter((cat) => cat.category_type === "OCCASION");
  const collectionCategories = categories.filter((cat) => cat.category_type === "COLLECTION");

  // Women's categories
  const womenClothing = clothingCategories
    .filter((cat) => cat.gender === "WOMEN" || cat.gender === "UNISEX")
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}&type=clothing`,
    }));

  const womenOccasions = occasionCategories
    .filter((cat) => cat.gender === "WOMEN" || cat.gender === "UNISEX")
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}&type=occasion`,
    }));

  const womenCollections = collectionCategories
    .filter((cat) => cat.gender === "WOMEN" || cat.gender === "UNISEX")
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}&type=collection`,
    }));

  // Men's categories
  const menClothing = clothingCategories
    .filter((cat) => cat.gender === "MEN" || cat.gender === "UNISEX")
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}&type=clothing`,
    }));

  const menOccasions = occasionCategories
    .filter((cat) => cat.gender === "MEN" || cat.gender === "UNISEX")
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}&type=occasion`,
    }));

  const menCollections = collectionCategories
    .filter((cat) => cat.gender === "MEN" || cat.gender === "UNISEX")
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}&type=collection`,
    }));

  // All collections (for Collections menu) - no gender filter
  const allClothingCategories = clothingCategories
    .filter((cat) => cat.is_active)
    .sort((a, b) => a.sort_order - b.sort_order)
    .slice(0, 6) // Limit to 6 items
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}`,
    }));

  const allOccasionCategories = occasionCategories
    .filter((cat) => cat.is_active)
    .sort((a, b) => a.sort_order - b.sort_order)
    .slice(0, 6) // Limit to 6 items
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}`,
    }));

  const allCollectionCategories = collectionCategories
    .filter((cat) => cat.is_active)
    .sort((a, b) => a.sort_order - b.sort_order)
    .slice(0, 6) // Limit to 6 items
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}`,
    }));

  // Build the mega menu structure
  const megaMenu: MegaMenuCategory[] = [
    {
      label: "Collections",
      href: "/products",
      hasDropdown: true,
      carouselImages: [collectionImg1, collectionImg2, collectionImg3, collectionImg4],
      categories: allClothingCategories,
      occasions: allOccasionCategories,
      collections: allCollectionCategories,
    },
    {
      label: "Shop Women",
      href: "/products?gender=WOMEN",
      hasDropdown: true,
      carouselImages: [categoryWomen, collectionImg1, collectionImg2, collectionImg3],
      categories: womenClothing,
      occasions: womenOccasions,
      collections: womenCollections,
    },
    {
      label: "Shop Mens",
      href: "/products?gender=MEN",
      hasDropdown: true,
      carouselImages: [categoryMen, collectionImg4, collectionImg3, collectionImg2],
      categories: menClothing,
      occasions: menOccasions,
      collections: menCollections,
    },
    {
      label: "About",
      href: "/about",
      hasDropdown: false,
      carouselImages: [],
      categories: [],
      collections: [],
    },
  ];

  return megaMenu;
}

/**
 * Get fallback static menu (used when API fails)
 * @returns Static MegaMenuCategory array
 */
export function getFallbackMenu(): MegaMenuCategory[] {
  return [
    {
      label: "Collections",
      href: "/products",
      hasDropdown: true,
      carouselImages: [collectionImg1, collectionImg2, collectionImg3, collectionImg4],
      categories: [
        { label: "Lehenga", href: "/products?category=1" },
        { label: "Saree", href: "/products?category=2" },
        { label: "Drape Saree", href: "/products?category=3" },
      ],
      occasions: [
        { label: "Cocktail / Sangeet", href: "/products?category=8" },
        { label: "Haldi", href: "/products?category=9" },
        { label: "Festive / Pooja", href: "/products?category=10" },
      ],
      collections: [
        { label: "Raasleela 2025", href: "/products?category=11" },
        { label: "Moh Mohram", href: "/products?category=12" },
      ],
    },
    {
      label: "Shop Women",
      href: "/products?gender=WOMEN",
      hasDropdown: true,
      carouselImages: [categoryWomen, collectionImg1, collectionImg2, collectionImg3],
      categories: [
        { label: "Lehenga", href: "/products?category=lehenga&gender=WOMEN" },
        { label: "Sarees", href: "/products?category=sarees&gender=WOMEN" },
        { label: "Suit Sets", href: "/products?category=suits&gender=WOMEN" },
      ],
      occasions: [
        { label: "Wedding", href: "/products?occasion=wedding&gender=WOMEN" },
        { label: "Festive", href: "/products?occasion=festive&gender=WOMEN" },
      ],
      collections: [],
    },
    {
      label: "Shop Mens",
      href: "/products?gender=MEN",
      hasDropdown: true,
      carouselImages: [categoryMen, collectionImg4, collectionImg3, collectionImg2],
      categories: [
        { label: "Sherwani", href: "/products?category=sherwani&gender=MEN" },
        { label: "Kurta Sets", href: "/products?category=kurta&gender=MEN" },
        { label: "Blazers", href: "/products?category=blazers&gender=MEN" },
      ],
      occasions: [
        { label: "Wedding", href: "/products?occasion=wedding&gender=MEN" },
        { label: "Festive", href: "/products?occasion=festive&gender=MEN" },
      ],
      collections: [],
    },
    {
      label: "About",
      href: "/about",
      hasDropdown: false,
      carouselImages: [],
      categories: [],
      collections: [],
    },
  ];
}

