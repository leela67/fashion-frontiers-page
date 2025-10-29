import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scissors, Ruler, Palette, Clock } from "lucide-react";
import { useState } from "react";

const Atelier = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll be in touch soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=1920&h=1080&fit=crop&q=80"
              alt="Rivaaj Couture Atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-background/80 to-primary/70"></div>
          
          <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
            <p className="font-body text-sm md:text-base text-secondary tracking-[0.3em] uppercase mb-6 animate-fade-in">
              The Rivaaj Atelier
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 animate-fade-in-up animation-delay-300">
              Bespoke <span className="text-secondary">Couture</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-600">
              Where your vision meets our craftsmanship to create one-of-a-kind masterpieces
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                  Made to <span className="text-secondary">Order</span>
                </h2>
                <div className="w-24 h-px bg-secondary mx-auto mb-8"></div>
              </div>

              <div className="space-y-8 font-body text-base md:text-lg text-muted-foreground leading-relaxed text-center">
                <p>
                  At Rivaaj Couture, we believe that true luxury is personal. Our atelier in Hyderabad is where dreams take shape, where fabric becomes art, and where your unique story is woven into every stitch.
                </p>
                <p>
                  Each bespoke piece begins with a conversation—understanding your vision, your occasion, and your personal style. From there, our master craftspeople work their magic, creating a garment that is uniquely, unmistakably yours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Four Steps */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <p className="font-body text-sm md:text-base text-secondary tracking-[0.3em] uppercase mb-6">
                  Our Process
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                  The Journey to <span className="text-secondary">Perfection</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {/* Step 1 */}
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Palette className="w-10 h-10 text-secondary" />
                  </div>
                  <div className="font-heading text-lg text-secondary tracking-wider">STEP 01</div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Consultation
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    We begin with an in-depth consultation to understand your vision, preferences, and the occasion.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Scissors className="w-10 h-10 text-secondary" />
                  </div>
                  <div className="font-heading text-lg text-secondary tracking-wider">STEP 02</div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Design
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    Our designers create custom sketches and select premium fabrics that bring your vision to life.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Ruler className="w-10 h-10 text-secondary" />
                  </div>
                  <div className="font-heading text-lg text-secondary tracking-wider">STEP 03</div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Fitting
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    Multiple fittings ensure perfect proportions and a silhouette that flatters your unique form.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-secondary" />
                  </div>
                  <div className="font-heading text-lg text-secondary tracking-wider">STEP 04</div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Creation
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    Master artisans handcraft your piece with meticulous attention to every detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop&q=80"
                  alt="Atelier workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&h=1000&fit=crop&q=80"
                  alt="Handcrafted details"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                  Begin Your <span className="text-secondary">Bespoke Journey</span>
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  Leave your message and we'll get back to you shortly to schedule your consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block font-body text-sm text-muted-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-none font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-smooth"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block font-body text-sm text-muted-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-none font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-smooth"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block font-body text-sm text-muted-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-none font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-smooth"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-body text-sm text-muted-foreground mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-none font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-smooth"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-sm text-muted-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-none font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-smooth resize-none"
                    placeholder="Tell us about your vision, occasion, and any specific requirements..."
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-12 py-4 btn-primary font-heading text-lg font-semibold transition-smooth"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Visit Atelier Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Visit Our <span className="text-secondary">Atelier</span>
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                Experience the Rivaaj Couture atelier in person. Located in the heart of Hyderabad, our studio is where tradition meets innovation, and where your couture dreams become reality.
              </p>
              <div className="space-y-4 font-body text-base text-muted-foreground">
                <p>
                  <strong className="text-foreground">Address:</strong><br />
                  Rivaaj Couture Atelier<br />
                  Banjara Hills, Hyderabad, Telangana, India
                </p>
                <p>
                  <strong className="text-foreground">Hours:</strong><br />
                  By Appointment Only<br />
                  Monday - Saturday: 11:00 AM - 7:00 PM
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a
                  href="/book-appointment"
                  className="inline-flex items-center justify-center px-10 py-4 btn-primary font-heading text-lg font-semibold transition-smooth"
                >
                  Book Appointment
                </a>
                <a
                  href="/sustainability"
                  className="inline-flex items-center justify-center px-10 py-4 btn-secondary font-heading text-lg font-semibold transition-smooth"
                >
                  Our Craftsmanship
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

export default Atelier;

