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
      className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-300 ${
        isTransparent
          ? "bg-black/40 backdrop-blur-md"
          : "bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Brand logo */}
          <Link
            to="/"
            className="group flex items-center"
            data-testid="nav-logo"
            aria-label="NZ Road Tours home"
          >
            <span className="relative flex h-14 w-[190px] md:h-16 md:w-[220px] items-center justify-center rounded-xl bg-white px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.16)] ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-[1.02]">
              <img
                src="/logo.png"
                alt="NZ Road Tours"
                className="h-full w-full object-contain"
              />
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
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
              <Button className="bg-[#D97746] hover:bg-[#BD6032] text-white px-6 rounded-lg">
                Book Now
              </Button>
            </Link>
          </nav>

          {/* MOBILE MENU */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu
                  className={`h-6 w-6 ${
                    isTransparent ? "text-white" : "text-[#1C2B23]"
                  }`}
                />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-white w-80 z-[9999]">

              {/* MOBILE LOGO */}
              <div className="mt-8 mb-6 flex items-center">
                <span className="relative flex h-14 w-[190px] items-center justify-center rounded-xl bg-white px-3 py-2 shadow-md ring-1 ring-black/5">
                  <img
                    src="/logo.png"
                    alt="NZ Road Tours"
                    className="h-full w-full object-contain"
                  />
                </span>
              </div>

              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`text-lg py-2 font-medium ${
                      location.pathname === link.path
                        ? "text-[#2D5A43]"
                        : "text-[#57685E] hover:text-[#2D5A43]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link to="/contact" onClick={() => setOpen(false)}>
                  <Button className="bg-[#D97746] text-white w-full rounded-lg mt-2">
                    Book Now
                  </Button>
                </Link>

                {/* UPDATED CONTACT INFO */}
                <div className="mt-6 pt-6 border-t border-[#EAE5DB] space-y-3">
                  <a
                    href="tel:+6421891241"
                    className="flex items-center gap-3 text-[#57685E] hover:text-[#2D5A43]"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">021 891 241</span>
                  </a>

                  <a
                    href="mailto:info@nzroadtours.co.nz"
                    className="flex items-center gap-3 text-[#57685E] hover:text-[#2D5A43]"
                  >
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