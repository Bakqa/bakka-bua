"use client";

import { useState } from "react";
import {
  Play,
  Heart,
  Share2,
  Clock,
  Users,
  Star,
  Music,
  Podcast,
  Film,
  Radio,
  ChevronRight,
} from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  category: "music" | "podcast" | "show" | "video";
  image: string;
  rating: number;
  plays: number;
  duration?: number;
  creator: string;
  description: string;
}

const contentData: ContentItem[] = [
  {
    id: "1",
    title: "Ethereal Beats Mix",
    category: "music",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
    rating: 4.8,
    plays: 2500000,
    duration: 45,
    creator: "DJ Luna",
    description: "Chill electronic beats perfect for focus and relaxation",
  },
  {
    id: "2",
    title: "Tech Talk Daily",
    category: "podcast",
    image:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop",
    rating: 4.6,
    plays: 850000,
    duration: 35,
    creator: "Alex Chen",
    description: "Daily discussions on the latest in technology and innovation",
  },
  {
    id: "3",
    title: "Neon Nights",
    category: "show",
    image:
      "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400&h=400&fit=crop",
    rating: 4.9,
    plays: 5200000,
    duration: 52,
    creator: "Studio Prod",
    description: "An immersive cyberpunk thriller series",
  },
  {
    id: "4",
    title: "Indie Sessions",
    category: "music",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    rating: 4.4,
    plays: 1200000,
    duration: 60,
    creator: "Sarah Miles",
    description: "Discover emerging independent artists from around the world",
  },
  {
    id: "5",
    title: "Wellness Hour",
    category: "podcast",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop",
    rating: 4.7,
    plays: 620000,
    duration: 42,
    creator: "Dr. wellness",
    description: "Mental health and wellness tips from industry experts",
  },
  {
    id: "6",
    title: "GameScape",
    category: "video",
    image:
      "https://images.unsplash.com/photo-1516979187457-635ffe35ff15?w=400&h=400&fit=crop",
    rating: 4.5,
    plays: 3800000,
    duration: 28,
    creator: "Pro Gamers",
    description: "Competitive gaming highlights and tutorials",
  },
];

const categories = [
  { id: "all", name: "All Content", icon: Radio },
  { id: "music", name: "Music", icon: Music },
  { id: "podcast", name: "Podcasts", icon: Podcast },
  { id: "show", name: "Shows", icon: Film },
  { id: "video", name: "Videos", icon: Play },
];

function ContentCard({
  item,
  isLarge = false,
}: {
  item: ContentItem;
  isLarge?: boolean;
}) {
  const [isSaved, setIsSaved] = useState(false);

  const getCategoryIcon = () => {
    const iconClass = "text-white";
    switch (item.category) {
      case "music":
        return <Music className={iconClass} size={24} />;
      case "podcast":
        return <Podcast className={iconClass} size={24} />;
      case "show":
        return <Film className={iconClass} size={24} />;
      case "video":
        return <Play className={iconClass} size={24} />;
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-300 ${isLarge ? "col-span-1 row-span-2" : ""}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-800 aspect-square">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
          {getCategoryIcon()}
        </div>

        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transform hover:scale-110 transition-all">
            <Play size={32} className="fill-current" />
          </button>
        </div>

        {/* Save Button */}
        <button
          onClick={() => setIsSaved(!isSaved)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
        >
          <Heart
            size={20}
            className={`transition-colors ${isSaved ? "fill-red-500 text-red-500" : "text-white"}`}
          />
        </button>
      </div>

      {/* Content Info */}
      <div className="p-4 bg-gray-800/50 backdrop-blur-sm">
        <h3 className="font-bold text-white line-clamp-1 mb-1 group-hover:text-blue-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-gray-300 line-clamp-1 mb-3">
          {item.creator}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span>{item.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{(item.plays / 1000000).toFixed(1)}M</span>
          </div>
          {item.duration && (
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{item.duration}m</span>
            </div>
          )}
        </div>

        {/* Description (visible on hover) */}
        <p className="text-xs text-gray-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Lamp() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredContent, setFilteredContent] = useState(contentData);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      setFilteredContent(contentData);
    } else {
      setFilteredContent(
        contentData.filter((item) => item.category === categoryId),
      );
    }
  };

  const featured = contentData[2]; // Featured show

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
      {/* Hero Section with Featured Content */}
      <section className="relative h-96 overflow-hidden rounded-2xl mx-4 mt-4 mb-12">
        <div className="absolute inset-0">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
          <div className="mb-6 inline-block w-fit">
            <span className="px-4 py-2 bg-red-600 rounded-full text-sm font-bold animate-pulse">
              Now Featuring
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight max-w-2xl">
            {featured.title}
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-xl">
            {featured.description}
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Star className="fill-yellow-400 text-yellow-400" size={20} />
              <span className="font-semibold">{featured.rating}</span>
            </div>
            <div className="w-px h-6 bg-gray-600" />
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>{(featured.plays / 1000000).toFixed(1)}M views</span>
            </div>
            <div className="w-px h-6 bg-gray-600" />
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>{featured.duration}m</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold flex items-center gap-2 transition-colors">
              <Play size={20} className="fill-current" />
              Play Now
            </button>
            <button className="px-8 py-3 bg-white/20 hover:bg-white/30 rounded-lg font-bold flex items-center gap-2 transition-colors backdrop-blur-sm">
              <Share2 size={20} />
              Share
            </button>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="px-4 mb-12">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <Icon size={18} />
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Grid */}
      <section className="px-4 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            {selectedCategory === "all"
              ? "All Content"
              : categories.find((c) => c.id === selectedCategory)?.name}
          </h2>
          <button className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors font-semibold">
            View All <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
          {filteredContent.map((item, idx) => (
            <ContentCard key={item.id} item={item} isLarge={idx === 0} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 mx-4 mb-16 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Premium Experience Awaits
        </h2>
        <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
          Unlimited entertainment at your fingertips. Music, podcasts, shows,
          and more.
        </p>
        <button className="px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
          Start Free Trial
        </button>
      </section>
    </div>
  );
}
