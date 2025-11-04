// API Service Layer for Rivaaj Couture
// Base URL for the API
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:9000/api/v1";

// ============================================================================
// TYPE DEFINITIONS (matching API response structure)
// ============================================================================

export interface ApiCategory {
  id: number;
  name: string;
  description: string | null;
  gender: "MEN" | "WOMEN" | "UNISEX";
  category_type: "CLOTHING" | "OCCASION" | "COLLECTION";
  sort_order: number;
  is_active: boolean;
  image_url: string | null;
  is_marketing_visible: boolean;
  created_at: string;
  deleted_at: string | null;
}

export interface ApiProductImage {
  id: number;
  product_id: number;
  image_url: string;
  sort_order: number;
}

export interface ApiProductVariant {
  id: number;
  product_id: number;
  size: string;
  color: string;
  stock_quantity: number;
  price_override: number | null;
  is_active: boolean;
}

export interface ApiProductCategories {
  clothing: Array<{ id: number; name: string }>;
  occasion: Array<{ id: number; name: string }>;
  collection: Array<{ id: number; name: string }>;
}

export interface ApiProduct {
  id: number;
  name: string;
  short_description: string | null;
  long_description: string | null;
  price: number;
  rating: number;
  review_count: number;
  is_active: boolean;
  discount_type: "PERCENTAGE" | "FIXED" | "NONE" | null;
  discount_value: number | null;
  gender: "MEN" | "WOMEN" | "UNISEX";
  sort_order: number;
  brand_id: number | null;
  brand_name: string;
  categories: ApiProductCategories;
  images: ApiProductImage[];
  variants: ApiProductVariant[] | null;  // Can be null in API response
  created_at: string;
  updated_at: string;
  // Optional fields that may not be in the API response
  fabric_description?: string | null;
  embroidery_description?: string | null;
  washing_care?: string | null;
}

// ============================================================================
// CATEGORY API FUNCTIONS
// ============================================================================

export interface FetchCategoriesParams {
  search?: string;
  id?: number;
  type?: "CLOTHING" | "OCCASION" | "COLLECTION";
  gender?: "MEN" | "WOMEN" | "UNISEX";
}

/**
 * Fetch public categories from the API
 * @param params - Optional query parameters for filtering
 * @returns Array of categories
 */
