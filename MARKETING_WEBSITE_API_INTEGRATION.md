# Marketing Website - API Integration Guide

## Overview

This guide is for the **Marketing Website development team**. It covers all public API endpoints that don't require authentication and are designed for customer-facing features.

---

## Authentication

**Important:** All endpoints in this guide are **public** and do **NOT** require authentication.

- ❌ No `Authorization` header needed
- ✅ Can be called directly from the frontend
- ✅ No JWT token required

---

## 1. Get Public Categories

### Endpoint
```
GET /api/v1/categories
```

### Description
Returns categories that are marked as marketing-visible (`is_marketing_visible = true`). Only active categories are returned.

### Authentication
**None required** - This is a public endpoint.

### Query Parameters

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `search` | string | No | Search by category name (partial match, case-insensitive) | `?search=summer` |
| `id` | integer | No | Filter by exact category ID | `?id=5` |
| `type` | string | No | Filter by category type | `?type=CLOTHING` |
| `gender` | string | No | Filter by gender | `?gender=WOMEN` |

**Valid values for `type`:**
- `CLOTHING` - Clothing categories (e.g., T-Shirts, Dresses, Jeans)
- `OCCASION` - Occasion categories (e.g., Casual, Formal, Party)
- `COLLECTION` - Collection categories (e.g., Summer 2024, New Arrivals)

**Valid values for `gender`:**
- `MEN` - Men's categories
- `WOMEN` - Women's categories
- `UNISEX` - Unisex categories

### Example Requests

#### Example 1: Get all marketing-visible categories
```bash
curl -X GET "http://localhost:9000/api/v1/categories"
```

#### Example 2: Get all women's clothing categories
```bash
curl -X GET "http://localhost:9000/api/v1/categories?type=CLOTHING&gender=WOMEN"
```

#### Example 3: Get all collection categories
```bash
curl -X GET "http://localhost:9000/api/v1/categories?type=COLLECTION"
```

#### Example 4: Search for "summer" in categories
```bash
curl -X GET "http://localhost:9000/api/v1/categories?search=summer"
```

#### Example 5: Get a specific category by ID
```bash
curl -X GET "http://localhost:9000/api/v1/categories?id=5"
```

#### Example 6: Get men's occasion categories
```bash
curl -X GET "http://localhost:9000/api/v1/categories?type=OCCASION&gender=MEN"
```

### Success Response (200 OK)

