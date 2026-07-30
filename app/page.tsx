import Link from 'next/link';

const mangaCatalog = [
  { id: "naruto", title: "Naruto: Full Color Edition", ch: "Chapter 1", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80", tag: "COLOR" },
  { id: "one-piece", title: "One Piece", ch: "Chapter 1112", img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80", tag: "MANGA" },
  { id: "solo-leveling", title: "Solo Leveling", ch: "Chapter 200", img: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=500&auto=format&fit=crop&q=80", tag: "MANHWA" },
  { id: "jujutsu-kaisen", title: "Jujutsu Kaisen", ch: "Chapter 255", img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80", tag: "MANGA" },
  { id: "kingdom", title: "Kingdom", ch: "Chapter 839", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80", tag: "MANGA" },
  { id: "tower-of-god", title: "Tower of God", ch: "Chapter 600", img: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=80", tag: "MANHWA" },
];

export default function RealMangaHome() {
  return (
    <div className="min-h-screen bg-[#121212] text-zinc-100 font-sans pb-16">
      
      {/* Top Header */}
      <header className="bg-black border-b border-zinc-800 px-4 py-3 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2">
          <span className="bg-blue-600 text-white font-black px-2 py-0.5 rounded text-xs">MANGA</span>
          <span className="text-xl font-black italic tracking-wider text-white">HINDI<span className="text-blue-500">MANGA</span></span>
        </div>
        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="Anime/Manga search..." 
            className="bg-[#222] border border-zinc-700 text-xs px-3 py-1.5 rounded-l text-white focus:outline-none focus:border-blue-500 w-36 sm:w-60"
          />
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-3 py-1.5 rounded-r">
            Search
          </button>
        </div>
      </header>

      {/* Blue Navigation Bar */}
      <nav className="bg-[#0073e6] px-4 py-2 flex gap-6 overflow-x-auto text-xs font-bold text-white shadow-md">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/" className="hover:underline">Colored Manga</Link>
        <Link href="/" className="hover:underline">Manhwa</Link>
        <Link href="/" className="hover:underline">Latest Chapters</Link>
        <Link href="/" className="hover:underline">Bookmarks</Link>
      </nav>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-[#0073e6] px-4 py-2 rounded-t flex justify-between items-center text-white">
          <h2 className="text-sm font-black uppercase tracking-wide">🔥 Popular Manga & Manhwa (Hinglish Reader)</h2>
        </div>

        {/* Catalog Grid */}
        <div className="bg-[#1b1b1b] border border-zinc-800 p-4 rounded-b shadow-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {mangaCatalog.map((item) => (
            <Link 
              href={`/manga/${item.id}/1`} 
              key={item.id}
              className="bg-[#121212] border border-zinc-800 rounded overflow-hidden hover:border-blue-500 transition group flex flex-col shadow-md"
            >
              <div className="relative aspect-[3/4] w-full bg-zinc-900 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow">
                  {item.tag}
                </span>
                <div className="absolute bottom-0 inset-x-0 bg-blue-600/90 text-white text-[10px] font-black px-2 py-1 flex justify-between items-center shadow-inner">
                  <span>{item.ch}</span>
                </div>
              </div>
              <div className="p-2.5 flex flex-col justify-center">
                <h3 className="text-xs font-bold text-zinc-200 group-hover:text-blue-400 transition line-clamp-1 text-center">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
