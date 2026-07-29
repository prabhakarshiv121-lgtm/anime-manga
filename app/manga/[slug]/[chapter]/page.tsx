import { db } from "@/lib/index";
import { manga, mangaChapters, mangaPages } from "@/lib/schema";
import { eq, and } from "drizzle-orm";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOrTranslateHinglish } from "@/lib/translator";

interface PageProps {
  params: {
    slug: string;
    chapter: string;
  };
}

export default async function MangaReaderPage({ params }: PageProps) {
  const chapterNum = parseInt(params.chapter, 10);

  if (isNaN(chapterNum)) {
    notFound();
  }

  // 1. Fetch Manga Details
  const mangaData = await db
    .select()
    .from(manga)
    .where(eq(manga.slug, params.slug))
    .limit(1);

  if (!mangaData || mangaData.length === 0) {
    notFound();
  }

  const currentManga = mangaData[0];

  // 2. Fetch Chapter Details
  const chapterData = await db
    .select()
    .from(mangaChapters)
    .where(
      and(
        eq(mangaChapters.mangaId, currentManga.id),
        eq(mangaChapters.chapterNumber, chapterNum)
      )
    )
    .limit(1);

  if (!chapterData || chapterData.length === 0) {
    notFound();
  }

  const currentChapter = chapterData[0];

  // 3. Fetch Pages
  const rawPages = await db
    .select()
    .from(mangaPages)
    .where(eq(mangaPages.chapterId, currentChapter.id))
    .orderBy(mangaPages.pageNumber);

  // 4. Dynamic Hinglish Translation Processing
  const pages = await Promise.all(
    rawPages.map(async (page) => {
      const hinglishText = await getOrTranslateHinglish(
        page.id,
        page.originalText || "",
        page.hinglishText
      );

      return {
        ...page,
        hinglishText,
      };
    })
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center py-6 px-2">
      {/* Top Header */}
      <header className="w-full max-w-2xl bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 sticky top-4 z-50 flex justify-between items-center mb-6 shadow-lg">
        <div>
          <Link
            href={`/manga/${currentManga.slug}`}
            className="text-xs text-pink-400 hover:underline block"
          >
            ← {currentManga.title}
          </Link>
          <h1 className="text-sm md:text-base font-bold truncate">
            {currentChapter.title}
          </h1>
        </div>

        <div className="flex gap-2">
          {chapterNum > 1 && (
            <Link
              href={`/manga/${currentManga.slug}/${chapterNum - 1}`}
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition"
            >
              Prev
            </Link>
          )}
          <Link
            href={`/manga/${currentManga.slug}/${chapterNum + 1}`}
            className="px-3 py-1 bg-pink-600 hover:bg-pink-500 text-xs font-semibold rounded-lg transition"
          >
            Next
          </Link>
        </div>
      </header>

      {/* Auto Hinglish Badge */}
      <div className="mb-4 bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs px-3.5 py-1.5 rounded-full font-medium flex items-center gap-1.5 shadow-sm">
        <span>🇮🇳</span> Auto-Hinglish System Active
      </div>

      {/* Pages Container */}
      <div className="w-full max-w-2xl flex flex-col gap-4 bg-slate-900/40 p-2 rounded-xl border border-slate-800 shadow-2xl">
        {pages.length > 0 ? (
          pages.map((page) => (
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
          ))
        ) : (
          <div className="p-12 text-center text-slate-400">
            Iss chapter ke pages jaldi hi update ho jayenge.
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <footer className="w-full max-w-2xl flex justify-between items-center my-8 p-4 bg-slate-900 rounded-xl border border-slate-800">
        <Link
          href={`/manga/${currentManga.slug}`}
          className="text-xs text-slate-400 hover:text-white"
        >
          All Chapters
        </Link>
        <div className="flex gap-2">
          {chapterNum > 1 && (
            <Link
              href={`/manga/${currentManga.slug}/${chapterNum - 1}`}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg transition"
            >
              Previous Chapter
            </Link>
          )}
          <Link
            href={`/manga/${currentManga.slug}/${chapterNum + 1}`}
            className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-xs font-semibold rounded-lg transition"
          >
            Next Chapter →
          </Link>
        </div>
      </footer>
    </main>
  );
}
