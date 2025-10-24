// Mega Menu Data Structure
import { collectionImages, categoryImages } from "@/data/oneDriveImages";

export interface MegaMenuCategory {
  label: string;
  href: string;
  hasDropdown: boolean;
  carouselImages: string[];
  categories: Array<{
    label: string;
    href: string;
  }>;
  occasions: Array<{
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
    label: "Shop",
    href: "#shop",
    hasDropdown: true,
    carouselImages: [collectionImages.collection1, collectionImages.collection2, collectionImages.collection3, collectionImages.collection4],
    categories: [
      { label: "Lehenga", href: "#lehenga" },
      { label: "Sarees", href: "#sarees" },
      { label: "Shararas", href: "#shararas" },
      { label: "Suit sets", href: "#suit-sets" },
      { label: "Drape sarees", href: "#drape-sarees" },
      { label: "Blazers", href: "#blazers" },
      { label: "Jodhpuri", href: "#jodhpuri" },
      { label: "Kurta sets", href: "#kurta-sets" },
    ],
    occasions: [
      { label: "Cocktail/Sangeet", href: "#cocktail-sangeet" },
      { label: "Haldi", href: "#haldi" },
      { label: "Carnival", href: "#carnival" },
      { label: "Mehendi", href: "#mehendi" },
      { label: "Family and Pooja", href: "#family-pooja" },
    ],
    collections: [
      { label: "Raasleela", href: "#raasleela" },
      { label: "Aaina", href: "#aaina" },
    ],
  },
  {
    label: "Shop Women",
    href: "#shop-women",
    hasDropdown: true,
    carouselImages: [categoryImages.categoryWomen, collectionImages.collection1, collectionImages.collection2, collectionImages.collection3],
    categories: [
      { label: "Lehenga", href: "#women-lehenga" },
      { label: "Sarees", href: "#women-sarees" },
      { label: "Shararas", href: "#women-shararas" },
      { label: "Suit sets", href: "#women-suit-sets" },
      { label: "Drape sarees", href: "#women-drape-sarees" },
    ],
    occasions: [
      { label: "Cocktail/Sangeet", href: "#women-cocktail-sangeet" },
      { label: "Haldi", href: "#women-haldi" },
      { label: "Carnival", href: "#women-carnival" },
      { label: "Mehendi", href: "#women-mehendi" },
      { label: "Family and Pooja", href: "#women-family-pooja" },
    ],
    collections: [
      { label: "Raasleela", href: "#women-raasleela" },
      { label: "Aaina", href: "#women-aaina" },
    ],
  },
  {
    label: "Shop Men",
    href: "#shop-men",
    hasDropdown: true,
    carouselImages: [categoryImages.categoryMen, collectionImages.collection4, collectionImages.collection3, collectionImages.collection2],
    categories: [
      { label: "Lehenga", href: "#men-lehenga" },
      { label: "Sarees", href: "#men-sarees" },
      { label: "Shararas", href: "#men-shararas" },
      { label: "Suit sets", href: "#men-suit-sets" },
      { label: "Drape sarees", href: "#men-drape-sarees" },
      { label: "Blazers", href: "#men-blazers" },
      { label: "Jodhpuri", href: "#men-jodhpuri" },
      { label: "Kurta sets", href: "#men-kurta-sets" },
    ],
    occasions: [
      { label: "Cocktail/Sangeet", href: "#men-cocktail-sangeet" },
      { label: "Haldi", href: "#men-haldi" },
      { label: "Carnival", href: "#men-carnival" },
      { label: "Mehendi", href: "#men-mehendi" },
      { label: "Family and Pooja", href: "#men-family-pooja" },
    ],
    collections: [
      { label: "Raasleela", href: "#men-raasleela" },
      { label: "Aaina", href: "#men-aaina" },
    ],
  },
  {
    label: "Book Your Appointment",
    href: "#book-appointment",
    hasDropdown: false,
    carouselImages: [],
    categories: [],
    occasions: [],
    collections: [],
  },
  {
    label: "Contact",
    href: "#contact",
    hasDropdown: false,
    carouselImages: [],
    categories: [],
    occasions: [],
    collections: [],
  },
];

