export type VocabularyPageMeta = {
  number: number;
  id: string;
  label: string;
  title: string;
  bodyClass: string;
};

export const GUIDE_ID = "vocabulary" as const;
export const GUIDE_TITLE = "Vocabulary";
export const GUIDE_DESCRIPTION =
  "11+ word study sheets — meaning, synonyms, antonyms, and a story that uses every word.";
export const PAGE_COUNT = 30 as const;

export const pages = Array.from({ length: PAGE_COUNT }, (_, index) => {
  const number = index + 1;
  const paddedNumber = String(number).padStart(2, "0");

  return {
    number,
    id: `set-${paddedNumber}`,
    label: `Set ${number}`,
    title: "Ten words to own",
    bodyClass: "v1"
  };
}) satisfies readonly VocabularyPageMeta[];
