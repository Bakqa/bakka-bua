"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Sample trending products/services data
const trendingData = {
  theMarket: [
    { id: 1, name: "Fresh Organic Vegetables", price: "$12.99", image: "🥬" },
    { id: 2, name: "Artisan Bread", price: "$6.99", image: "🍞" },
    { id: 3, name: "Free-range Eggs", price: "$8.99", image: "🥚" },
    { id: 4, name: "Local Honey", price: "$14.99", image: "🍯" },
    { id: 5, name: "Organic Coffee", price: "$11.99", image: "☕" },
    { id: 6, name: "Fresh Berries", price: "$9.99", image: "🫐" },
  ],
  gamer: [
    { id: 1, name: "RTX 4080 GPU", price: "$1,199", image: "🖥️" },
    { id: 2, name: "Mechanical Keyboard", price: "$149", image: "⌨️" },
    { id: 3, name: "Gaming Mouse", price: "$79", image: "🖱️" },
    { id: 4, name: "Ultra Monitor 4K", price: "$599", image: "📺" },
    { id: 5, name: "Gaming Headset", price: "$199", image: "🎧" },
    { id: 6, name: "Controller Pro", price: "$69", image: "🎮" },
  ],
  lamp: [
    { id: 1, name: "Smart RGB LED Lamp", price: "$49.99", image: "💡" },
    { id: 2, name: "Desk Lamp Pro", price: "$89.99", image: "🏮" },
    { id: 3, name: "Mood Lighting Kit", price: "$129.99", image: "✨" },
    { id: 4, name: "Solar Outdoor Lights", price: "$39.99", image: "🌞" },
    { id: 5, name: "Neon Sign Kit", price: "$99.99", image: "📸" },
    { id: 6, name: "Lamp with USB Charger", price: "$59.99", image: "🔌" },
  ],
};

// Slideshow images for each platform
const slideShowImages = {
  theMarket: [
    "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1542592534-b13f0b3fe8f9?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1555939594-58d7cb561841?w=1200&h=600&fit=crop",
  ],
  gamer: [
    "https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1587667194303-fd742bc573cb?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1200&h=600&fit=crop",
  ],
  lamp: [
    "https://images.unsplash.com/photo-1565636192335-14f5d7ce1b01?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1565182999555-9e9a04e2f666?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1525159880452-d345fbb3b664?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1578272996442-48f60103cedb?w=1200&h=600&fit=crop",
  ],
};

