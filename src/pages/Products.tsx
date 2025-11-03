import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useProducts } from "@/hooks/useProducts";
import {
  ApiProduct,
  formatPrice,
  filterProductsByCategory,
  getUniqueSizes,
  getUniqueColors,
  calculateDiscountedPrice,
  isProductInStock
} from "@/services/api";
import { ChevronDown, SlidersHorizontal, Loader2 } from "lucide-react";

type SortOption =
  | "featured"
  | "best-selling"
  | "title-asc"
  | "title-desc"
  | "price-asc"
  | "price-desc";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);

  // Get category from URL params
  const categoryIdParam = searchParams.get("category");
  const categoryId = categoryIdParam ? parseInt(categoryIdParam) : null;

  // Fetch products from API
  const { products: apiProducts, loading, error } = useProducts();

  // Filter by category if specified in URL
  const categoryFilteredProducts = useMemo(() => {
    if (!apiProducts) return [];
    if (!categoryId) return apiProducts;
    return filterProductsByCategory(apiProducts, categoryId);
  }, [apiProducts, categoryId]);

  // Sort products
  const sortedProducts = useMemo(() => {
    if (!categoryFilteredProducts) return [];

    return [...categoryFilteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return calculateDiscountedPrice(a) - calculateDiscountedPrice(b);
        case "price-desc":
          return calculateDiscountedPrice(b) - calculateDiscountedPrice(a);
        case "title-asc":
          return a.name.localeCompare(b.name);
        case "title-desc":
          return b.name.localeCompare(a.name);
        case "best-selling":
          return b.review_count - a.review_count;
        default:
          return a.sort_order - b.sort_order;
      }
    });
  }, [categoryFilteredProducts, sortBy]);

  // Filter products by user selections
  const filteredProducts = useMemo(() => {
    return sortedProducts.filter((product) => {
      const discountedPrice = calculateDiscountedPrice(product);

      // Price filter
      if (discountedPrice < priceRange[0] || discountedPrice > priceRange[1]) {
        return false;
      }

      // Size filter
      if (selectedSizes.length > 0) {
        const productSizes = getUniqueSizes(product.variants);
        if (!selectedSizes.some((size) => productSizes.includes(size))) {
          return false;
        }
      }

      // Color filter
      if (selectedColors.length > 0) {
        const productColors = getUniqueColors(product.variants);
        if (!selectedColors.some((color) => productColors.includes(color))) {
          return false;
        }
      }

      return true;
    });
  }, [sortedProducts, priceRange, selectedSizes, selectedColors]);

  // Get all available sizes and colors from all products
  const allSizes = useMemo(() => {
    if (!apiProducts) return [];
    const sizes = new Set<string>();
    apiProducts.forEach((product) => {
      getUniqueSizes(product.variants).forEach((size) => sizes.add(size));
    });
    return Array.from(sizes).sort();
  }, [apiProducts]);

  const allColors = useMemo(() => {
    if (!apiProducts) return [];
    const colors = new Set<string>();
    apiProducts.forEach((product) => {
      getUniqueColors(product.variants).forEach((color) => colors.add(color));
    });
    return Array.from(colors).sort();
  }, [apiProducts]);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const clearFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 500000]);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Collection Header */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                Our <span className="text-secondary">Collections</span>
              </h1>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                Discover our exquisite range of handcrafted couture pieces, each telling a unique story of heritage and elegance.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            {/* Loading State */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-16">
                <Loader2 className="w-12 h-12 text-secondary animate-spin mb-4" />
                <p className="font-body text-lg text-muted-foreground">Loading products...</p>
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <div className="text-center py-16">
                <p className="font-body text-lg text-red-500 mb-4">
                  {error}
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center justify-center px-6 py-3 btn-secondary font-body font-semibold"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Products Content */}
            {!loading && !error && (
              <>
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 border border-border hover:border-secondary transition-smooth"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="font-body text-sm">Filters</span>
                  {(selectedSizes.length > 0 || selectedColors.length > 0) && (
                    <span className="w-5 h-5 rounded-full bg-secondary text-background text-xs flex items-center justify-center">
                      {selectedSizes.length + selectedColors.length}
                    </span>
                  )}
                </button>
                {(selectedSizes.length > 0 || selectedColors.length > 0) && (
                  <button
                    onClick={clearFilters}
                    className="font-body text-sm text-muted-foreground hover:text-secondary transition-smooth"
                  >
                    Clear all
                  </button>
                )}
              </div>

              <div className="flex items-center gap-4">
                <span className="font-body text-sm text-muted-foreground">
                  {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
                </span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="appearance-none px-4 py-2 pr-10 border border-border bg-background font-body text-sm hover:border-secondary transition-smooth cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-asc">Alphabetically, A-Z</option>
                    <option value="title-desc">Alphabetically, Z-A</option>
                    <option value="price-asc">Price, Low to High</option>
                    <option value="price-desc">Price, High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              {showFilters && (
                <aside className="lg:w-64 flex-shrink-0">
                  <div className="sticky top-24 space-y-6">
                    {/* Size Filter */}
                    <div className="border-b border-border pb-6">
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Size</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {allSizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => toggleSize(size)}
                            className={`px-3 py-2 border text-sm font-body transition-smooth ${
                              selectedSizes.includes(size)
                                ? "border-secondary bg-primary/10 text-secondary"
                                : "border-border hover:border-secondary"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color Filter */}
                    <div className="border-b border-border pb-6">
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Color</h3>
                      <div className="space-y-2">
                        {allColors.map((color) => (
                          <label key={color} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={selectedColors.includes(color)}
                              onChange={() => toggleColor(color)}
                              className="w-4 h-4 border-border"
                            />
                            <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
                              {color}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Price Range</h3>
                      <div className="space-y-3">
                        <input
                          type="range"
                          min="0"
                          max="500000"
                          step="10000"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                          className="w-full"
                        />
                        <div className="flex items-center justify-between">
                          <span className="font-body text-sm text-muted-foreground">
                            {formatPrice(priceRange[0])}
                          </span>
                          <span className="font-body text-sm text-muted-foreground">
                            {formatPrice(priceRange[1])}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              )}

              {/* Product Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-16">
                    <p className="font-body text-lg text-muted-foreground mb-4">
                      No products found matching your filters.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="inline-flex items-center justify-center px-6 py-3 btn-secondary font-body font-semibold"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
            </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }: { product: ApiProduct }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  const inStock = isProductInStock(product);
  const discountedPrice = calculateDiscountedPrice(product);
  const hasDiscount = discountedPrice < product.price;

  return (
    <a
      href={`/products/${product.id}`}
      className="group block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-card mb-4">
        <img
          src={product.images[currentImageIndex]?.image_url || product.images[0]?.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!inStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <span className="font-heading text-lg font-semibold text-foreground">Sold Out</span>
          </div>
        )}
        {hasDiscount && (
          <div className="absolute top-4 right-4 bg-secondary text-background px-3 py-1 font-body text-sm font-semibold">
            {product.discount_type === "PERCENTAGE"
              ? `-${product.discount_value}%`
              : `-${formatPrice(product.discount_value || 0)}`}
          </div>
        )}
      </div>
      <div className="space-y-2">
        <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground group-hover:text-secondary transition-smooth">
          {product.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground line-clamp-2">
          {product.short_description || product.long_description}
        </p>
        <div className="flex items-center gap-2">
          <p className="font-body text-base font-semibold text-secondary">
            {formatPrice(discountedPrice)}
          </p>
          {hasDiscount && (
            <p className="font-body text-sm text-muted-foreground line-through">
              {formatPrice(product.price)}
            </p>
          )}
        </div>
      </div>
    </a>
  );
};

export default Products;

