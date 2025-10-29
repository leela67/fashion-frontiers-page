import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=1920&h=1080&fit=crop&q=80"
              alt="Privacy and Policies"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-background/90 to-background/80"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Shield className="w-10 h-10 text-secondary" />
              </div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                Privacy & <span className="text-secondary">Policies</span>
              </h1>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                Your privacy and trust are paramount to us. Learn how we protect and handle your information.
              </p>
              <p className="font-body text-sm text-muted-foreground mt-4">
                Last Updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <a
                  href="#privacy-policy"
                  className="flex items-center gap-3 p-4 bg-background border border-border hover:border-secondary transition-smooth"
                >
                  <Lock className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="font-heading text-sm text-foreground">Privacy Policy</span>
                </a>
                <a
                  href="#terms-conditions"
                  className="flex items-center gap-3 p-4 bg-background border border-border hover:border-secondary transition-smooth"
                >
                  <FileText className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="font-heading text-sm text-foreground">Terms & Conditions</span>
                </a>
                <a
                  href="#shipping-returns"
                  className="flex items-center gap-3 p-4 bg-background border border-border hover:border-secondary transition-smooth"
                >
                  <Shield className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="font-heading text-sm text-foreground">Shipping & Returns</span>
                </a>
                <a
                  href="#data-protection"
                  className="flex items-center gap-3 p-4 bg-background border border-border hover:border-secondary transition-smooth"
                >
                  <Eye className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="font-heading text-sm text-foreground">Data Protection</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section id="privacy-policy" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                Privacy <span className="text-secondary">Policy</span>
              </h2>
              
              <div className="space-y-8 font-body text-base text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">1. Information We Collect</h3>
                  <p className="mb-4">
                    At Rivaaj Couture, we collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name, email address, phone number, and shipping address</li>
                    <li>Payment information (processed securely through our payment partners)</li>
                    <li>Measurement details for bespoke orders</li>
                    <li>Communication preferences and correspondence with us</li>
                    <li>Information about your purchases and order history</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h3>
                  <p className="mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Process and fulfill your orders</li>
                    <li>Communicate with you about your orders and appointments</li>
                    <li>Provide customer support and respond to your inquiries</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Improve our products, services, and website experience</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">3. Information Sharing</h3>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                    <li>Service providers who assist us in operating our business</li>
                    <li>Payment processors for secure transaction handling</li>
                    <li>Shipping partners for order delivery</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">4. Data Security</h3>
                  <p>
                    We implement industry-standard security measures to protect your personal information. This includes encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">5. Your Rights</h3>
                  <p className="mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to processing of your personal information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section id="terms-conditions" className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                Terms & <span className="text-secondary">Conditions</span>
              </h2>
              
              <div className="space-y-8 font-body text-base text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h3>
                  <p>
                    By accessing and using the Rivaaj Couture website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">2. Bespoke Orders</h3>
                  <p className="mb-4">
                    All bespoke and made-to-order pieces are custom-created for you. Please note:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Bespoke orders require a non-refundable deposit</li>
                    <li>Production time varies based on complexity (typically 8-12 weeks)</li>
                    <li>Multiple fittings may be required</li>
                    <li>Custom pieces cannot be returned or exchanged</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">3. Pricing and Payment</h3>
                  <p>
                    All prices are listed in Indian Rupees (INR) and are subject to change without notice. Payment is required in full before delivery unless otherwise arranged. We accept major credit cards, debit cards, and bank transfers.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h3>
                  <p>
                    All content on this website, including designs, images, text, and logos, is the property of Rivaaj Couture and protected by copyright laws. Unauthorized use is prohibited.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping & Returns Section */}
        <section id="shipping-returns" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                Shipping & <span className="text-secondary">Returns</span>
              </h2>
              
              <div className="space-y-8 font-body text-base text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Shipping Policy</h3>
                  <p className="mb-4">
                    We offer worldwide shipping with the following options:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-foreground">India:</strong> 5-7 business days (Free shipping on orders above ₹50,000)</li>
                    <li><strong className="text-foreground">International:</strong> 10-15 business days (Shipping costs calculated at checkout)</li>
                    <li><strong className="text-foreground">Express Shipping:</strong> Available upon request</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Return Policy</h3>
                  <p className="mb-4">
                    We want you to be completely satisfied with your purchase:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Ready-to-wear items: 14-day return window</li>
                    <li>Items must be unworn, unwashed, and in original condition</li>
                    <li>Bespoke and made-to-order pieces: Non-returnable</li>
                    <li>Sale items: Final sale, no returns or exchanges</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Alterations & Repairs</h3>
                  <p>
                    We offer complimentary alterations within 30 days of purchase for items purchased directly from Rivaaj Couture. Repairs and restoration services are available for all Rivaaj Couture pieces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Questions About Our <span className="text-secondary">Policies?</span>
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                If you have any questions about our privacy policy, terms and conditions, or any other policies, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="mailto:info@rivaajcouture.com"
                  className="inline-flex items-center justify-center px-10 py-4 btn-primary font-heading text-lg font-semibold transition-smooth"
                >
                  Contact Us
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-10 py-4 btn-secondary font-heading text-lg font-semibold transition-smooth"
                >
                  About Rivaaj Couture
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

