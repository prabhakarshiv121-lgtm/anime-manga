import Link from 'next/link';

interface SectionHeaderProps {
  title: string;
  href?: string;
}

export default function SectionHeader({ title, href = '#' }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4 px-1">
      <h2 className="text-lg font-bold text-white flex items-center gap-2">
        <span className="w-1 h-5 bg-[#1e88e5] rounded-full"></span>
        {title}
      </h2>
      <Link 
        href={href} 
        className="text-xs font-medium text-[#9e9e9e] hover:text-[#1e88e5] transition-colors border border-[#2a2a2a] px-3 py-1 rounded-md hover:border-[#1e88e5]"
      >
        VIEW ALL
      </Link>
    </div>
  );
}
