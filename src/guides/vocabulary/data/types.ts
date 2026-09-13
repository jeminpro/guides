export type VocabEntry = {
  word: string;
  meaning: string;
  synonyms: readonly string[];
  antonyms: readonly string[];
  example: string;
};

export type VocabSet = {
  id: string;
  label: string;
  title: string;
  words: readonly VocabEntry[];
  paragraphs: readonly string[];
};
