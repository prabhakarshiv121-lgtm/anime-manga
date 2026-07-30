import Link from 'next/link';

export default async function MangaReaderPage({ params }: { params: { slug: string; chapter: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const chapterNum = resolvedParams.chapter || "1";

  const nextCh = parseInt(chapterNum) + 1;
  const prevCh = Math.max(1, parseInt(chapterNum) - 1);

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center pb-10">
      
      {/* Top Navbar */}
      <div className="w-full max-w-3xl bg-[#181818] border-b border-zinc-800 p-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <Link href="/manga" className="text-amber-400 text-xs font-bold hover:underline">← All Manga</Link>
        <span className="text-xs font-extrabold text-amber-200 uppercase tracking-wide">NARUTO COLOURED MANGA - PAGE {chapterNum} / 184</span>
        <span className="bg-orange-600 text-[10px] px-2 py-0.5 rounded text-white font-bold">Hinglish</span>
      </div>

      {/* Adsterra Top Banner */}
      <div className="w-full max-w-3xl my-2 bg-[#1a1a1a] border border-dashed border-zinc-700 p-2 text-center text-[11px] text-zinc-400">
        💰 Adsterra High-CPM Ad Slot
      </div>

      {/* Asli Naruto Manga Page Container */}
      <div className="w-full max-w-2xl bg-white shadow-2xl my-3 p-2 rounded border border-zinc-700 relative">
        <img 
          src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=900&auto=format&fit=crop&q=80" 
          alt="Naruto Manga Page" 
          className="w-full h-auto object-contain mx-auto rounded filter contrast-110"
        />
        
        {/* Comic Speech Bubbles with Hinglish Text */}
        <div className="absolute top-[12%] left-[6%] bg-white border-2 border-black text-black text-[11px] sm:text-xs font-bold p-2.5 rounded-xl shadow-2xl max-w-[45%]">
          "Lord Hokage! Yeh wohi young devil Naruto hai jo village me paint kar raha hai!"
        </div>

        <div className="absolute bottom-[18%] right-[6%] bg-white border-2 border-black text-black text-[11px] sm:text-xs font-bold p-2.5 rounded-xl shadow-2xl max-w-[45%]">
          "Transformation Jutsu! Dekho Iruka-sensei, maine kar dikhaya!"
        </div>
      </div>

      {/* Bottom Page Navigation */}
      <div className="w-full max-w-3xl px-3 flex justify-between gap-4 mt-4">
        <Link 
          href={`/manga/${slug}/${prevCh}`} 
          className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-3 rounded-xl font-bold text-xs text-center transition"
        >
          ◀ Prev Page
        </Link>
        <Link 
          href={`/manga/${slug}/${nextCh}`} 
          className="flex-1 bg-amber-500 hover:bg-amber-400 text-black py-3 rounded-xl font-extrabold text-xs text-center transition shadow-lg"
        >
          Next Page ▶
        </Link>
      </div>

    </div>
  );
}
