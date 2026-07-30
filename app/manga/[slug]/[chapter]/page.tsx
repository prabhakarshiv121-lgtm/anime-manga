import Link from 'next/link';

const mangaList = [
  { 
    id: 'naruto', 
    title: 'Naruto', 
    chapters: 700, 
    coverImg: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=500&auto=format&fit=crop&q=80',
    desc: 'Ninja adventures, Hokage journey & epic battles in Hinglish.' 
  },
  { 
    id: 'one-piece', 
    title: 'One Piece', 
    chapters: 1100, 
    coverImg: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80',
    desc: 'Pirate king hunt, Devil fruits & Grand Line mysteries.' 
  },
  { 
    id: 'attack-on-titan', 
    title: 'Attack on Titan', 
    chapters: 139, 
    coverImg: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80',
    desc: 'Walls, Titans, and humanity survival story.' 
  },
  { 
    id: 'jujutsu-kaisen', 
    title: 'Jujutsu Kaisen', chapters: 250, 
    coverImg: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80',
    desc: 'Curses, Sukuna, and sorcerer high school action.' 
  },
  { 
    id: 'demon-slayer', 
    title: 'Demon Slayer', 
    chapters: 205, 
    coverImg: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=80',
    desc: 'Tanjiro & Nezuko breathing styles vs demons.' 
  },
  { 
    id: 'solo-leveling', 
    title: 'Solo Leveling', 
    chapters: 200, 
    coverImg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80',
    desc: 'Weakest hunter to Shadow Monarch journey.' 
  },
];

export default function MangaExplorePage() {
  return (
    <div className="min-h-screen bg-[#0d0d12] text-white p-4 sm:p-6 max-w-6xl mx-auto">
      
      {/* Header Section */}
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-wide">📚 A to Z Anime Manga Books</h1>
        <p className="text-zinc-400 text-sm mt-2">Sabhi anime ke full chapters padho, ekdum real manga book style aur Hinglish me!</p>
      </div>
      
      {/* Manga Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mangaList.map((manga) => (
          <Link 
            key={manga.id} 
            href={`/manga/${manga.id}/1`} 
            className="bg-[#16161e] rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-500 transition-all duration-300 shadow-xl flex flex-col group"
          >
            {/* Manga Book Cover Image */}
            <div className="relative h-48 overflow-hidden bg-zinc-900">
              <img 
                src={manga.coverImg} 
                alt={manga.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter contrast-110"
              />
              <div className="absolute top-2 right-2 bg-amber-500 text-black text-xs font-extrabold px-2.5 py-1 rounded-full shadow">
                {manga.chapters}+ Chapters
              </div>
            </div>

            {/* Book Details */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h2 className="text-xl font-bold text-amber-200 group-hover:text-amber-400 transition">{manga.title}</h2>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{manga.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
                <span>📖 Start Reading (Hinglish)</span>
                <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
