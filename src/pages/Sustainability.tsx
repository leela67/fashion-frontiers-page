import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Users, Heart, Award } from "lucide-react";

const Sustainability = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Full Screen */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1920&h=1080&fit=crop&q=80"
              alt="Traditional Indian embroidery craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-background/80 to-primary/70"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
            <p className="font-body text-sm md:text-base text-secondary tracking-[0.3em] uppercase mb-6 animate-fade-in">
              Heritage Heirlooms
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 animate-fade-in-up animation-delay-300">
              A Stitch Across <span className="text-secondary">Generations</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-600">
              Preserving the timeless art of traditional embroidery and craftsmanship
            </p>
          </div>
        </section>

        {/* Heritage Story Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-5xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                  The Art of <span className="text-secondary">Zardozi</span>
                </h2>
                <div className="w-24 h-px bg-secondary mx-auto mb-8"></div>
              </div>

              {/* Content */}
              <div className="space-y-8 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                <p className="text-center">
                  Among the sartorial legacy that we've received from our grandmothers is a fine appreciation for embroidery, especially the revered art of "Zardozi". Deeply rooted in the art and craft of the subcontinent, each stitch and every knot narrates the stories of our shared past.
                </p>
                <p className="text-center">
                  As a brand culture we take pride in our legacy and aim at creating & restoring heirlooms for the coming generations. Every piece that leaves our atelier carries with it centuries of tradition, reimagined for the modern world.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center mt-12">
                <a
                  href="/book-appointment"
                  className="inline-flex items-center justify-center px-10 py-4 btn-primary font-heading text-lg font-semibold transition-smooth"
                >
                  Restore Your Heirloom
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Large Image Section */}
        <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1920&h=1080&fit=crop&q=80"
            alt="Master craftsman at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </section>

        {/* Honoured Craftsmanship Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-5xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-16">
                <p className="font-body text-sm md:text-base text-secondary tracking-[0.3em] uppercase mb-6">
                  Honoured Craftsmanship
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                  "CELEBRATING THE <span className="text-secondary">ZARDOZIKAR</span>"
                </h2>
                <div className="w-24 h-px bg-secondary mx-auto mb-8"></div>
              </div>

              {/* Content */}
              <div className="space-y-8 font-body text-base md:text-lg text-muted-foreground leading-relaxed text-center">
                <p>
                  Rivaaj Couture takes a step ahead in creating intricate masterpieces reminiscent of the past and restoring rare "ज़रदोज़ी" (Zardozi) techniques, along with creating a holistic environment nurturing our master craftsmen, who are successors of this much celebrated craftsmanship across generations.
                </p>
                <p>
                  We work directly with artisan communities across India, ensuring fair wages, dignified working conditions, and the preservation of traditional techniques that have been passed down through families for centuries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Four Pillars Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                  Our <span className="text-secondary">Commitment</span>
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Four pillars that guide our approach to sustainable luxury and ethical craftsmanship
                </p>
              </div>

              {/* Four Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {/* Pillar 1 */}
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Artisan Heritage
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    Preserving centuries-old techniques through direct partnerships with master craftspeople
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Fair Practice
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    Ensuring dignified wages and working conditions for all artisans in our network
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Sustainable Materials
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    Sourcing premium, eco-conscious fabrics and materials from ethical suppliers
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Heirloom Quality
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    Creating pieces designed to last generations, not seasons
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image + Text Section - Alternating Layout */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
              {/* Image */}
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&h=1000&fit=crop&q=80"
                  alt="Artisan hands working on embroidery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <p className="font-body text-sm md:text-base text-secondary tracking-[0.3em] uppercase">
                  The Artisan Journey
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  From <span className="text-secondary">Past to Present</span>
                </h2>
                <div className="space-y-4 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our journey begins in the workshops of master artisans across India—from the zardozi specialists of Lucknow to the gota patti experts of Rajasthan. Each artisan brings decades of experience and a deep connection to their craft.
                  </p>
                  <p>
                    We don't just commission work; we build lasting relationships. Our artisan partners are integral members of the Rivaaj Couture family, and their stories are woven into every piece we create.
                  </p>
                  <p>
                    Through our restoration program, we also help preserve and repair vintage pieces, ensuring that the legacy of traditional craftsmanship continues to inspire future generations.
                  </p>
                </div>
                <div className="pt-4">
                  <a
                    href="/atelier"
                    className="inline-flex items-center justify-center px-10 py-4 btn-secondary font-heading text-lg font-semibold transition-smooth"
                  >
                    Visit Our Atelier
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Sustaining the Legacy of <span className="text-secondary">Zardozi</span>
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join us in preserving India's rich heritage of craftsmanship. Whether you're commissioning a new piece or restoring a family heirloom, we're here to help you celebrate tradition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a
                  href="/book-appointment"
                  className="inline-flex items-center justify-center px-10 py-4 btn-primary font-heading text-lg font-semibold transition-smooth"
                >
                  Book Consultation
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-10 py-4 btn-secondary font-heading text-lg font-semibold transition-smooth"
                >
                  Learn More About Us
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

export default Sustainability;

