import categoryWomen from "@/assets/category-women.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryCollection from "@/assets/category-collection.jpg";

const categories = [
  {
    id: "women",
    title: "Women",
    image: categoryWomen,
    description: "Elegant gowns & sophisticated dresses",
  },
  {
    id: "men",
    title: "Men",
    image: categoryMen,
    description: "Tailored suits & formal wear",
  },
  {
    id: "collection",
    title: "Collection",
    image: categoryCollection,
    description: "Exclusive designer pieces",
  },
];

const CategoryExplorer = () => {
  return (
    <section id="categories" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-black-mango text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Explore by Categories
          </h2>
          <p className="font-darker-grotesque text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our curated collections designed for every occasion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden cursor-pointer shadow-elegant hover:shadow-hover transition-elegant"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 lg:p-8">
                <h3 className="font-black-mango text-3xl lg:text-4xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="font-darker-grotesque text-white/90 text-sm lg:text-base mb-4">
                  {category.description}
                </p>
                <button className="self-start px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-primary font-darker-grotesque font-medium tracking-wider uppercase text-sm transition-smooth">
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

export default CategoryExplorer;
