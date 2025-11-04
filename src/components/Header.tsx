import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenu from "@/components/MegaMenu";
import { megaMenuData } from "@/data/megaMenuData";
import { useCategories } from "@/hooks/useCategories";
import { buildMegaMenuFromCategories, getFallbackMenu } from "@/utils/menuBuilder";
import rivaajLogo from "@/assets/rivaaj-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<{[key: string]: boolean}>({});

  // Fetch categories from API
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

  // Build dynamic menu or use fallback
  const dynamicMenuData = categoriesError || categories.length === 0
    ? getFallbackMenu()
    : buildMegaMenuFromCategories(categories);

  // Use dynamic menu if available, otherwise use static menu
  const menuData = categoriesLoading ? megaMenuData : dynamicMenuData;

  // Handle scroll for sticky header behavior with direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolling down or up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      setIsScrolled(currentScrollY > 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Toggle mobile dropdown for specific menu item
  const toggleMobileDropdown = (label: string) => {
    setIsMobileDropdownOpen(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrollingDown
          ? "-translate-y-full opacity-0"
          : isScrolled
          ? "translate-y-0 opacity-100 bg-header shadow-elegant"
          : "translate-y-0 opacity-100 bg-header-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="/"
            className="transition-smooth hover:opacity-80"
          >
            <img
              src={rivaajLogo}
              alt="Rivaaj Couture"
              className="h-10 lg:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation with Mega Menu */}
          <MegaMenu navLinks={menuData} />

          {/* Right Side CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* CTA Button */}
            <a href="/book-appointment">
              <Button
                className="px-5 py-2 btn-primary font-body font-semibold tracking-wider uppercase text-sm"
              >
                Book Appointment
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-header hover:text-accent transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border bg-header animate-in fade-in slide-in-from-top-2 duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col gap-3">
              {menuData.map((link) => (
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(link.label)}
                        className="w-full flex items-center justify-between nav-text py-2 text-header hover:text-secondary transition-smooth"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-smooth ${
                            isMobileDropdownOpen[link.label] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isMobileDropdownOpen[link.label] && (
                        <div className="pl-4 flex flex-col gap-2 mt-2 border-l-2 border-secondary/30">
                          {link.categories.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="nav-text text-muted-foreground hover:text-secondary transition-smooth py-1"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileDropdownOpen({});
                              }}
                            >
                              {item.label}
                            </a>
                          ))}
                          {link.occasions && link.occasions.length > 0 && link.occasions.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="nav-text text-muted-foreground hover:text-secondary transition-smooth py-1"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileDropdownOpen({});
                              }}
                            >
                              {item.label}
                            </a>
                          ))}
                          {link.collections && link.collections.length > 0 && link.collections.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="nav-text text-muted-foreground hover:text-secondary transition-smooth py-1"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileDropdownOpen({});
                              }}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="nav-text py-2 text-header hover:text-secondary transition-smooth block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}

              {/* Mobile Icons */}
              <div className="flex gap-4 pt-3 border-t border-border">
                <button className="p-2 text-header hover:text-accent transition-smooth" aria-label="Account">
                  <User className="w-5 h-5" />
                </button>
              </div>

              <a href="/book-appointment" className="block">
                <Button
                  className="mt-3 w-full btn-primary font-body font-semibold tracking-wider uppercase"
                >
                  Book Appointment
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
