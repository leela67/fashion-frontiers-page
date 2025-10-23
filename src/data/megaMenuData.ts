// Mega Menu Data Structure
import collectionImg1 from "@/assets/collection-1.jpg";
import collectionImg2 from "@/assets/collection-2.jpg";
import collectionImg3 from "@/assets/collection-3.jpg";
import collectionImg4 from "@/assets/collection-4.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryCollection from "@/assets/category-collection.jpg";

export interface MegaMenuCategory {
  label: string;
  href: string;
  hasDropdown: boolean;
  carouselImages: string[];
  categories: Array<{
    label: string;
    href: string;
  }>;
  collections: Array<{
    label: string;
    href: string;
  }>;
}

export const megaMenuData: MegaMenuCategory[] = [
  {
    label: "Collections",
    href: "#collections",
    hasDropdown: true,
    carouselImages: [collectionImg1, collectionImg2, collectionImg3, collectionImg4],
    categories: [
      { label: "Bridal 2025/26", href: "#bridal-2025" },
      { label: "Couture 2025", href: "#couture-2025" },
      { label: "Lost In Time", href: "#lost-in-time" },
      { label: "Bride & Groom", href: "#bride-groom" },
      { label: "Heritage Pret", href: "#heritage" },
      { label: "Tales of Masai", href: "#tales" },
      { label: "Vintage Bridal", href: "#vintage" },
    ],
    collections: [
      { label: "Rang Mahal", href: "#rang-mahal" },
      { label: "Rêver D'Udaipur", href: "#rever-udaipur" },
      { label: "A Poème By The Lake: Kashmir", href: "#poeme-kashmir" },
      { label: "Vision In Veil", href: "#vision-veil" },
      { label: "Love Always", href: "#love-always" },
      { label: "Love Is", href: "#love-is" },
      { label: "Mon Amour Jag Niwas", href: "#mon-amour" },
    ],
  },
  {
    label: "Women",
    href: "#women",
    hasDropdown: true,
    carouselImages: [categoryWomen, collectionImg1, collectionImg2, collectionImg3],
    categories: [
      { label: "Lehengas", href: "#lehengas" },
      { label: "Gowns", href: "#gowns" },
      { label: "Sarees", href: "#sarees" },
      { label: "Kurta Sets", href: "#kurta-sets" },
      { label: "Sharara Sets", href: "#sharara-sets" },
      { label: "Party Wear", href: "#party-wear" },
      { label: "Festive Wear", href: "#festive-wear" },
    ],
    collections: [
      { label: "Bridal Collection", href: "#bridal-collection" },
      { label: "Engagement Collection", href: "#engagement-collection" },
      { label: "Reception Collection", href: "#reception-collection" },
      { label: "Mehendi Collection", href: "#mehendi-collection" },
      { label: "Sangeet Collection", href: "#sangeet-collection" },
      { label: "Haldi Collection", href: "#haldi-collection" },
    ],
  },
  {
    label: "Men",
    href: "#men",
    hasDropdown: true,
    carouselImages: [categoryMen, collectionImg4, collectionImg3, collectionImg2],
    categories: [
      { label: "Sherwani Sets", href: "#sherwani-sets" },
      { label: "Bandi Sets", href: "#bandi-sets" },
      { label: "Kurta Sets", href: "#men-kurta-sets" },
      { label: "Engagement Wear", href: "#engagement-wear" },
      { label: "Wedding Wear", href: "#wedding-wear" },
      { label: "Reception Wear", href: "#reception-wear" },
      { label: "Party Wear", href: "#men-party-wear" },
    ],
    collections: [
      { label: "Rang Mahal", href: "#men-rang-mahal" },
      { label: "A Poème By The Lake: Kashmir", href: "#men-poeme-kashmir" },
      { label: "Love Always", href: "#men-love-always" },
      { label: "Love Is", href: "#men-love-is" },
      { label: "Mon Amour Jag Niwas", href: "#men-mon-amour" },
    ],
  },
  {
    label: "About",
    href: "#about",
    hasDropdown: false,
    carouselImages: [],
    categories: [],
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

