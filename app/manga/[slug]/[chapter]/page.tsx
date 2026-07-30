import React from 'react';

interface Props {
  params: Promise<{
    slug: string;
    chapter: string;
  }>;
}

export default async function MangaReaderPage({ params }: Props) {
  const { slug, chapter } = await params;

  const formattedSlug = slug.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <header className="max-w-4xl mx-auto mb-6 border-b border-slate-800 pb-4">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-400 capitalize">
          {formattedSlug}
        </h1>
        <p className="text-slate-400 mt-1">
          Chapter {chapter} — <span className="text-green-400">Hinglish Translation Mode</span>
        </p>
      </header>

      <main className="max-w-3xl mx-auto flex flex-col items-center gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 w-full text-center">
          <p className="text-slate-300 mb-4">
            Padhne ke liye swagat hai! Yahan aapke saare manga chapters load honge.
          </p>
          <div className="bg-purple-950/50 border border-purple-800/50 rounded-md p-4 text-purple-200">
            <strong>Hinglish Note:</strong> Yeh Chapter {chapter} ka preview hai. Continuous reading mode enabled.
          </div>
        </div>
      </main>
    </div>
  );
}
