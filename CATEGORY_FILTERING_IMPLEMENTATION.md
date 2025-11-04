# Category Filtering Implementation

This document describes the implementation of server-side category filtering for the Products page.

## Overview

The Products page now uses **server-side filtering** via API query parameters instead of client-side filtering. When a user clicks a category in the header/mega menu, the page makes an API call with the appropriate category filter parameter.

---

## Changes Made

### 1. Updated Menu Builder (`src/utils/menuBuilder.ts`)

**What Changed**: Added `type` parameter to category URLs to identify the category type.

**Before**:
```typescript
href: `/products?category=${cat.id}`
```

**After**:
```typescript
// For clothing categories
href: `/products?category=${cat.id}&type=clothing`

// For occasion categories
href: `/products?category=${cat.id}&type=occasion`

// For collection categories
href: `/products?category=${cat.id}&type=collection`
```

**Why**: The API requires different query parameters for different category types:
- `clothing_category_id` for clothing categories
- `occasion_category_id` for occasion categories
- `collection_category_id` for collection categories

---

### 2. Updated API Service (`src/services/api.ts`)

#### Added Category Filter Parameters to Interface

**Lines 142-150**:
```typescript
export interface FetchProductsParams {
  search?: string;
  id?: number;
  gender?: "MEN" | "WOMEN" | "UNISEX";
  brand_id?: number;
  clothing_category_id?: number;      // NEW
  occasion_category_id?: number;      // NEW
  collection_category_id?: number;    // NEW
}
```

#### Updated fetchProducts Function

**Lines 171-179**:
```typescript
if (params?.clothing_category_id) {
  queryParams.append("clothing_category_id", params.clothing_category_id.toString());
}
if (params?.occasion_category_id) {
  queryParams.append("occasion_category_id", params.occasion_category_id.toString());
}
if (params?.collection_category_id) {
  queryParams.append("collection_category_id", params.collection_category_id.toString());
}
```

---

### 3. Updated Products Page (`src/pages/Products.tsx`)

#### Removed Client-Side Filtering

**Before** (Lines 1-46):
```typescript
import { filterProductsByCategory } from "@/services/api";

// Client-side filtering
const categoryFilteredProducts = useMemo(() => {
  if (!apiProducts || !Array.isArray(apiProducts)) return [];
  if (!categoryId) return apiProducts;
  return filterProductsByCategory(apiProducts, categoryId);
}, [apiProducts, categoryId]);
```

**After** (Lines 1-65):
```typescript
// Removed filterProductsByCategory import

// Build API params based on URL parameters
const apiParams = useMemo((): FetchProductsParams => {
  const params: FetchProductsParams = {};
  
  // Add gender filter if present
  if (genderParam && (genderParam === "MEN" || genderParam === "WOMEN" || genderParam === "UNISEX")) {
    params.gender = genderParam;
  }
  
  // Add category filter based on type
  if (categoryId && categoryType) {
    if (categoryType === "clothing") {
      params.clothing_category_id = categoryId;
    } else if (categoryType === "occasion") {
      params.occasion_category_id = categoryId;
    } else if (categoryType === "collection") {
      params.collection_category_id = categoryId;
    }
  }
  
  return params;
}, [categoryId, categoryType, genderParam]);

// Fetch products from API with filters
const { products: apiProducts, loading, error } = useProducts(apiParams);
```

#### Updated Sorting Logic

**Before**:
```typescript
const sortedProducts = useMemo(() => {
  return [...categoryFilteredProducts].sort((a, b) => {
    // sorting logic
  });
}, [categoryFilteredProducts, sortBy]);
```

**After**:
```typescript
const sortedProducts = useMemo(() => {
  return [...apiProducts].sort((a, b) => {
    // sorting logic
  });
}, [apiProducts, sortBy]);
```

---

## How It Works

### URL Structure

When a user clicks a category in the header, they navigate to:

```
/products?category={id}&type={type}
```

**Examples**:
- Clothing category (Lehenga, ID=1): `/products?category=1&type=clothing`
- Occasion category (Wedding, ID=7): `/products?category=7&type=occasion`
- Collection category (Raasleela 2025, ID=11): `/products?category=11&type=collection`

