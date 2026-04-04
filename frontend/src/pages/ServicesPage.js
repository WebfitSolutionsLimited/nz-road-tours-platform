import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { IMAGES, services } from "../lib/data";

export default function ServicesPage() {
  return (
    <div data-testid="services-page">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F4F2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#57685E]">
            Our Services
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-[#1C2B23] font-light">
            Premium Transport
            <br />
            <span className="font-medium">& Tour Services</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#57685E] leading-relaxed max-w-2xl">
            From airport transfers to multi-day adventures, we provide
            personalised travel experiences designed around your needs.
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          data-testid={`service-detail-${service.id}`}
          className={`py-20 md:py-28 ${index % 2 === 0 ? "bg-white" : "bg-[#F4F2EE]"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#1C2B23] font-light">
                  {service.title}
                </h2>
                <p className="mt-4 text-base text-[#57685E] leading-relaxed">
                  {service.fullDesc}
                </p>
                <div className="mt-8">
                  <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-[#2D5A43] mb-4">
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-[#1C2B23]"
                      >
                        <Check className="h-4 w-4 text-[#2D5A43] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="inline-block mt-8">
                  <Button
                    data-testid={`service-enquire-${service.id}`}
                    className="bg-[#D97746] hover:bg-[#BD6032] text-white px-6 py-3 rounded-lg h-auto"
                  >
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className={`relative ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                <img
                  src={IMAGES[service.image]}
                  alt={service.title}
                  className="rounded-2xl w-full aspect-[4/3] object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 md:py-28 bg-[#2D5A43]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white font-light">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-base text-white/70">
            Get in touch and we'll help you plan the perfect travel experience.
          </p>
          <Link to="/contact" className="inline-block mt-8">
            <Button
              data-testid="services-cta-btn"
              className="bg-[#D97746] hover:bg-[#BD6032] text-white px-8 py-3 rounded-lg text-base h-auto"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
