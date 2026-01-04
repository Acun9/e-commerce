import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-12">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">E-Shop</h3>
            <p className="text-slate-300 text-sm mb-4">
              Your one-stop shop for all your needs. Quality products at great prices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link to="/shop" className="hover:text-white transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-white transition">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/deals" className="hover:text-white transition">
                  Deals
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="hover:text-white transition">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-white transition">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>© 2024 E-Shop. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Made with ❤️ for shoppers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
