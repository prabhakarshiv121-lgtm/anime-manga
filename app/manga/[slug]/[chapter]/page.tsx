import Link from 'next/link';

export default async function MangaReaderPage({ params }: { params: { slug: string; chapter: string } }) {
  const { slug, chapter } = await params;
  const formattedTitle = slug.toUpperCase().replace(/-/g, ' ');

  // Naruto Chapter 1 Style Colored Manga Panels & Hinglish Dialogues
  const narutoPanels = [
    {
      img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=900&auto=format&fit=crop&q=80",
      speech: "Lord Hokage! Yeh wohi young devil Naruto hai jo hamare village ke heroes ke faces par paint kar raha hai!"
    },
    {
      img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=900&auto=format&fit=crop&q=80",
      speech: "Enough with the stupid pranks! Tumhe class me wapas aana hi hoga Naruto!"
    },
    {
      img: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=900&auto=format&fit=crop&q=80",
      speech: "Transformation Jutsu! Dekho Iruka-sensei, maine kar dikhaya!"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-3 max-w-2xl mx-auto flex flex-col items-center">
      
      {/* Top Header */}
      <div className="w-full flex justify-between items-center mb-3 bg-[#1e1e1e] p-3 rounded-lg border border-zinc-700 shadow-md">
        <Link href="/manga" className="text-amber-400 text-xs font-bold hover:underline">← Back to List</Link>
        <h1 className="text-sm font-extrabold tracking-wide text-amber-200">{formattedTitle} : Ch. {chapter}</h1>
        <span className="bg-orange-600 text-[10px] px-2 py-0.5 rounded text-white font-bold">Hinglish Colored</span>
      </div>

      {/* Adsterra Ad Space Top */}
      <div className="w-full bg-[#1a1a1a] border border-dashed border-zinc-600 p-2 text-center text-[11px] text-zinc-400 rounded mb-3">
        💰 Adsterra High-CPM Ad Slot
      </div>

      {/* Comic Book Manga Panels Layout */}
      <div className="w-full flex flex-col gap-5">
        {narutoPanels.map((panel, index) => (
          <div key={index} className="w-full bg-[#1a1a1a] border-2 border-zinc-700 rounded-lg overflow-hidden shadow-2xl p-2.5">
            
            {/* Manga Panel Image */}
            <div className="w-full bg-white rounded overflow-hidden border border-zinc-800">
              <img 
                src={panel.img} 
                alt={`Naruto Page Panel ${index + 1}`} 
                className="w-full h-auto object-contain mx-auto"
                loading="lazy"
              />
            </div>

            {/* Comic Speech Bubble Box (Hinglish) */}
            <div className="mt-2.5 bg-zinc-900 border border-amber-500/40 p-3 rounded-lg text-amber-100 text-sm font-semibold shadow-inner relative">
              <span className="text-amber-400 text-[10px] uppercase tracking-wider block mb-1 font-bold">Bubble Dialogues (Hinglish):</span>
              "{panel.speech}"
            </div>

          </div>
        ))}
      </div>

      {/* Chapter Navigation Buttons */}
      <div className="w-full flex justify-between mt-6 gap-3">
        <button className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 py-3 rounded-lg font-bold text-xs transition">
          ◀ Prev Chapter
        </button>
        <button className="flex-1 bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-lg font-bold text-xs transition shadow-lg">
          Next Chapter ▶
        </button>
      </div>

    </div>
  );
}
