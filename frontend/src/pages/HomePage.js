import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Shield, Star, Compass, Car, Users, Clock, ArrowRight, Plane } from "lucide-react";
import Marquee from "react-fast-marquee";
import { IMAGES, services, testimonials, whyChooseUs, stats } from "../lib/data";

const serviceIcons = {
  "airport-transfer": Plane,
  "day-tour": Compass,
  "multi-day-tour": Car,
  chauffeur: Car,
};

const featureIcons = [Shield, Users, Clock, Star];

export default function HomePage() {
  return (
    <div data-testid="home-page">
      {/* Hero */}
      <section data-testid="hero-section" className="relative min-h-[80vh] md:min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Premium SUV on scenic New Zealand mountain road"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C2B23]/95 via-[#1C2B23]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-white/60 animate-fade-in-up">
              Private Tour Operator — Auckland, New Zealand
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white animate-fade-in-up-delay-1">
              <span className="font-light">Explore New Zealand</span>
              <br />
              <span className="font-medium">Your Way</span>
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/80 max-w-lg animate-fade-in-up-delay-2">
              Premium private tours and chauffeur services across New Zealand.
              From scenic day trips to multi-day adventures, every journey is
              tailored just for you.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up-delay-3">
              <Link to="/contact">
                <Button
                  data-testid="hero-plan-journey-btn"
                  className="bg-[#D97746] hover:bg-[#BD6032] text-white px-8 py-3 rounded-lg text-base h-auto"
                >
                  Plan Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/tours">
                <Button
                  data-testid="hero-view-tours-btn"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg text-base h-auto"
                >
                  View Tours
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section data-testid="stats-section" className="py-12 md:py-16 bg-white border-y border-[#EAE5DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="text-3xl md:text-4xl font-light text-[#2D5A43]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#57685E] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section data-testid="services-section" className="py-20 md:py-32 bg-[#F4F2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#57685E]">
            What We Offer
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#1C2B23] font-light">
              Our Services
            </h2>
            <Link
              to="/services"
              data-testid="services-view-all-link"
              className="text-sm font-medium text-[#2D5A43] hover:text-[#D97746] transition-colors flex items-center gap-1"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => {
              const Icon = serviceIcons[service.id] || Compass;
              return (
                <Card
                  key={service.id}
                  data-testid={`service-card-${service.id}`}
                  className="bg-white border-[#EAE5DB] p-6 md:p-8 hover:shadow-md transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2D5A43]/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#2D5A43]" />
                  </div>
                  <h3 className="mt-5 text-xl text-[#1C2B23] font-medium">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#57685E] leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-[#D97746] hover:text-[#BD6032] transition-colors"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations Bento Grid */}
      <section data-testid="destinations-section" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#57685E]">
            Popular Destinations
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#1C2B23] font-light">
              Where We Take You
            </h2>
            <Link
              to="/tours"
              data-testid="destinations-view-all-link"
              className="text-sm font-medium text-[#2D5A43] hover:text-[#D97746] transition-colors flex items-center gap-1"
            >
              Explore all tours <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <Link
              to="/tours"
              data-testid="dest-mountains"
              className="md:col-span-7 md:row-span-2 group relative overflow-hidden rounded-xl min-h-[250px] md:min-h-[450px]"
            >
              <img
                src={IMAGES.mountains}
                alt="Otago Mountains scenic road"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="text-xs tracking-[0.15em] uppercase text-white/60">
                  Multi-Day Tour
                </span>
                <h3 className="text-xl md:text-2xl text-white font-medium mt-1">
                  South Island Explorer
                </h3>
              </div>
            </Link>

            <Link
              to="/tours"
              data-testid="dest-snow"
              className="md:col-span-5 md:row-span-2 group relative overflow-hidden rounded-xl min-h-[250px] md:min-h-[450px]"
            >
              <img
                src={IMAGES.snow}
                alt="Canterbury snow-capped mountains"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="text-xs tracking-[0.15em] uppercase text-white/60">
                  Scenic Drive
                </span>
                <h3 className="text-xl md:text-2xl text-white font-medium mt-1">
                  Canterbury Alps
                </h3>
              </div>
            </Link>

            {[
              { name: "Hobbiton", tag: "Day Tour", img: IMAGES.hobbiton },
              { name: "Rotorua", tag: "Day Tour", img: IMAGES.rotorua },
              { name: "Bay of Islands", tag: "Day Tour", img: IMAGES.bayOfIslands },
            ].map((dest) => (
              <Link
                key={dest.name}
                to="/tours"
                data-testid={`dest-${dest.name.toLowerCase().replace(/\s/g, '-')}`}
                className="md:col-span-4 group relative overflow-hidden rounded-xl min-h-[200px]"
              >
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="text-xs tracking-[0.15em] uppercase text-white/60">
                    {dest.tag}
                  </span>
                  <h3 className="text-lg text-white font-medium mt-0.5">
                    {dest.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section data-testid="why-choose-section" className="py-20 md:py-32 bg-[#F4F2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#57685E]">
                Why NZ Road Tours
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#1C2B23] font-light">
                Your Journey, Our Expertise
              </h2>
              <p className="mt-4 text-base text-[#57685E] leading-relaxed">
                We're not just a transport service — we're your personal gateway
                to experiencing New Zealand the way it was meant to be explored.
              </p>
              <div className="mt-10 space-y-8">
                {whyChooseUs.map((feature, i) => {
                  const Icon = featureIcons[i];
                  return (
                    <div key={feature.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#2D5A43]/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-[#2D5A43]" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-[#1C2B23]">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#57685E] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <img
                src={IMAGES.vanInterior}
                alt="Premium van interior with mountain views"
                className="rounded-2xl w-full object-cover shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#D97746]/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section data-testid="testimonials-section" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#57685E]">
            Testimonials
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#1C2B23] font-light">
            What Our Travellers Say
          </h2>
        </div>
        <Marquee speed={35} gradient={false} pauseOnHover>
          {testimonials.map((t) => (
            <div key={t.id} className="mx-4 min-w-[320px] max-w-[400px]">
              <Card className="p-6 bg-[#F4F2EE] border-[#EAE5DB] h-full" data-testid={`testimonial-${t.id}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#D97746] text-[#D97746]"
                    />
                  ))}
                </div>
                <p className="text-sm text-[#1C2B23] leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-[#EAE5DB]">
                  <div className="font-medium text-sm text-[#1C2B23]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#57685E] mt-0.5">
                    {t.location}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </Marquee>
      </section>

      {/* CTA */}
      <section data-testid="cta-section" className="py-20 md:py-32 bg-[#2D5A43]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white font-light">
            Ready to Explore New Zealand?
          </h2>
          <p className="mt-4 text-base text-white/70 leading-relaxed max-w-xl mx-auto">
            Let us plan your perfect journey. Whether it's a day trip or a
            multi-week adventure, we'll create an experience you'll never forget.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button
                data-testid="cta-get-quote-btn"
                className="bg-[#D97746] hover:bg-[#BD6032] text-white px-8 py-3 rounded-lg text-base h-auto"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a
              href="https://wa.me/64221234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                data-testid="cta-whatsapp-btn"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg text-base h-auto"
              >
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
