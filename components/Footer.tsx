import Link from "next/link";
import { Bug, Phone, Mail, MapPin, Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-green-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Bug className="w-8 h-8 text-white hover:rotate-12 transition-transform" />
              <span className="text-2xl font-bold text-white">
                Dani<span className="font-light text-white">Pest</span>
              </span>
            </Link>

            <p className="text-white text-sm leading-relaxed max-w-xs">
              Professional, eco-friendly pest control services for homes and
              businesses. Your safety is our priority.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-white hover:translate-x-1 transition-all duration-300 text-sm w-fit"
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="text-white hover:translate-x-1 transition-all duration-300 text-sm w-fit"
              >
                Pricing
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-white  transition-colors text-sm group"
              >
                <div className="p-2 bg-green-800 rounded-full group-hover:bg-green-700 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>(+62)5899979261</span>
              </a>
              <a
                href="mailto:hello@danipest.com"
                className="flex items-center gap-3 text-white  transition-colors text-sm group"
              >
                <div className="p-2 bg-green-800 rounded-full group-hover:bg-green-700 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>hello@danipest.com</span>
              </a>
              <div className="flex items-center gap-3 text-white  text-sm">
                <div className="p-2 bg-green-800 rounded-full">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Bali, Denpasar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-6 text-center">
          <p className="text-white text-sm">
            © {currentYear} DaniPest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
