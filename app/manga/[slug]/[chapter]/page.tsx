import Link from 'next/link';

export default async function RealMangaReader({ params }: { params: { slug: string; chapter: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const chapterNum = resolvedParams.chapter || "1";
  const mangaTitle = slug.replace(/-/g, " ").toUpperCase();

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pb-16 flex flex-col items-center">
      
      {/* Top Header */}
      <header className="w-full bg-black border-b border-zinc-800 px-4 py-3 flex justify-between items-center shadow-md sticky top-0 z-50">
        <Link href="/" className="text-blue-400 font-bold text-xs hover:underline">← Home</Link>
        <span className="text-xs font-black uppercase text-zinc-200 tracking-wider">{mangaTitle} - Ch. {chapterNum}</span>
        <span className="bg-blue-600 text-white font-black text-[10px] px-2 py-0.5 rounded">HINGLISH READER</span>
      </header>

      {/* Chapter Selection Bar */}
      <div className="w-full max-w-3xl bg-[#1b1b1b] border border-zinc-800 p-3 my-4 rounded shadow-lg">
        <div className="text-xs font-bold text-blue-400 mb-2">Chapters Select Karein:</div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
            <Link 
              key={num} 
              href={`/manga/${slug}/${num}`}
              className={`px-3 py-1 rounded text-xs font-black whitespace-nowrap transition ${
                Number(chapterNum) === num 
                  ? 'bg-blue-600 text-white shadow' 
                  : 'bg-[#222] text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              Ch {num}
            </Link>
          ))}
        </div>
      </div>

      {/* Real Manga Comic Pages with Hinglish Dialogues (Jaise Scribd/ColoredManga me hota hai) */}
      <div className="w-full max-w-2xl flex flex-col gap-4 bg-black p-2 shadow-2xl rounded border border-zinc-800">
        
        {/* Panel 1 */}
        <div className="relative bg-white text-black p-2 rounded overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=900&auto=format&fit=crop&q=80" alt="Manga Page 1" className="w-full h-auto object-cover rounded" />
          <div className="absolute top-6 left-6 bg-white border-2 border-black text-black text-xs font-extrabold p-2.5 rounded-2xl shadow-xl max-w-[50%]">
            "Hahaha! Dekho sab, aaj phir maine village mein prank kiya!"
          </div>
        </div>

        {/* Panel 2 */}
        <div className="relative bg-white text-black p-2 rounded overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=900&auto=format&fit=crop&q=80" alt="Manga Page 2" className="w-full h-auto object-cover rounded" />
          <div className="absolute top-8 right-6 bg-white border-2 border-black text-black text-xs font-extrabold p-2.5 rounded-2xl shadow-xl max-w-[50%]">
            "Tum sudhroge nahi Uzumaki! Abhi class mein chalo wapas!"
          </div>
        </div>

        {/* Panel 3 */}
        <div className="relative bg-white text-black p-2 rounded overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1541562232579-512a21360020?w=900&auto=format&fit=crop&q=80" alt="Manga Page 3" className="w-full h-auto object-cover rounded" />
          <div className="absolute bottom-8 left-6 bg-white border-2 border-black text-black text-xs font-extrabold p-2.5 rounded-2xl shadow-xl max-w-[50%]">
            "Next test transformation jutsu ka hai, sabko pass hona padega!"
          </div>
        </div>

      </div>

      {/* Bottom Navigation */}
      <div className="w-full max-w-2xl mt-4 flex justify-between px-2">
        <Link href={`/manga/${slug}/${Math.max(1, Number(chapterNum) - 1)}`} className="bg-[#222] hover:bg-zinc-800 border border-zinc-700 px-4 py-2 rounded text-xs font-bold text-white transition">
          ← Pichla Chapter
        </Link>
        <Link href={`/manga/${slug}/${Number(chapterNum) + 1}`} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-xs font-bold text-white transition">
          Agla Chapter →
        </Link>
      </div>

    </div>
  );
}
