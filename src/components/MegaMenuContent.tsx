import MegaMenuSection from "./MegaMenuSection";
import MegaMenuCarousel from "./MegaMenuCarousel";
import { MegaMenuCategory } from "@/data/megaMenuData";

interface MegaMenuContentProps {
  menuItem: MegaMenuCategory;
}

const MegaMenuContent = ({ menuItem }: MegaMenuContentProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-8">
      {/* Main Layout: Carousel Left, Three Columns Right */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Carousel */}
        <div className="lg:col-span-1">
          <MegaMenuCarousel images={menuItem.carouselImages} autoPlayInterval={4000} />
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

