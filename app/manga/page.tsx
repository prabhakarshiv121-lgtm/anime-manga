import Link from 'next/link';

export default function MangaPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Explore Manga</h1>
      <p className="text-gray-400 mb-6">Choose your favorite manga to read online for free.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/manga/one-piece/1" className="bg-[#1a1a2e] p-4 rounded-lg border border-gray-800 hover:border-purple-500 block">
          <h2 className="text-xl font-semibold">One Piece</h2>
          <p className="text-sm text-gray-400">Read Chapter 1</p>
        </Link>
      </div>
    </div>
  );
}

