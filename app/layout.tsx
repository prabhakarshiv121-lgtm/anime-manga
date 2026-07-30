import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../Navbar";

export const metadata: Metadata = {
  title: "AnimeManga - Watch Anime & Read Manga",
  description: "Free anime streaming and manga reader app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f1a] text-white min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

