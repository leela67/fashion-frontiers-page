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
    occasions: [
      { label: "Cocktail/Sangeet", href: "#cocktail-sangeet" },
      { label: "Haldi", href: "#haldi" },
      { label: "Carnival", href: "#carnival" },
      { label: "Mehendi", href: "#mehendi" },
      { label: "Family and pooja", href: "#family-pooja" },
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
  {
    label: "Book Appointment",
    href: "/book-appointment",
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

