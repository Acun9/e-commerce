import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronRight, TrendingUp, Package, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomePage = () => {
  // Sample hero slides
  const heroSlides = [
    {
      id: 1,
      title: 'Summer Collection 2024',
      subtitle: 'New Arrivals',
      description: 'Discover the latest trends in fashion',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
      cta: 'Shop Now',
      bgColor: 'bg-gradient-to-r from-blue-500 to-purple-600',
    },
    {
      id: 2,
      title: 'Up to 50% Off',
      subtitle: 'Limited Time Offer',
      description: 'On selected items - Don\'t miss out',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200',
      cta: 'View Deals',
      bgColor: 'bg-gradient-to-r from-red-500 to-orange-600',
    },
    {
      id: 3,
      title: 'Premium Quality',
      subtitle: 'Best Sellers',
      description: 'Shop our most popular products',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200',
      cta: 'Explore',
      bgColor: 'bg-gradient-to-r from-green-500 to-teal-600',
    },
  ];

  // Sample featured products
  const featuredProducts = [
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
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-[400px] md:h-[500px] lg:h-[600px]"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={`relative w-full h-full ${slide.bgColor}`}>
                <div className="absolute inset-0 bg-black/30" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl text-white">
                      <p className="text-sm md:text-base font-semibold mb-2 tracking-wide uppercase">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-base md:text-lg mb-6 md:mb-8">
                        {slide.description}
                      </p>
                      <button className="bg-white text-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-slate-100 transition flex items-center gap-2 text-sm md:text-base">
                        {slide.cta}
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Truck className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Free Shipping</h3>
                <p className="text-sm text-slate-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Package className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Easy Returns</h3>
                <p className="text-sm text-slate-600">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Best Prices</h3>
                <p className="text-sm text-slate-600">Guaranteed low prices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                Featured Products
              </h2>
              <p className="text-slate-600">Discover our handpicked selection</p>
            </div>
            <button className="mt-4 md:mt-0 text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              View All
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-lg mb-6 md:mb-0">
                Subscribe to get special offers, free giveaways, and updates on new arrivals
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg w-full sm:w-80 text-slate-800 outline-none"
              />
              <button className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
