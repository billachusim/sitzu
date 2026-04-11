import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/for-businesses", label: "For Businesses" },
    { to: "/for-gadgets", label: "Protect My Gadgets" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <Shield className="h-7 w-7" />
          <span>Sitzu Assure</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button size="sm">Get a Quote</Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background px-4 pb-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Button size="sm" className="w-full">Get a Quote</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
