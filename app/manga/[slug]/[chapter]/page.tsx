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
    <div style={{ backgroundColor: '#0f172a', color: '#ffffff', minHeight: '100vh', padding: '16px', fontFamily: 'sans-serif' }}>
      
      {/* Script to Bypass DNS & AdBlockers */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Anti-AdBlock & DNS Bypass Notice Detector
            window.addEventListener('DOMContentLoaded', () => {
              setTimeout(() => {
                const adElem = document.getElementById('ad-container');
                if (!adElem || adElem.offsetHeight === 0) {
                  const notice = document.getElementById('adblock-notice');
                  if (notice) notice.style.display = 'block';
                }
              }, 2000);
            });
          `,
        }}
      />

      {/* Header */}
      <header style={{ maxWidth: '800px', margin: '0 auto 20px auto', borderBottom: '1px solid #334155', paddingBottom: '12px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#c084fc', margin: '0 0 6px 0' }}>
          {formattedSlug}
        </h1>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ color: '#94a3b8', fontSize: '15px' }}>Chapter {chapter}</span>
          <span style={{ backgroundColor: '#15803d', color: '#dcfce7', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
            Hinglish Mode Active
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* Anti-DNS / AdBlock Alert Message (If AdBlocker is Active) */}
        <div
          id="adblock-notice"
          style={{
            display: 'none',
            backgroundColor: '#991b1b',
            color: '#fef2f2',
            padding: '12px',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '13px',
            fontWeight: 'bold',
          }}
        >
          ⚠️ Private DNS ya AdBlocker detected! Kripya DNS / AdBlocker Off karein taaki chapters fast load ho sakein.
        </div>

        {/* Dynamic Ad Placement Container */}
        <div
          id="ad-container"
          style={{
            backgroundColor: '#1e293b',
            border: '1px dashed #38bdf8',
            borderRadius: '8px',
            padding: '12px',
            textAlign: 'center',
            color: '#38bdf8',
            fontSize: '13px',
            minHeight: '90px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>💰 High-CPM Anti-Block Ads Space (Adsterra Ready)</span>
        </div>

        {/* Reader Area */}
        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '16px', color: '#e2e8f0', marginBottom: '10px' }}>
            📖 Hinglish Manga Reader
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '13px' }}>
            Reading Chapter {chapter} of {formattedSlug}. High-speed server loaded.
          </p>
        </div>

        {/* Bottom Banner Ad Placement */}
        <div
          style={{
            backgroundColor: '#1e293b',
            border: '1px dashed #a855f7',
            borderRadius: '8px',
            padding: '12px',
            textAlign: 'center',
            color: '#c084fc',
            fontSize: '13px',
            minHeight: '90px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>🚀 Direct Link / Native Adsterra Slot</span>
        </div>

      </main>
    </div>
  );
}
