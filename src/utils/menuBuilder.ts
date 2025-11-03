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
      href: `/products?category=${cat.id}`,
    }));

  const womenOccasions = occasionCategories
    .filter((cat) => cat.gender === "WOMEN" || cat.gender === "UNISEX")
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}`,
    }));

  const womenCollections = collectionCategories
    .filter((cat) => cat.gender === "WOMEN" || cat.gender === "UNISEX")
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}`,
    }));

  // Men's categories
  const menClothing = clothingCategories
    .filter((cat) => cat.gender === "MEN" || cat.gender === "UNISEX")
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}`,
    }));

  const menOccasions = occasionCategories
    .filter((cat) => cat.gender === "MEN" || cat.gender === "UNISEX")
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}`,
    }));

  const menCollections = collectionCategories
    .filter((cat) => cat.gender === "MEN" || cat.gender === "UNISEX")
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}`,
    }));

  // All collections (for Collections menu)
  const allCollections = collectionCategories
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((cat) => ({
      label: cat.name,
      href: `/products?category=${cat.id}`,
    }));

  const allOccasions = occasionCategories
    .sort((a, b) => a.sort_order - b.sort_order)
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
      categories: allCollections.slice(0, 7), // Limit to 7 for UI
      occasions: allOccasions.slice(0, 5), // Limit to 5 for UI
      collections: allCollections.slice(7, 14), // Next 7 collections
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
      hasDropdown: true,
      carouselImages: [categoryCollection, collectionImg1, collectionImg2],
      categories: [
        { label: "About Us", href: "/about" },
        { label: "Designer's Note", href: "/designers-note" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Atelier", href: "/atelier" },
        { label: "Press", href: "/press" },
      ],
      collections: [],
    },
    {
      label: "Contact",
      href: "#contact",
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
        { label: "Bridal Collection", href: "/products?collection=bridal" },
        { label: "Festive Collection", href: "/products?collection=festive" },
        { label: "Heritage Collection", href: "/products?collection=heritage" },
      ],
      occasions: [
        { label: "Wedding", href: "/products?occasion=wedding" },
        { label: "Festive", href: "/products?occasion=festive" },
        { label: "Casual", href: "/products?occasion=casual" },
      ],
      collections: [
        { label: "New Arrivals", href: "/products?new=true" },
        { label: "Best Sellers", href: "/products?bestseller=true" },
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
      hasDropdown: true,
      carouselImages: [categoryCollection, collectionImg1, collectionImg2],
      categories: [
        { label: "About Us", href: "/about" },
        { label: "Designer's Note", href: "/designers-note" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Atelier", href: "/atelier" },
        { label: "Press", href: "/press" },
      ],
      collections: [],
    },
    {
      label: "Contact",
      href: "#contact",
      hasDropdown: false,
      carouselImages: [],
      categories: [],
      collections: [],
    },
  ];
}

