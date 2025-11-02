import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, formatPrice } from "@/data/products";
import { Product, SortOption } from "@/types/product";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";

const Products = () => {
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  // Filter products
  const filteredProducts = sortedProducts.filter((product) => {
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    // Size filter
    if (selectedSizes.length > 0) {
      const productSizes = product.variants.map((v) => v.size);
      if (!selectedSizes.some((size) => productSizes.includes(size))) {
        return false;
      }
    }

    // Color filter
    if (selectedColors.length > 0) {
      const productColors = product.variants.map((v) => v.color);
      if (!selectedColors.some((color) => productColors.includes(color))) {
        return false;
      }
    }

    return true;
  });

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

  const allSizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const allColors = ["Royal Blue", "Ivory", "Jade Green", "Pink", "Red", "Gold"];

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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }: { product: Product }) => {
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

  return (
    <a
      href={`/products/${product.handle}`}
      className="group block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-card mb-4">
        <img
          src={product.images[currentImageIndex]?.src || product.featuredImage.src}
          alt={product.images[currentImageIndex]?.alt || product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!product.available && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <span className="font-heading text-lg font-semibold text-foreground">Sold Out</span>
          </div>
        )}
      </div>
      <div className="space-y-2">
        <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground group-hover:text-secondary transition-smooth">
          {product.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <p className="font-body text-base font-semibold text-secondary">{formatPrice(product.price)}</p>
      </div>
    </a>
  );
};

export default Products;

