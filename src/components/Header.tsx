import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import rivaajLogo from "@/assets/rivaaj-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const navLinks = [
    { label: "Collections", href: "#collections", hasDropdown: true },
    { label: "Women", href: "#women" },
    { label: "Men", href: "#men" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const dropdownItems = [
    { label: "Bridal 2025/26", href: "#bridal" },
    { label: "Couture 2025", href: "#couture" },
    { label: "Lost In Time", href: "#lost-in-time" },
    { label: "Bride & Groom", href: "#bride-groom" },
    { label: "Heritage Pret", href: "#heritage" },
    { label: "Tales of Masai", href: "#tales" },
    { label: "Vintage Bridal", href: "#vintage" },
  ];

  // Handle scroll for sticky header behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-28">
          {/* Logo */}
          <a
            href="/"
            className="transition-all duration-300 hover:opacity-80"
          >
            <img
              src={rivaajLogo}
              alt="Rivaaj Couture"
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => {
                  setActiveLink(link.label);
                  if (link.hasDropdown) setIsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  setActiveLink(null);
                  setIsDropdownOpen(false);
                }}
              >
                <a
                  href={link.href}
                  className="font-darker-grotesque text-sm font-medium tracking-wide uppercase text-foreground relative"
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      activeLink === link.label ? "w-full" : "w-0"
                    }`}
                  />
                </a>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div
                    className={`absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 ${
                      isDropdownOpen ? "opacity-100 visible" : ""
                    }`}
                  >
                    {dropdownItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-3 font-darker-grotesque text-sm font-medium text-foreground hover:bg-gray-50 hover:text-primary transition-colors first:rounded-t-sm last:rounded-b-sm"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Icons & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Search Icon */}
            <button
              className="p-2 hover:text-accent transition-colors duration-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User Account Icon */}
            <button
              className="p-2 hover:text-accent transition-colors duration-300"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Shopping Bag Icon */}
            <button
              className="p-2 hover:text-accent transition-colors duration-300 relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </button>

            {/* CTA Button */}
            <Button
              className="ml-4 px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 font-darker-grotesque font-semibold tracking-wider uppercase text-sm transition-all duration-300"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                        className="w-full flex items-center justify-between font-darker-grotesque text-sm font-medium tracking-wide uppercase py-2 hover:text-primary transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isMobileDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isMobileDropdownOpen && (
                        <div className="pl-4 flex flex-col gap-2 mt-2 border-l border-gray-200">
                          {dropdownItems.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="font-darker-grotesque text-sm font-medium text-gray-600 hover:text-primary transition-colors py-1"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileDropdownOpen(false);
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
                      className="font-darker-grotesque text-sm font-medium tracking-wide uppercase py-2 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}

              {/* Mobile Icons */}
              <div className="flex gap-4 pt-4 border-t border-border">
                <button className="p-2 hover:text-accent transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 hover:text-accent transition-colors">
                  <User className="w-5 h-5" />
                </button>
                <button className="p-2 hover:text-accent transition-colors relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
                </button>
              </div>

              <Button
                className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-darker-grotesque font-semibold tracking-wider uppercase"
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