const TrendingProductSlider = ({ items }: { items: typeof trendingData.theMarket }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 pb-4">
        {items.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-48 bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
            <div className="text-5xl mb-3 text-center">{item.image}</div>
            <h4 className="text-white font-semibold text-sm mb-2">{item.name}</h4>
            <p className="text-emerald-400 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PlatformFullScreen = ({
  name,
  href,
  color,
  icon,
  slideShowImages,
  trendingItems,
}: {
  name: string;
  href: string;
  color: string;
  icon: string;
  slideShowImages: string[];
  trendingItems: typeof trendingData.theMarket;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideShowImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideShowImages.length]);

  return (
    <section className="w-full h-screen overflow-hidden flex flex-col">
      {/* Slideshow Area (top 60%) */}
      <div className="relative h-[60vh] w-full overflow-hidden bg-black">
        {/* Image Container with Cross-fade */}
        <div className="absolute inset-0">
          {slideShowImages.map((imgSrc, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={imgSrc}
                alt={`${name} slide ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === currentSlide}
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Header Text */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
          <div className="inline-block text-6xl mb-2">{icon}</div>
          <h2 className="text-[2rem] md:text-5xl font-bold text-white drop-shadow-lg">{name}</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-2"></div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slideShowImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Cards Area (bottom 40%) */}
      <div className="relative h-[40vh] bg-black/30 backdrop-blur-sm p-6 lg:p-10">
        <h3 className="text-2xl font-bold text-white mb-4">Trending Now</h3>
        <TrendingProductSlider items={trendingItems} />
        <div className="mt-5 flex justify-center">
          <Link href={href}>
            <button className={`px-8 py-3 bg-gradient-to-r ${color} text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg`}>
              View More →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const platforms = [
  {
    name: "The Market",
    href: "/theMarket",
    description: "Shop everyday essentials and more",
    color: "from-emerald-500 to-teal-600",
    icon: "🛒",
    features: ["Fresh Produce", "Household Items", "Daily Essentials", "Fast Delivery"],
    stats: "10,000+ Products",
    bgPattern: "bg-emerald-50 dark:bg-emerald-950/20"
  },
  {
    name: "Gamer",
    href: "/Gamer",
    description: "Gaming gear and accessories",
    color: "from-purple-500 to-indigo-600",
    icon: "🎮",
    features: ["Gaming Hardware", "Accessories", "PC Components", "Consoles"],
    stats: "5,000+ Games",
    bgPattern: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    name: "Lamp",
    href: "/Lamp",
    description: "Lighting solutions for every space",
    color: "from-amber-500 to-orange-600",
    icon: "💡",
    features: ["Smart Lighting", "Decorative Lamps", "Office Lighting", "Outdoor Lights"],
    stats: "2,000+ Products",
    bgPattern: "bg-amber-50 dark:bg-amber-950/20"
  },
];

const PlatformCard = ({ platform, index }: { platform: typeof platforms[0]; index: number }) => (
  <div className={`group relative overflow-hidden rounded-2xl ${platform.bgPattern} border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-800/50 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative p-8">
      <div className="flex items-start justify-between mb-6">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {platform.icon}
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Platform
          </div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">
            #{index + 1}
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
        {platform.name}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {platform.description}
      </p>

      <div className="mb-6">
        <div className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
          {platform.stats}
        </div>
        <div className="flex flex-wrap gap-2">
          {platform.features.map((feature: string, idx: number) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <Link href={platform.href}>
        <button className={`w-full py-4 px-6 bg-gradient-to-r ${platform.color} text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group-hover:shadow-xl`}>
          Explore {platform.name}
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </Link>
    </div>
  </div>
);

const FeatureHighlight = () => (
  <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <div className="max-w-6xl mx-auto text-center">
      <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full mb-6">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
        Why Choose BakkaBua?
      </div>

      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Everything You Need, All in One Place
      </h2>

      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Discover a seamless shopping experience with our curated platforms,
        designed to make your life easier and more enjoyable.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            🚚
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Fast Delivery
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Get your orders delivered quickly and safely to your doorstep.
          </p>
        </div>

        <div className="text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            🛡️
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Secure Shopping
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Shop with confidence with our secure payment and data protection.
          </p>
        </div>

        <div className="text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            ⭐
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Quality Products
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Carefully curated products from trusted brands and suppliers.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const StickyHeader = () => {
  useEffect(() => {
    const header = document.getElementById("scrollHeader");
    if (!header) return;

    const onScroll = () => {
      const opacity = Math.min(window.scrollY / 300, 1);
      header.style.opacity = String(opacity);
      header.style.pointerEvents = window.scrollY > 50 ? "auto" : "none";
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-md border-b border-white/10 shadow-lg z-50 transform transition-all duration-300" style={{ opacity: 0, pointerEvents: "none" }} id="scrollHeader">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Image
          src="/icon/logor-r.png"
          alt="BakkaBua Logo"
          width={120}
          height={46}
          className="drop-shadow-lg"
        />
        <nav className="flex items-center gap-8">
          <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
          <a href="#gallery" className="text-white hover:text-blue-400 transition-colors">Gallery</a>
          <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact Us</a>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
            Profile/Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-600 dark:from-teal-900 dark:to-teal-700">
      <StickyHeader />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 opacity-10"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-green-600/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium rounded-full mb-8 shadow-lg animate-pulse">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Welcome to the Future of Shopping
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                BakkaBua
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Your ultimate destination for shopping, gaming, and lifestyle products.
              Discover everything you need in one seamless experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/theMarket">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg">
                  Start Shopping
                  <span className="ml-2">🛒</span>
                </button>
              </Link>
              <Link href="/Gamer">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Explore Gaming
                  <span className="ml-2">🎮</span>
                </button>
              </Link>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="bg-black/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
                <Image
                  src="/icon/logor-r.png"
                  alt="BakkaBua Logo"
                  width={200}
                  height={77}
                  className="drop-shadow-lg"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Platforms Section */}
      <PlatformFullScreen
        name="The Market"
        href="/theMarket"
        color="from-emerald-500 to-teal-600"
        icon="🛒"
        slideShowImages={slideShowImages.theMarket}
        trendingItems={trendingData.theMarket}
      />
      
      <PlatformFullScreen
        name="Gamer"
        href="/Gamer"
        color="from-purple-500 to-indigo-600"
        icon="🎮"
        slideShowImages={slideShowImages.gamer}
        trendingItems={trendingData.gamer}
      />
      
      <PlatformFullScreen
        name="Lamp"
        href="/Lamp"
        color="from-amber-500 to-orange-600"
        icon="💡"
        slideShowImages={slideShowImages.lamp}
        trendingItems={trendingData.lamp}
      />

      {/* Feature Highlight */}
      <FeatureHighlight />

      {/* Call to Action */}
      <div className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-black dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who trust BakkaBua for all their needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/theMarket">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg">
                Shop Now
              </button>
            </Link>
            <Link href="/Gamer">
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                Play Games
              </button>
            </Link>
            <Link href="/Lamp">
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                Learn
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
