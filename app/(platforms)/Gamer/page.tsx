"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

interface Game {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  playUrl: string;
}

const games: Game[] = [
  {
    id: "basket-battle",
    title: "Basket Battle",
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=200&fit=crop",
    category: "Sports",
    isFeatured: true,
    playUrl: "/games/basket-battle"
  },
  {
    id: "cars-arena",
    title: "Cars Arena",
    thumbnail: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop",
    category: "Racing",
    isFeatured: true,
    playUrl: "/games/cars-arena"
  },
  {
    id: "golf-orbit",
    title: "Golf Orbit",
    thumbnail: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=300&h=200&fit=crop",
    category: "Sports",
    isFeatured: true,
    playUrl: "/games/golf-orbit"
  },
  {
    id: "scooter-xtreme",
    title: "Scooter Xtreme",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    category: "Action",
    isFeatured: true,
    playUrl: "/games/scooter-xtreme"
  },
  {
    id: "pocket-royale",
    title: "Pocket Battle Royale",
    thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=200&fit=crop",
    category: "Action",
    isNew: true,
    playUrl: "/games/pocket-royale"
  },
  {
    id: "basketball-shooter",
    title: "Basketball Serial Shooter",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    category: "Sports",
    playUrl: "/games/basketball-shooter"
  },
  {
    id: "bombs-drops",
    title: "Bombs Drops Physics",
    thumbnail: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=300&h=200&fit=crop",
    category: "Puzzle",
    playUrl: "/games/bombs-drops"
  },
  {
    id: "giant-attack",
    title: "Giant Attack",
    thumbnail: "https://images.unsplash.com/photo-1560415755-bd80d06c29a9?w=300&h=200&fit=crop",
    category: "Action",
    playUrl: "/games/giant-attack"
  },
  {
    id: "quest-21",
    title: "Quest 21",
    thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=200&fit=crop",
    category: "Adventure",
    playUrl: "/games/quest-21"
  },
  {
    id: "space-runner",
    title: "Space Runner",
    thumbnail: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=300&h=200&fit=crop",
    category: "Arcade",
    isNew: true,
    playUrl: "/games/space-runner"
  },
  {
    id: "chess-master",
    title: "Chess Master",
    thumbnail: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=300&h=200&fit=crop",
    category: "Strategy",
    playUrl: "/games/chess-master"
  },
  {
    id: "puzzle-blocks",
    title: "Puzzle Blocks",
    thumbnail: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=200&fit=crop",
    category: "Puzzle",
    playUrl: "/games/puzzle-blocks"
  }
];

const categories = [
  "All", "New", "Multiplayer", "Puzzle", "Arcade", "Board", "Strategy",
  "Sports", "Action", "Card", "Adventure", "Simulation", "Word", "Racing",
  "Educational", "Trivia", "Music", "Casino"
];

function GameCard({ game }: { game: Game }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={game.thumbnail}
          alt={game.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        {game.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{game.title}</h3>
        <Link
          href={game.playUrl}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
        >
          Play
        </Link>
      </div>
    </div>
  );
}

export default function Gamer() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = useMemo(() => {
    let filtered = games;

    if (selectedCategory === "New") {
      filtered = games.filter(game => game.isNew);
    } else if (selectedCategory !== "All") {
      filtered = games.filter(game => game.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(game =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const featuredGames = games.filter(game => game.isFeatured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/platforms/Gamer" className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-xl font-bold text-gray-900">GameSnacks</span>
              </Link>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8">
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/platforms/Gamer" className="text-gray-700 hover:text-blue-600 font-medium">
                Games
              </Link>
              <Link href="/platforms/Gamer/categories" className="text-gray-700 hover:text-blue-600 font-medium">
                Categories
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Games */}
        {selectedCategory === "All" && !searchQuery && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Games</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </section>
        )}

        {/* All Games */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "All" ? "All Games" : `${selectedCategory} Games`}
              {searchQuery && ` - "${searchQuery}"`}
            </h2>
            <span className="text-gray-600">{filteredGames.length} games</span>
          </div>

          {filteredGames.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No games found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>These games are brought to you by Bakkabua Gaming Platform</p>
            <p className="mt-2 text-sm">© 2024 Bakkabua. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
