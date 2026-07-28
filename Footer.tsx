import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a15] border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                AM
              </div>
              <span className="text-xl font-bold">
                <span className="text-purple-400">Anime</span>
                <span className="text-pink-400">Manga</span>
                <span className="text-slate-400 text-sm ml-1">Free</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md">
              Your ultimate destination for free anime and manga. Read, explore, and discover thousands of titles across all genres.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/anime" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">
                  Browse Anime
                </Link>
              </li>
              <li>
                <Link href="/manga" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">
                  Browse Manga
                </Link>
              </li>
            </ul>
          </div>

          {/* Genres */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Genres</h3>
            <ul className="space-y-2">
              {["Action", "Romance", "Fantasy", "Comedy"].map((genre) => (
                <li key={genre}>
                  <Link
                    href={`/anime?genre=${genre.toLowerCase()}`}
                    className="text-slate-400 hover:text-pink-400 text-sm transition-colors"
                  >
                    {genre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © 2024 Anime Manga Free. All rights reserved. For educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
