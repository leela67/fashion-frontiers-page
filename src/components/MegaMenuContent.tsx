import MegaMenuSection from "./MegaMenuSection";
import MegaMenuCarousel from "./MegaMenuCarousel";
import { MegaMenuCategory } from "@/data/megaMenuData";

interface MegaMenuContentProps {
  menuItem: MegaMenuCategory;
}

const MegaMenuContent = ({ menuItem }: MegaMenuContentProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-8">
      {/* Menu Title */}
      <h2 className="font-darker-grotesque text-lg font-semibold tracking-wide uppercase text-foreground mb-6">
        {menuItem.label}
      </h2>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 mb-6" />

      {/* Content Grid: Carousel on left, 3 columns on right */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Carousel */}
        <div className="lg:col-span-1">
          <MegaMenuCarousel images={menuItem.carouselImages} autoPlayInterval={4000} />
        </div>

        {/* Right Columns: Three content sections */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-3 gap-8">
            {/* By Clothing Section */}
            <MegaMenuSection
              title="By clothing"
              items={menuItem.categories}
              showViewAll={false}
            />

            {/* By Occasion Section */}
            <MegaMenuSection
              title="by occasion"
              items={menuItem.occasions || []}
              showViewAll={false}
            />

            {/* By Collection Section */}
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

