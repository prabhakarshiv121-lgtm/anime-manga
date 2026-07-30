import Link from 'next/link';

export default async function MangaReaderPage({ params }: { params: { slug: string; chapter: string } }) {
  const { slug, chapter } = await params;
  const formattedTitle = slug.toUpperCase().replace(/-/g, ' ');

  const comicPages = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=900&auto=format&fit=crop&q=80"
  ];

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white p-4 max-w-3xl mx-auto flex flex-col items-center">
      
      <div className="w-full flex justify-between items-center mb-4 bg-[#1a1a2e] p-3 rounded-lg border border-purple-500/30 shadow-md">
        <Link href="/manga" className="text-purple-400 text-sm font-semibold hover:underline">← Back to List</Link>
        <h1 className="text-base font-bold text-white">{formattedTitle} : Ch. {chapter}</h1>
        <span className="bg-purple-600 text-xs px-2.5 py-1 rounded-full text-white font-medium">Hinglish</span>
      </div>

      <div className="w-full bg-[#1a1a2e] border border-dashed border-purple-500/50 p-3 text-center text-xs text-purple-300 rounded-lg mb-4">
        💰 High-CPM Ad Space (Adsterra Ready)
      </div>

      <div className="w-full flex flex-col gap-4">
        {comicPages.map((imgUrl, index) => (
          <div key={index} className="w-full bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800">
            <img 
              src={imgUrl} 
              alt={`Page ${index + 1}`} 
              className="w-full h-auto object-contain mx-auto"
              loading="lazy"
            />
            <div className="bg-[#1a1a2e] text-center text-xs text-gray-400 py-1.5 border-t border-gray-900">
              Page {index + 1} of {comicPages.length}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-between mt-6 gap-4">
        <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold text-sm transition shadow">
          ← Previous
        </button>
        <button className="flex-1 bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-xl font-semibold text-sm transition shadow">
          Next Chapter →
        </button>
      </div>

    </div>
  );
}
