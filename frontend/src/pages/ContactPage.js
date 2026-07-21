import BookingForm from "../components/BookingForm";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    detail: "+64 21 891  241",
    href: "tel:+6421891241",
    testId: "contact-phone",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Chat with us anytime",
    href: "https://wa.me/6421891241",
    external: true,
    testId: "contact-whatsapp",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@nzroadtours.co.nz",
    href: "mailto:info@nzroadtours.co.nz",
    testId: "contact-email",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Auckland, New Zealand",
    testId: "contact-location",
  },
  {
    icon: Clock,
    title: "Response Time",
    detail: "Within 24 hours",
    testId: "contact-response",
  },
];

export default function ContactPage() {
  return (
    <div data-testid="contact-page">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F4F2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#57685E]">
            Contact Us
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-[#1C2B23] font-light">
            Let's Plan Your
            <br />
            <span className="font-medium">Perfect Journey</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#57685E] leading-relaxed max-w-2xl">
            Fill out the form below and we'll get back to you within 24 hours
            with a personalised quote for your New Zealand adventure.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-light text-[#1C2B23] mb-8">
                Send an Enquiry
              </h2>
              <BookingForm />
            </div>

            <div>
              <h2 className="text-2xl font-light text-[#1C2B23] mb-8">
                Get in Touch
              </h2>
              <div className="space-y-4">
                {contactCards.map((card) => {
                  const Wrapper = card.href ? "a" : "div";
                  const wrapperProps = card.href
                    ? {
                        href: card.href,
                        ...(card.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {}),
                      }
                    : {};
                  return (
                    <Wrapper
                      key={card.title}
                      {...wrapperProps}
                      data-testid={card.testId}
                      className={`flex items-start gap-4 p-4 rounded-xl bg-[#F4F2EE] transition-colors duration-200 ${
                        card.href ? "hover:bg-[#EAE5DB] cursor-pointer" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#2D5A43]/10 flex items-center justify-center flex-shrink-0">
                        <card.icon className="h-5 w-5 text-[#2D5A43]" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#1C2B23]">
                          {card.title}
                        </div>
                        <div className="text-sm text-[#57685E] mt-0.5">
                          {card.detail}
                        </div>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
