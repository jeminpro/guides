export type EnglishPageMeta = {
  number: number;
  id: string;
  label: string;
  title: string;
  bodyClass: string;
};

export const GUIDE_ID = "english-guide" as const;
export const GUIDE_TITLE = "English Mastery";
export const GUIDE_DESCRIPTION =
  "Primary & 11+ English cheat sheets — comprehension, punctuation, grammar, and vocabulary.";
export const PAGE_COUNT = 78 as const;

export const pages = [
  {
    number: 1,
    id: "comprehension",
    label: "Comprehension",
    title: "Comprehension and Language Techniques",
    bodyClass: "tone-comprehension"
  },
  {
    number: 2,
    id: "punctuation",
    label: "Punctuation",
    title: "Punctuation",
    bodyClass: "tone-punctuation"
  },
  {
    number: 3,
    id: "punctuation-map",
    label: "All punctuation",
    title: "All the punctuations you need to know!",
    bodyClass: "punct-overview"
  },
  {
    number: 4,
    id: "capital-letters",
    label: "Understanding Punctuations - Capital Letters",
    title: "Understanding Punctuations - Capital Letters",
    bodyClass: "capitals-use"
  },
  {
    number: 5,
    id: "capital-traps",
    label: "Understanding Punctuations - Capital Letters",
    title: "Understanding Punctuations - Capital Letters",
    bodyClass: "capitals-traps"
  },
  {
    number: 6,
    id: "sentence-endings",
    label: "Understanding Punctuations - Sentence Endings",
    title: "Understanding Punctuations - Sentence Endings",
    bodyClass: "sentence-endings"
  },
  {
    number: 7,
    id: "commas",
    label: "Understanding Punctuations - Commas",
    title: "Understanding Punctuations - Commas",
    bodyClass: "commas-use"
  },
  {
    number: 8,
    id: "comma-traps",
    label: "Understanding Punctuations - Commas",
    title: "Understanding Punctuations - Commas",
    bodyClass: "commas-traps"
  },
  {
    number: 9,
    id: "apostrophes",
    label: "Understanding Punctuations - Apostrophes",
    title: "Understanding Punctuations - Apostrophes",
    bodyClass: "apostrophes"
  },
  {
    number: 10,
    id: "apostrophe-traps",
    label: "Understanding Punctuations - Apostrophes",
    title: "Understanding Punctuations - Apostrophes",
    bodyClass: "apostrophe-traps"
  },
  {
    number: 11,
    id: "speech-marks",
    label: "Understanding Punctuations - Speech Marks",
    title: "Understanding Punctuations - Speech Marks",
    bodyClass: "speech-marks"
  },
  {
    number: 12,
    id: "colons",
    label: "Understanding Punctuations - Colons and Semicolons",
    title: "Understanding Punctuations - Colons and Semicolons",
    bodyClass: "colons"
  },
  {
    number: 13,
    id: "dashes",
    label: "Understanding Punctuations - Dashes, Brackets and Hyphens",
    title: "Understanding Punctuations - Dashes, Brackets and Hyphens",
    bodyClass: "dashes"
  },
  {
    number: 14,
    id: "ellipsis",
    label: "Understanding Punctuations - Ellipsis",
    title: "Understanding Punctuations - Ellipsis",
    bodyClass: "ellipsis"
  },
  {
    number: 15,
    id: "grammar",
    label: "Grammar",
    title: "Grammar and Sentence Structure",
    bodyClass: "tone-grammar"
  },
  {
    number: 16,
    id: "grammar-summary-1",
    label: "Understanding Grammar - Quick Summary",
    title: "Understanding Grammar - Quick Summary",
    bodyClass: "grammar-summary"
  },
  {
    number: 17,
    id: "grammar-summary-2",
    label: "Understanding Grammar - Quick Summary",
    title: "Understanding Grammar - Quick Summary",
    bodyClass: "grammar-summary"
  },
  {
    number: 18,
    id: "grammar-summary-3",
    label: "Understanding Grammar - Quick Summary",
    title: "Understanding Grammar - Quick Summary",
    bodyClass: "grammar-summary"
  },
  {
    number: 19,
    id: "parts-of-speech",
    label: "Understanding Grammar - Parts of Speech",
    title: "Understanding Grammar - Parts of Speech",
    bodyClass: "grammar-topic parts-of-speech"
  },
  {
    number: 20,
    id: "nouns",
    label: "Understanding Grammar - Nouns",
    title: "Understanding Grammar - Nouns",
    bodyClass: "grammar-topic nouns"
  },
  {
    number: 21,
    id: "verbs",
    label: "Understanding Grammar - Verbs",
    title: "Understanding Grammar - Verbs",
    bodyClass: "grammar-topic verbs"
  },
  {
    number: 22,
    id: "adjectives",
    label: "Understanding Grammar - Adjectives",
    title: "Understanding Grammar - Adjectives",
    bodyClass: "grammar-topic adjectives"
  },
  {
    number: 23,
    id: "adverbs",
    label: "Understanding Grammar - Adverbs",
    title: "Understanding Grammar - Adverbs",
    bodyClass: "grammar-topic adverbs"
  },
  {
    number: 24,
    id: "pronouns",
    label: "Understanding Grammar - Pronouns",
    title: "Understanding Grammar - Pronouns",
    bodyClass: "grammar-topic pronouns"
  },
  {
    number: 25,
    id: "prepositions",
    label: "Understanding Grammar - Prepositions",
    title: "Understanding Grammar - Prepositions",
    bodyClass: "grammar-topic prepositions"
  },
  {
    number: 26,
    id: "preposition-more",
    label: "Understanding Grammar - Prepositions",
    title: "Understanding Grammar - Prepositions",
    bodyClass: "grammar-topic preposition-more"
  },
  {
    number: 27,
    id: "conjunctions",
    label: "Understanding Grammar - Conjunctions",
    title: "Understanding Grammar - Conjunctions",
    bodyClass: "grammar-topic conjunctions"
  },
  {
    number: 28,
    id: "conjunction-uses",
    label: "Understanding Grammar - Conjunctions",
    title: "Understanding Grammar - Conjunctions",
    bodyClass: "grammar-topic conjunction-uses"
  },
  {
    number: 29,
    id: "subordinating",
    label: "Understanding Grammar - Conjunctions",
    title: "Understanding Grammar - Conjunctions",
    bodyClass: "grammar-topic subordinating"
  },
  {
    number: 30,
    id: "conjunction-traps",
    label: "Understanding Grammar - Conjunctions",
    title: "Understanding Grammar - Conjunctions",
    bodyClass: "grammar-topic conjunction-traps"
  },
  {
    number: 31,
    id: "determiners",
    label: "Understanding Grammar - Determiners",
    title: "Understanding Grammar - Determiners",
    bodyClass: "grammar-topic determiners"
  },
  {
    number: 32,
    id: "articles",
    label: "Understanding Grammar - Determiners",
    title: "Understanding Grammar - Determiners",
    bodyClass: "grammar-topic articles"
  },
  {
    number: 33,
    id: "interjections",
    label: "Understanding Grammar - Interjections",
    title: "Understanding Grammar - Interjections",
    bodyClass: "grammar-topic interjections"
  },
  {
    number: 34,
    id: "sentences-phrases",
    label: "Understanding Grammar - Sentence Structure",
    title: "Understanding Grammar - Sentence Structure",
    bodyClass: "grammar-topic sentences-phrases"
  },
  {
    number: 35,
    id: "clauses-intro",
    label: "Understanding Grammar - Clauses",
    title: "Understanding Grammar - Clauses",
    bodyClass: "grammar-topic clauses-intro"
  },
  {
    number: 36,
    id: "clauses-types",
    label: "Understanding Grammar - Clauses",
    title: "Understanding Grammar - Clauses",
    bodyClass: "grammar-topic clauses-types"
  },
  {
    number: 37,
    id: "relative-clauses",
    label: "Understanding Grammar - Clauses",
    title: "Understanding Grammar - Clauses",
    bodyClass: "grammar-topic relative-clauses"
  },
  {
    number: 38,
    id: "relative-more",
    label: "Understanding Grammar - Clauses",
    title: "Understanding Grammar - Clauses",
    bodyClass: "grammar-topic relative-more"
  },
  {
    number: 39,
    id: "sentence-types",
    label: "Understanding Grammar - Sentence Structure",
    title: "Understanding Grammar - Sentence Structure",
    bodyClass: "grammar-topic sentence-types"
  },
  {
    number: 40,
    id: "sentence-purpose",
    label: "Understanding Grammar - Sentence Structure",
    title: "Understanding Grammar - Sentence Structure",
    bodyClass: "grammar-topic sentence-purpose"
  },
  {
    number: 41,
    id: "words-in-sentence",
    label: "Understanding Grammar - Sentence Structure",
    title: "Understanding Grammar - Sentence Structure",
    bodyClass: "grammar-topic words-in-sentence"
  },
  {
    number: 42,
    id: "noun-phrases",
    label: "Understanding Grammar - Noun Phrases",
    title: "Understanding Grammar - Noun Phrases",
    bodyClass: "grammar-topic noun-phrases"
  },
  {
    number: 43,
    id: "noun-modifiers",
    label: "Understanding Grammar - Noun Phrases",
    title: "Understanding Grammar - Noun Phrases",
    bodyClass: "grammar-topic noun-modifiers"
  },
  {
    number: 44,
    id: "noun-phrase-expand",
    label: "Understanding Grammar - Noun Phrases",
    title: "Understanding Grammar - Noun Phrases",
    bodyClass: "grammar-topic noun-phrase-expand"
  },
  {
    number: 45,
    id: "noun-phrase-build",
    label: "Understanding Grammar - Noun Phrases",
    title: "Understanding Grammar - Noun Phrases",
    bodyClass: "grammar-topic noun-phrase-build"
  },
  {
    number: 46,
    id: "tense-time",
    label: "Understanding Grammar - Verb Tenses",
    title: "Understanding Grammar - Verb Tenses",
    bodyClass: "grammar-topic tense-time"
  },
  {
    number: 47,
    id: "tense-past",
    label: "Understanding Grammar - Verb Tenses",
    title: "Understanding Grammar - Verb Tenses",
    bodyClass: "grammar-topic tense-past"
  },
  {
    number: 48,
    id: "tense-progressive",
    label: "Understanding Grammar - Verb Tenses",
    title: "Understanding Grammar - Verb Tenses",
    bodyClass: "grammar-topic tense-progressive"
  },
  {
    number: 49,
    id: "tense-perfect",
    label: "Understanding Grammar - Verb Tenses",
    title: "Understanding Grammar - Verb Tenses",
    bodyClass: "grammar-topic tense-perfect"
  },
  {
    number: 50,
    id: "tense-longer",
    label: "Understanding Grammar - Verb Tenses",
    title: "Understanding Grammar - Verb Tenses",
    bodyClass: "grammar-topic tense-longer"
  },
  {
    number: 51,
    id: "tense-reference",
    label: "Understanding Grammar - Verb Tenses",
    title: "Understanding Grammar - Verb Tenses",
    bodyClass: "grammar-topic tense-reference"
  },
  {
    number: 52,
    id: "speech-direct",
    label: "Understanding Grammar - Direct and Reported Speech",
    title: "Understanding Grammar - Direct and Reported Speech",
    bodyClass: "grammar-topic speech-direct"
  },
  {
    number: 53,
    id: "speech-more",
    label: "Understanding Grammar - Direct and Reported Speech",
    title: "Understanding Grammar - Direct and Reported Speech",
    bodyClass: "grammar-topic speech-more"
  },
  {
    number: 54,
    id: "sva-intro",
    label: "Understanding Grammar - Subject–Verb Agreement",
    title: "Understanding Grammar - Subject–Verb Agreement",
    bodyClass: "grammar-topic sva-intro"
  },
  {
    number: 55,
    id: "sva-subject",
    label: "Understanding Grammar - Subject–Verb Agreement",
    title: "Understanding Grammar - Subject–Verb Agreement",
    bodyClass: "grammar-topic sva-subject"
  },
  {
    number: 56,
    id: "sva-patterns",
    label: "Understanding Grammar - Subject–Verb Agreement",
    title: "Understanding Grammar - Subject–Verb Agreement",
    bodyClass: "grammar-topic sva-patterns"
  },
  {
    number: 57,
    id: "sva-join",
    label: "Understanding Grammar - Subject–Verb Agreement",
    title: "Understanding Grammar - Subject–Verb Agreement",
    bodyClass: "grammar-topic sva-join"
  },
  {
    number: 58,
    id: "noun-pronoun",
    label: "Understanding Grammar - Noun and Pronoun Agreement",
    title: "Understanding Grammar - Noun and Pronoun Agreement",
    bodyClass: "grammar-topic noun-pronoun"
  },
  {
    number: 59,
    id: "noun-pronoun-cases",
    label: "Understanding Grammar - Noun and Pronoun Agreement",
    title: "Understanding Grammar - Noun and Pronoun Agreement",
    bodyClass: "grammar-topic noun-pronoun-cases"
  },
  {
    number: 60,
    id: "adverb-groups",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic adverb-groups"
  },
  {
    number: 61,
    id: "adverb-place",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic adverb-place"
  },
  {
    number: 62,
    id: "adverb-job",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic adverb-job"
  },
  {
    number: 63,
    id: "modal-mean",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic modal-mean"
  },
  {
    number: 64,
    id: "modal-many",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic modal-many"
  },
  {
    number: 65,
    id: "modal-rules",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic modal-rules"
  },
  {
    number: 66,
    id: "possibility-scale",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic possibility-scale"
  },
  {
    number: 67,
    id: "possibility-word",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic possibility-word"
  },
  {
    number: 68,
    id: "connect-jobs",
    label: "Understanding Grammar - Connecting Ideas",
    title: "Understanding Grammar - Connecting Ideas",
    bodyClass: "grammar-topic connect-jobs"
  },
  {
    number: 69,
    id: "connect-conjunctions",
    label: "Understanding Grammar - Connecting Ideas",
    title: "Understanding Grammar - Connecting Ideas",
    bodyClass: "grammar-topic connect-conjunctions"
  },
  {
    number: 70,
    id: "connect-adverbs",
    label: "Understanding Grammar - Connecting Ideas",
    title: "Understanding Grammar - Connecting Ideas",
    bodyClass: "grammar-topic connect-adverbs"
  },
  {
    number: 71,
    id: "connect-prepositions",
    label: "Understanding Grammar - Connecting Ideas",
    title: "Understanding Grammar - Connecting Ideas",
    bodyClass: "grammar-topic connect-prepositions"
  },
  {
    number: 72,
    id: "irregular-intro",
    label: "Understanding Grammar - Irregular Verbs",
    title: "Understanding Grammar - Irregular Verbs",
    bodyClass: "grammar-topic irregular-intro"
  },
  {
    number: 73,
    id: "irregular-same",
    label: "Understanding Grammar - Irregular Verbs",
    title: "Understanding Grammar - Irregular Verbs",
    bodyClass: "grammar-topic irregular-same"
  },
  {
    number: 74,
    id: "irregular-change",
    label: "Understanding Grammar - Irregular Verbs",
    title: "Understanding Grammar - Irregular Verbs",
    bodyClass: "grammar-topic irregular-change"
  },
  {
    number: 75,
    id: "irregular-endings",
    label: "Understanding Grammar - Irregular Verbs",
    title: "Understanding Grammar - Irregular Verbs",
    bodyClass: "grammar-topic irregular-endings"
  },
  {
    number: 76,
    id: "irregular-list",
    label: "Understanding Grammar - Irregular Verbs",
    title: "Understanding Grammar - Irregular Verbs",
    bodyClass: "grammar-topic irregular-list"
  },
  {
    number: 77,
    id: "irregular-traps",
    label: "Understanding Grammar - Irregular Verbs",
    title: "Understanding Grammar - Irregular Verbs",
    bodyClass: "grammar-topic irregular-traps"
  },
  {
    number: 78,
    id: "vocabulary",
    label: "Vocabulary",
    title: "Vocabulary",
    bodyClass: "tone-vocabulary"
  }
] as const satisfies readonly EnglishPageMeta[];
