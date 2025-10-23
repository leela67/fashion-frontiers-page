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
    <section id="collections-explore" className="py-24 lg:py-40 bg-pearl">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Luxury Section Header */}
        <div className="text-center mb-20 lg:mb-28 animate-fade-in">
          <p className="font-darker-grotesque text-xs md:text-sm text-muted-foreground tracking-[0.3em] uppercase mb-4 font-light">
            Our Collections
          </p>
          <h2 className="font-black-mango text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-primary tracking-tight leading-tight">
            Explore by Collection
          </h2>
          <div className="w-24 h-[2px] bg-primary/40 mx-auto mb-8" />
          <p className="font-darker-grotesque text-muted-foreground text-base lg:text-lg max-w-3xl mx-auto leading-[1.8] font-light">
            Discover our curated collections, each telling a unique story of elegance, craftsmanship, and timeless beauty
          </p>
        </div>

        {/* Refined Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {collections.map((collection, idx) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden cursor-pointer transition-elegant hover:shadow-hover"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Container with Refined Overlay */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Decorative border on hover */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/30 transition-all duration-700 pointer-events-none" />
              </div>

              {/* Collection Title - Always visible, refined positioning */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="font-black-mango text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight mb-3">
                    {collection.title}
                  </h3>
                  <div className="w-12 h-[2px] bg-white/60 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>

              {/* Luxury Explore Button - Sophisticated hover state */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/30 backdrop-blur-[2px]">
                <button className="relative px-10 py-4 border border-white text-white font-darker-grotesque font-light tracking-[0.2em] uppercase text-xs hover:bg-white hover:text-charcoal transition-elegant overflow-hidden group/btn">
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
