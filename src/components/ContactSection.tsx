import hero1 from "@/assets/hero-1.jpg";

const ContactSection = () => {
  const storeInfo = {
    name: "Rivaaj Flagship Store",
    address: "Third Floor, Arafat Complex",
    addressLine2: "Plot No.63 and 66, Banjara Hills Main Rd",
    addressLine3: "nearby Landmark Star Hospital, Gaffar Khan Colony",
    city: "Banjara Hills, Hyderabad, Telangana 500034",
    hours: "11:00 am to 6:00 pm",
    phone1: "9949060029",
    phone2: "7673987673",
  };

  return (
    <section id="contact" className="bg-background">
      {/* Store Image & Info Section - Pixel Perfect Match */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Store Image - Left Side */}
        <div className="relative w-full h-80 sm:h-[450px] lg:h-[500px] overflow-hidden bg-muted">
          <img
            src={hero1}
            alt="Rivaaj Flagship Store"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Store Information - Right Side */}
        <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-background">
          <div className="max-w-sm">
            {/* Title */}
            <h2 className="heading-luxury heading-4xl mb-6 text-primary tracking-tight leading-tight">
              {storeInfo.name}
            </h2>

            {/* Store Details - Matching Reference Formatting */}
            <div className="space-y-4 mb-6">
              {/* Address */}
              <p className="body-text text-muted-foreground leading-relaxed tracking-wide">
                {storeInfo.address}
                <br />
                {storeInfo.addressLine2}
                <br />
                {storeInfo.addressLine3}
                <br />
                {storeInfo.city}
              </p>

              {/* Hours */}
              <p className="body-text text-muted-foreground tracking-wide">
                {storeInfo.hours}
              </p>

              {/* Phone */}
              <p className="body-text text-muted-foreground tracking-wide">
                Tel: <a href={`tel:${storeInfo.phone1}`} className="hover:text-primary transition-smooth">{storeInfo.phone1}</a> / <a href={`tel:${storeInfo.phone2}`} className="hover:text-primary transition-smooth">{storeInfo.phone2}</a>
              </p>
            </div>

            {/* Action Buttons - Matching Reference Style */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(storeInfo.address + ' ' + storeInfo.addressLine2 + ' ' + storeInfo.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full btn-primary px-6 sm:px-8 py-3 sm:py-4 cta-text font-bold tracking-widest">
                  Get Directions
                </button>
              </a>
              <button className="w-full bg-background border-2 border-primary text-primary hover:bg-primary/5 px-6 sm:px-8 py-3 sm:py-4 cta-text font-bold tracking-widest transition-smooth">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
