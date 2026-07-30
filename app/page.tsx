import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white flex flex-col items-center justify-center pt-24 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Welcome to <span className="text-purple-400">Anime</span><span className="text-pink-400">Manga</span>
      </h1>
      <p className="text-slate-400 text-lg max-w-md mb-8">
        Read your favorite manga and anime content online for free.
      </p>
      <div className="flex gap-4">
        <Link 
          href="/manga" 
          className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 font-semibold transition-all"
        >
          Explore Manga
        </Link>
      </div>
    </div>
  );
}

