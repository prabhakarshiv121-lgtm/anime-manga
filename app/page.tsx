import Link from 'next/link';

const featuredManga = [
  { id: "one-piece", title: "One Piece", type: "Manga • Action, Adventure", img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80", badge: "NEW CHAPTER" },
  { id: "naruto", title: "Naruto Colored", type: "Manga • Shonen, Ninja", img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80", badge: "POPULAR" },
  { id: "jujutsu-kaisen", title: "Jujutsu Kaisen", type: "Manga • Supernatural", img: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=600&auto=format&fit=crop&q=80", badge: "TRENDING" },
  { id: "attack-on-titan", title: "Attack on Titan", type: "Manga • Dark Fantasy", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80", badge: "COMPLETED" },
];

export default function CrunchyrollHome() {
  return (
    <div className="min-h-screen bg-[#0f1012] text-white font-sans pb-16">
      
      {/* Crunchyroll Style Top Header */}
      <header className="bg-[#141519] border-b border-zinc-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-black tracking-wider text-[#f47521] flex items-center gap-1">
            ANIME<span className="text-white">MANGA</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-xs font-bold text-zinc-300">
            <Link href="/" className="text-[#f47521]">Browse Manga</Link>
            <Link href="/" className="hover:text-[#f47521] transition">Simulcasts</Link>
            <Link href="/" className="hover:text-[#f47521] transition">Collections</Link>
            <Link href="/" className="hover:text-[#f47521] transition">History</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <input 
            type="text" 
            placeholder="Search manga..." 
            className="bg-[#202229] border border-zinc-700 text-xs px-3 py-1.5 rounded focus:outline-none focus:border-[#f47521] w-36 sm:w-60"
          />
          <div className="bg-[#f47521] text-black font-extrabold text-xs px-3 py-1.5 rounded cursor-pointer hover:bg-orange-600 transition">
            PRO
          </div>
        </div>
      </header>

      {/* Crunchyroll Style Hero Banner */}
      <div className="relative w-full h-[320px] sm:h-[400px] bg-gradient-to-r from-black via-zinc-900 to-transparent overflow-hidden border-b border-zinc-800">
        <img 
          src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80" 
          alt="Hero Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1012] via-transparent to-transparent"></div>
        <div className="absolute bottom-8 left-6 sm:left-12 max-w-xl">
          <span className="bg-[#f47521] text-black text-[10px] font-black px-2 py-0.5 rounded tracking-widest uppercase">Featured Manga</span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2 tracking-wide text-white">One Piece</h1>
          <p className="text-xs sm:text-sm text-zinc-300 mt-2 line-clamp-2">
            Explore the grand journey of Luffy and his crew with high-resolution chapters and seamless reading experience.
          </p>
          <div className="mt-4 flex gap-3">
            <Link 
              href="/manga/one-piece/1" 
              className="bg-[#f47521] hover:bg-orange-600 text-black font-extrabold text-xs px-6 py-2.5 rounded flex items-center gap-2 transition shadow-lg"
            >
              ▶ Start Reading Chapter 1
            </Link>
          </div>
        </div>
      </div>

      {/* Manga Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-2">
          <h2 className="text-base sm:text-lg font-black tracking-wide text-white border-l-4 border-[#f47521] pl-3">
            Popular Manga Series
          </h2>
          <span className="text-xs text-[#f47521] font-bold cursor-pointer hover:underline">View All →</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {featuredManga.map((item) => (
            <Link 
              href={`/manga/${item.id}/1`} 
              key={item.id}
              className="bg-[#141519] border border-zinc-800/80 rounded-lg overflow-hidden hover:border-[#f47521] transition group flex flex-col shadow-xl"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-2 left-2 bg-[#f47521] text-black text-[9px] font-black px-2 py-0.5 rounded shadow">
                  {item.badge}
                </span>
              </div>
              <div className="p-3 flex flex-col flex-grow justify-between bg-[#141519]">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-100 group-hover:text-[#f47521] transition line-clamp-1">{item.title}</h3>
                <span className="text-[10px] text-zinc-400 mt-1">{item.type}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
