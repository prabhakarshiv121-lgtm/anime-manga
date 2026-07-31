import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MangaHindi - Hinglish Manga Reader",
  description: "Read popular manga and manhwa in Hinglish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
