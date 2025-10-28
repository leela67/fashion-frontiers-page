import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const collections = [
  {
    id: "kashmir",
    title: "A Poème By The Lake: Kashmir",
    image: collection1,
  },
  {
    id: "couture-2024",
    title: "India Couture Week 2024",
    image: collection2,
  },
  {
    id: "love-always",
    title: "Love Always",
    image: collection3,
  },
  {
    id: "love-is",
    title: "Love Is",
    image: collection4,
  },
  {
    id: "mon-amour",
    title: "Mon Amour Jag Niwas",
    image: hero1,
  },
  {
    id: "rang-mahal",
    title: "Rang Mahal",
    image: hero2,
  },
];

const CollectionExplorer = () => {
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
          {collections.map((collection, idx) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden cursor-pointer transition-elegant hover:shadow-hover animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Container with Premium Overlay */}
              <div className="relative aspect-portrait overflow-hidden bg-muted">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.12]"
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
                    {collection.title}
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
      </div>
    </section>
  );
};

export default CollectionExplorer;
