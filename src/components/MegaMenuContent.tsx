import { Button } from "@/components/ui/button";
import MegaMenuSection from "./MegaMenuSection";
import MegaMenuCarousel from "./MegaMenuCarousel";
import { MegaMenuCategory } from "@/data/megaMenuData";

interface MegaMenuContentProps {
  menuItem: MegaMenuCategory;
}

const MegaMenuContent = ({ menuItem }: MegaMenuContentProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Carousel */}
        <div className="lg:col-span-1">
          <MegaMenuCarousel images={menuItem.carouselImages} autoPlayInterval={4000} />
          <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-darker-grotesque font-semibold tracking-wider uppercase text-sm transition-all duration-300">
            Discover Now
          </Button>
        </div>

        {/* Right Column: Categories and Collections */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Categories Section */}
            <MegaMenuSection
              title="Category"
              items={menuItem.categories}
              showViewAll={true}
              viewAllHref={`${menuItem.href}/all`}
            />

            {/* Collections Section */}
            <MegaMenuSection
              title="Collections"
              items={menuItem.collections}
              showViewAll={true}
              viewAllHref={`${menuItem.href}/collections`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuContent;

