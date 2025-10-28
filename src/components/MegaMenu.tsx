import { useState } from "react";
import { ChevronDown } from "lucide-react";
import MegaMenuContent from "./MegaMenuContent";
import { MegaMenuCategory } from "@/data/megaMenuData";

interface MegaMenuProps {
  navLinks: MegaMenuCategory[];
}

const MegaMenu = ({ navLinks }: MegaMenuProps) => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = (label: string) => {
    setActiveLink(label);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="hidden lg:flex items-center gap-12">
      {navLinks.map((link) => (
        <div
          key={link.label}
          className="group"
          onMouseEnter={() => handleMouseEnter(link.label)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Link */}
          <a
            href={link.href}
            className="nav-text text-foreground relative flex items-center gap-1"
          >
            {link.label}
            {link.hasDropdown && (
              <ChevronDown
                className={`w-4 h-4 transition-smooth ${
                  activeLink === link.label ? "rotate-180" : ""
                }`}
              />
            )}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-smooth ${
                activeLink === link.label ? "w-full" : "w-0"
              }`}
            />
          </a>

          {/* Mega Menu Dropdown - Fixed positioning relative to viewport */}
          {link.hasDropdown && (
            <div
              className={`fixed left-1/2 top-16 lg:top-20 w-screen max-w-7xl bg-background shadow-elegant rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth z-50 ${
                isDropdownOpen ? "opacity-100 visible" : ""
              }`}
              style={{
                transform: "translateX(-50%)",
              }}
            >
              <MegaMenuContent menuItem={link} />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default MegaMenu;

