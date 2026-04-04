import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Shield, Users, Heart, Star, ArrowRight } from "lucide-react";
import { IMAGES } from "../lib/data";

const values = [
  {
    icon: Shield,
    title: "Safety & Reliability",
    description:
      "Your safety is our absolute priority. All vehicles are regularly maintained, fully insured, and our drivers follow strict safety protocols for every journey.",
  },
  {
    icon: Users,
    title: "Personalised Experience",
    description:
      "No two tours are the same. We listen to your needs and design every journey around your interests, pace, and preferences.",
  },
  {
    icon: Heart,
    title: "Passion for New Zealand",
    description:
      "Our team is passionate about sharing the beauty of New Zealand. We take you to iconic spots and hidden gems that only locals know.",
  },
  {
    icon: Star,
    title: "Quality Service",
    description:
      "From the moment you enquire to the end of your journey, we deliver a premium, five-star experience every time.",
  },
];

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F4F2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#57685E]">
            About Us
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-[#1C2B23] font-light">
            Kia Ora,
            <br />
            <span className="font-medium">Welcome to NZ Road Tours</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#57685E] leading-relaxed max-w-2xl">
            We're an Auckland-based private tour operator dedicated to showing
            you the real New Zealand — beyond the ordinary, beyond the tourist
            trails.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#57685E]">
                Our Story
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#1C2B23] font-light">
                More Than a Transport Service
              </h2>
              <div className="mt-6 space-y-4 text-base text-[#57685E] leading-relaxed">
                <p>
                  NZ Road Tours was born from a simple belief: the best way to
                  experience New Zealand is with a local by your side. We're not
                  a taxi service or a bus company — we're your personal gateway
                  to unforgettable Kiwi experiences.
                </p>
                <p>
                  Based in Auckland, our team specialises in private tours and
                  transport services that cover the entire length of New Zealand.
                  From scenic coastal drives to breathtaking mountain passes, we
                  take you beyond the ordinary.
                </p>
                <p>
                  Whether you're exploring local gems or embarking on a grand New
                  Zealand adventure, our expert team ensures every journey is
                  comfortable, flexible, and packed with stunning memories.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={IMAGES.chauffeur}
                alt="NZ Road Tours professional chauffeur service"
                className="rounded-2xl w-full object-cover shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#2D5A43]/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F4F2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#57685E]">
              Our Promise
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#1C2B23] font-light">
              What Sets Us Apart
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {values.map((value) => (
              <div
                key={value.title}
                data-testid={`about-value-${value.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2D5A43]/10 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-[#2D5A43]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C2B23]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#57685E] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#57685E]">
                Your Guide
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#1C2B23] font-light">
                One Driver, One Journey
              </h2>
              <div className="mt-6 space-y-4 text-base text-[#57685E] leading-relaxed">
                <p>
                  When you book with NZ Road Tours, you'll have one friendly
                  driver for the entire duration of your trip. Your driver is
                  more than just a driver — they're your guide, your local
                  expert, and your travel companion.
                </p>
                <p>
                  They know the best photo spots, the quietest beaches, the most
                  scenic routes, and the local stories behind every landmark.
                  It's like exploring New Zealand with a friend who knows every
                  corner of the country.
                </p>
              </div>
              <Link to="/contact" className="inline-block mt-8">
                <Button
                  data-testid="about-cta-btn"
                  className="bg-[#D97746] hover:bg-[#BD6032] text-white px-8 py-3 rounded-lg text-base h-auto"
                >
                  Book Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="lg:order-1">
              <img
                src={IMAGES.vanInterior}
                alt="Comfortable luxury van interior"
                className="rounded-2xl w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
