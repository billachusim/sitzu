import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <Shield className="h-5 w-5" />
            Sitzu Assure
          </div>
          <p className="text-sm opacity-70">
            Making insurance simple, human, and actually helpful. No jargon, just peace of mind.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Solutions</h4>
          <div className="space-y-2 text-sm opacity-70">
            <Link to="/for-businesses" className="block hover:opacity-100">For Businesses</Link>
            <Link to="/for-gadgets" className="block hover:opacity-100">Gadget Protection</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Company</h4>
          <div className="space-y-2 text-sm opacity-70">
            <a href="#" className="block hover:opacity-100">About Us</a>
            <a href="#" className="block hover:opacity-100">Contact</a>
            <a href="#" className="block hover:opacity-100">Careers</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Legal</h4>
          <div className="space-y-2 text-sm opacity-70">
            <a href="#" className="block hover:opacity-100">Privacy Policy</a>
            <a href="#" className="block hover:opacity-100">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Sitzu Assure. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
