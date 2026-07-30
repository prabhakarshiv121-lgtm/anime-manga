import Link from 'next/link';

export default async function MangaDetailAndReaderPage({ params }: { params: { slug: string; chapter: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const chapterNum = resolvedParams.chapter || "1";

  const animeTitle = slug.replace(/-/g, " ").toUpperCase();

  return (
    <div className="min-h-screen bg-[#121212] text-zinc-100 flex flex-col items-center pb-12">
      
      {/* Top Navbar */}
      <div className="w-full max-w-4xl bg-[#181818] border-b border-zinc-800 p-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <Link href="/" className="text-amber-400 text-xs font-bold hover:underline">← Home / All Anime</Link>
        <span className="text-xs font-extrabold text-amber-200 uppercase tracking-wide">{animeTitle} - Chapter {chapterNum}</span>
        <span className="bg-orange-600 text-[10px] px-2 py-0.5 rounded text-white font-bold">Hinglish Story Mode</span>
      </div>

      {/* Anime Info & Seasons Header Box */}
      <div className="w-full max-w-4xl bg-[#1a1a1a] border border-zinc-800 rounded-lg p-4 my-4 flex flex-col sm:flex-row gap-4 shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&auto=format&fit=crop&q=80" 
          alt="Cover" 
          className="w-32 h-44 object-cover rounded border border-zinc-700 mx-auto sm:mx-0"
        />
        <div className="flex flex-col justify-between flex-grow text-center sm:text-left">
          <div>
            <h1 className="text-lg font-black text-amber-400 uppercase">{animeTitle}</h1>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Yahan aapko milenge saare seasons, episodes aur manga chapters pure Hinglish dialogues ke sath, jisse har koi asaani se padh sake!
            </p>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
            <span className="bg-amber-500 text-black text-[10px] font-bold px-2.5 py-1 rounded">Season 1 (Ep 1-50)</span>
            <span className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[10px] font-bold px-2.5 py-1 rounded cursor-pointer">Season 2</span>
            <span className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[10px] font-bold px-2.5 py-1 rounded cursor-pointer">Movies</span>
          </div>
        </div>
      </div>

      {/* Asli Comic/Manga Page View with Hinglish Bubbles */}
      <div className="w-full max-w-2xl bg-white shadow-2xl my-2 p-2 rounded border border-zinc-700 relative">
        <img 
          src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=900&auto=format&fit=crop&q=80" 
          alt="Manga Panel" 
          className="w-full h-auto object-contain mx-auto rounded filter contrast-110"
        />
        
        <div className="absolute top-[12%] left-[6%] bg-white border-2 border-black text-black text-[11px] sm:text-xs font-bold p-2.5 rounded-xl shadow-2xl max-w-[45%]">
          "Lord Hokage! Yeh wohi young devil Naruto hai jo village me paint kar raha hai!"
        </div>

        <div className="absolute bottom-[18%] right-[6%] bg-white border-2 border-black text-black text-[11px] sm:text-xs font-bold p-2.5 rounded-xl shadow-2xl max-w-[45%]">
          "Transformation Jutsu! Dekho Iruka-sensei, maine kar dikhaya!"
        </div>
      </div>

      {/* Chapter Selector List */}
      <div className="w-full max-w-2xl bg-[#1a1a1a] border border-zinc-800 rounded-lg p-3 mt-4">
        <h3 className="text-xs font-extrabold text-amber-400 uppercase tracking-wider mb-2 border-b border-zinc-800 pb-1">
          Select Chapter / Episode
        </h3>
        <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
            <Link 
              key={num} 
              href={`/manga/${slug}/${num}`}
              className={`text-center py-1.5 rounded text-xs font-bold transition ${
                Number(chapterNum) === num 
                  ? 'bg-amber-500 text-black shadow' 
                  : 'bg-[#242424] hover:bg-zinc-700 text-zinc-300'
              }`}
            >
              Ch {num}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
