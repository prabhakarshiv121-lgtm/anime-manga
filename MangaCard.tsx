import Link from "next/link";

interface MangaCardProps {
  id: number;
  title: string;
  slug: string;
  imageUrl: string;
  chapters: number;
  volumes: number;
  status: string;
  rating: number;
  author: string;
  type: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.round(rating / 2) ? "text-yellow-400" : "text-slate-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-slate-400 ml-1">{(rating / 2).toFixed(1)}</span>
    </div>
  );
}

export default function MangaCard({ id, title, imageUrl, chapters, volumes, status, rating, author, type }: MangaCardProps) {
  return (
    <Link href={`/manga/${id}`} className="block group">
      <div className="bg-[#1a1a2e] rounded-xl overflow-hidden card-hover border border-white/5">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Status badge */}
          <div className="absolute top-2 left-2">
            <span
              className={`px-2 py-0.5 rounded-md text-xs font-semibold ${
                status === "Ongoing"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : status === "Completed"
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
              }`}
            >
              {status}
            </span>
          </div>

          {/* Type badge */}
          <div className="absolute top-2 right-2">
            <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-pink-500/20 text-pink-400 border border-pink-500/30">
              {type}
            </span>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-white font-bold text-sm line-clamp-2 mb-1">{title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-slate-300 text-xs">{chapters} Ch</span>
              <span className="text-slate-300 text-xs">{volumes} Vol</span>
            </div>
          </div>
        </div>

        {/* Info bar */}
        <div className="px-3 py-2 border-t border-white/5">
          <StarRating rating={rating} />
          <p className="text-slate-400 text-xs mt-1 truncate">{author}</p>
        </div>
      </div>
    </Link>
  );
}
