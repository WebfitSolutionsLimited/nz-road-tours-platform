import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Tours", path: "/tours" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  { name: "Airport Transfers", path: "/services" },
  { name: "Day Tours", path: "/tours" },
  { name: "Multi-Day Tours", path: "/tours" },
  { name: "Private Chauffeur", path: "/services" },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-[#1C2B23] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="NZ Road Tours home">
              <img
                src="/logo.png"
                alt="NZ Road Tours Logo"
                className="h-16 w-auto max-w-[200px] object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Your trusted private tour operator based in Auckland, offering personalised travel experiences across New Zealand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-white/30 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-white/30 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-white/30 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+6421891241"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  +64 21 891 241
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/6421891241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  WhatsApp Us
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@nzroadtours.co.nz"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  info@nzroadtours.co.nz
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                Auckland, New Zealand
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-xs text-white/30 text-center md:text-left">
            © {new Date().getFullYear()} NZ Road Tours. All rights reserved.
          </p>

          <p className="text-xs text-white/40 text-center md:text-right leading-relaxed">
            Private Tour Operator, Auckland, New Zealand
            <br className="hidden md:block" />
            <span className="block md:inline md:ml-2">
              Powered by{" "}
              <a
                href="https://www.webfitt.co.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-200 underline underline-offset-2"
              >
                Webfit Solutions Limited
              </a>
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
}