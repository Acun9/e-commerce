import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📧 shop@email.com</span>
            <span>📱 (123) 456-7890</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow Us</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-800">
            E-Shop
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-slate-700 hover:text-slate-900 font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-slate-700 hover:text-slate-900 font-medium">
              Shop
            </Link>
            <Link to="/about" className="text-slate-700 hover:text-slate-900 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-slate-700 hover:text-slate-900 font-medium">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="text-slate-700 hover:text-slate-900">
              <Search size={20} />
            </button>
            <button className="text-slate-700 hover:text-slate-900 hidden md:block">
              <Heart size={20} />
            </button>
            <button className="text-slate-700 hover:text-slate-900">
              <ShoppingCart size={20} />
            </button>
            <button className="text-slate-700 hover:text-slate-900 hidden md:block">
              <User size={20} />
            </button>
            <button className="text-slate-700 hover:text-slate-900 md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
