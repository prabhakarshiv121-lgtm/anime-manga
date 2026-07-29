import React from "react";
import Link from "next/link";

export default async function MangaReaderPage({
  params,
}: {
  params: Promise<{ slug: string; chapter: string }>;
}) {
  const resolvedParams = await params;
  const chapterNum = parseInt(resolvedParams.chapter, 10) || 1;
  const mangaTitle = (resolvedParams.slug || "SOLO LEVELING").replace(/-/g, " ").toUpperCase();

  const pages = [
    {
      id: 1,
      pageNumber: 1,
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      hinglishText: "Suno bhai, ye bohot khatarnak monster hai. Hume ye ladai jeetni hi padegi!",
    },
    {
      id: 2,
      pageNumber: 2,
      imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop",
      hinglishText: "Abe tu itna kamzor kyu hai? Ab main tujhe apni asli taqat dikhata hu.",
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center py-6 px-2">
      <header className="w-full max-w-2xl bg-slate-900 p-4 rounded-xl border border-slate-800 flex justify-between items-center mb-6">
        <div>
          <Link href="/" className="text-xs text-pink-400 block mb-1">
            ← Back to Home
          </Link>
          <h1 className="text-sm font-bold truncate">
            {mangaTitle} - Chapter {chapterNum}
          </h1>
        </div>

        <div className="flex gap-2">
          {chapterNum > 1 && (
            <Link
              href={`/manga/${resolvedParams.slug}/${chapterNum - 1}`}
              className="px-3 py-1 bg-slate-800 text-xs rounded-lg"
            >
              Prev
            </Link>
          )}
          <Link
            href={`/manga/${resolvedParams.slug}/${chapterNum + 1}`}
            className="px-3 py-1 bg-pink-600 text-xs font-semibold rounded-lg"
          >
            Next
          </Link>
        </div>
      </header>

      <div className="mb-4 bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs px-3.5 py-1.5 rounded-full">
        🇮🇳 Auto-Hinglish Reader Active
      </div>

      <div className="w-full max-w-2xl flex flex-col gap-4 bg-slate-900 p-2 rounded-xl border border-slate-800">
        {pages.map((page) => (
          <div key={page.id} className="w-full bg-black rounded-lg overflow-hidden border border-slate-800">
            <img
              src={page.imageUrl}
              alt={`Page ${page.pageNumber}`}
              className="w-full h-auto object-contain block"
            />
            <div className="p-3 bg-slate-900 text-pink-300 text-xs sm:text-sm font-medium border-t border-slate-800">
              <span className="text-slate-400 font-bold mr-1">💬 Hinglish:</span>
              {page.hinglishText}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
