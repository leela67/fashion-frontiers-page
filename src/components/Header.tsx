import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenu from "@/components/MegaMenu";
import { megaMenuData } from "@/data/megaMenuData";
import rivaajLogo from "@/assets/rivaaj-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<{[key: string]: boolean}>({});

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
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrollingDown
          ? "bg-header-scrolled shadow-soft"
          : isScrolled
          ? "bg-header shadow-elegant"
          : "bg-header-transparent"
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
          <MegaMenu navLinks={megaMenuData} />

          {/* Right Side Icons & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Icon */}
            <button
              className="p-2 text-header hover:text-accent transition-smooth"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User Account Icon */}
            <button
              className="p-2 text-header hover:text-accent transition-smooth"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Shopping Bag Icon */}
            <button
              className="p-2 text-header hover:text-accent transition-smooth relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </button>

            {/* CTA Button */}
            <Button
              className="ml-2 px-5 py-2 btn-primary font-body font-semibold tracking-wider uppercase text-sm"
            >
              Book Appointment
            </Button>
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
          <nav className="lg:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col gap-3">
              {megaMenuData.map((link) => (
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(link.label)}
                        className="w-full flex items-center justify-between nav-text py-2 text-header hover:text-primary transition-smooth"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-smooth ${
                            isMobileDropdownOpen[link.label] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isMobileDropdownOpen[link.label] && (
                        <div className="pl-4 flex flex-col gap-2 mt-2 border-l-2 border-primary/30">
                          {link.categories.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="nav-text text-muted-foreground hover:text-primary transition-smooth py-1"
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
                      className="nav-text py-2 text-header hover:text-primary transition-smooth block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}

              {/* Mobile Icons */}
              <div className="flex gap-4 pt-3 border-t border-border">
                <button className="p-2 text-header hover:text-accent transition-smooth" aria-label="Search">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 text-header hover:text-accent transition-smooth" aria-label="Account">
                  <User className="w-5 h-5" />
                </button>
                <button className="p-2 text-header hover:text-accent transition-smooth relative" aria-label="Shopping bag">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
                </button>
              </div>

              <Button
                className="mt-3 w-full btn-primary font-body font-semibold tracking-wider uppercase"
              >
                Book Appointment
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
