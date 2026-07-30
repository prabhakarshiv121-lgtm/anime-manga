import Link from 'next/link';

export default async function CrunchyrollReaderPage({ params }: { params: { slug: string; chapter: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const chapterNum = resolvedParams.chapter || "1";
  const animeTitle = slug.replace(/-/g, " ").toUpperCase();

  return (
    <div className="min-h-screen bg-[#0f1012] text-white flex flex-col items-center pb-16">
      
      {/* Crunchyroll Style Top Header */}
      <div className="w-full bg-[#141519] border-b border-zinc-800 px-4 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <Link href="/" className="text-[#f47521] text-xs font-extrabold hover:underline flex items-center gap-1">
          ← Back to Browse
        </Link>
        <span className="text-xs font-black text-zinc-200 tracking-wider uppercase">{animeTitle} : Chapter {chapterNum}</span>
        <span className="bg-[#f47521] text-black text-[10px] px-2.5 py-1 rounded font-black">HD READER</span>
      </div>

      {/* Main Comic/Manga Reader Frame */}
      <div className="w-full max-w-3xl bg-black shadow-2xl my-4 p-2 rounded-lg border border-zinc-800 relative">
        <img 
          src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1000&auto=format&fit=crop&q=80" 
          alt="Manga Panel" 
          className="w-full h-auto object-contain mx-auto rounded"
        />
        
        {/* Dialogue Bubbles */}
        <div className="absolute top-[15%] left-[8%] bg-white border-2 border-black text-black text-xs font-extrabold p-3 rounded-xl shadow-2xl max-w-[45%]">
          "Dekho! Yeh chapter ekdum Crunchyroll style reader mein khula hai!"
        </div>

        <div className="absolute bottom-[20%] right-[8%] bg-white border-2 border-black text-black text-xs font-extrabold p-3 rounded-xl shadow-2xl max-w-[45%]">
          "Bhai, ab look bilkul pro anime streaming app jaisa lag raha hai!"
        </div>
      </div>

      {/* Chapter Selection Tray */}
      <div className="w-full max-w-3xl bg-[#141519] border border-zinc-800 rounded-lg p-4 mt-2">
        <h3 className="text-xs font-black text-[#f47521] uppercase tracking-widest mb-3 border-b border-zinc-800 pb-2">
          Select Chapter
        </h3>
        <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => (
            <Link 
              key={num} 
              href={`/manga/${slug}/${num}`}
              className={`text-center py-2 rounded text-xs font-extrabold transition ${
                Number(chapterNum) === num 
                  ? 'bg-[#f47521] text-black shadow-md' 
                  : 'bg-[#202229] hover:bg-zinc-700 text-zinc-300'
              }`}
            >
              {num}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
