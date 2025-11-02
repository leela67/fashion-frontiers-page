import { Product } from "@/types/product";

// Sample product data for Rivaaj Couture
export const products: Product[] = [
  {
    id: "1",
    title: "Phiroza",
    handle: "phiroza",
    description: "An exquisite royal blue lehenga set featuring intricate mirror work, zari embroidery, and dori thread detailing. This stunning ensemble combines traditional craftsmanship with contemporary elegance.",
    vendor: "Rivaaj Couture",
    type: "Lehenga Set",
    tags: ["Bridal", "Festive", "Luxury", "Blue"],
    price: 390000,
    priceMin: 390000,
    priceMax: 390000,
    available: true,
    priceVaries: false,
    images: [
      {
        id: "img1-1",
        src: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=1200&fit=crop&q=80",
        alt: "Phiroza - Front View",
        position: 1,
      },
      {
        id: "img1-2",
        src: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1200&fit=crop&q=80",
        alt: "Phiroza - Detail View",
        position: 2,
      },
      {
        id: "img1-3",
        src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1200&fit=crop&q=80",
        alt: "Phiroza - Back View",
        position: 3,
      },
    ],
    featuredImage: {
      id: "img1-1",
      src: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=1200&fit=crop&q=80",
      alt: "Phiroza - Front View",
      position: 1,
    },
    variants: [
      {
        id: "var1-1",
        size: "S",
        color: "Royal Blue",
        sku: "RC-PHI-S-RB",
        price: 390000,
        available: true,
      },
      {
        id: "var1-2",
        size: "M",
        color: "Royal Blue",
        sku: "RC-PHI-M-RB",
        price: 390000,
        available: true,
      },
      {
        id: "var1-3",
        size: "L",
        color: "Royal Blue",
        sku: "RC-PHI-L-RB",
        price: 390000,
        available: true,
      },
    ],
    options: [
      {
        name: "Size",
        position: 1,
        values: ["S", "M", "L"],
      },
      {
        name: "Color",
        position: 2,
        values: ["Royal Blue"],
      },
    ],
    fabricDescription: "Skirt: Special Net, Dupatta: Special Net, Kurti: Special Chanderi",
    embroideryDescription: "Mirror, Zari, Dori Thread, Sequins",
    colourOptions: "Colours can be customized",
    colourFamily: "Pastels",
    availability: "Custom Make Orders",
    components: 3,
    washingCare: "Dry clean only",
    collection: "Bridal Collection",
  },
  {
    id: "2",
    title: "Chandani",
    handle: "chandani",
    description: "A mesmerizing ivory and silver lehenga adorned with delicate moonlight-inspired embroidery. Perfect for the modern bride who appreciates timeless elegance.",
    vendor: "Rivaaj Couture",
    type: "Lehenga Set",
    tags: ["Bridal", "Ivory", "Silver", "Elegant"],
    price: 388000,
    priceMin: 388000,
    priceMax: 388000,
    available: true,
    priceVaries: false,
    images: [
      {
        id: "img2-1",
        src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1200&fit=crop&q=80",
        alt: "Chandani - Front View",
        position: 1,
      },
      {
        id: "img2-2",
        src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1200&fit=crop&q=80",
        alt: "Chandani - Detail View",
        position: 2,
      },
    ],
    featuredImage: {
      id: "img2-1",
      src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1200&fit=crop&q=80",
      alt: "Chandani - Front View",
      position: 1,
    },
    variants: [
      {
        id: "var2-1",
        size: "S",
        color: "Ivory",
        sku: "RC-CHA-S-IV",
        price: 388000,
        available: true,
      },
      {
        id: "var2-2",
        size: "M",
        color: "Ivory",
        sku: "RC-CHA-M-IV",
        price: 388000,
        available: true,
      },
      {
        id: "var2-3",
        size: "L",
        color: "Ivory",
        sku: "RC-CHA-L-IV",
        price: 388000,
        available: true,
      },
    ],
    options: [
      {
        name: "Size",
        position: 1,
        values: ["S", "M", "L"],
      },
      {
        name: "Color",
        position: 2,
        values: ["Ivory"],
      },
    ],
    fabricDescription: "Pure Silk with Net Overlay",
    embroideryDescription: "Silver Zardozi, Pearl Work",
    colourOptions: "Colours can be customized",
    colourFamily: "Neutrals",
    availability: "Custom Make Orders",
    components: 3,
    washingCare: "Dry clean only",
    collection: "Bridal Collection",
  },
  {
    id: "3",
    title: "Panna",
    handle: "panna",
    description: "A stunning jade green ensemble featuring emerald-inspired embellishments and intricate threadwork. A celebration of color and craftsmanship.",
    vendor: "Rivaaj Couture",
    type: "Lehenga Set",
    tags: ["Festive", "Green", "Luxury", "Traditional"],
    price: 395000,
    priceMin: 395000,
    priceMax: 395000,
    available: true,
    priceVaries: false,
    images: [
      {
        id: "img3-1",
        src: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1200&fit=crop&q=80",
        alt: "Panna - Front View",
        position: 1,
      },
    ],
    featuredImage: {
      id: "img3-1",
      src: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1200&fit=crop&q=80",
      alt: "Panna - Front View",
      position: 1,
    },
    variants: [
      {
        id: "var3-1",
        size: "S",
        color: "Jade Green",
        sku: "RC-PAN-S-JG",
        price: 395000,
        available: true,
      },
      {
        id: "var3-2",
        size: "M",
        color: "Jade Green",
        sku: "RC-PAN-M-JG",
        price: 395000,
        available: true,
      },
      {
        id: "var3-3",
        size: "L",
        color: "Jade Green",
        sku: "RC-PAN-L-JG",
        price: 395000,
        available: false,
      },
    ],
    options: [
      {
        name: "Size",
        position: 1,
        values: ["S", "M", "L"],
      },
      {
        name: "Color",
        position: 2,
        values: ["Jade Green"],
      },
    ],
    fabricDescription: "Silk Georgette with Embroidered Net",
    embroideryDescription: "Emerald Stones, Gold Zari, Thread Work",
    colourOptions: "Colours can be customized",
    colourFamily: "Jewel Tones",
    availability: "Custom Make Orders",
    components: 3,
    washingCare: "Dry clean only",
    collection: "Festive Collection",
  },
];

// Helper function to format price in INR
export const formatPrice = (price: number): string => {
  return `₹${(price / 100).toLocaleString("en-IN")}`;
};

// Helper function to get product by handle
export const getProductByHandle = (handle: string): Product | undefined => {
  return products.find((product) => product.handle === handle);
};

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

