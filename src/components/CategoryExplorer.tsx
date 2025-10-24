import { collectionImages, heroImages } from "@/data/oneDriveImages";

const collections = [
  {
    id: "kashmir",
    title: "A Poème By The Lake: Kashmir",
    image: collectionImages.collection1,
  },
  {
    id: "couture-2024",
    title: "India Couture Week 2024",
    image: collectionImages.collection2,
  },
  {
    id: "love-always",
    title: "Love Always",
    image: collectionImages.collection3,
  },
  {
    id: "love-is",
    title: "Love Is",
    image: collectionImages.collection4,
  },
  {
    id: "mon-amour",
    title: "Mon Amour Jag Niwas",
    image: heroImages.hero1,
  },
  {
    id: "rang-mahal",
    title: "Rang Mahal",
    image: heroImages.hero2,
  },
];

const CollectionExplorer = () => {
  return (
    <section id="collections-explore" className="py-28 lg:py-44 bg-pearl">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Enhanced Luxury Section Header */}
        <div className="text-center mb-24 lg:mb-32 animate-fade-in">
          <p className="font-darker-grotesque text-xs md:text-sm text-muted-foreground tracking-[0.35em] uppercase mb-5 font-light">
            Our Collections
          </p>
          <h2 className="font-black-mango text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 text-primary tracking-tight leading-tight">
            Explore by Collection
          </h2>
          <div className="w-28 h-[2px] bg-primary/50 mx-auto mb-10" />
          <p className="font-darker-grotesque text-muted-foreground text-base lg:text-lg max-w-3xl mx-auto leading-[1.9] font-light">
            Discover our curated collections, each telling a unique story of elegance, craftsmanship, and timeless beauty
          </p>
        </div>

        {/* Premium Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {collections.map((collection, idx) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden cursor-pointer transition-elegant hover:shadow-hover animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Container with Premium Overlay */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.12]"
                  loading="lazy"
                />
                {/* Sophisticated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-600" />
                
                {/* Refined decorative border on hover */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/40 transition-all duration-700 pointer-events-none" />
              </div>

              {/* Collection Title - Premium positioning */}
              <div className="absolute inset-0 flex flex-col justify-end p-9 lg:p-11">
                <div className="transform transition-transform duration-600 group-hover:-translate-y-3">
                  <h3 className="font-black-mango text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
                    {collection.title}
                  </h3>
                  <div className="w-14 h-[2px] bg-white/70 group-hover:w-24 transition-all duration-600" />
                </div>
              </div>

              {/* Premium Explore Button - Enhanced sophistication */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-600 bg-black/35 backdrop-blur-[3px]">
                <button className="relative px-12 py-5 border-2 border-white text-white font-darker-grotesque font-light tracking-[0.25em] uppercase text-xs hover:bg-white hover:text-charcoal transition-elegant overflow-hidden group/btn">
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
