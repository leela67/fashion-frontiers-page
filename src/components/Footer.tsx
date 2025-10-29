import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: "Women's Collection", href: "#women" },
      { label: "Men's Collection", href: "#men" },
      { label: "New Arrivals", href: "#collections" },
      { label: "Sale", href: "#sale" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Designer's Note", href: "/designers-note" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Atelier", href: "/atelier" },
      { label: "Press", href: "/press" },
    ],
    support: [
      { label: "Book Appointment", href: "/book-appointment" },
      { label: "Contact Us", href: "#contact" },
      { label: "Shipping Info", href: "/privacy#shipping-returns" },
      { label: "Returns", href: "/privacy#shipping-returns" },
      { label: "Size Guide", href: "#size-guide" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-charcoal text-hero">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="heading-luxury heading-3xl mb-4 text-secondary">Rivaaj Couture</h3>
            <p className="body-text-sm text-hero/70 mb-6">
              Timeless elegance meets contemporary luxury. Crafting exceptional pieces since 2020.
            </p>
            {/* Newsletter */}
            <div>
              <p className="subheading-sm mb-3 tracking-wider">
                Subscribe to Our Newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 overlay-light-20 border border-hero/20 rounded text-sm focus:outline-none focus:border-secondary transition-smooth text-hero placeholder:text-hero/50"
                />
                <button className="px-4 py-2 btn-secondary font-medium text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="heading-luxury heading-lg font-semibold mb-4 text-secondary">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="body-text-sm text-hero/70 hover:text-secondary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="heading-luxury heading-lg font-semibold mb-4 text-secondary">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="body-text-sm text-hero/70 hover:text-secondary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="heading-luxury heading-lg font-semibold mb-4 text-secondary">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="body-text-sm text-hero/70 hover:text-secondary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-hero/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="body-text-sm text-hero/60">
              © {currentYear} Rivaaj Couture. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full overlay-light-20 hover:bg-secondary flex items-center justify-center transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 body-text-sm text-hero/60">
              <a href="/privacy#privacy-policy" className="hover:text-secondary transition-smooth">
                Privacy Policy
              </a>
              <a href="/privacy#terms-conditions" className="hover:text-secondary transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