```json
[
  {
    "id": 5,
    "name": "T-Shirts",
    "description": "Comfortable cotton t-shirts for everyday wear",
    "gender": "UNISEX",
    "category_type": "CLOTHING",
    "sort_order": 1,
    "is_active": true,
    "image_url": "https://s3.amazonaws.com/your-bucket/categories/tshirts-banner.jpg",
    "is_marketing_visible": true,
    "created_at": "2024-01-10T08:00:00Z",
    "deleted_at": null
  },
  {
    "id": 12,
    "name": "Casual",
    "description": "Casual wear for everyday occasions",
    "gender": "UNISEX",
    "category_type": "OCCASION",
    "sort_order": 2,
    "is_active": true,
    "image_url": "https://s3.amazonaws.com/your-bucket/categories/casual-banner.jpg",
    "is_marketing_visible": true,
    "created_at": "2024-01-10T08:15:00Z",
    "deleted_at": null
  },
  {
    "id": 8,
    "name": "Summer Collection 2024",
    "description": "Latest summer fashion trends and styles",
    "gender": "WOMEN",
    "category_type": "COLLECTION",
    "sort_order": 3,
    "is_active": true,
    "image_url": "https://s3.amazonaws.com/your-bucket/categories/summer-2024.jpg",
    "is_marketing_visible": true,
    "created_at": "2024-01-10T09:00:00Z",
    "deleted_at": null
  }
]
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Unique category ID |
| `name` | string | Category name |
| `description` | string | Detailed description (can be null) |
| `gender` | string | Target gender: MEN, WOMEN, or UNISEX |
| `category_type` | string | Type: CLOTHING, OCCASION, or COLLECTION |
| `sort_order` | integer | Display order (lower numbers first) |
| `is_active` | boolean | Always `true` for public endpoint |
| `image_url` | string | S3 URL for category banner image (can be null) |
| `is_marketing_visible` | boolean | Always `true` for public endpoint |
| `created_at` | string | ISO 8601 timestamp |
| `deleted_at` | string | Always `null` for public endpoint |

### Error Response (500 Internal Server Error)

```json
{
  "error": "Failed to fetch categories"
}
```

**HTTP Status Code:** 500

---

## 2. Get Public Products

### Endpoint
```
GET /api/v1/products
```

### Description
Returns all active products with their categories, images, and variants.

### Authentication
**None required** - This is a public endpoint.

### Query Parameters

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `search` | string | No | Search by product name | `?search=shirt` |
| `id` | integer | No | Filter by exact product ID | `?id=42` |
| `gender` | string | No | Filter by gender | `?gender=MEN` |
| `brand_id` | integer | No | Filter by brand ID | `?brand_id=3` |

### Example Requests

#### Example 1: Get all products
```bash
curl -X GET "http://localhost:9000/api/v1/products"
```

#### Example 2: Get men's products
```bash
curl -X GET "http://localhost:9000/api/v1/products?gender=MEN"
```

#### Example 3: Search for "shirt"
```bash
curl -X GET "http://localhost:9000/api/v1/products?search=shirt"
```

#### Example 4: Get products from a specific brand
```bash
curl -X GET "http://localhost:9000/api/v1/products?brand_id=3"
```

### Success Response (200 OK)

```json
[
  {
    "id": 42,
    "name": "Premium Cotton T-Shirt",
    "short_description": "Comfortable and stylish",
    "long_description": "Made from 100% organic cotton with a modern fit...",
    "price": 1299.99,
    "rating": 4.5,
    "review_count": 128,
    "is_active": true,
    "discount_type": "PERCENTAGE",
    "discount_value": 10,
    "gender": "MEN",
    "sort_order": 0,
    "brand_id": 3,
    "brand_name": "Fashion Brand",
    
    "categories": {
      "clothing": [
        { "id": 5, "name": "T-Shirts" },
        { "id": 7, "name": "Casual Wear" }
      ],
      "occasion": [
        { "id": 12, "name": "Casual" },
        { "id": 14, "name": "Daily Wear" }
      ],
      "collection": [
        { "id": 8, "name": "Summer 2024" }
      ]
    },
    
    "images": [
      {
        "id": 101,
        "product_id": 42,
        "image_url": "https://s3.amazonaws.com/bucket/products/42_0.jpg",
        "sort_order": 1
      },
      {
        "id": 102,
        "product_id": 42,
        "image_url": "https://s3.amazonaws.com/bucket/products/42_1.jpg",
        "sort_order": 2
      }
    ],
    
    "variants": [
      {
        "id": 201,
        "product_id": 42,
        "size": "M",
        "color": "Blue",
        "stock_quantity": 50,
        "price_override": null,
        "is_active": true
      },
      {
        "id": 202,
        "product_id": 42,
        "size": "L",
        "color": "Blue",
        "stock_quantity": 30,
        "price_override": null,
        "is_active": true
      }
    ],
    
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```

### Response Fields

#### Product Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Unique product ID |
| `name` | string | Product name |
| `short_description` | string | Brief description (can be null) |
| `long_description` | string | Detailed description (can be null) |
| `price` | number | Product price |
| `rating` | number | Average rating (0-5) |
| `review_count` | integer | Number of reviews |
| `is_active` | boolean | Always `true` for public endpoint |
| `discount_type` | string | Discount type: PERCENTAGE, FIXED, or empty |
| `discount_value` | number | Discount amount |
| `gender` | string | Target gender: MEN, WOMEN, or UNISEX |
| `brand_id` | integer | Brand ID (can be null) |
| `brand_name` | string | Brand name (can be empty) |

#### Categories Field (NEW)

The `categories` field groups all associated categories by type:

```json
"categories": {
  "clothing": [
    { "id": 5, "name": "T-Shirts" },
    { "id": 7, "name": "Casual Wear" }
  ],
  "occasion": [
    { "id": 12, "name": "Casual" }
  ],
  "collection": [
    { "id": 8, "name": "Summer 2024" }
  ]
}
```

Each category object contains:
- `id` (integer) - Category ID
- `name` (string) - Category name

#### Images Field

Array of product images, ordered by `sort_order`:

```json
"images": [
  {
    "id": 101,
    "product_id": 42,
    "image_url": "https://s3.amazonaws.com/bucket/products/42_0.jpg",
    "sort_order": 1
  }
]
```

#### Variants Field

Array of product variants (size/color combinations):

```json
"variants": [
  {
    "id": 201,
    "product_id": 42,
    "size": "M",
    "color": "Blue",
    "stock_quantity": 50,
    "price_override": null,
    "is_active": true
  }
]
```

---

## 3. Get Product by ID

### Endpoint
```
GET /api/v1/products/{id}
```

### Description
Returns a single product by ID with all details.

### Authentication
**None required** - This is a public endpoint.

### Example Request

```bash
curl -X GET "http://localhost:9000/api/v1/products/42"
```

### Success Response (200 OK)

Same structure as the array response in "Get Public Products", but returns a single product object.

### Error Response (404 Not Found)

```json
{
  "error": "Product not found"
}
```

**HTTP Status Code:** 404

---

## 4. Error Handling

### HTTP Status Codes

| Status Code | Meaning | When It Occurs |
|-------------|---------|----------------|
| **200** | OK | Request successful |
| **404** | Not Found | Product/category doesn't exist |
| **500** | Internal Server Error | Database or server error |

### Error Response Format

All errors follow this format:

```json
{
  "error": "Error message describing what went wrong"
}
```

### Handling Errors in JavaScript

```javascript
async function fetchCategories() {
  try {
    const response = await fetch('http://localhost:9000/api/v1/categories');
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Categories not found');
      } else if (response.status === 500) {
        throw new Error('Server error. Please try again later.');
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    // Show error message to user
    showErrorToast(error.message);
    return [];
  }
}
```

---

## 5. Practical Examples

### Example 1: Display Category Grid on Homepage

**Use Case:** Show all collection categories with images on the homepage.

```javascript
async function displayCollections() {
  try {
    const response = await fetch(
      'http://localhost:9000/api/v1/categories?type=COLLECTION'
    );
    const collections = await response.json();
    
    const grid = document.getElementById('collections-grid');
    
    collections.forEach(collection => {
      const card = document.createElement('div');
      card.className = 'collection-card';
      card.innerHTML = `
        <img src="${collection.image_url}" alt="${collection.name}">
        <h3>${collection.name}</h3>
        <p>${collection.description}</p>
        <a href="/shop?collection=${collection.id}">Shop Now</a>
      `;
      grid.appendChild(card);
    });
    
  } catch (error) {
    console.error('Error loading collections:', error);
  }
}

// Call on page load
displayCollections();
```

**Expected Response:**
```json
[
  {
    "id": 8,
    "name": "Summer Collection 2024",
    "description": "Latest summer fashion trends",
    "category_type": "COLLECTION",
    "image_url": "https://s3.amazonaws.com/bucket/summer-2024.jpg",
    "is_marketing_visible": true
  }
]
```

---

### Example 2: Filter Products by Category

**Use Case:** Show products that belong to a specific category.

```javascript
async function getProductsByCategory(categoryId) {
  try {
    // Get all products
    const response = await fetch('http://localhost:9000/api/v1/products');
    const allProducts = await response.json();
    
    // Filter products that have this category
    const filteredProducts = allProducts.filter(product => {
      // Check all category types
      const allCategories = [
        ...product.categories.clothing,
        ...product.categories.occasion,
        ...product.categories.collection
      ];
      
      return allCategories.some(cat => cat.id === categoryId);
    });
    
    return filteredProducts;
    
  } catch (error) {
    console.error('Error filtering products:', error);
    return [];
  }
}

// Usage
const tshirts = await getProductsByCategory(5); // Category ID 5 = T-Shirts
console.log(`Found ${tshirts.length} t-shirts`);
```

---

### Example 3: Display Product with Categories

**Use Case:** Show product details page with all categories displayed.

```javascript
async function displayProductDetails(productId) {
  try {
    const response = await fetch(
      `http://localhost:9000/api/v1/products/${productId}`
    );
    
    if (!response.ok) {
      throw new Error('Product not found');
    }
    
    const product = await response.json();
    
    // Display product info
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = `$${product.price}`;
    document.getElementById('product-description').textContent = product.long_description;
    
    // Display categories
    const categoriesContainer = document.getElementById('product-categories');
    
    // Clothing categories
    if (product.categories.clothing.length > 0) {
      const clothingDiv = document.createElement('div');
      clothingDiv.innerHTML = `
        <h4>Clothing:</h4>
        ${product.categories.clothing.map(cat => 
          `<span class="tag">${cat.name}</span>`
        ).join('')}
      `;
      categoriesContainer.appendChild(clothingDiv);
    }
    
    // Occasion categories
    if (product.categories.occasion.length > 0) {
      const occasionDiv = document.createElement('div');
      occasionDiv.innerHTML = `
        <h4>Occasion:</h4>
        ${product.categories.occasion.map(cat => 
          `<span class="tag">${cat.name}</span>`
        ).join('')}
      `;
      categoriesContainer.appendChild(occasionDiv);
    }
    
    // Collection categories
    if (product.categories.collection.length > 0) {
      const collectionDiv = document.createElement('div');
      collectionDiv.innerHTML = `
        <h4>Collection:</h4>
        ${product.categories.collection.map(cat => 
          `<span class="tag">${cat.name}</span>`
        ).join('')}
      `;
      categoriesContainer.appendChild(collectionDiv);
    }
    
    // Display images
    const imageGallery = document.getElementById('image-gallery');
    product.images.forEach(img => {
      const imgElement = document.createElement('img');
      imgElement.src = img.image_url;
      imgElement.alt = product.name;
      imageGallery.appendChild(imgElement);
    });
    
  } catch (error) {
    console.error('Error loading product:', error);
    showErrorPage('Product not found');
  }
}

// Usage
displayProductDetails(42);
```

**Expected Response:**
```json
{
  "id": 42,
  "name": "Premium Cotton T-Shirt",
  "price": 1299.99,
  "categories": {
    "clothing": [
      { "id": 5, "name": "T-Shirts" },
      { "id": 7, "name": "Casual Wear" }
    ],
    "occasion": [
      { "id": 12, "name": "Casual" }
    ],
    "collection": [
      { "id": 8, "name": "Summer 2024" }
    ]
  },
  "images": [...],
  "variants": [...]
}
```

---

### Example 4: Build Category Navigation Menu

**Use Case:** Create a navigation menu with clothing categories.

```javascript
async function buildCategoryMenu() {
  try {
    const response = await fetch(
      'http://localhost:9000/api/v1/categories?type=CLOTHING'
    );
    const categories = await response.json();
    
    const menu = document.getElementById('category-menu');
    
    // Group by gender
    const menCategories = categories.filter(c => c.gender === 'MEN' || c.gender === 'UNISEX');
    const womenCategories = categories.filter(c => c.gender === 'WOMEN' || c.gender === 'UNISEX');
    
    // Build men's menu
    const menMenu = document.createElement('div');
    menMenu.innerHTML = `
      <h3>Men</h3>
      <ul>
        ${menCategories.map(cat => 
          `<li><a href="/shop?category=${cat.id}">${cat.name}</a></li>`
        ).join('')}
      </ul>
    `;
    menu.appendChild(menMenu);
    
    // Build women's menu
    const womenMenu = document.createElement('div');
    womenMenu.innerHTML = `
      <h3>Women</h3>
      <ul>
        ${womenCategories.map(cat => 
          `<li><a href="/shop?category=${cat.id}">${cat.name}</a></li>`
        ).join('')}
      </ul>
    `;
    menu.appendChild(womenMenu);
    
  } catch (error) {
    console.error('Error building menu:', error);
  }
}

// Call on page load
buildCategoryMenu();
```

---

## 6. React/Next.js Examples

### Fetch Categories Hook

```jsx
import { useState, useEffect } from 'react';

function useCategories(filters = {}) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const params = new URLSearchParams(filters);
        const response = await fetch(
          `http://localhost:9000/api/v1/categories?${params}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        
        const data = await response.json();
        setCategories(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchCategories();
  }, [JSON.stringify(filters)]);
  
  return { categories, loading, error };
}

// Usage
function CategoryGrid() {
  const { categories, loading, error } = useCategories({ type: 'COLLECTION' });
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="grid">
      {categories.map(category => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
```

---

## Summary

**Public Endpoints (No Auth Required):**
- ✅ `GET /api/v1/categories` - Get marketing-visible categories
- ✅ `GET /api/v1/products` - Get all active products
- ✅ `GET /api/v1/products/{id}` - Get product by ID

**Key Features:**
- ✅ Categories include `image_url` for banner images
- ✅ Only marketing-visible categories are returned
- ✅ Products include grouped categories (clothing, occasion, collection)
- ✅ Products can have multiple categories per type

**Error Handling:**
- ✅ 200 - Success
- ✅ 404 - Not found
- ✅ 500 - Server error

---

For admin-specific endpoints, see **`ADMIN_UI_CATEGORY_MANAGEMENT.md`** and **`ADMIN_UI_PRODUCT_MULTI_CATEGORY.md`**.

