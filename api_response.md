# API Response Structure Reference

This document contains the actual API response structure from the backend for reference and debugging purposes.

## Products API Response

### Endpoint
```
GET /api/v1/products
```

### Response Structure

⚠️ **IMPORTANT**: The API returns a **paginated response object**, NOT a direct array!

The response is wrapped in an object with pagination metadata:

```json
{
  "limit": 12,
  "page": 1,
  "results": [
    {
      "id": 1,
      "name": "Golden Raasleela Lehenga",
      "short_description": "Handcrafted bridal lehenga",
      "long_description": "Beautiful golden lehenga from Raasleela 2025 collection.",
      "price": 49999,
      "rating": 0,
      "review_count": 0,
      "is_active": true,
      "discount_type": "NONE",
      "discount_value": 0,
      "gender": "WOMEN",
      "sort_order": 0,
      "brand_id": 1,
      "brand_name": "Raasleela",

      "categories": {
        "clothing": [],
        "occasion": [],
        "collection": []
      },

      "images": [
        {
          "id": 1,
          "product_id": 1,
          "image_url": "https://media.istockphoto.com/...",
          "alt_text": "Golden Raasleela Lehenga",
          "sort_order": 1
        }
      ],

      "variants": null,

      "created_at": "2025-11-01T01:22:32.377813+05:30",
      "updated_at": "2025-11-01T01:22:32.377813+05:30"
    }
  ],
  "total": 14
}
```

### Response Wrapper Fields

| Field | Type | Description |
|-------|------|-------------|
| `limit` | integer | Number of items per page |
| `page` | integer | Current page number |
| `results` | array | **Array of product objects** |
| `total` | integer | Total number of products |

## Field Descriptions

### Product Fields

| Field | Type | Description | Can be null? |
|-------|------|-------------|--------------|
| `id` | integer | Unique product ID | No |
| `name` | string | Product name | No |
| `short_description` | string | Brief description | Yes |
| `long_description` | string | Detailed description | Yes |
| `price` | number | Product price | No |
| `rating` | number | Average rating (0-5) | No |
| `review_count` | integer | Number of reviews | No |
| `is_active` | boolean | Always `true` for public endpoint | No |
| `discount_type` | string | "PERCENTAGE", "FIXED", "NONE", or null | Yes |
| `discount_value` | number | Discount amount | Yes |
| `gender` | string | "MEN", "WOMEN", or "UNISEX" | No |
| `sort_order` | integer | Display order | No |
| `brand_id` | integer | Brand ID | Yes |
| `brand_name` | string | Brand name | No (can be empty string) |
| `created_at` | string | ISO 8601 timestamp | No |
| `updated_at` | string | ISO 8601 timestamp | No |

### Categories Field

The `categories` field is an object that groups all associated categories by type:

```json
"categories": {
  "clothing": [
    { "id": 5, "name": "T-Shirts" }
  ],
  "occasion": [
    { "id": 12, "name": "Casual" }
  ],
  "collection": [
    { "id": 8, "name": "Summer 2024" }
  ]
}
```

Each category array can be empty `[]` if no categories of that type are assigned.

### Images Field

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

**Important**: The `images` array can be empty `[]` if no images are uploaded.

### Variants Field

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

⚠️ **CRITICAL**: The `variants` field can be **`null`** (not an empty array) if no variants are defined!

## Important Notes

### Fields NOT in API Response

The following fields are **NOT** included in the API response:
- `fabric_description`
- `embroidery_description`
- `washing_care`

These fields have been added to the TypeScript interface as **optional** fields to prevent TypeScript errors, but they will always be `undefined` in the actual API response.

### Edge Cases to Handle

1. **Paginated Response**: The API returns `{ limit, page, results, total }`, NOT a direct array!
   - ✅ **FIXED**: `fetchProducts()` now extracts `results` array from the wrapper

2. **Empty Arrays**: The API may return empty arrays for:
   - `images` - Product has no images
   - `categories.clothing` - No clothing categories
   - `categories.occasion` - No occasion categories
   - `categories.collection` - No collection categories

3. **Null Values**: The following fields can be `null`:
   - `short_description`
   - `long_description`
   - `discount_type`
   - `discount_value`
   - `brand_id`
   - `variants` - ⚠️ **CRITICAL**: Can be `null`, not just empty array!
   - `price_override` (in variants)

4. **Empty Strings**: The `brand_name` field can be an empty string `""` if no brand is assigned.

5. **Discount Type "NONE"**: The API uses `"NONE"` as a discount type (not just `null`)

## Example: Product with Minimal Data

```json
{
  "id": 1,
  "name": "Basic Product",
  "short_description": null,
  "long_description": null,
  "price": 999.99,
  "rating": 0,
  "review_count": 0,
  "is_active": true,
  "discount_type": "NONE",
  "discount_value": 0,
  "gender": "UNISEX",
  "sort_order": 0,
  "brand_id": null,
  "brand_name": "",
  "categories": {
    "clothing": [],
    "occasion": [],
    "collection": []
  },
  "images": [],
  "variants": null,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

This represents a product with:
- No descriptions
- No discount (discount_type = "NONE")
- No brand
- No categories
- No images
- No variants (variants = null, not [])

The frontend code must handle this gracefully!

## Testing the API

### Test with curl

```bash
# Get all products
curl -X GET "http://localhost:9000/api/v1/products"

# Get a specific product
curl -X GET "http://localhost:9000/api/v1/products/42"

# Filter by gender
curl -X GET "http://localhost:9000/api/v1/products?gender=MEN"

# Search for products
curl -X GET "http://localhost:9000/api/v1/products?search=shirt"
```

### Test with JavaScript

```javascript
// Fetch all products
const response = await fetch('http://localhost:9000/api/v1/products');
const products = await response.json();
console.log('Products:', products);
console.log('Is array?', Array.isArray(products));
console.log('Count:', products.length);
```

