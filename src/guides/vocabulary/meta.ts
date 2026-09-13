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
export const PAGE_COUNT = 1 as const;

export const pages = [
  {
    number: 1,
    id: "set-01",
    label: "Set 1",
    title: "Ten words to own",
    bodyClass: "v1"
  }
] as const satisfies readonly VocabularyPageMeta[];
