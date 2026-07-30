import Link from 'next/link';

export default async function MangaReaderPage({ params }: { params: { slug: string; chapter: string } }) {
  const { slug, chapter } = await params;
  const formattedTitle = slug.toUpperCase().replace(/-/g, ' Highlights');

  // Real Manga Panels (Jaise screenshot me black & white comic panels hote hain)
  const mangaPanels = [
    {
      img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=900&auto=format&fit=crop&q=80",
      hinglishText: "Grandfather, aapne taste kiya? Mujhe pura confidence hai ki yeh wali dish best banegi!"
    },
    {
      img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=900&auto=format&fit=crop&q=80",
      hinglishText: "Hmm... Lagta hai isme thodi aur mehnat ki zaroorat hai. A bit of improvement needed!"
    },
    {
      img: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=900&auto=format&fit=crop&q=80",
      hinglishText: "Kya?! Abhi bhi aur kaam baaki hai? Main aur try karungi!"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-3 max-w-2xl mx-auto flex flex-col items-center">
      
      {/* Top Header */}
      <div className="w-full flex justify-between items-center mb-3 bg-[#111] p-3 rounded-lg border border-zinc-800">
        <Link href="/manga" className="text-purple-400 text-xs font-bold hover:underline">← All Manga</Link>
        <h1 className="text-sm font-extrabold tracking-wider">{formattedTitle} - Ch. {chapter}</h1>
        <span className="bg-emerald-600 text-[10px] px-2 py-0.5 rounded text-white font-bold">Hinglish Mode</span>
      </div>

      {/* Adsterra Ad Space Top */}
      <div className="w-full bg-[#111] border border-dashed border-zinc-700 p-2 text-center text-[11px] text-zinc-400 rounded mb-3">
        💰 Adsterra High-CPM Ad Slot
      </div>

      {/* Real Manga Comic Book Style Pages & Dialogues */}
      <div className="w-full flex flex-col gap-4">
        {mangaPanels.map((panel, index) => (
          <div key={index} className="w-full bg-[#161616] border-2 border-zinc-800 rounded-lg overflow-hidden shadow-2xl p-2">
            
            {/* Manga Image Panel */}
            <div className="w-full bg-black rounded overflow-hidden border border-zinc-900">
              <img 
                src={panel.img} 
                alt={`Manga Panel ${index + 1}`} 
                className="w-full h-auto object-contain mx-auto filter contrast-125"
                loading="lazy"
              />
            </div>

            {/* Hinglish Comic Dialogue Box (Jaise manga me bubbles hote hain) */}
            <div className="mt-2 bg-zinc-900 border border-zinc-700 p-3 rounded text-zinc-200 text-sm font-medium shadow-inner">
              <span className="text-purple-400 text-xs block mb-1 font-bold">Panel {index + 1} Dialogue:</span>
              "{panel.hinglishText}"
            </div>

          </div>
        ))}
      </div>

      {/* Chapter Navigation Buttons */}
      <div className="w-full flex justify-between mt-6 gap-3">
        <button className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 py-3 rounded-lg font-bold text-xs transition">
          ◀ Previous Chapter
        </button>
        <button className="flex-1 bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-lg font-bold text-xs transition shadow-lg">
          Next Chapter ▶
        </button>
      </div>

    </div>
  );
}
