import Link from 'next/link';

export default async function CleanManhwaReader({ params }: { params: { slug: string; chapter: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const chapterNum = resolvedParams.chapter || "1";
  const mangaName = slug.replace(/-/g, " ").toUpperCase();

  return (
    <div className="min-h-screen bg-[#111] text-zinc-200 font-sans pb-16 flex flex-col items-center">
      
      {/* Reader Top Bar */}
      <div className="w-full bg-[#1a1a1a] border-b border-zinc-800 px-4 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <Link href="/" className="text-red-500 font-bold text-xs hover:underline">← Back to TAADD</Link>
        <span className="text-xs font-black uppercase text-zinc-100 tracking-wider">{mangaName} - Ch. {chapterNum}</span>
        <span className="bg-red-600 text-white font-bold text-[10px] px-2 py-0.5 rounded">MANHWA READER</span>
      </div>

      {/* Chapter Selection Bar */}
      <div className="w-full max-w-3xl bg-[#181818] border border-zinc-800 p-3 my-3 rounded">
        <div className="text-xs font-bold text-zinc-400 mb-2">Select Chapter:</div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
            <Link 
              key={num} 
              href={`/manga/${slug}/${num}`}
              className={`px-3 py-1 rounded text-xs font-bold whitespace-nowrap ${
                Number(chapterNum) === num 
                  ? 'bg-red-600 text-white' 
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              Ch {num}
            </Link>
          ))}
        </div>
      </div>

      {/* Clean Manhwa Long Strip Images (No Overlapping Text Boxes) */}
      <div className="w-full max-w-3xl flex flex-col gap-1 bg-black p-1 shadow-2xl rounded">
        <img src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=900&auto=format&fit=crop&q=80" alt="Manhwa panel 1" className="w-full h-auto object-cover" />
        <img src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=900&auto=format&fit=crop&q=80" alt="Manhwa panel 2" className="w-full h-auto object-cover" />
        <img src="https://images.unsplash.com/photo-1541562232579-512a21360020?w=900&auto=format&fit=crop&q=80" alt="Manhwa panel 3" className="w-full h-auto object-cover" />
      </div>

      {/* Bottom Navigation */}
      <div className="w-full max-w-3xl mt-4 flex justify-between px-2">
        <Link href={`/manga/${slug}/${Math.max(1, Number(chapterNum) - 1)}`} className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded text-xs font-bold text-white">
          ← Previous Chapter
        </Link>
        <Link href={`/manga/${slug}/${Number(chapterNum) + 1}`} className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded text-xs font-bold text-white">
          Next Chapter →
        </Link>
      </div>

    </div>
  );
}
