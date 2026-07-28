import { pgTable, serial, text, varchar, integer, timestamp, boolean, primaryKey } from "drizzle-orm/pg-core";

export const genres = pgTable("genres", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
});

export const anime = pgTable("anime", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description").notNull(),
  imageUrl: varchar("image_url", { length: 500 }).notNull(),
  bannerUrl: varchar("banner_url", { length: 500 }).notNull().default(""),
  episodes: integer("episodes").notNull().default(0),
  status: varchar("status", { length: 50 }).notNull().default("Ongoing"),
  rating: integer("rating").notNull().default(0),
  year: integer("year").notNull().default(2024),
  type: varchar("type", { length: 50 }).notNull().default("TV"),
  studio: varchar("studio", { length: 100 }).notNull().default("Unknown"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const manga = pgTable("manga", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description").notNull(),
  imageUrl: varchar("image_url", { length: 500 }).notNull(),
  chapters: integer("chapters").notNull().default(0),
  volumes: integer("volumes").notNull().default(0),
  status: varchar("status", { length: 50 }).notNull().default("Ongoing"),
  rating: integer("rating").notNull().default(0),
  author: varchar("author", { length: 100 }).notNull().default("Unknown"),
  type: varchar("type", { length: 50 }).notNull().default("Manga"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const animeGenres = pgTable("anime_genres", {
  animeId: integer("anime_id").notNull().references(() => anime.id, { onDelete: "cascade" }),
  genreId: integer("genre_id").notNull().references(() => genres.id, { onDelete: "cascade" }),
}, (t) => ({
  pk: primaryKey({ columns: [t.animeId, t.genreId] }),
}));

export const mangaGenres = pgTable("manga_genres", {
  mangaId: integer("manga_id").notNull().references(() => manga.id, { onDelete: "cascade" }),
  genreId: integer("genre_id").notNull().references(() => genres.id, { onDelete: "cascade" }),
}, (t) => ({
  pk: primaryKey({ columns: [t.mangaId, t.genreId] }),
}));

export const favorites = pgTable("favorites", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 100 }).notNull(),
  itemType: varchar("item_type", { length: 10 }).notNull(),
  itemId: integer("item_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
