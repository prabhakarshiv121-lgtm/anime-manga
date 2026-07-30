import Link from 'next/link';

const mangaCatalog = [
  { id: "one-piece", title: "One Piece Vol. TBE", ch: "Chapter 1112", img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80" },
  { id: "shokugeki", title: "Shokugeki no Soma", ch: "Chapter 315", img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80" },
  { id: "solo-leveling", title: "Solo Leveling", ch: "Chapter 200", img: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=500&auto=format&fit=crop&q=80" },
  { id: "kingdom", title: "Kingdom 839", ch: "Chapter 839", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80" },
  { id: "tower-of-god", title: "Tower of God", ch: "Chapter 600", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80" },
  { id: "demons-tail", title: "Tales of Demons & Gods", ch: "Chapter 450", img: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=80" },
];

const newChaptersList = [
  { name: "One Piece - Chapter 1112", time: "06-13" },
  { name: "Solo Leveling - Chapter 200", time: "06-13" },
  { name: "Jujutsu Kaisen - Chapter 255", time: "06-12" },
  { name: "Kingdom - Chapter 839", time: "06-12" },
  { name: "Tower of God - Chapter 600", time: "06-10" },
  { name: "The Gamer - Season Finale", time: "06-10" },
];

export default function TaaddHome() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-black font-sans pb-12">
      
      {/* Top Header */}
      <header className="bg-white border-b border-zinc-300 px-4 py-2 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <span className="bg-red-600 text-white font-black px-3 py-1 rounded text-xl tracking-wider shadow">TAADD</span>
          <span className="text-xs text-zinc-500 font-bold hidden sm:inline">Manhwa & Manga Hub</span>
        </div>
        <div className="flex items-center w-56 sm:w-80">
          <input type="text" placeholder="Search manga, manhwa..." className="w-full bg-zinc-100 border border-zinc-300 text-xs px-3 py-1.5 rounded-l focus:outline-none focus:border-red-500" />
          <button className="bg-zinc-800 text-white font-bold text-xs px-3 py-1.5 rounded-r hover:bg-black">search</button>
        </div>
      </header>

      {/* Navigation Sub-bar */}
      <nav className="bg-[#1e293b] text-white px-3 py-2 flex gap-4 overflow-x-auto text-xs font-bold items-center shadow-inner">
        <Link href="/" className="text-yellow-400 hover:underline">Home</Link>
        <Link href="/" className="hover:text-yellow-400">Recent Updates</Link>
        <Link href="/" className="hover:text-yellow-400">Hot Book</Link>
        <Link href="/" className="hover:text-yellow-400">New Book</Link>
        <Link href="/" className="hover:text-yellow-400">Completed</Link>
        <Link href="/" className="hover:text-yellow-400">Action</Link>
        <Link href="/" className="hover:text-yellow-400">Manhwa</Link>
      </nav>

      {/* A-Z Letter Bar */}
      <div className="bg-white border-b border-zinc-300 px-3 py-1.5 flex flex-wrap gap-1 items-center text-[11px] max-w-7xl mx-auto mt-2 rounded shadow-sm">
        <span className="text-zinc-400 font-bold mr-1">0-9</span>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          <button key={letter} className="bg-zinc-100 hover:bg-red-600 hover:text-white text-zinc-700 px-2 py-0.5 rounded font-mono font-bold border border-zinc-200 transition">
            {letter}
          </button>
        ))}
      </div>

      {/* Main Content Layout with Sidebar */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
        
        {/* Left / Center Manga Catalog */}
        <div className="lg:col-span-3 bg-white border border-zinc-300 p-3 rounded shadow-sm">
          <div className="flex border-b-2 border-red-600 pb-2 mb-3 gap-4 text-xs font-black uppercase">
            <span className="text-red-600 border-b-2 border-red-600 -mb-2.5 pb-2">Hot Manga Updated</span>
            <span className="text-zinc-400 hover:text-black cursor-pointer">New Updated</span>
            <span className="text-zinc-400 hover:text-black cursor-pointer">Completed</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {mangaCatalog.map((item) => (
              <Link href={`/manga/${item.id}/1`} key={item.id} className="border border-zinc-200 rounded p-2 hover:shadow-md transition bg-zinc-50 flex flex-col group">
                <div className="aspect-[3/4] w-full bg-zinc-200 overflow-hidden rounded relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-200" />
                </div>
                <h3 className="text-xs font-bold text-zinc-800 mt-2 group-hover:text-red-600 line-clamp-1">{item.title}</h3>
                <span className="text-[10px] text-zinc-500">{item.ch}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Sidebar: New Chapters List */}
        <div className="lg:col-span-1 bg-white border border-zinc-300 rounded p-3 shadow-sm h-fit">
          <h3 className="text-xs font-black text-red-600 uppercase border-b border-zinc-200 pb-2 mb-2 flex justify-between items-center">
            <span>New Chapter</span>
            <span className="text-[10px] text-zinc-400">Updates</span>
          </h3>
          <div className="flex flex-col divide-y divide-zinc-100 text-xs">
            {newChaptersList.map((ch, idx) => (
              <Link href="/manga/one-piece/1" key={idx} className="py-2 flex justify-between items-center hover:bg-zinc-50 px-1 rounded transition">
                <span className="line-clamp-1 text-zinc-700 font-medium">{idx + 1}. {ch.name}</span>
                <span className="text-[10px] text-zinc-400 ml-1">{ch.time}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
