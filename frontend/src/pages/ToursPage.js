import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Clock, ArrowRight, MapPin } from "lucide-react";
import { IMAGES, tours } from "../lib/data";

export default function ToursPage() {
  return (
    <div data-testid="tours-page">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F4F2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#57685E]">
            Tours & Destinations
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-[#1C2B23] font-light">
            Discover New Zealand's
            <br />
            <span className="font-medium">Best Destinations</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#57685E] leading-relaxed max-w-2xl">
            From the glowworm caves of Waitomo to the dramatic fjords of the
            South Island, explore New Zealand with a personalised private tour.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tours.map((tour) => (
              <Card
                key={tour.id}
                data-testid={`tour-card-${tour.id}`}
                className="bg-white border-[#EAE5DB] overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={IMAGES[tour.image]}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-xs font-medium text-[#1C2B23] px-3 py-1.5 rounded-full">
                      {tour.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#57685E] mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {tour.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-[#1C2B23]">
                    {tour.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#57685E] leading-relaxed line-clamp-3">
                    {tour.description}
                  </p>
                  <div className="mt-4 space-y-1.5">
                    {tour.highlights.slice(0, 3).map((h) => (
                      <div
                        key={h}
                        className="flex items-center gap-2 text-xs text-[#57685E]"
                      >
                        <MapPin className="h-3 w-3 text-[#2D5A43] flex-shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-block mt-5">
                    <Button
                      data-testid={`tour-enquire-${tour.id}`}
                      variant="outline"
                      className="border-[#2D5A43] text-[#2D5A43] hover:bg-[#2D5A43] hover:text-white rounded-lg text-sm h-auto py-2 px-4 transition-colors duration-200"
                    >
                      Enquire Now
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F4F2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#57685E]">
                Custom Tours
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#1C2B23] font-light">
                Don't See What You're Looking For?
              </h2>
              <p className="mt-4 text-base text-[#57685E] leading-relaxed">
                We specialise in creating custom itineraries. Tell us your dream
                New Zealand adventure and we'll make it happen. From unique
                routes to specific activities, we design tours that match your
                exact interests.
              </p>
              <Link to="/contact" className="inline-block mt-8">
                <Button
                  data-testid="tours-custom-cta-btn"
                  className="bg-[#D97746] hover:bg-[#BD6032] text-white px-8 py-3 rounded-lg text-base h-auto"
                >
                  Plan a Custom Tour
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <img
                src={IMAGES.coromandel}
                alt="New Zealand coastline"
                className="rounded-2xl w-full aspect-[4/3] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
