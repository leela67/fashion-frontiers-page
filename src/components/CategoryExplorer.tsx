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
    <section id="collections-explore" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-black-mango text-4xl lg:text-5xl font-bold mb-4 text-primary tracking-tight">
            Explore by Collection
          </h2>
          <p className="font-darker-grotesque text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our curated collections, each telling a unique story of elegance and craftsmanship
          </p>
        </div>

        {/* Collections Grid - Responsive layout matching reference design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-hover"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
              </div>

              {/* Collection Name - Positioned at bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <h3 className="font-black-mango text-xl lg:text-2xl font-bold text-white leading-tight tracking-wide">
                  {collection.title}
                </h3>
              </div>

              {/* Explore Button - Appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                <button className="px-8 py-3 border-2 border-white text-white font-darker-grotesque font-medium tracking-widest uppercase text-sm hover:bg-white hover:text-primary transition-all duration-300">
                  Explore
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
