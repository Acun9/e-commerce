import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
  const {
    id = 1,
    name = 'Product Name',
    price = 99.99,
    originalPrice,
    image = 'https://via.placeholder.com/300x400',
    category = 'Category',
    rating = 4.5,
    reviews = 0,
  } = product || {};

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {originalPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </div>
        )}

        {/* Quick Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-slate-100 transition">
            <Heart size={18} />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-slate-100 transition">
            <Eye size={18} />
          </button>
        </div>

        {/* Add to Cart Button (Mobile visible, Desktop on hover) */}
        <button className="absolute bottom-0 left-0 right-0 bg-slate-800 text-white py-2 px-4 flex items-center justify-center gap-2 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
          <ShoppingCart size={18} />
          <span className="text-sm font-medium">Add to Cart</span>
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
          {category}
        </p>
        <Link to={`/product/${id}`}>
          <h3 className="text-sm font-semibold text-slate-800 mb-2 hover:text-slate-600 transition line-clamp-2">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xs">
                {i < Math.floor(rating) ? '★' : '☆'}
              </span>
            ))}
          </div>
          <span className="text-xs text-slate-500">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-slate-800">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
