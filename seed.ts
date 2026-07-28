import "dotenv/config";
import { db } from "./index.js";
import { genres, anime, manga, animeGenres, mangaGenres } from "./schema.js";

async function seed() {
  console.log("🌱 Seeding database...");

  // Insert genres
  const genreData = [
    { name: "Action", slug: "action" },
    { name: "Adventure", slug: "adventure" },
    { name: "Comedy", slug: "comedy" },
    { name: "Drama", slug: "drama" },
    { name: "Fantasy", slug: "fantasy" },
    { name: "Horror", slug: "horror" },
    { name: "Mystery", slug: "mystery" },
    { name: "Romance", slug: "romance" },
    { name: "Sci-Fi", slug: "sci-fi" },
    { name: "Slice of Life", slug: "slice-of-life" },
    { name: "Sports", slug: "sports" },
    { name: "Supernatural", slug: "supernatural" },
    { name: "Thriller", slug: "thriller" },
    { name: "Mecha", slug: "mecha" },
    { name: "Shounen", slug: "shounen" },
    { name: "Seinen", slug: "seinen" },
    { name: "Shoujo", slug: "shoujo" },
    { name: "Isekai", slug: "isekai" },
  ];

  const insertedGenres = await db.insert(genres).values(genreData).returning();
  console.log(`✅ Inserted ${insertedGenres.length} genres`);

  // Insert anime
  const animeData = [
    {
      title: "Attack on Titan",
      slug: "attack-on-titan",
      description: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls.",
      imageUrl: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
      bannerUrl: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
      episodes: 87,
      status: "Completed",
      rating: 9,
      year: 2013,
      type: "TV",
      studio: "MAPPA",
    },
    {
      title: "Demon Slayer",
      slug: "demon-slayer",
      description: "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjiro Kamado's shoulders. He lives in poverty on a remote mountain.",
      imageUrl: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
      bannerUrl: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
      episodes: 44,
      status: "Ongoing",
      rating: 8,
      year: 2019,
      type: "TV",
      studio: "ufotable",
    },
    {
      title: "Jujutsu Kaisen",
      slug: "jujutsu-kaisen",
      description: "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuji Itadori spends his days at either the clubroom or the hospital.",
      imageUrl: "https://cdn.myanimelist.net/images/anime/1792/138022.jpg",
      bannerUrl: "https://cdn.myanimelist.net/images/anime/1792/138022l.jpg",
      episodes: 47,
      status: "Ongoing",
      rating: 8,
      year: 2020,
      type: "TV",
      studio: "MAPPA",
    },
    {
      title: "One Piece",
      slug: "one-piece",
      description: "Gol D. Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line.",
      imageUrl: "https://cdn.myanimelist.net/images/anime/1244/138851.jpg",
      bannerUrl: "https://cdn.myanimelist.net/images/anime/1244/138851l.jpg",
      episodes: 1100,
      status: "Ongoing",
      rating: 9,
      year: 1999,
      type: "TV",
      studio: "Toei Animation",
    },
    {
      title: "Fullmetal Alchemist: Brotherhood",
      slug: "fullmetal-alchemist-brotherhood",
      description: "After a horrific alchemy experiment goes wrong in the Elric household, brothers Alphonse and Edward are left in a catastrophic new reality.",
      imageUrl: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
      bannerUrl: "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",
      episodes: 64,
      status: "Completed",
      rating: 10,
      year: 2009,
      type: "TV",
      studio: "Bones",
    },
    {
      title: "Naruto Shippuden",
      slug: "naruto-shippuden",
      description: "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training.",
      imageUrl: "https://cdn.myanimelist.net/images/anime/1565/111305.jpg",
      bannerUrl: "https://cdn.myanimelist.net/images/anime/1565/111305l.jpg",
      episodes: 500,
      status: "Completed",
      rating: 8,
      year: 2007,
      type: "TV",
      studio: "Pierrot",
    },
    {
      title: "Steins;Gate",
      slug: "steins-gate",
      description: "The self-proclaimed mad scientist Rintarou Okabe rents out a room in a rickety old building in Akihabara, where he indulges himself in his hobby of inventing prospective 'future gadgets'.",
      imageUrl: "https://cdn.myanimelist.net/images/anime/5/73199.jpg",
      bannerUrl: "https://cdn.myanimelist.net/images/anime/5/73199l.jpg",
      episodes: 24,
      status: "Completed",
      rating: 9,
      year: 2011,
      type: "TV",
      studio: "White Fox",
    },
    {
      title: "Death Note",
      slug: "death-note",
      description: "A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note.",
      imageUrl: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      bannerUrl: "https://cdn.myanimelist.net/images/anime/9/9453l.jpg",
      episodes: 37,
      status: "Completed",
      rating: 9,
      year: 2006,
      type: "TV",
      studio: "Madhouse",
    },
    {
      title: "My Hero Academia",
      slug: "my-hero-academia",
      description: "The appearance of 'quirks,' newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities.",
      imageUrl: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
      bannerUrl: "https://cdn.myanimelist.net/images/anime/10/78745l.jpg",
      episodes: 138,
      status: "Completed",
      rating: 7,
      year: 2016,
      type: "TV",
      studio: "Bones",
    },
    {
      title: "Spy x Family",
      slug: "spy-x-family",
      description: "Master spy Twilight is unmatched when it comes to going undercover on dangerous missions for the betterment of the world.",
      imageUrl: "https://cdn.myanimelist.net/images/anime/1441/139639.jpg",
      bannerUrl: "https://cdn.myanimelist.net/images/anime/1441/139639l.jpg",
      episodes: 37,
      status: "Ongoing",
      rating: 8,
      year: 2022,
      type: "TV",
      studio: "Wit Studio",
    },
    {
      title: "Chainsaw Man",
      slug: "chainsaw-man",
      description: "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however.",
      imageUrl: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
      bannerUrl: "https://cdn.myanimelist.net/images/anime/1806/126216l.jpg",
      episodes: 12,
      status: "Ongoing",
      rating: 8,
      year: 2022,
      type: "TV",
      studio: "MAPPA",
    },
    {
      title: "Solo Leveling",
      slug: "solo-leveling",
      description: "Over a decade ago, 'gates' connecting our world to a dimension of monsters appeared all over the place. In response, people known as 'hunters' emerged.",
      imageUrl: "https://cdn.myanimelist.net/images/anime/1911/143146.jpg",
      bannerUrl: "https://cdn.myanimelist.net/images/anime/1911/143146l.jpg",
      episodes: 12,
      status: "Ongoing",
      rating: 8,
      year: 2024,
      type: "TV",
      studio: "A-1 Pictures",
    },
  ];

  const insertedAnime = await db.insert(anime).values(animeData).returning();
  console.log(`✅ Inserted ${insertedAnime.length} anime`);

  // Insert manga
  const mangaData = [
    {
      title: "One Piece",
      slug: "one-piece-manga",
      description: "Gol D. Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. His capture and death by the World Government brought a change throughout the world.",
      imageUrl: "https://cdn.myanimelist.net/images/manga/2/253146.jpg",
      chapters: 1120,
      volumes: 107,
      status: "Ongoing",
      rating: 9,
      author: "Eiichiro Oda",
      type: "Manga",
    },
    {
      title: "Attack on Titan",
      slug: "attack-on-titan-manga",
      description: "In this grimdark story of the survive-or-die variety, humanity has been driven into a few enclaves by giant humanoid Titans.",
      imageUrl: "https://cdn.myanimelist.net/images/manga/2/253145.jpg",
      chapters: 139,
      volumes: 34,
      status: "Completed",
      rating: 9,
      author: "Hajime Isayama",
      type: "Manga",
    },
    {
      title: "Chainsaw Man",
      slug: "chainsaw-man-manga",
      description: "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as he is forced by the yakuza into killing devils.",
      imageUrl: "https://cdn.myanimelist.net/images/manga/3/210341.jpg",
      chapters: 180,
      volumes: 18,
      status: "Ongoing",
      rating: 8,
      author: "Tatsuki Fujimoto",
      type: "Manga",
    },
    {
      title: "Berserk",
      slug: "berserk-manga",
      description: "Guts, a former mercenary now known as the Black Swordsman, is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust.",
      imageUrl: "https://cdn.myanimelist.net/images/manga/1/157897.jpg",
      chapters: 375,
      volumes: 42,
      status: "Ongoing",
      rating: 10,
      author: "Kentaro Miura",
      type: "Manga",
    },
    {
      title: "Tokyo Ghoul",
      slug: "tokyo-ghoul-manga",
      description: "Ghouls exist among us, much like every other race and species. They look just like humans, but they differ in one crucial aspect — they have the ability to feed on human flesh.",
      imageUrl: "https://cdn.myanimelist.net/images/manga/2/253144.jpg",
      chapters: 143,
      volumes: 14,
      status: "Completed",
      rating: 8,
      author: "Sui Ishida",
      type: "Manga",
    },
    {
      title: "Naruto",
      slug: "naruto-manga",
      description: "Twelve years before the events of the series, the Nine-Tailed Fox demon attacked Konohagakure, destroying much of the village and killing many people.",
      imageUrl: "https://cdn.myanimelist.net/images/manga/2/253143.jpg",
      chapters: 700,
      volumes: 72,
      status: "Completed",
      rating: 8,
      author: "Masashi Kishimoto",
      type: "Manga",
    },
    {
      title: "Demon Slayer",
      slug: "demon-slayer-manga",
      description: "Since ancient times, rumors have abounded of man-eating demons lurking in the woods. Because of this, the local townsfolk never venture outside at night.",
      imageUrl: "https://cdn.myanimelist.net/images/manga/3/210342.jpg",
      chapters: 205,
      volumes: 23,
      status: "Completed",
      rating: 8,
      author: "Koyoharu Gotouge",
      type: "Manga",
    },
    {
      title: "Jujutsu Kaisen",
      slug: "jujutsu-kaisen-manga",
      description: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman school to find the demon's other parts and exorcise the curse.",
      imageUrl: "https://cdn.myanimelist.net/images/manga/3/210343.jpg",
      chapters: 270,
      volumes: 27,
      status: "Completed",
      rating: 8,
      author: "Gege Akutami",
      type: "Manga",
    },
    {
      title: "Vagabond",
      slug: "vagabond-manga",
      description: "Taking the lesson from the fictional novel of Miyamoto Musashi, Vagabond strives to be one of the most realistically drawn series in existence.",
      imageUrl: "https://cdn.myanimelist.net/images/manga/2/253147.jpg",
      chapters: 327,
      volumes: 37,
      status: "On Hiatus",
      rating: 10,
      author: "Takehiko Inoue",
      type: "Manga",
    },
    {
      title: "Spy x Family",
      slug: "spy-x-family-manga",
      description: "Master spy Twilight is unbeatable when it comes to going undercover on dangerous missions for the betterment of the world. But when he receives his most difficult assignment yet, he may be in over his head.",
      imageUrl: "https://cdn.myanimelist.net/images/manga/2/253148.jpg",
      chapters: 100,
      volumes: 13,
      status: "Ongoing",
      rating: 8,
      author: "Tatsuya Endo",
      type: "Manga",
    },
  ];

  const insertedManga = await db.insert(manga).values(mangaData).returning();
  console.log(`✅ Inserted ${insertedManga.length} manga`);

  // Anime-Genre mappings
  const animeGenreMap: Record<string, string[]> = {
    "attack-on-titan": ["action", "drama", "fantasy"],
    "demon-slayer": ["action", "fantasy", "supernatural"],
    "jujutsu-kaisen": ["action", "supernatural", "shounen"],
    "one-piece": ["action", "adventure", "comedy", "shounen"],
    "fullmetal-alchemist-brotherhood": ["action", "adventure", "fantasy", "drama"],
    "naruto-shippuden": ["action", "shounen", "fantasy"],
    "steins-gate": ["sci-fi", "thriller", "drama"],
    "death-note": ["thriller", "mystery", "supernatural"],
    "my-hero-academia": ["action", "shounen", "supernatural"],
    "spy-x-family": ["action", "comedy", "slice-of-life"],
    "chainsaw-man": ["action", "supernatural", "shounen"],
    "solo-leveling": ["action", "fantasy", "adventure"],
  };

  for (const animeRecord of insertedAnime) {
    const genreSlugs = animeGenreMap[animeRecord.slug] || [];
    for (const slug of genreSlugs) {
      const genre = insertedGenres.find((g) => g.slug === slug);
      if (genre) {
        await db.insert(animeGenres).values({ animeId: animeRecord.id, genreId: genre.id });
      }
    }
  }
  console.log("✅ Inserted anime-genre mappings");

  // Manga-Genre mappings
  const mangaGenreMap: Record<string, string[]> = {
    "one-piece-manga": ["action", "adventure", "comedy", "shounen"],
    "attack-on-titan-manga": ["action", "drama", "fantasy"],
    "chainsaw-man-manga": ["action", "supernatural", "shounen"],
    "berserk-manga": ["action", "drama", "fantasy", "seinen"],
    "tokyo-ghoul-manga": ["action", "horror", "supernatural"],
    "naruto-manga": ["action", "shounen", "fantasy"],
    "demon-slayer-manga": ["action", "fantasy", "supernatural"],
    "jujutsu-kaisen-manga": ["action", "supernatural", "shounen"],
    "vagabond-manga": ["action", "drama", "seinen"],
    "spy-x-family-manga": ["action", "comedy", "slice-of-life"],
  };

  for (const mangaRecord of insertedManga) {
    const genreSlugs = mangaGenreMap[mangaRecord.slug] || [];
    for (const slug of genreSlugs) {
      const genre = insertedGenres.find((g) => g.slug === slug);
      if (genre) {
        await db.insert(mangaGenres).values({ mangaId: mangaRecord.id, genreId: genre.id });
      }
    }
  }
  console.log("✅ Inserted manga-genre mappings");

  console.log("🎉 Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
