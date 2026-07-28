import Link from "next/link";
import { db } from "@/db";
import { anime, manga } from "@/db/schema";
import { desc } from "drizzle-orm";
import AnimeCard from "@/components/AnimeCard";
import MangaCard from "@/components/MangaCard";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [topAnime, latestAnime] = await Promise.all([
    db.select().from(anime).orderBy(desc(anime.rating)).limit(6),
    db.select().from(anime).orderBy(desc(anime.id)).limit(6),
  ]);

  const [topManga, latestManga] = await Promise.all([
    db.select().from(manga).orderBy(desc(manga.rating)).limit(6),
    db.select().from(manga).orderBy(desc(manga.id)).limit(6),
  ]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#0f0f1a] to-pink-900/30" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Free Anime & Manga
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Anime</span> &{" "}
              <span className="gradient-text">Manga</span>
              <br />
              <span className="text-white">Watch & Read Free</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Discover thousands of anime series and manga chapters. Stream episodes and read chapters for free, with no ads or restrictions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/anime"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
              >
                Browse Anime
              </Link>
              <Link
                href="/manga"
                className="px-8 py-3 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors"
              >
                Browse Manga
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative max-w-5xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Anime Series", value: "12+", icon: "🎬" },
              { label: "Manga Titles", value: "10+", icon: "📚" },
              { label: "Episodes", value: "2000+", icon: "⚡" },
              { label: "Chapters", value: "3000+", icon: "📖" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#1a1a2e]/80 backdrop-blur-sm border border-white/5 rounded-xl p-4 text-center"
              >
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <span className="text-2xl font-bold text-white block">{stat.value}</span>
                <span className="text-slate-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Anime */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Top Rated Anime</h2>
            <p className="text-slate-400 mt-1">The best anime of all time</p>
          </div>
          <Link
            href="/anime?sort=rating"
            className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 transition-colors"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {topAnime.map((item) => (
            <AnimeCard
              key={item.id}
              id={item.id}
              title={item.title}
              slug={item.slug}
              imageUrl={item.imageUrl}
              episodes={item.episodes}
              status={item.status}
              rating={item.rating}
              year={item.year}
              type={item.type}
            />
          ))}
        </div>
      </section>

      {/* Latest Anime */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Anime</h2>
            <p className="text-slate-400 mt-1">Recently added anime series</p>
          </div>
          <Link
            href="/anime"
            className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 transition-colors"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {latestAnime.map((item) => (
            <AnimeCard
              key={item.id}
              id={item.id}
              title={item.title}
              slug={item.slug}
              imageUrl={item.imageUrl}
              episodes={item.episodes}
              status={item.status}
              rating={item.rating}
              year={item.year}
              type={item.type}
            />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      {/* Top Manga */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Top Rated Manga</h2>
            <p className="text-slate-400 mt-1">The best manga of all time</p>
          </div>
          <Link
            href="/manga?sort=rating"
            className="text-pink-400 hover:text-pink-300 text-sm font-medium flex items-center gap-1 transition-colors"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {topManga.map((item) => (
            <MangaCard
              key={item.id}
              id={item.id}
              title={item.title}
              slug={item.slug}
              imageUrl={item.imageUrl}
              chapters={item.chapters}
              volumes={item.volumes}
              status={item.status}
              rating={item.rating}
              author={item.author}
              type={item.type}
            />
          ))}
        </div>
      </section>

      {/* Latest Manga */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Manga</h2>
            <p className="text-slate-400 mt-1">Recently added manga series</p>
          </div>
          <Link
            href="/manga"
            className="text-pink-400 hover:text-pink-300 text-sm font-medium flex items-center gap-1 transition-colors"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {latestManga.map((item) => (
            <MangaCard
              key={item.id}
              id={item.id}
              title={item.title}
              slug={item.slug}
              imageUrl={item.imageUrl}
              chapters={item.chapters}
              volumes={item.volumes}
              status={item.status}
              rating={item.rating}
              author={item.author}
              type={item.type}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
