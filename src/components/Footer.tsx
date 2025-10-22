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
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Sustainability", href: "#sustainability" },
      { label: "Press", href: "#press" },
    ],
    support: [
      { label: "Contact Us", href: "#contact" },
      { label: "Shipping Info", href: "#shipping" },
      { label: "Returns", href: "#returns" },
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
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-black-mango text-3xl font-bold mb-4 text-secondary">Rivaaj Couture</h3>
            <p className="font-darker-grotesque text-white/70 mb-6">
              Timeless elegance meets contemporary luxury. Crafting exceptional pieces since 2020.
            </p>
            {/* Newsletter */}
            <div>
              <p className="text-sm font-medium mb-3 tracking-wider uppercase">
                Subscribe to Our Newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded text-sm focus:outline-none focus:border-gold transition-smooth"
                />
                <button className="px-4 py-2 bg-gold hover:bg-gold-muted text-white font-medium text-sm transition-smooth">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-black-mango text-lg font-semibold mb-4 text-secondary">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-black-mango text-lg font-semibold mb-4 text-secondary">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-darker-grotesque text-white/70 hover:text-secondary transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-black-mango text-lg font-semibold mb-4 text-secondary">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-darker-grotesque text-white/70 hover:text-secondary transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="font-darker-grotesque text-white/60 text-sm">
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
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#privacy" className="font-darker-grotesque hover:text-secondary transition-smooth">
                Privacy Policy
              </a>
              <a href="#terms" className="font-darker-grotesque hover:text-secondary transition-smooth">
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
