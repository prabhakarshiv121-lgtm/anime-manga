import Link from 'next/link';

// Demo Hinglish content
const stories: Record<string, { title: string; content: string; prev: string | null; next: string | null }> = {
  'naruto-ch-1': {
    title: 'Naruto: Chapter 1 - Hinglish',
    content: `
      <p class="mb-5 text-lg leading-relaxed text-gray-800">
        <span class="text-orange-600 font-bold">Naruto Uzumaki</span> ek aisa ladka tha jise poore gaon mein log ignore karte the. Uska chehra hamesha muskurata rehta tha, lekin andar se woh bahut akela tha.
      </p>
      <p class="mb-5 text-lg leading-relaxed text-gray-800">
        "Main hokage banunga!" — ye uska sapna tha. Gaon ke sabse powerful ninja banne ka sapna. Log uska mazak udate the, lekin Naruto ne kabhi haar nahi maani.
      </p>
      <p class="mb-5 text-lg leading-relaxed text-gray-800">
        Ek din, uske teacher <span class="text-blue-600 font-bold">Iruka</span> ne usse samjhaya ki asli taqat dosto mein hoti hai. Naruto ne pehli baar mehsoos kiya ki koi usse care karta hai.
      </p>
      <p class="mb-5 text-lg leading-relaxed text-gray-800">
        "Dekhna Iruka-sensei, ek din main sabko dikha dunga ki main kya kar sakta hoon!" Naruto ne zor se kaha.
      </p>
      <p class="mb-5 text-lg leading-relaxed text-gray-800">
        Raat ko jab sab so gaye, Naruto apne chhote se room mein baitha hua tha. Uski aankhon mein aansu the, lekin woh muskura raha tha. "Main strong banunga... hokage banunga... aur tab sab mujhe respect denge."
      </p>
    `,
    prev: null,
    next: 'naruto-ch-2',
  },
  'naruto-ch-2': {
    title: 'Naruto: Chapter 2 - Team 7',
    content: `
      <p class="mb-5 text-lg leading-relaxed text-gray-800">
        Next day, Naruto ko <span class="text-pink-600 font-bold">Sakura</span> aur <span class="text-gray-800 font-bold">Sasuke</span> ke saath Team 7 mein daal diya gaya. Unka teacher tha <span class="text-gray-500 font-bold">Kakashi Hatake</span>.
      </p>
      <p class="mb-5 text-lg leading-relaxed text-gray-800">
        "Tum teeno ko ek test dena hoga," Kakashi ne kaha. "Agar tum fail hue, toh wapas academy bhej diye jaaoge."
      </p>
      <p class="mb-5 text-lg leading-relaxed text-gray-800">
        Naruto ne haan mein sir hilaya, lekin uske dil mein dar tha. "Main fail nahi honga... kabhi nahi!"
      </p>
    `,
    prev: 'naruto-ch-1',
    next: null,
  },
};

export default function HinglishReader({ params }: { params: { id: string } }) {
  const story = stories[params.id] || stories['naruto-ch-1'];

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1a1a1a]">
      {/* Reader Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-50 shadow-sm">
        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black">
          ← Home
        </Link>
        <h1 className="font-bold text-sm truncate max-w-[200px] text-center">
          {story.title}
        </h1>
        <div className="w-12"></div>
      </div>

      {/* Story Content */}
      <article className="max-w-2xl mx-auto px-6 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">{story.title}</h2>
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: story.content }}
        />
      </article>

      {/* Navigation Footer */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          {story.prev ? (
            <Link 
              href={`/hinglish/${story.prev}`}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              ← Previous
            </Link>
          ) : (
            <div></div>
          )}

          {story.next ? (
            <Link 
              href={`/hinglish/${story.next}`}
              className="bg-[#1e88e5] hover:bg-[#1565c0] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              Next →
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

