import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Tours", path: "/tours" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2" data-testid="nav-logo">
            <span
              className={`text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-[#1C2B23]"
              }`}
            >
              NZ Road Tours
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase()}-link`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isTransparent
                    ? location.pathname === link.path
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    : location.pathname === link.path
                    ? "text-[#2D5A43]"
                    : "text-[#57685E] hover:text-[#2D5A43]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button
                data-testid="nav-book-now-btn"
                className="bg-[#D97746] hover:bg-[#BD6032] text-white px-6 rounded-lg transition-colors duration-200"
              >
                Book Now
              </Button>
            </Link>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="nav-mobile-menu-btn">
                <Menu className={`h-6 w-6 transition-colors ${isTransparent ? "text-white" : "text-[#1C2B23]"}`} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white w-80">
              <div className="mt-8 mb-6">
                <span className="text-xl font-medium text-[#1C2B23]">NZ Road Tours</span>
              </div>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    data-testid={`nav-mobile-${link.name.toLowerCase()}-link`}
                    className={`text-lg py-2 font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-[#2D5A43]"
                        : "text-[#57685E] hover:text-[#2D5A43]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <Button className="bg-[#D97746] hover:bg-[#BD6032] text-white w-full rounded-lg mt-2">
                    Book Now
                  </Button>
                </Link>
                <div className="mt-6 pt-6 border-t border-[#EAE5DB] space-y-3">
                  <a href="tel:+64221234567" className="flex items-center gap-3 text-[#57685E] hover:text-[#2D5A43] transition-colors">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">+64 22 123 4567</span>
                  </a>
                  <a href="mailto:info@nzroadtours.co.nz" className="flex items-center gap-3 text-[#57685E] hover:text-[#2D5A43] transition-colors">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">info@nzroadtours.co.nz</span>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