export async function fetchCategories(
  params?: FetchCategoriesParams
): Promise<ApiCategory[]> {
  try {
    const queryParams = new URLSearchParams();
    
    if (params?.search) queryParams.append("search", params.search);
    if (params?.id) queryParams.append("id", params.id.toString());
    if (params?.type) queryParams.append("type", params.type);
    if (params?.gender) queryParams.append("gender", params.gender);

    const url = `${API_BASE_URL}/categories${
      queryParams.toString() ? `?${queryParams.toString()}` : ""
    }`;

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Categories not found");
      } else if (response.status === 500) {
        throw new Error("Server error. Please try again later.");
      } else {
        throw new Error("Failed to fetch categories");
      }
    }

    const data: ApiCategory[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

/**
 * Fetch a single category by ID
 * @param id - Category ID
 * @returns Single category or null
 */
export async function fetchCategoryById(id: number): Promise<ApiCategory | null> {
  try {
    const categories = await fetchCategories({ id });
    return categories.length > 0 ? categories[0] : null;
  } catch (error) {
    console.error(`Error fetching category ${id}:`, error);
    return null;
  }
}

// ============================================================================
// PRODUCT API FUNCTIONS
// ============================================================================

export interface FetchProductsParams {
  search?: string;
  id?: number;
  gender?: "MEN" | "WOMEN" | "UNISEX";
  brand_id?: number;
  clothing_category_id?: number;
  occasion_category_id?: number;
  collection_category_id?: number;
}

/**
 * API Response wrapper for paginated products
 */
interface ApiProductsResponse {
  limit: number;
  page: number;
  results: ApiProduct[];
  total: number;
}

/**
 * Fetch public products from the API
 * @param params - Optional query parameters for filtering
 * @returns Array of products
 */
export async function fetchProducts(
  params?: FetchProductsParams
): Promise<ApiProduct[]> {
  try {
    const queryParams = new URLSearchParams();

    if (params?.search) queryParams.append("search", params.search);
    if (params?.id) queryParams.append("id", params.id.toString());
    if (params?.gender) queryParams.append("gender", params.gender);
    if (params?.brand_id) queryParams.append("brand_id", params.brand_id.toString());
    if (params?.clothing_category_id) queryParams.append("clothing_category_id", params.clothing_category_id.toString());
    if (params?.occasion_category_id) queryParams.append("occasion_category_id", params.occasion_category_id.toString());
    if (params?.collection_category_id) queryParams.append("collection_category_id", params.collection_category_id.toString());

    const url = `${API_BASE_URL}/products${
      queryParams.toString() ? `?${queryParams.toString()}` : ""
    }`;

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Products not found");
      } else if (response.status === 500) {
        throw new Error("Server error. Please try again later.");
      } else {
        throw new Error("Failed to fetch products");
      }
    }

    const data = await response.json();

    // Check if response is wrapped in pagination object
    if (data && typeof data === 'object' && 'results' in data && Array.isArray(data.results)) {
      console.log(`Fetched ${data.results.length} products (total: ${data.total})`);
      return data.results as ApiProduct[];
    }

    // Fallback: check if it's a direct array (for backward compatibility)
    if (Array.isArray(data)) {
      console.log(`Fetched ${data.length} products (direct array)`);
      return data as ApiProduct[];
    }

    // If neither format matches, log error and return empty array
    console.error("API returned unexpected data format:", data);
    return [];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

/**
 * Fetch a single product by ID
 * @param id - Product ID
 * @returns Single product
 */
export async function fetchProductById(id: number): Promise<ApiProduct> {
  try {
    const url = `${API_BASE_URL}/products/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Product not found");
      } else if (response.status === 500) {
        throw new Error("Server error. Please try again later.");
      } else {
        throw new Error("Failed to fetch product");
      }
    }

    const data: ApiProduct = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Filter products by category ID
 * @param products - Array of products
 * @param categoryId - Category ID to filter by
 * @returns Filtered array of products
 */
export function filterProductsByCategory(
  products: ApiProduct[],
  categoryId: number
): ApiProduct[] {
  return products.filter((product) => {
    const allCategories = [
      ...product.categories.clothing,
      ...product.categories.occasion,
      ...product.categories.collection,
    ];
    return allCategories.some((cat) => cat.id === categoryId);
  });
}

/**
 * Calculate discounted price
 * @param product - Product object
 * @returns Discounted price or original price
 */
export function calculateDiscountedPrice(product: ApiProduct): number {
  // No discount if type is NONE, null, or value is 0/null
  if (!product.discount_type || product.discount_type === "NONE" || !product.discount_value || product.discount_value === 0) {
    return product.price;
  }

  if (product.discount_type === "PERCENTAGE") {
    return product.price - (product.price * product.discount_value) / 100;
  } else if (product.discount_type === "FIXED") {
    return Math.max(0, product.price - product.discount_value);
  }

  return product.price;
}

/**
 * Format price in INR
 * @param price - Price in rupees
 * @returns Formatted price string
 */
export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
}

/**
 * Get all unique sizes from product variants
 * @param variants - Array of product variants (can be null)
 * @returns Array of unique sizes
 */
export function getUniqueSizes(variants: ApiProductVariant[] | null): string[] {
  if (!variants || variants.length === 0) return [];
  const sizes = variants.map((v) => v.size);
  return Array.from(new Set(sizes));
}

/**
 * Get all unique colors from product variants
 * @param variants - Array of product variants (can be null)
 * @returns Array of unique colors
 */
export function getUniqueColors(variants: ApiProductVariant[] | null): string[] {
  if (!variants || variants.length === 0) return [];
  const colors = variants.map((v) => v.color);
  return Array.from(new Set(colors));
}

/**
 * Check if product is in stock
 * @param product - Product object
 * @returns True if any variant has stock
 */
export function isProductInStock(product: ApiProduct): boolean {
  // If no variants, consider product as in stock (default behavior)
  if (!product.variants || product.variants.length === 0) return true;
  return product.variants.some((v) => v.stock_quantity > 0 && v.is_active);
}

// ============================================================================
// NEWSLETTER SUBSCRIPTION API
// ============================================================================

export interface NewsletterSubscriptionRequest {
  email_id: string;
  recaptcha_token: string;
}

export interface NewsletterSubscriptionResponse {
  message: string;
}

/**
 * Subscribe to newsletter
 * @param email - Email address to subscribe
 * @param recaptchaToken - reCAPTCHA token (use "dummy" for now)
 * @returns Success message
 */
export async function subscribeToNewsletter(
  email: string,
  recaptchaToken: string = "dummy"
): Promise<NewsletterSubscriptionResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_id: email,
        recaptcha_token: recaptchaToken,
      }),
    });

    if (!response.ok) {
      if (response.status === 400) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Invalid email address");
      }
      if (response.status === 409) {
        throw new Error("This email is already subscribed");
      }
      throw new Error("Failed to subscribe to newsletter");
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to subscribe to newsletter");
  }
}

// ============================================================================
// VISITOR QUERIES API (Book Appointment / Contact Us)
// ============================================================================

export interface VisitorQueryRequest {
  full_name: string;
  mobile_no: string;
  email_address: string;
  message: string;
  recaptcha_token: string;
  appointment_type?: "IN_PERSON" | "VIRTUAL";
  preferred_date?: string;
  preferred_time?: string;
  occasion?: string;
}

export interface VisitorQueryResponse {
  message: string;
}

/**
 * Submit visitor query (Book Appointment / Contact Us)
 * @param data - Visitor query data
 * @returns Success message
 */
export async function submitVisitorQuery(
  data: VisitorQueryRequest
): Promise<VisitorQueryResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/visitor-queries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status === 400) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Invalid form data");
      }
      throw new Error("Failed to submit your request");
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to submit your request");
  }
}

