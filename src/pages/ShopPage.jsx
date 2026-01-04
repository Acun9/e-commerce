import { useState } from 'react';
import { ChevronDown, Grid, List, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Sample categories
  const categories = [
    { id: 'all', name: 'All Products', count: 48 },
    { id: 'clothing', name: 'Clothing', count: 18 },
    { id: 'footwear', name: 'Footwear', count: 12 },
    { id: 'accessories', name: 'Accessories', count: 10 },
    { id: 'electronics', name: 'Electronics', count: 8 },
  ];

  // Sample products
  const products = [
    {
      id: 1,
      name: 'Classic White Sneakers',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      category: 'Footwear',
      rating: 4.5,
      reviews: 128,
    },
    {
      id: 2,
      name: 'Denim Jacket',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
      category: 'Clothing',
      rating: 4.8,
      reviews: 95,
    },
    {
      id: 3,
      name: 'Leather Backpack',
      price: 129.99,
      originalPrice: 159.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      category: 'Accessories',
      rating: 4.7,
      reviews: 67,
    },
    {
      id: 4,
      name: 'Sunglasses',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      category: 'Accessories',
      rating: 4.3,
      reviews: 52,
    },
    {
      id: 5,
      name: 'Smart Watch',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      category: 'Electronics',
      rating: 4.6,
      reviews: 143,
    },
    {
      id: 6,
      name: 'Wireless Headphones',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      category: 'Electronics',
      rating: 4.9,
      reviews: 201,
    },
    {
      id: 7,
      name: 'Cotton T-Shirt',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      category: 'Clothing',
      rating: 4.4,
      reviews: 78,
    },
    {
      id: 8,
      name: 'Running Shoes',
      price: 119.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      category: 'Footwear',
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 9,
      name: 'Casual Shirt',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
      category: 'Clothing',
      rating: 4.5,
      reviews: 89,
    },
    {
      id: 10,
      name: 'Leather Wallet',
      price: 39.99,
      originalPrice: 49.99,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400',
      category: 'Accessories',
      rating: 4.6,
      reviews: 112,
    },
    {
      id: 11,
      name: 'Winter Boots',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400',
      category: 'Footwear',
      rating: 4.8,
      reviews: 74,
    },
    {
      id: 12,
      name: 'Bluetooth Speaker',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
      category: 'Electronics',
      rating: 4.4,
      reviews: 156,
    },
  ];

  const priceRanges = [
    { id: 'under50', label: 'Under $50', count: 15 },
    { id: '50to100', label: '$50 - $100', count: 18 },
    { id: '100to200', label: '$100 - $200', count: 12 },
    { id: 'over200', label: 'Over $200', count: 3 },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Shop</h1>
          <p className="text-slate-600">Browse our collection of quality products</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50 transition text-left">
                        <span className="text-slate-700">{category.name}</span>
                        <span className="text-sm text-slate-400">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Price Range</h3>
                <ul className="space-y-2">
                  {priceRanges.map((range) => (
                    <li key={range.id}>
                      <label className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50 transition cursor-pointer">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 rounded border-slate-300"
                          />
                          <span className="text-slate-700">{range.label}</span>
                        </div>
                        <span className="text-sm text-slate-400">({range.count})</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Rating</h3>
                <ul className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <li key={stars}>
                      <label className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-slate-50 transition cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 rounded border-slate-300"
                        />
                        <div className="flex text-yellow-400">
                          {[...Array(stars)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                          {[...Array(5 - stars)].map((_, i) => (
                            <span key={i} className="text-slate-300">★</span>
                          ))}
                        </div>
                        <span className="text-slate-700 text-sm">& Up</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-center gap-2 bg-white py-3 px-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition"
              >
                <SlidersHorizontal size={20} />
                <span className="font-medium">Filters</span>
              </button>
            </div>

            {/* Toolbar */}
            <div className="bg-white rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-slate-600">
                Showing <span className="font-semibold text-slate-800">{products.length}</span> products
              </p>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                {/* Sort By */}
                <div className="flex items-center gap-2 flex-1 sm:flex-initial">
                  <label className="text-sm text-slate-600 whitespace-nowrap">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-initial"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>

                {/* View Mode - Desktop Only */}
                <div className="hidden sm:flex items-center gap-2 border border-slate-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition ${
                      viewMode === 'grid'
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition ${
                      viewMode === 'list'
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <button className="px-4 py-2 bg-slate-800 text-white rounded-lg font-medium">
                  1
                </button>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition">
                  2
                </button>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition">
                  3
                </button>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-800">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="text-slate-600 hover:text-slate-800"
              >
                ✕
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50 transition text-left">
                      <span className="text-slate-700">{category.name}</span>
                      <span className="text-sm text-slate-400">({category.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Price Range</h3>
              <ul className="space-y-2">
                {priceRanges.map((range) => (
                  <li key={range.id}>
                    <label className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50 transition cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 rounded border-slate-300"
                        />
                        <span className="text-slate-700">{range.label}</span>
                      </div>
                      <span className="text-sm text-slate-400">({range.count})</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rating Filter */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Rating</h3>
              <ul className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <li key={stars}>
                    <label className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-slate-50 transition cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 rounded border-slate-300"
                      />
                      <div className="flex text-yellow-400">
                        {[...Array(stars)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                        {[...Array(5 - stars)].map((_, i) => (
                          <span key={i} className="text-slate-300">★</span>
                        ))}
                      </div>
                      <span className="text-slate-700 text-sm">& Up</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Button */}
            <button
              onClick={() => setShowFilters(false)}
              className="w-full bg-slate-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-900 transition"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
