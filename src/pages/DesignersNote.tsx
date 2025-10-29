import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Quote } from "lucide-react";

const DesignersNote = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Full Width with Overlay */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=1920&h=1080&fit=crop&q=80"
              alt="Luxury fashion atelier workspace"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-background/70 to-primary/60"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <p className="font-body text-sm md:text-base text-secondary tracking-[0.3em] uppercase mb-6 animate-fade-in">
              A Personal Message
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 animate-fade-in-up animation-delay-300">
              Designer's <span className="text-secondary">Note</span>
            </h1>
            <div className="w-24 h-px bg-secondary mx-auto animate-fade-in animation-delay-600"></div>
          </div>
        </section>

        {/* Opening Message Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Quote Icon */}
              <div className="flex justify-center mb-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-secondary" />
                </div>
              </div>

              {/* Personal Message */}
              <div className="space-y-8 font-body text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                <p className="text-2xl md:text-3xl font-heading text-foreground italic">
                  "Fashion is not just about clothing—it's about preserving our heritage, celebrating our culture, and creating timeless pieces that tell stories across generations."
                </p>
                
                <div className="pt-8">
                  <p className="font-heading text-xl md:text-2xl text-secondary">
                    — The Rivaaj Couture Design Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Philosophy Section - Image Left, Text Right */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-lg order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop&q=80"
                  alt="Traditional embroidery craftsmanship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <p className="font-body text-sm md:text-base text-secondary tracking-[0.3em] uppercase">
                  Our Philosophy
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Where Tradition <span className="text-secondary">Meets Innovation</span>
                </h2>
                <div className="space-y-4 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At Rivaaj Couture, we believe that true luxury lies in the perfect harmony between honoring our rich cultural heritage and embracing contemporary design sensibilities. Every piece we create is a testament to this philosophy—a bridge between the timeless elegance of traditional South Asian craftsmanship and the modern aesthetics of today's discerning clientele.
                  </p>
                  <p>
                    Our design process begins with deep respect for the artisans who have perfected their craft over generations. We work closely with master craftspeople, ensuring that ancient techniques like zardozi, gota patti, and hand embroidery are not just preserved but celebrated in every garment we create.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inspiration Section - Text Left, Image Right */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <div className="space-y-6">
                <p className="font-body text-sm md:text-base text-secondary tracking-[0.3em] uppercase">
                  Our Inspiration
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Drawing from <span className="text-secondary">India's Rich Tapestry</span>
                </h2>
                <div className="space-y-4 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    India's diverse cultural landscape serves as our endless source of inspiration. From the intricate architecture of Mughal palaces to the vibrant colors of Rajasthani textiles, from the graceful drapes of traditional sarees to the regal elegance of royal courts—every element of our heritage informs our creative vision.
                  </p>
                  <p>
                    We travel across India, meeting artisans in their workshops, understanding their techniques, and learning the stories behind each craft. These journeys fuel our creativity and ensure that every Rivaaj Couture piece carries the soul of Indian craftsmanship.
                  </p>
                  <p>
                    Our collections are not just fashion statements; they are love letters to India's artistic legacy, reimagined for the modern world.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=1000&fit=crop&q=80"
                  alt="Indian textile and fabric artistry"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="font-body text-sm md:text-base text-secondary tracking-[0.3em] uppercase mb-6">
                Our Commitment
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                Craftsmanship <span className="text-secondary">Beyond Compare</span>
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                Every garment that leaves our atelier represents hundreds of hours of meticulous handwork, countless fittings, and an unwavering commitment to perfection.
              </p>
            </div>

            {/* Three Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Column 1 */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading text-3xl text-secondary">01</span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Hand Embroidery
                </h3>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  Master artisans bring decades of experience to every stitch, creating intricate patterns that are impossible to replicate by machine.
                </p>
              </div>

              {/* Column 2 */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading text-3xl text-secondary">02</span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Premium Fabrics
                </h3>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  We source the finest silks, brocades, and textiles from across India, ensuring that every fabric tells its own story of quality and heritage.
                </p>
              </div>

              {/* Column 3 */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading text-3xl text-secondary">03</span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Bespoke Tailoring
                </h3>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  Each piece is tailored to perfection, with multiple fittings ensuring that the garment fits like a second skin and flatters your unique silhouette.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section - Full Width Quote */}
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-luxury opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-12">
              <div className="space-y-8">
                <p className="font-body text-sm md:text-base text-secondary tracking-[0.3em] uppercase">
                  Our Vision
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  "We envision a world where every individual can celebrate their heritage through fashion, where traditional craftsmanship thrives in the modern era, and where luxury is defined not by price tags but by the stories woven into every thread."
                </h2>
              </div>
              
              <div className="pt-8">
                <div className="inline-block">
                  <div className="w-32 h-px bg-secondary mb-6"></div>
                  <p className="font-heading text-xl md:text-2xl text-secondary">
                    The Rivaaj Couture Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Experience the <span className="text-secondary">Rivaaj Difference</span>
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Visit our atelier in Hyderabad or schedule a virtual consultation to begin your bespoke couture journey. Let us create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a
                  href="/book-appointment"
                  className="inline-flex items-center justify-center px-10 py-4 btn-primary font-heading text-lg font-semibold transition-smooth"
                >
                  Book Consultation
                </a>
                <a
                  href="/atelier"
                  className="inline-flex items-center justify-center px-10 py-4 btn-secondary font-heading text-lg font-semibold transition-smooth"
                >
                  Explore Our Atelier
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

export default DesignersNote;

