import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Video, CheckCircle } from "lucide-react";
import { useState } from "react";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    appointmentType: "in-person",
    preferredDate: "",
    preferredTime: "",
    occasion: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment request:", formData);
    alert("Thank you! We'll confirm your appointment shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=1920&h=1080&fit=crop&q=80"
              alt="Book Appointment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-background/80 to-primary/70"></div>
          
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <p className="font-body text-sm md:text-base text-secondary tracking-[0.3em] uppercase mb-6 animate-fade-in">
              Schedule Your Visit
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 animate-fade-in-up animation-delay-300">
              Book an <span className="text-secondary">Appointment</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-600">
              Begin your bespoke journey with a personalized consultation
            </p>
          </div>
        </section>

        {/* Appointment Types Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                  Choose Your <span className="text-secondary">Experience</span>
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground">
                  Select the consultation format that works best for you
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* In-Person Appointment */}
                <div className="bg-card border border-border p-8 transition-smooth hover:border-secondary">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <MapPin className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                    In-Person Visit
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                    Visit our atelier in Hyderabad for a complete experience. Explore fabrics, discuss designs, and take measurements with our expert team.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-muted-foreground">Full fabric and embellishment selection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-muted-foreground">Precise measurements and fittings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-muted-foreground">Meet our master craftspeople</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-muted-foreground">Complimentary refreshments</span>
                    </li>
                  </ul>
                  <div className="font-body text-sm text-muted-foreground">
                    <strong className="text-foreground">Duration:</strong> 60-90 minutes
                  </div>
                </div>

                {/* Virtual Consultation */}
                <div className="bg-card border border-border p-8 transition-smooth hover:border-secondary">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Video className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                    Virtual Consultation
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                    Connect with us from anywhere in the world. Perfect for initial discussions, design reviews, and follow-up consultations.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-muted-foreground">Video call with our design team</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-muted-foreground">Digital fabric swatches and lookbooks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-muted-foreground">Measurement guide provided</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-muted-foreground">Convenient scheduling worldwide</span>
                    </li>
                  </ul>
                  <div className="font-body text-sm text-muted-foreground">
                    <strong className="text-foreground">Duration:</strong> 45-60 minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                  Schedule Your <span className="text-secondary">Consultation</span>
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground">
                  Fill out the form below and we'll confirm your appointment within 24 hours
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
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-none font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-smooth"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="appointmentType" className="block font-body text-sm text-muted-foreground mb-2">
                    Appointment Type *
                  </label>
                  <select
                    id="appointmentType"
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-none font-body text-foreground focus:outline-none focus:border-secondary transition-smooth"
                  >
                    <option value="in-person">In-Person Visit</option>
                    <option value="virtual">Virtual Consultation</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block font-body text-sm text-muted-foreground mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-none font-body text-foreground focus:outline-none focus:border-secondary transition-smooth"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block font-body text-sm text-muted-foreground mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-none font-body text-foreground focus:outline-none focus:border-secondary transition-smooth"
                    >
                      <option value="">Select Time</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="occasion" className="block font-body text-sm text-muted-foreground mb-2">
                    Occasion
                  </label>
                  <input
                    type="text"
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-none font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-smooth"
                    placeholder="e.g., Wedding, Reception, Gala"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-sm text-muted-foreground mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-none font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-smooth resize-none"
                    placeholder="Tell us about your vision, style preferences, or any specific requirements..."
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-12 py-4 btn-primary font-heading text-lg font-semibold transition-smooth"
                  >
                    <Calendar className="w-5 h-5" />
                    Request Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Location & Hours Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-secondary" />
                    <h3 className="font-heading text-3xl font-bold text-foreground">Location</h3>
                  </div>
                  <div className="space-y-4 font-body text-base text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Rivaaj Couture Atelier</strong><br />
                      Banjara Hills<br />
                      Hyderabad, Telangana 500034<br />
                      India
                    </p>
                    <p>
                      Our atelier is located in the heart of Hyderabad's fashion district, easily accessible from all parts of the city.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-secondary" />
                    <h3 className="font-heading text-3xl font-bold text-foreground">Hours</h3>
                  </div>
                  <div className="space-y-3 font-body text-base text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-foreground">11:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-foreground">11:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                    <p className="pt-4 text-sm">
                      * All visits are by appointment only to ensure personalized attention
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookAppointment;

