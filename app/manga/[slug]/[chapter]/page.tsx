import Link from 'next/link';

// Naruto ke alag-alag chapters aur unki fights ka data
const narutoStoryData: { [key: string]: { title: string; desc: string; panels: { img: string; speech: string }[] } } = {
  "1": {
    title: "Chapter 1: Uzumaki Naruto!",
    desc: "Naruto ka Hokage stone faces par paint karna aur Transformation Jutsu se sabko shock dena.",
    panels: [
      {
        img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=900&auto=format&fit=crop&q=80",
        speech: "Lord Hokage! Wohi young devil Naruto village ke faces par graffiti kar raha hai!"
      },
      {
        img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=900&auto=format&fit=crop&q=80",
        speech: "Iruka: Tumhe class me wapas aana hi hoga Naruto, ye tumhari aakhri warning hai!"
      },
      {
        img: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=900&auto=format&fit=crop&q=80",
        speech: "Naruto: Transformation Jutsu! Dekho Iruka-sensei, maine kar dikhaya!"
      }
    ]
  },
  "2": {
    title: "Chapter 2: Konohamaru!",
    desc: "Grandson of Third Hokage and Naruto's prank face-off.",
    panels: [
      {
        img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=900&auto=format&fit=crop&q=80",
        speech: "Konohamaru: Mujhe 'Boss' keh kar bulao Naruto-big brother!"
      },
      {
        img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=900&auto=format&fit=crop&q=80",
        speech: "Naruto: Ninja way me shortcut nahi hota, mehnat karni padti hai!"
      }
    ]
  }
};

export default async function MangaReaderPage({ params }: { params: { slug: string; chapter: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const chapterNum = resolvedParams.chapter || "1";

  // Agar Naruto hai toh uska data uthao, nahi toh default generic manga dikhao
  const currentChapter = slug === 'naruto' && narutoStoryData[chapterNum] 
    ? narutoStoryData[chapterNum] 
    : {
        title: `${slug.toUpperCase()} - Chapter ${chapterNum}`,
        desc: "Epic action, fights, and story in Hinglish.",
        panels: [
          {
            img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=900&auto=format&fit=crop&q=80",
            speech: "Chapter " + chapterNum + " action sequence start ho chuka hai!"
          }
        ]
      };

  const nextChapter = parseInt(chapterNum) + 1;
  const prevChapter = Math.max(1, parseInt(chapterNum) - 1);

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white p-3 max-w-2xl mx-auto flex flex-col items-center">
      
      {/* Top Header */}
      <div className="w-full flex justify-between items-center mb-3 bg-[#16161f] p-3 rounded-xl border border-zinc-800 shadow-lg">
        <Link href="/manga" className="text-amber-400 text-xs font-bold hover:underline">← All Manga</Link>
        <h1 className="text-xs sm:text-sm font-extrabold tracking-wide text-amber-200">{currentChapter.title}</h1>
        <span className="bg-amber-600 text-[10px] px-2 py-0.5 rounded text-black font-extrabold">Hinglish</span>
      </div>

      {/* Adsterra Ad Slot */}
      <div className="w-full bg-[#121218] border border-dashed border-zinc-700 p-2 text-center text-[11px] text-zinc-400 rounded-lg mb-3">
        💰 Adsterra High-CPM Ad Slot
      </div>

      {/* Chapter Info */}
      <div className="w-full bg-[#16161f] p-3 rounded-xl border border-zinc-800 mb-4 text-xs text-zinc-300">
        <span className="text-amber-400 font-bold">Storyline:</span> {currentChapter.desc}
      </div>

      {/* Comic Panels & Hinglish Dialogues */}
      <div className="w-full flex flex-col gap-5">
        {currentChapter.panels.map((panel, index) => (
          <div key={index} className="w-full bg-[#16161f] border-2 border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-2.5">
            
            {/* Manga Panel Image */}
            <div className="w-full bg-black rounded-xl overflow-hidden border border-zinc-900">
              <img 
                src={panel.img} 
                alt={`Panel ${index + 1}`} 
                className="w-full h-auto object-contain mx-auto"
                loading="lazy"
              />
            </div>

            {/* Hinglish Speech Bubble Box */}
            <div className="mt-2.5 bg-[#101017] border border-amber-500/30 p-3.5 rounded-xl text-amber-100 text-sm font-medium shadow-inner">
              <span className="text-amber-400 text-[10px] uppercase tracking-wider block mb-1 font-bold">Bubble Dialogue (Hinglish):</span>
              "{panel.speech}"
            </div>

          </div>
        ))}
      </div>

      {/* Chapter Navigation Buttons (1 se 500+ tak navigate karne ke liye) */}
      <div className="w-full flex justify-between mt-6 gap-3">
        <Link 
          href={`/manga/${slug}/${prevChapter}`} 
          className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-3 rounded-xl font-bold text-xs text-center transition shadow"
        >
          ◀ Prev Chapter
        </Link>
        <Link 
          href={`/manga/${slug}/${nextChapter}`} 
          className="flex-1 bg-amber-500 hover:bg-amber-400 text-black py-3 rounded-xl font-extrabold text-xs text-center transition shadow-lg"
        >
          Next Chapter ▶
        </Link>
      </div>

    </div>
  );
}