### Data Flow

1. **User clicks category** in header/mega menu
2. **URL updates** with `category` and `type` parameters
3. **Products page reads** URL parameters
4. **API params are built** based on category type:
   - `type=clothing` → `clothing_category_id={id}`
   - `type=occasion` → `occasion_category_id={id}`
   - `type=collection` → `collection_category_id={id}`
5. **API call is made** with the correct filter parameter
6. **Server returns** filtered products
7. **Products are displayed** (already filtered by server)

### API Calls

**Example 1: Clothing Category (Blazer, ID=6)**
```
URL: /products?category=6&type=clothing
API: GET /api/v1/products?clothing_category_id=6
```

**Example 2: Occasion Category (Wedding, ID=7)**
```
URL: /products?category=7&type=occasion
API: GET /api/v1/products?occasion_category_id=7
```

**Example 3: Collection Category (Raasleela 2025, ID=11)**
```
URL: /products?category=11&type=collection
API: GET /api/v1/products?collection_category_id=11
```

**Example 4: Gender Filter (Women)**
```
URL: /products?gender=WOMEN
API: GET /api/v1/products?gender=WOMEN
```

**Example 5: Combined Filters**
```
URL: /products?category=6&type=clothing&gender=MEN
API: GET /api/v1/products?clothing_category_id=6&gender=MEN
```

---

## Benefits of Server-Side Filtering

### Before (Client-Side Filtering)
❌ API returned ALL products (inefficient)
❌ Client filtered products by category (slow for large datasets)
❌ Unnecessary data transfer
❌ Slower page load times

### After (Server-Side Filtering)
✅ API returns ONLY filtered products (efficient)
✅ No client-side filtering needed (fast)
✅ Minimal data transfer
✅ Faster page load times
✅ Better scalability

---

## Testing

### Test Case 1: Clothing Category
1. Navigate to header → Shop Women → Lehenga
2. URL should be: `/products?category=1&type=clothing`
3. Console should show: `Filtering by clothing category: 1`
4. API call should be: `GET /api/v1/products?clothing_category_id=1`
5. Only Lehenga products should display

### Test Case 2: Occasion Category
1. Navigate to header → Collections → Wedding
2. URL should be: `/products?category=7&type=occasion`
3. Console should show: `Filtering by occasion category: 7`
4. API call should be: `GET /api/v1/products?occasion_category_id=7`
5. Only Wedding occasion products should display

### Test Case 3: Collection Category
1. Navigate to header → Collections → Raasleela 2025
2. URL should be: `/products?category=11&type=collection`
3. Console should show: `Filtering by collection category: 11`
4. API call should be: `GET /api/v1/products?collection_category_id=11`
5. Only Raasleela 2025 collection products should display

### Test Case 4: Gender Filter
1. Navigate to header → Shop Women
2. URL should be: `/products?gender=WOMEN`
3. API call should be: `GET /api/v1/products?gender=WOMEN`
4. Only women's products should display

### Test Case 5: No Filters
1. Navigate to `/products` directly
2. API call should be: `GET /api/v1/products`
3. All products should display

---

## Debugging

### Console Logs

The Products page now logs filtering information to the console:

```javascript
// When filtering by clothing category
Filtering by clothing category: 6
API Params: { clothing_category_id: 6 }

// When filtering by occasion category
Filtering by occasion category: 7
API Params: { occasion_category_id: 7 }

// When filtering by collection category
Filtering by collection category: 11
API Params: { collection_category_id: 11 }
```

### Network Tab

Check the Network tab in browser DevTools to verify the API call:

```
Request URL: http://localhost:9000/api/v1/products?clothing_category_id=6
Request Method: GET
Status Code: 200 OK
```

---

## Summary

✅ **Menu Builder**: Updated to include `type` parameter in category URLs
✅ **API Service**: Added support for category filter parameters
✅ **Products Page**: Switched from client-side to server-side filtering
✅ **Performance**: Improved by reducing data transfer and processing
✅ **Build**: Successful with no TypeScript errors

The category filtering now works correctly with server-side filtering via API query parameters!

