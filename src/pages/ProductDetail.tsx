import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useProduct } from "@/hooks/useProduct";
import { useProducts } from "@/hooks/useProducts";
import {
  formatPrice,
  getUniqueSizes,
  getUniqueColors,
  calculateDiscountedPrice,
  isProductInStock,
  ApiProduct
} from "@/services/api";
import { ChevronLeft, ChevronRight, Minus, Plus, Share2, Heart, Loader2 } from "lucide-react";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [showSizeChart, setShowSizeChart] = useState(false);

  // Parse product ID from handle (assuming handle is the product ID)
  const productId = handle ? parseInt(handle) : null;

  // Fetch product from API
  const { product, loading, error } = useProduct(productId);

  // Fetch all products for related products
  const { products: allProducts } = useProducts();

  // Set default selections when product loads
  useEffect(() => {
    if (product) {
      const sizes = getUniqueSizes(product.variants);
      const colors = getUniqueColors(product.variants);

      if (sizes.length > 0 && !selectedSize) {
        setSelectedSize(sizes[0]);
      }
      if (colors.length > 0 && !selectedColor) {
        setSelectedColor(colors[0]);
      }
    }
  }, [product]);

  // Redirect if product not found
  useEffect(() => {
    if (error && error.includes("not found")) {
      navigate("/products");
    }
  }, [error, navigate]);

  const handlePrevImage = () => {
    if (!product) return;
    setSelectedImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    if (!product) return;
    setSelectedImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (!product) return;
    // TODO: Implement cart functionality
    alert(`Added ${quantity} x ${product.name} (${selectedSize}, ${selectedColor}) to cart`);
  };

  // Get related products (exclude current product)
  const relatedProducts = allProducts
    ? allProducts.filter((p) => p.id !== product?.id).slice(0, 3)
    : [];

  // Get available sizes and colors
  const availableSizes = product ? getUniqueSizes(product.variants) : [];
  const availableColors = product ? getUniqueColors(product.variants) : [];

  // Calculate prices
  const inStock = product ? isProductInStock(product) : false;
  const discountedPrice = product ? calculateDiscountedPrice(product) : 0;
  const hasDiscount = product ? discountedPrice < product.price : false;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 md:pt-32">
        {/* Loading State */}
        {loading && (
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="flex flex-col items-center justify-center py-16">
                <Loader2 className="w-12 h-12 text-secondary animate-spin mb-4" />
                <p className="font-body text-lg text-muted-foreground">Loading product...</p>
              </div>
            </div>
          </section>
        )}

        {/* Error State */}
        {error && !loading && (
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="text-center py-16">
                <p className="font-body text-lg text-red-500 mb-4">
                  {error}
                </p>
                <button
                  onClick={() => navigate("/products")}
                  className="inline-flex items-center justify-center px-6 py-3 btn-secondary font-body font-semibold"
                >
                  Back to Products
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Product Section */}
        {!loading && !error && product && (
        <section className="py-8 md:py-12 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative aspect-[3/4] bg-card overflow-hidden group">
                  <img
                    src={product.images[selectedImageIndex]?.image_url || product.images[0]?.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Navigation Arrows */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background flex items-center justify-center transition-smooth opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background flex items-center justify-center transition-smooth opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Images */}
                {product.images.length > 1 && (
                  <div className="grid grid-cols-5 gap-2">
                    {product.images.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`aspect-square overflow-hidden border-2 transition-smooth ${
                          selectedImageIndex === index
                            ? "border-secondary"
                            : "border-border hover:border-secondary/50"
                        }`}
                      >
                        <img
                          src={image.image_url}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-3 mb-6">
                    <p className="font-body text-2xl md:text-3xl font-semibold text-secondary">
                      {formatPrice(discountedPrice)}
                    </p>
                    {hasDiscount && (
                      <p className="font-body text-xl text-muted-foreground line-through">
                        {formatPrice(product.price)}
                      </p>
                    )}
                  </div>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {product.long_description || product.short_description}
                  </p>
                  {!inStock && (
                    <div className="mt-4 px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-500 font-body text-sm font-semibold">
                      Out of Stock
                    </div>
                  )}
                </div>

                {/* Size Selection */}
                {availableSizes.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="font-body text-sm font-semibold text-foreground">
                        Size: <span className="text-secondary">{selectedSize}</span>
                      </label>
                      <button
                        onClick={() => setShowSizeChart(!showSizeChart)}
                        className="font-body text-sm text-muted-foreground hover:text-secondary transition-smooth underline"
                      >
                        Size Chart
                      </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {availableSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-3 border font-body text-sm font-semibold transition-smooth ${
                            selectedSize === size
                              ? "border-secondary bg-primary/10 text-secondary"
                              : "border-border hover:border-secondary"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selection */}
                {availableColors.length > 0 && (
                  <div>
                    <label className="font-body text-sm font-semibold text-foreground mb-3 block">
                      Color: <span className="text-secondary">{selectedColor}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableColors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-4 py-3 border font-body text-sm transition-smooth ${
                            selectedColor === color
                              ? "border-secondary bg-primary/10 text-secondary"
                              : "border-border hover:border-secondary"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity Selector */}
                <div>
                  <label className="font-body text-sm font-semibold text-foreground mb-3 block">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="px-4 py-3 hover:bg-primary/10 transition-smooth"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-6 py-3 font-body text-base font-semibold border-x border-border">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="px-4 py-3 hover:bg-primary/10 transition-smooth"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className="space-y-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={!inStock}
                    className="w-full px-8 py-4 btn-primary font-body text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {inStock ? "Add to Cart" : "Sold Out"}
                  </button>
                  <div className="flex gap-3">
                    <button className="flex-1 px-6 py-3 border border-border hover:border-secondary transition-smooth flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5" />
                      <span className="font-body text-sm">Add to Wishlist</span>
                    </button>
                    <button className="flex-1 px-6 py-3 border border-border hover:border-secondary transition-smooth flex items-center justify-center gap-2">
                      <Share2 className="w-5 h-5" />
                      <span className="font-body text-sm">Share</span>
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="border-t border-border pt-6 space-y-4">
                  {product.fabric_description && (
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground mb-2">
                        Fabric Description
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">{product.fabric_description}</p>
                    </div>
                  )}
                  {product.embroidery_description && (
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground mb-2">
                        Embroidery Details
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">{product.embroidery_description}</p>
                    </div>
                  )}
                  {product.washing_care && (
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground mb-2">
                        Washing Care
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">{product.washing_care}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 md:py-16 bg-card">
            <div className="container mx-auto px-4 lg:px-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {relatedProducts.map((relatedProduct) => {
                  const relatedDiscountedPrice = calculateDiscountedPrice(relatedProduct);
                  const relatedHasDiscount = relatedDiscountedPrice < relatedProduct.price;

                  return (
                    <a
                      key={relatedProduct.id}
                      href={`/products/${relatedProduct.id}`}
                      className="group block"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-background mb-4">
                        <img
                          src={relatedProduct.images[0]?.image_url}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground group-hover:text-secondary transition-smooth">
                          {relatedProduct.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <p className="font-body text-base font-semibold text-secondary">
                            {formatPrice(relatedDiscountedPrice)}
                          </p>
                          {relatedHasDiscount && (
                            <p className="font-body text-sm text-muted-foreground line-through">
                              {formatPrice(relatedProduct.price)}
                            </p>
                          )}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;

