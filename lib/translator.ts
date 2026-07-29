import { db } from "@/lib/index";
import { mangaPages } from "@/lib/schema";
import { eq } from "drizzle-orm";

function englishToHinglishText(text: string): string {
  if (!text) return "";

  let hinglish = text
    .replace(/\bHello\b/gi, "Namaste")
    .replace(/\bFriend\b/gi, "Dost")
    .replace(/\bFriends\b/gi, "Dost")
    .replace(/\bMonster\b/gi, "Danav")
    .replace(/\bPower\b/gi, "Takat")
    .replace(/\bStrong\b/gi, "Khatarnak")
    .replace(/\bWeak\b/gi, "Kamzor")
    .replace(/\bDie\b/gi, "Mar jana")
    .replace(/\bKill\b/gi, "Khatam karna")
    .replace(/\bI will\b/gi, "Main")
    .replace(/\bWhy\b/gi, "Kyun")
    .replace(/\bWhat\b/gi, "Kya")
    .replace(/\bWhere\b/gi, "Kahan")
    .replace(/\bWho\b/gi, "Kaun")
    .replace(/\bYes\b/gi, "Haan")
    .replace(/\bNo\b/gi, "Nahi");

  return hinglish;
}

export async function getOrTranslateHinglish(
  pageId: number,
  originalText: string,
  existingHinglishText?: string | null
) {
  if (existingHinglishText && existingHinglishText.trim() !== "") {
    return existingHinglishText;
  }

  const autoHinglish = englishToHinglishText(originalText);

  try {
    await db
      .update(mangaPages)
      .set({ hinglishText: autoHinglish })
      .where(eq(mangaPages.id, pageId));
  } catch (err) {
    console.error("DB Save Error:", err);
  }

  return autoHinglish;
}

