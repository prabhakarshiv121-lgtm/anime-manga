import Navbar from '@/components/Navbar';
import MangaCard from '@/components/MangaCard';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  const featuredManga = [
    { id: 'naruto-ch-1', title: 'Naruto: Chapter 1 (Hinglish)', image: '/images/naruto.jpg', episode: 'Ch 1', type: 'MANGA', subType: 'HINGLISH' },
    { id: 'naruto-ch-2', title: 'Naruto: Chapter 2 (Hinglish)', image: '/images/naruto.jpg', episode: 'Ch 2', type: 'MANGA', subType: 'HINGLISH' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-[#1e88e5]/20 via-[#141414] to-[#141414] border border-[#2a2a2a]">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Read Manga in <span className="text-[#1e88e5]">Hinglish!</span>
          </h1>
          <p className="text-[#9e9e9e] text-sm md:text-base max-w-xl mb-6">
            Apne favorite manga aur manhwa padho bilkul aasan aur mazedaar Hinglish bhasha mein.
          </p>
          <Link 
            href="/hinglish/naruto-ch-1"
            className="inline-block bg-[#1e88e5] hover:bg-[#1565c0] text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
          >
            Start Reading Naruto 🚀
          </Link>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold border-l-4 border-[#1e88e5] pl-3">
            Trending Chapters
          </h2>
        </div>

        {/* Manga Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {featuredManga.map((manga) => (
            <div key={manga.id} className="cursor-pointer">
              <Link href={`/hinglish/${manga.id}`}>
                <MangaCard 
                  id={manga.id}
                  title={manga.title}
                  image={manga.image}
                  episode={manga.episode}
                  type={manga.type}
                  subType={manga.subType}
                />
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
