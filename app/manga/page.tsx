import Link from 'next/link';

const mangaList = [
  { id: 'one-piece', title: 'One Piece', chapters: 1100, cover: '🏴‍☠️' },
  { id: 'naruto', title: 'Naruto', chapters: 700, cover: '🍥' },
  { id: 'attack-on-titan', title: 'Attack on Titan', chapters: 139, cover: '⚔️' },
  { id: 'jujutsu-kaisen', title: 'Jujutsu Kaisen', chapters: 250, cover: '⚡' },
  { id: 'demon-slayer', title: 'Demon Slayer', chapters: 205, cover: '🗡️' },
  { id: 'solo-leveling', title: 'Solo Leveling', chapters: 200, cover: '👑' },
];

export default function MangaExplorePage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-white">Explore A to Z Manga</h1>
      <p className="text-gray-400 mb-6">Choose any manga and start reading chapters like a comic book.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mangaList.map((manga) => (
          <Link 
            key={manga.id} 
            href={`/manga/${manga.id}/1`} 
            className="bg-[#1a1a2e] p-5 rounded-xl border border-gray-800 hover:border-purple-500 transition block shadow-lg"
          >
            <div className="text-4xl mb-3">{manga.cover}</div>
            <h2 className="text-xl font-semibold text-white">{manga.title}</h2>
            <p className="text-sm text-gray-400 mt-1">{manga.chapters}+ Chapters Available</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
