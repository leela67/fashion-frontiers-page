import { useCategories } from "@/hooks/useCategories";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import collection1 from "@/assets/collection-1.jpg";

const CollectionExplorer = () => {
  const { categories, loading, error } = useCategories();
  const navigate = useNavigate();

  // Filter categories where is_marketing_visible is true
  const marketingCategories = categories.filter(cat => cat.is_marketing_visible);

  // Handle category click - navigate to products page with appropriate filters
  const handleCategoryClick = (category: typeof categories[0]) => {
    let url = "/products";
    const params = new URLSearchParams();

    // Add gender filter
    if (category.gender === "MEN") {
      params.append("gender", "MEN");
    } else if (category.gender === "WOMEN") {
      params.append("gender", "WOMEN");
    }
    // For UNISEX, don't add gender filter (show all products)

    // Add category ID and type
    params.append("category", category.id.toString());
    params.append("type", category.category_type.toLowerCase());

    const queryString = params.toString();
    if (queryString) {
      url += `?${queryString}`;
    }

    navigate(url);
  };

  // Handle "Explore Collection" button click
  const handleExploreAllClick = () => {
    navigate("/products");
  };

  if (loading) {
    return (
      <section id="collections-explore" className="py-16 lg:py-24 bg-pearl">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="collections-explore" className="py-16 lg:py-24 bg-pearl">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="text-center text-muted-foreground">
            <p>Unable to load collections. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="collections-explore" className="py-16 lg:py-24 bg-pearl">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        {/* Enhanced Luxury Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <p className="subheading-sm text-muted-foreground tracking-[0.35em] mb-3 font-light">
            Our Collections
          </p>
          <h2 className="heading-luxury heading-6xl mb-5 text-primary tracking-tight leading-tight">
            Explore by Collection
          </h2>
          <div className="w-24 h-[2px] bg-primary/50 mx-auto mb-6" />
          <p className="body-text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Discover our curated collections, each telling a unique story of elegance, craftsmanship, and timeless beauty
          </p>
        </div>

        {/* Premium Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {marketingCategories.map((category, idx) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="group relative overflow-hidden cursor-pointer transition-elegant hover:shadow-hover animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Container with Premium Overlay */}
              <div className="relative aspect-portrait overflow-hidden bg-muted">
                <img
                  src={category.image_url || collection1}
                  alt={category.name}
                  className="w-full h-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.12]"
                  loading="lazy"
                />
                {/* Sophisticated gradient overlay */}
                <div className="absolute inset-0 overlay-light opacity-85 group-hover:opacity-95 transition-opacity duration-600" />

                {/* Refined decorative border on hover */}
                <div className="absolute inset-4 border border-hero/0 group-hover:border-hero/40 transition-elegant pointer-events-none" />
              </div>

              {/* Collection Title - Premium positioning */}
              <div className="absolute inset-0 flex flex-col justify-end p-9 lg:p-11">
                <div className="transform transition-elegant group-hover:-translate-y-3">
                  <h3 className="heading-luxury heading-4xl text-hero leading-tight tracking-tight mb-4">
                    {category.name}
                  </h3>
                  <div className="w-14 h-[2px] bg-hero/70 group-hover:w-24 transition-elegant" />
                </div>
              </div>

              {/* Premium Explore Button - Enhanced sophistication */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-elegant overlay-dark-40 backdrop-blur-[3px]">
                <button className="relative px-12 py-5 border-2 border-hero text-hero cta-text font-light tracking-[0.25em] hover:bg-hero hover:text-charcoal transition-elegant overflow-hidden group/btn">
                  <span className="relative z-10">Explore Collection</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Collections Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleExploreAllClick}
            className="px-12 py-5 border-2 border-primary text-primary cta-text font-light tracking-[0.25em] hover:bg-primary hover:text-background transition-elegant"
          >
            Explore All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionExplorer;
