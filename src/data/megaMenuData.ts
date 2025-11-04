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
  occasions?: Array<{
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
    href: "/products",
    hasDropdown: true,
    carouselImages: [collectionImg1, collectionImg2, collectionImg3, collectionImg4],
    categories: [
      { label: "Entire Collection", href: "/products" },
      { label: "Men's Collection", href: "/products?gender=MEN" },
      { label: "Women's Collection", href: "/products?gender=WOMEN" },
    ],
    occasions: [],
    collections: [],
  },
  {
    label: "Shop Women",
    href: "#women",
    hasDropdown: true,
    carouselImages: [categoryWomen, collectionImg1, collectionImg2, collectionImg3],
    categories: [
      { label: "Lehenga", href: "#lehengas" },
      { label: "Sarees", href: "#sarees" },
      { label: "Shararas", href: "#shararas" },
      { label: "Suit sets", href: "#suit-sets" },
      { label: "Drape sarees", href: "#drape-sarees" },
    ],
    occasions: [
      { label: "cocktail/Sangeet", href: "#cocktail-sangeet" },
      { label: "Haldi", href: "#haldi" },
      { label: "Carnival", href: "#carnival" },
      { label: "Mehendi", href: "#mehendi" },
      { label: "Family and pooja", href: "#family-pooja" },
    ],
    collections: [
      { label: "Raasleela", href: "#raasleela" },
      { label: "Aaina", href: "#aaina" },
    ],
  },
  {
    label: "Shop Mens",
    href: "#men",
    hasDropdown: true,
    carouselImages: [categoryMen, collectionImg4, collectionImg3, collectionImg2],
    categories: [
      { label: "Lehenga", href: "#lehengas" },
      { label: "Sarees", href: "#sarees" },
      { label: "Shararas", href: "#shararas" },
      { label: "Suit sets", href: "#suit-sets" },
      { label: "Drape sarees", href: "#drape-sarees" },
      { label: "Blazers", href: "#blazers" },
      { label: "Jodhpuri", href: "#jodhpuri" },
      { label: "Kurta sets", href: "#kurta-sets" },
    ],
    occasions: [
      { label: "cocktail/Sangeet", href: "#cocktail-sangeet" },
      { label: "Haldi", href: "#haldi" },
      { label: "Carnival", href: "#carnival" },
      { label: "Mehendi", href: "#mehendi" },
      { label: "Family and pooja", href: "#family-pooja" },
    ],
    collections: [
      { label: "Raasleela", href: "#raasleela" },
      { label: "Aaina", href: "#aaina" },
    ],
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
];

