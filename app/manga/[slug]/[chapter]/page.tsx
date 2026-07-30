import Link from 'next/link';

export default async function MangaReaderPage({ params }: { params: { slug: string; chapter: string } }) {
  const { slug, chapter } = await params;
  const formattedTitle = slug.toUpperCase().replace(/-/g, ' ');

  // Comic style ke liye sample pages
  const comicPages = [
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1541562232579-512a21360020?w=800&auto=format&fit=crop&q=60"
  ];

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white p-4 max-w-3xl mx-auto flex flex-col items-center">
      
      {/* Top Header */}
      <div className="w-full flex justify-between items-center mb-4 bg-[#1a1a2e] p-3 rounded-lg border border-gray-800">
        <Link href="/manga" className="text-purple-400 text-sm hover:underline">← Back to List</Link>
        <h1 className="text-lg font-bold">{formattedTitle} : Ch. {chapter}</h1>
        <span className="bg-green-600 text-xs px-2 py-1 rounded text-white font-medium">Hinglish</span>
      </div>

      {/* Ad Space Top */}
      <div className="w-full bg-[#1a1a2e] border border-dashed border-purple-500/40 p-3 text-center text-xs text-gray-400 rounded-lg mb-4">
        💰 High-CPM Ad Space (Adsterra Ready)
      </div>

      {/* Comic Pages Stack */}
      <div className="w-full flex flex-col gap-2">
        {comicPages.map((imgUrl, index) => (
          <div key={index} className="w-full bg-black rounded overflow-hidden shadow-2xl border border-gray-900">
            <img 
              src={imgUrl} 
              alt={`Page ${index + 1}`} 
              className="w-full h-auto object-contain mx-auto"
              loading="lazy"
            />
            <div className="text-right text-[10px] text-gray-500 p-1 pr-2">Page {index + 1} of {comicPages.length}</div>
          </div>
        ))}
      </div>

      {/* Chapter Navigation Buttons */}
      <div className="w-full flex justify-between mt-6 gap-4">
        <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-3 rounded-lg font-semibold text-sm transition">
          Previous Chapter
        </button>
        <button className="flex-1 bg-purple-600 hover:bg-purple-500 py-3 rounded-lg font-semibold text-sm transition">
          Next Chapter →
        </button>
      </div>

    </div>
  );
}
