import React from 'react';

interface Props {
  params: Promise<{
    slug: string;
    chapter: string;
  }>;
}

export default async function MangaReaderPage({ params }: Props) {
  const { slug, chapter } = await params;

  // Clean title formatting
  const formattedSlug = slug.replace(/-/g, ' ').toUpperCase();

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#ffffff', minHeight: '100vh', padding: '24px', fontFamily: 'sans-serif' }}>
      {/* Header Section */}
      <header style={{ maxWidth: '800px', margin: '0 auto 24px auto', borderBottom: '1px solid #334155', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#c084fc', textTransform: 'capitalize', margin: '0 0 8px 0' }}>
          {formattedSlug}
        </h1>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span style={{ color: '#94a3b8', fontSize: '16px' }}>Chapter {chapter}</span>
          <span style={{ backgroundColor: '#15803d', color: '#dcfce7', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
            Hinglish Mode Active
          </span>
        </div>
      </header>

      {/* Reader Container */}
      <main style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '18px', color: '#e2e8f0', marginBottom: '12px' }}>
            📖 Online Hinglish Manga Reader (2022–2026 Library)
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>
            Aap <strong>{formattedSlug}</strong> ka <strong>Chapter {chapter}</strong> padh rahe ho. Saare chapters fast loading ke saath Hinglish summary aur translations support karte hain.
          </p>
        </div>

        {/* Ad Space Placeholder (Step 3 Money Monetization) */}
        <div style={{ backgroundColor: '#0284c715', border: '1px dashed #0284c7', borderRadius: '8px', padding: '16px', textAlign: 'center', color: '#38bdf8', fontSize: '13px' }}>
          💰 [Adsterra / Google Ad Placement Slot]
        </div>

        {/* Chapter Content Preview */}
        <div style={{ backgroundColor: '#1e293b', borderRadius: '8px', padding: '24px', textAlign: 'center', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ color: '#cbd5e1', fontSize: '16px' }}>
            Manga Images and Hinglish Subtitles Loading...
          </p>
        </div>
      </main>
    </div>
  );
}
