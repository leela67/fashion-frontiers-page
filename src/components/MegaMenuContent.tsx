import { useMemo } from "react";
import MegaMenuSection from "./MegaMenuSection";
import MegaMenuCarousel from "./MegaMenuCarousel";
import { MegaMenuCategory } from "@/data/megaMenuData";
import { useCategoriesWithGender } from "@/hooks/useCategoriesWithGender";
import collectionImg1 from "@/assets/collection-1.jpg";

interface MegaMenuContentProps {
  menuItem: MegaMenuCategory;
}

const MegaMenuContent = ({ menuItem }: MegaMenuContentProps) => {
  // Determine gender filter based on menu label
  const genderFilter = useMemo(() => {
    if (menuItem.label === "Shop Women") return "WOMEN";
    if (menuItem.label === "Shop Mens") return "MEN";
    return undefined; // For Collections and About, no gender filter
  }, [menuItem.label]);

  // Fetch categories with gender filter
  const { categories } = useCategoriesWithGender(
    genderFilter ? { gender: genderFilter as "MEN" | "WOMEN" } : undefined
  );

  // Get dynamic images from categories based on menu type
  const dynamicImages = useMemo(() => {
    let filteredCategories = categories.filter(cat => cat.is_marketing_visible && cat.image_url);

    // For Collections menu, show all marketing visible categories (no gender filter)
    // For Shop Women/Mens, the categories are already filtered by gender via the hook

    const images = filteredCategories.map(cat => cat.image_url!);

    // If no dynamic images, fall back to static images
    return images.length > 0 ? images : menuItem.carouselImages;
  }, [categories, menuItem.carouselImages]);

  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-8">
      {/* Main Layout: Carousel Left, Three Columns Right */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Carousel */}
        <div className="lg:col-span-1">
          <MegaMenuCarousel images={dynamicImages} autoPlayInterval={4000} />
        </div>

        {/* Right Columns: Three Column Layout */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-3 gap-12">
            {/* Column 1: By Clothing */}
            <MegaMenuSection
              title="By clothing"
              items={menuItem.categories}
              showViewAll={false}
            />

            {/* Column 2: By Occasion */}
            <MegaMenuSection
              title="by occasion"
              items={menuItem.occasions || []}
              showViewAll={false}
            />

            {/* Column 3: By Collection */}
            <MegaMenuSection
              title="by collection"
              items={menuItem.collections}
              showViewAll={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuContent;

