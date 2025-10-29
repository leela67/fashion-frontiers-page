import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Download, Mail } from "lucide-react";

const Press = () => {
  const pressReleases = [
    {
      date: "December 2024",
      title: "Rivaaj Couture Unveils New Heritage Collection",
      excerpt: "Celebrating India's rich textile traditions with contemporary silhouettes, the new collection showcases rare zardozi techniques.",
      category: "Collection Launch",
    },
    {
      date: "November 2024",
      title: "Sustainability Initiative: Partnering with Artisan Communities",
      excerpt: "Rivaaj Couture announces expanded partnerships with master craftspeople across India to preserve traditional embroidery techniques.",
      category: "Sustainability",
    },
    {
      date: "October 2024",
      title: "Featured in Vogue India: The Future of Indian Couture",
      excerpt: "Rivaaj Couture's commitment to heritage craftsmanship and modern design philosophy highlighted in exclusive feature.",
      category: "Media Coverage",
    },
  ];

  const mediaFeatures = [
    {
      publication: "Vogue India",
      title: "The New Guard of Indian Couture",
      date: "October 2024",
    },
    {
      publication: "Harper's Bazaar",
      title: "Preserving Heritage Through Fashion",
      date: "September 2024",
    },
    {
      publication: "Elle India",
      title: "Sustainable Luxury: The Rivaaj Way",
      date: "August 2024",
    },
    {
      publication: "Grazia India",
      title: "Artisan Spotlight: Behind the Scenes at Rivaaj",
      date: "July 2024",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=1920&h=1080&fit=crop&q=80"
              alt="Press and Media"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-background/80 to-primary/70"></div>
          
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <p className="font-body text-sm md:text-base text-secondary tracking-[0.3em] uppercase mb-6 animate-fade-in">
              Press & Media
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 animate-fade-in-up animation-delay-300">
              In the <span className="text-secondary">Spotlight</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-600">
              Latest news, press releases, and media coverage
            </p>
          </div>
        </section>

        {/* Press Contact Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Media <span className="text-secondary">Inquiries</span>
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                For press inquiries, interview requests, or high-resolution images, please contact our media relations team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="mailto:press@rivaajcouture.com"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 btn-primary font-heading text-lg font-semibold transition-smooth"
                >
                  <Mail className="w-5 h-5" />
                  press@rivaajcouture.com
                </a>
                <a
                  href="#press-kit"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 btn-secondary font-heading text-lg font-semibold transition-smooth"
                >
                  <Download className="w-5 h-5" />
                  Download Press Kit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                  Press <span className="text-secondary">Releases</span>
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground">
                  Latest announcements and news from Rivaaj Couture
                </p>
              </div>

              <div className="space-y-8">
                {pressReleases.map((release, index) => (
                  <div
                    key={index}
                    className="bg-background border border-border p-8 transition-smooth hover:border-secondary"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-secondary" />
                        <span className="font-body text-sm text-muted-foreground">{release.date}</span>
                      </div>
                      <span className="inline-block px-4 py-1 bg-primary/10 text-secondary font-body text-sm tracking-wider">
                        {release.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {release.title}
                    </h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                      {release.excerpt}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-body text-secondary hover:text-foreground transition-smooth"
                    >
                      Read Full Release →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Coverage Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                  Media <span className="text-secondary">Coverage</span>
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground">
                  Featured in leading fashion and lifestyle publications
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mediaFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border p-8 transition-smooth hover:border-secondary"
                  >
                    <div className="mb-4">
                      <span className="font-heading text-lg text-secondary">{feature.publication}</span>
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{feature.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                  Press <span className="text-secondary">Gallery</span>
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground">
                  High-resolution images available for editorial use
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=600&fit=crop&q=80"
                    alt="Press image 1"
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                </div>
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop&q=80"
                    alt="Press image 2"
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                </div>
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=600&fit=crop&q=80"
                    alt="Press image 3"
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                </div>
              </div>

              <div className="text-center mt-12">
                <a
                  href="#press-kit"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 btn-primary font-heading text-lg font-semibold transition-smooth"
                >
                  <Download className="w-5 h-5" />
                  Download Full Press Kit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Stay <span className="text-secondary">Connected</span>
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                Follow us on social media for the latest updates, behind-the-scenes content, and exclusive previews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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

export default Press;

