import Link from "next/link";
import { getOrTranslateHinglish } from "@/lib/translator";

interface PageProps {
  params: {
    slug: string;
    chapter: string;
  };
}

export default async function MangaReaderPage({ params }: PageProps) {
  const chapterNum = parseInt(params.chapter, 10) || 1;
  const mangaTitle = params.slug.replace(/-/g, " ").toUpperCase();

  // Demo Pages with English text for Auto-Hinglish testing
  const rawPages = [
    {
      id: 1,
      pageNumber: 1,
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      originalText: "Hello my friend, this is a powerful monster. We must win this fight!",
      hinglishText: null,
    },
    {
      id: 2,
      pageNumber: 2,
      imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop",
      originalText: "Why are you weak? I will show you my true power.",
      hinglishText: null,
    }
  ];

  // Process Auto-Hinglish translation simulation
  const pages = await Promise.all(
    rawPages.map(async (page) => {
      const hinglishText = await getOrTranslateHinglish(
        page.id,
        page.originalText,
        page.hinglishText
      );
      return { ...page, hinglishText };
    })
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center py-6 px-2">
      {/* Top Header */}
      <header className="w-full max-w-2xl bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 sticky top-4 z-50 flex justify-between items-center mb-6 shadow-lg">
        <div>
          <Link href="/" className="text-xs text-pink-400 hover:underline block">
            ← Back to Home
          </Link>
          <h1 className="text-sm md:text-base font-bold truncate">
            {mangaTitle} - Chapter {chapterNum}
          </h1>
        </div>

        <div className="flex gap-2">
          {chapterNum > 1 && (
            <Link
              href={`/manga/${params.slug}/${chapterNum - 1}`}
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition"
            >
              Prev
            </Link>
          )}
          <Link
            href={`/manga/${params.slug}/${chapterNum + 1}`}
            className="px-3 py-1 bg-pink-600 hover:bg-pink-500 text-xs font-semibold rounded-lg transition"
          >
            Next
          </Link>
        </div>
      </header>

      {/* Auto Hinglish Badge */}
      <div className="mb-4 bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs px-3.5 py-1.5 rounded-full font-medium flex items-center gap-1.5 shadow-sm">
        <span>🇮🇳</span> Auto-Hinglish Reader Active
      </div>

      {/* Pages Container */}
      <div className="w-full max-w-2xl flex flex-col gap-4 bg-slate-900/40 p-2 rounded-xl border border-slate-800 shadow-2xl">
        {pages.map((page) => (
          <div
            key={page.id}
            className="relative w-full bg-black rounded-lg overflow-hidden border border-slate-800/80"
          >
            <img
              src={page.imageUrl}
              alt={`Page ${page.pageNumber}`}
              className="w-full h-auto object-contain block"
              loading="lazy"
            />

            {/* Dynamic Hinglish Dialogue Card */}
            {page.hinglishText && (
              <div className="p-3 bg-slate-900/95 border-t border-slate-800 text-pink-300 text-xs sm:text-sm font-medium">
                <span className="text-slate-400 font-bold mr-1">💬 Hinglish:</span>
                {page.hinglishText}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Navigation */}
      <footer className="w-full max-w-2xl flex justify-between items-center my-8 p-4 bg-slate-900 rounded-xl border border-slate-800">
        <Link href="/" className="text-xs text-slate-400 hover:text-white">
          Home
        </Link>
        <div className="flex gap-2">
          {chapterNum > 1 && (
            <Link
              href={`/manga/${params.slug}/${chapterNum - 1}`}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition"
            >
              Previous Chapter
            </Link>
          )}
          <Link
            href={`/manga/${params.slug}/${chapterNum + 1}`}
            className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-xs font-semibold rounded-lg transition"
          >
            Next Chapter →
          </Link>
        </div>
      </footer>
    </main>
  );
}
