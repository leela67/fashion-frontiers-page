import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Heart, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Heritage & Craftsmanship",
      description: "Preserving centuries-old techniques while embracing contemporary design sensibilities.",
    },
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Every piece is crafted with meticulous attention to detail and unwavering commitment to quality.",
    },
    {
      icon: Award,
      title: "Timeless Elegance",
      description: "Creating garments that transcend trends and become cherished heirlooms for generations.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Building lasting relationships through personalized service and bespoke experiences.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-luxury opacity-40"></div>
          <div className="absolute inset-0 bg-background/60"></div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
              <span className="text-secondary">Our Story</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-300">
              Where Heritage Meets Luxury
            </p>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-heading text-6xl md:text-8xl text-secondary/20">RC</p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  The <span className="text-secondary">Rivaaj</span> Legacy
                </h2>
                <div className="space-y-4 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a vision to celebrate the rich heritage of South Asian couture, Rivaaj Couture has become synonymous with timeless elegance and exceptional craftsmanship. Our name, "Rivaaj," meaning tradition in Urdu, reflects our deep commitment to preserving and honoring the artisanal techniques passed down through generations.
                  </p>
                  <p>
                    Each creation at Rivaaj Couture is a testament to the marriage of traditional craftsmanship and contemporary design. We work with master artisans who have dedicated their lives to perfecting intricate embroidery, hand-weaving, and embellishment techniques that define luxury South Asian fashion.
                  </p>
                  <p>
                    Our atelier in Hyderabad serves as a sanctuary where dreams are transformed into reality. From the initial consultation to the final fitting, we ensure that every client receives a personalized experience that honors their unique style and celebrates their special moments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-secondary">Purpose</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Mission */}
              <div className="bg-background p-8 md:p-10 rounded-lg border border-border hover:border-secondary/50 transition-smooth">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4">
                  Our Mission
                </h3>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  To create exceptional couture that celebrates individuality, preserves traditional craftsmanship, and empowers our clients to express their unique style with confidence and grace. We are committed to delivering unparalleled quality and personalized service that exceeds expectations.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-background p-8 md:p-10 rounded-lg border border-border hover:border-secondary/50 transition-smooth">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4">
                  Our Vision
                </h3>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  To be recognized globally as the premier destination for luxury South Asian couture, where heritage meets innovation, and where every garment tells a story of artistry, elegance, and timeless beauty. We aspire to set new standards in bespoke fashion while honoring our cultural roots.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-secondary">Values</span>
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-card border border-border hover:border-secondary/50 transition-smooth group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-smooth">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
                Our <span className="text-secondary">Philosophy</span>
              </h2>
              <div className="space-y-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Rivaaj Couture, we believe that fashion is more than just clothing—it's an expression of identity, culture, and personal narrative. Every garment we create is designed to make you feel extraordinary, whether you're celebrating a milestone or simply embracing everyday elegance.
                </p>
                <p>
                  We are deeply committed to sustainable luxury. By working with local artisans and using ethically sourced materials, we ensure that our creations not only look beautiful but also contribute positively to the communities and environment that inspire us.
                </p>
                <p>
                  Our approach is rooted in collaboration. We listen to your dreams, understand your vision, and work tirelessly to bring it to life. From the first sketch to the final stitch, we are with you every step of the way, ensuring that your experience is as memorable as the garment itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Begin Your <span className="text-secondary">Journey</span>
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the art of bespoke couture. Visit our atelier or schedule a consultation to start creating your dream ensemble.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/book-appointment"
                  className="inline-flex items-center justify-center px-8 py-4 btn-primary font-heading text-lg font-semibold transition-smooth"
                >
                  Book Appointment
                </a>
                <a
                  href="/atelier"
                  className="inline-flex items-center justify-center px-8 py-4 btn-secondary font-heading text-lg font-semibold transition-smooth"
                >
                  Explore Atelier
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

export default About;

