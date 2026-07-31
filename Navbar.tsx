'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [search, setSearch] = useState('');

  return (
    <nav className="sticky top-0 z-50 bg-[#0f0f0f] border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 bg-[#1e88e5] rounded-lg flex items-center justify-center text-white font-bold text-lg">
            M
          </div>
          <span className="text-xl font-bold text-white tracking-tight hidden sm:block">
            MANGA<span className="text-[#1e88e5]">HINDI</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {['Home', 'Manga List', 'Genres', 'Hinglish', 'Bookmark'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="text-[#9e9e9e] hover:text-white transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xs">
          <div className="relative">
            <input
              type="text"
              placeholder="Anime/Manga search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg py-2 pl-4 pr-10 text-sm text-white placeholder-[#666] focus:outline-none focus:border-[#1e88e5] transition-colors"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1e88e5] hover:bg-[#1565c0] text-white text-xs px-3 py-1 rounded-md font-medium transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
