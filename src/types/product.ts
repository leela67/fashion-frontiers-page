// Product Types for Rivaaj Couture

export interface ProductVariant {
  id: string;
  size: string;
  color: string;
  sku: string;
  price: number;
  compareAtPrice?: number;
  available: boolean;
  image?: string;
}

export interface ProductImage {
  id: string;
  src: string;
  alt: string;
  position: number;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  vendor: string;
  type: string;
  tags: string[];
  price: number;
  priceMin: number;
  priceMax: number;
  compareAtPrice?: number;
  available: boolean;
  priceVaries: boolean;
  images: ProductImage[];
  featuredImage: ProductImage;
  variants: ProductVariant[];
  options: ProductOption[];
  fabricDescription?: string;
  embroideryDescription?: string;
  colourOptions?: string;
  colourFamily?: string;
  availability?: string;
  components?: number;
  washingCare?: string;
  collection?: string;
}

export interface ProductOption {
  name: string;
  position: number;
  values: string[];
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
  description: string;
  image?: string;
  products: Product[];
}

export type SortOption = 
  | 'featured'
  | 'best-selling'
  | 'title-asc'
  | 'title-desc'
  | 'price-asc'
  | 'price-desc'
  | 'date-asc'
  | 'date-desc';

export interface FilterOption {
  label: string;
  value: string;
  count: number;
}

export interface ProductFilters {
  priceRange?: [number, number];
  sizes?: string[];
  colors?: string[];
  collections?: string[];
  availability?: 'in-stock' | 'all';
}

