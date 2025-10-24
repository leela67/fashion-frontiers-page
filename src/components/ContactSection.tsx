import { storeImages } from "@/data/oneDriveImages";

const ContactSection = () => {
  const storeInfo = {
    name: "Abhinav Mishra Flagship Store",
    address: "Third Floor, Arafat Complex",
    addressLine2: "Plot No.63 and 66, Banjara Hills Main Rd",
    addressLine3: "nearby Landmark Star Hospital",
    addressLine4: "Gaffar Khan Colony, Banjara Hills",
    city: "Hyderabad, Telangana 500034",
    hours: "11:00 AM to 6:00 PM",
    phone1: "9949060029",
    phone2: "7673987673",
  };

  return (
    <section id="contact" className="bg-background">
      {/* Store Image & Info Section - Pixel Perfect Match */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Store Image - Left Side */}
        <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px] overflow-hidden bg-gray-100">
          <img
            src={storeImages.storeImage}
            alt="Rivaaj Flagship Store"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Store Information - Right Side */}
        <div className="flex flex-col justify-center px-8 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-sm">
            {/* Title */}
            <h2 className="font-black-mango text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-primary tracking-tight leading-tight">
              {storeInfo.name}
            </h2>

            {/* Store Details - Matching Reference Formatting */}
            <div className="space-y-6 mb-10">
              {/* Address */}
              <p className="font-darker-grotesque text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed tracking-wide">
                {storeInfo.address}
                <br />
                {storeInfo.addressLine2}
                <br />
                {storeInfo.addressLine3}
                <br />
                {storeInfo.addressLine4}
                <br />
                {storeInfo.city}
              </p>

              {/* Hours */}
              <p className="font-darker-grotesque text-xs sm:text-sm lg:text-base text-muted-foreground tracking-wide">
                7 Days Open | {storeInfo.hours}
              </p>

              {/* Phone */}
              <p className="font-darker-grotesque text-xs sm:text-sm lg:text-base text-muted-foreground tracking-wide">
                Tel: <a href={`tel:${storeInfo.phone1}`} className="hover:text-primary transition-colors">{storeInfo.phone1}</a> / <a href={`tel:${storeInfo.phone2}`} className="hover:text-primary transition-colors">{storeInfo.phone2}</a>
              </p>
            </div>

            {/* Action Buttons - Matching Reference Style */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent('Third Floor, Arafat Complex, Plot No.63 and 66, Banjara Hills Main Rd, Hyderabad, Telangana 500034')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 font-darker-grotesque font-bold tracking-widest uppercase text-xs sm:text-sm transition-colors duration-300">
                  Get Directions
                </button>
              </a>
              <button className="w-full bg-white border-2 border-primary text-primary hover:bg-primary/5 px-6 sm:px-8 py-3 sm:py-4 font-darker-grotesque font-bold tracking-widest uppercase text-xs sm:text-sm transition-colors duration-300">
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
