import Image from 'next/image';
import Link from 'next/link';

interface MangaCardProps {
  id: string;
  title: string;
  image: string;
  episode?: string;
  type?: string;
  subType?: string;
}

export default function MangaCard({ 
  id, 
  title, 
  image, 
  episode = 'Ep 1', 
  type = 'TV', 
  subType = 'SUB' 
}: MangaCardProps) {
  return (
    <Link href={`/hinglish/${id}`} className="group block">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#141414] border border-[#2a2a2a]">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />

        {/* TV Badge */}
        <span className="absolute top-2 right-2 bg-[#e53935] text-white text-[10px] font-bold px-2 py-0.5 rounded">
          {type}
        </span>

        {/* Episode Badge */}
        <span className="absolute bottom-0 left-0 bg-[#1e88e5] text-white text-[11px] font-bold px-2.5 py-1 rounded-tr-lg">
          {episode}
        </span>

        {/* SUB Badge */}
        <span className="absolute bottom-0 right-0 bg-[#2a2a2a] text-[#9e9e9e] text-[10px] font-medium px-2 py-1 rounded-tl-lg">
          {subType}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-2.5 text-sm font-medium text-[#e0e0e0] truncate group-hover:text-[#1e88e5] transition-colors">
        {title}
      </h3>
    </Link>
  );
}

