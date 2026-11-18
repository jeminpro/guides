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
export const PAGE_COUNT = 86 as const;

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
    id: "question-types",
    label: "Understanding Comprehension - Question Types",
    title: "Understanding Comprehension - Question Types",
    bodyClass: "comprehension-topic question-types"
  },
  {
    number: 3,
    id: "true-false",
    label: "Understanding Comprehension - True, False or Not Given",
    title: "Understanding Comprehension - True, False or Not Given",
    bodyClass: "comprehension-topic true-false"
  },
  {
    number: 4,
    id: "vocab-context",
    label: "Understanding Comprehension - Vocabulary in Context",
    title: "Understanding Comprehension - Vocabulary in Context",
    bodyClass: "comprehension-topic vocab-context"
  },
  {
    number: 5,
    id: "inference",
    label: "Understanding Comprehension - Inference",
    title: "Understanding Comprehension - Inference",
    bodyClass: "comprehension-topic inference"
  },
  {
    number: 6,
    id: "main-idea",
    label: "Understanding Comprehension - Main Idea",
    title: "Understanding Comprehension - Main Idea",
    bodyClass: "comprehension-topic main-idea"
  },
  {
    number: 7,
    id: "figures-speech",
    label: "Understanding Comprehension - Figures of Speech",
    title: "Understanding Comprehension - Figures of Speech",
    bodyClass: "comprehension-topic figures-speech"
  },
  {
    number: 8,
    id: "punctuation",
    label: "Punctuation",
    title: "Punctuation",
    bodyClass: "tone-punctuation"
  },
  {
    number: 9,
    id: "punctuation-map",
    label: "All punctuation",
    title: "All the punctuations you need to know!",
    bodyClass: "punct-overview"
  },
  {
    number: 10,
    id: "capital-letters",
    label: "Understanding Punctuations - Capital Letters",
    title: "Understanding Punctuations - Capital Letters",
    bodyClass: "capitals-use"
  },
  {
    number: 11,
    id: "capital-traps",
    label: "Understanding Punctuations - Capital Letters",
    title: "Understanding Punctuations - Capital Letters",
    bodyClass: "capitals-traps"
  },
  {
    number: 12,
    id: "sentence-endings",
    label: "Understanding Punctuations - Sentence Endings",
    title: "Understanding Punctuations - Sentence Endings",
    bodyClass: "sentence-endings"
  },
  {
    number: 13,
    id: "commas",
    label: "Understanding Punctuations - Commas",
    title: "Understanding Punctuations - Commas",
    bodyClass: "commas-use"
  },
  {
    number: 14,
    id: "comma-traps",
    label: "Understanding Punctuations - Commas",
    title: "Understanding Punctuations - Commas",
    bodyClass: "commas-traps"
  },
  {
    number: 15,
    id: "apostrophes",
    label: "Understanding Punctuations - Apostrophes",
    title: "Understanding Punctuations - Apostrophes",
    bodyClass: "apostrophes"
  },
  {
    number: 16,
    id: "speech-marks",
    label: "Understanding Punctuations - Speech Marks, Colons and Semicolons",
    title: "Understanding Punctuations - Speech Marks, Colons and Semicolons",
    bodyClass: "speech-marks"
  },
  {
    number: 17,
    id: "dashes",
    label: "Understanding Punctuations - Dashes, Brackets, Hyphens and Ellipsis",
    title: "Understanding Punctuations - Dashes, Brackets, Hyphens and Ellipsis",
    bodyClass: "dashes"
  },
  {
    number: 18,
    id: "grammar",
    label: "Grammar",
    title: "Grammar and Sentence Structure",
    bodyClass: "tone-grammar"
  },
  {
    number: 19,
    id: "grammar-summary-1",
    label: "Understanding Grammar - Quick Summary",
    title: "Understanding Grammar - Quick Summary",
    bodyClass: "grammar-summary"
  },
  {
    number: 20,
    id: "grammar-summary-2",
    label: "Understanding Grammar - Quick Summary",
    title: "Understanding Grammar - Quick Summary",
    bodyClass: "grammar-summary"
  },
  {
    number: 21,
    id: "grammar-summary-3",
    label: "Understanding Grammar - Quick Summary",
    title: "Understanding Grammar - Quick Summary",
    bodyClass: "grammar-summary"
  },
  {
    number: 22,
    id: "parts-of-speech",
    label: "Understanding Grammar - Parts of Speech",
    title: "Understanding Grammar - Parts of Speech",
    bodyClass: "grammar-topic parts-of-speech"
  },
  {
    number: 23,
    id: "nouns",
    label: "Understanding Grammar - Nouns",
    title: "Understanding Grammar - Nouns",
    bodyClass: "grammar-topic nouns"
  },
  {
    number: 24,
    id: "verbs",
    label: "Understanding Grammar - Verbs",
    title: "Understanding Grammar - Verbs",
    bodyClass: "grammar-topic verbs"
  },
  {
    number: 25,
    id: "adjectives",
    label: "Understanding Grammar - Adjectives",
    title: "Understanding Grammar - Adjectives",
    bodyClass: "grammar-topic adjectives"
  },
  {
    number: 26,
    id: "adverbs",
    label: "Understanding Grammar - Adverbs",
    title: "Understanding Grammar - Adverbs",
    bodyClass: "grammar-topic adverbs"
  },
  {
    number: 27,
    id: "pronouns",
    label: "Understanding Grammar - Pronouns",
    title: "Understanding Grammar - Pronouns",
    bodyClass: "grammar-topic pronouns"
  },
  {
    number: 28,
    id: "prepositions",
    label: "Understanding Grammar - Prepositions",
    title: "Understanding Grammar - Prepositions",
    bodyClass: "grammar-topic prepositions"
  },
  {
    number: 29,
    id: "preposition-more",
    label: "Understanding Grammar - Prepositions",
    title: "Understanding Grammar - Prepositions",
    bodyClass: "grammar-topic preposition-more"
  },
  {
    number: 30,
    id: "conjunctions",
    label: "Understanding Grammar - Conjunctions",
    title: "Understanding Grammar - Conjunctions",
    bodyClass: "grammar-topic conjunctions"
  },
  {
    number: 31,
    id: "conjunction-uses",
    label: "Understanding Grammar - Conjunctions",
    title: "Understanding Grammar - Conjunctions",
    bodyClass: "grammar-topic conjunction-uses"
  },
  {
    number: 32,
    id: "subordinating",
    label: "Understanding Grammar - Conjunctions",
    title: "Understanding Grammar - Conjunctions",
    bodyClass: "grammar-topic subordinating"
  },
  {
    number: 33,
    id: "conjunction-traps",
    label: "Understanding Grammar - Conjunctions",
    title: "Understanding Grammar - Conjunctions",
    bodyClass: "grammar-topic conjunction-traps"
  },
  {
    number: 34,
    id: "determiners",
    label: "Understanding Grammar - Determiners",
    title: "Understanding Grammar - Determiners",
    bodyClass: "grammar-topic determiners"
  },
  {
    number: 35,
    id: "articles",
    label: "Understanding Grammar - Determiners",
    title: "Understanding Grammar - Determiners",
    bodyClass: "grammar-topic articles"
  },
  {
    number: 36,
    id: "interjections",
    label: "Understanding Grammar - Interjections",
    title: "Understanding Grammar - Interjections",
    bodyClass: "grammar-topic interjections"
  },
  {
    number: 37,
    id: "sentences-phrases",
    label: "Understanding Grammar - Sentence Structure and Clauses",
    title: "Understanding Grammar - Sentence Structure and Clauses",
    bodyClass: "grammar-topic sentences-phrases"
  },
  {
    number: 38,
    id: "clauses-types",
    label: "Understanding Grammar - Clauses",
    title: "Understanding Grammar - Clauses",
    bodyClass: "grammar-topic clauses-types"
  },
  {
    number: 39,
    id: "relative-clauses",
    label: "Understanding Grammar - Clauses",
    title: "Understanding Grammar - Clauses",
    bodyClass: "grammar-topic relative-clauses"
  },
  {
    number: 40,
    id: "relative-more",
    label: "Understanding Grammar - Clauses",
    title: "Understanding Grammar - Clauses",
    bodyClass: "grammar-topic relative-more"
  },
  {
    number: 41,
    id: "sentence-types",
    label: "Understanding Grammar - Sentence Structure",
    title: "Understanding Grammar - Sentence Structure",
    bodyClass: "grammar-topic sentence-types"
  },
  {
    number: 42,
    id: "sentence-purpose",
    label: "Understanding Grammar - Sentence Structure",
    title: "Understanding Grammar - Sentence Structure",
    bodyClass: "grammar-topic sentence-purpose"
  },
  {
    number: 43,
    id: "words-in-sentence",
    label: "Understanding Grammar - Sentence Structure",
    title: "Understanding Grammar - Sentence Structure",
    bodyClass: "grammar-topic words-in-sentence"
  },
  {
    number: 44,
    id: "noun-phrases",
    label: "Understanding Grammar - Noun Phrases",
    title: "Understanding Grammar - Noun Phrases",
    bodyClass: "grammar-topic noun-phrases"
  },
  {
    number: 45,
    id: "noun-modifiers",
    label: "Understanding Grammar - Noun Phrases",
    title: "Understanding Grammar - Noun Phrases",
    bodyClass: "grammar-topic noun-modifiers"
  },
  {
    number: 46,
    id: "noun-phrase-expand",
    label: "Understanding Grammar - Noun Phrases",
    title: "Understanding Grammar - Noun Phrases",
    bodyClass: "grammar-topic noun-phrase-expand"
  },
  {
    number: 47,
    id: "noun-phrase-build",
    label: "Understanding Grammar - Noun Phrases",
    title: "Understanding Grammar - Noun Phrases",
    bodyClass: "grammar-topic noun-phrase-build"
  },
  {
    number: 48,
    id: "tense-time",
    label: "Understanding Grammar - Verb Tenses",
    title: "Understanding Grammar - Verb Tenses",
    bodyClass: "grammar-topic tense-time"
  },
  {
    number: 49,
    id: "tense-past",
    label: "Understanding Grammar - Verb Tenses",
    title: "Understanding Grammar - Verb Tenses",
    bodyClass: "grammar-topic tense-past"
  },
  {
    number: 50,
    id: "tense-progressive",
    label: "Understanding Grammar - Verb Tenses",
    title: "Understanding Grammar - Verb Tenses",
    bodyClass: "grammar-topic tense-progressive"
  },
  {
    number: 51,
    id: "tense-perfect",
    label: "Understanding Grammar - Verb Tenses",
    title: "Understanding Grammar - Verb Tenses",
    bodyClass: "grammar-topic tense-perfect"
  },
  {
    number: 52,
    id: "tense-longer",
    label: "Understanding Grammar - Verb Tenses",
    title: "Understanding Grammar - Verb Tenses",
    bodyClass: "grammar-topic tense-longer"
  },
  {
    number: 53,
    id: "tense-reference",
    label: "Understanding Grammar - Verb Tenses",
    title: "Understanding Grammar - Verb Tenses",
    bodyClass: "grammar-topic tense-reference"
  },
  {
    number: 54,
    id: "speech-direct",
    label: "Understanding Grammar - Direct and Reported Speech",
    title: "Understanding Grammar - Direct and Reported Speech",
    bodyClass: "grammar-topic speech-direct"
  },
  {
    number: 55,
    id: "speech-more",
    label: "Understanding Grammar - Direct and Reported Speech",
    title: "Understanding Grammar - Direct and Reported Speech",
    bodyClass: "grammar-topic speech-more"
  },
  {
    number: 56,
    id: "sva-intro",
    label: "Understanding Grammar - Subject–Verb Agreement",
    title: "Understanding Grammar - Subject–Verb Agreement",
    bodyClass: "grammar-topic sva-intro"
  },
  {
    number: 57,
    id: "sva-subject",
    label: "Understanding Grammar - Subject–Verb Agreement",
    title: "Understanding Grammar - Subject–Verb Agreement",
    bodyClass: "grammar-topic sva-subject"
  },
  {
    number: 58,
    id: "sva-patterns",
    label: "Understanding Grammar - Subject–Verb Agreement",
    title: "Understanding Grammar - Subject–Verb Agreement",
    bodyClass: "grammar-topic sva-patterns"
  },
  {
    number: 59,
    id: "sva-join",
    label: "Understanding Grammar - Subject–Verb Agreement",
    title: "Understanding Grammar - Subject–Verb Agreement",
    bodyClass: "grammar-topic sva-join"
  },
  {
    number: 60,
    id: "noun-pronoun",
    label: "Understanding Grammar - Noun and Pronoun Agreement",
    title: "Understanding Grammar - Noun and Pronoun Agreement",
    bodyClass: "grammar-topic noun-pronoun"
  },
  {
    number: 61,
    id: "noun-pronoun-cases",
    label: "Understanding Grammar - Noun and Pronoun Agreement",
    title: "Understanding Grammar - Noun and Pronoun Agreement",
    bodyClass: "grammar-topic noun-pronoun-cases"
  },
  {
    number: 62,
    id: "adverb-groups",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic adverb-groups"
  },
  {
    number: 63,
    id: "adverb-place",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic adverb-place"
  },
  {
    number: 64,
    id: "adverb-job",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic adverb-job"
  },
  {
    number: 65,
    id: "modal-mean",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic modal-mean"
  },
  {
    number: 66,
    id: "modal-many",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic modal-many"
  },
  {
    number: 67,
    id: "modal-rules",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic modal-rules"
  },
  {
    number: 68,
    id: "possibility-scale",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic possibility-scale"
  },
  {
    number: 69,
    id: "possibility-word",
    label: "Understanding Grammar - Adverbs and Modality",
    title: "Understanding Grammar - Adverbs and Modality",
    bodyClass: "grammar-topic possibility-word"
  },
  {
    number: 70,
    id: "connect-jobs",
    label: "Understanding Grammar - Connecting Ideas",
    title: "Understanding Grammar - Connecting Ideas",
    bodyClass: "grammar-topic connect-jobs"
  },
  {
    number: 71,
    id: "connect-conjunctions",
    label: "Understanding Grammar - Connecting Ideas",
    title: "Understanding Grammar - Connecting Ideas",
    bodyClass: "grammar-topic connect-conjunctions"
  },
  {
    number: 72,
    id: "connect-adverbs",
    label: "Understanding Grammar - Connecting Ideas",
    title: "Understanding Grammar - Connecting Ideas",
    bodyClass: "grammar-topic connect-adverbs"
  },
  {
    number: 73,
    id: "connect-prepositions",
    label: "Understanding Grammar - Connecting Ideas",
    title: "Understanding Grammar - Connecting Ideas",
    bodyClass: "grammar-topic connect-prepositions"
  },
  {
    number: 74,
    id: "irregular-intro",
    label: "Understanding Grammar - Irregular Verbs",
    title: "Understanding Grammar - Irregular Verbs",
    bodyClass: "grammar-topic irregular-intro"
  },
  {
    number: 75,
    id: "irregular-same",
    label: "Understanding Grammar - Irregular Verbs",
    title: "Understanding Grammar - Irregular Verbs",
    bodyClass: "grammar-topic irregular-same"
  },
  {
    number: 76,
    id: "irregular-change",
    label: "Understanding Grammar - Irregular Verbs",
    title: "Understanding Grammar - Irregular Verbs",
    bodyClass: "grammar-topic irregular-change"
  },
  {
    number: 77,
    id: "irregular-endings",
    label: "Understanding Grammar - Irregular Verbs",
    title: "Understanding Grammar - Irregular Verbs",
    bodyClass: "grammar-topic irregular-endings"
  },
  {
    number: 78,
    id: "irregular-list",
    label: "Understanding Grammar - Irregular Verbs",
    title: "Understanding Grammar - Irregular Verbs",
    bodyClass: "grammar-topic irregular-list"
  },
  {
    number: 79,
    id: "irregular-traps",
    label: "Understanding Grammar - Irregular Verbs",
    title: "Understanding Grammar - Irregular Verbs",
    bodyClass: "grammar-topic irregular-traps"
  },
  {
    number: 80,
    id: "vocabulary",
    label: "Vocabulary",
    title: "Vocabulary",
    bodyClass: "tone-vocabulary"
  },
  {
    number: 81,
    id: "vocab-overview",
    label: "Understanding Vocabulary - Overview",
    title: "Understanding Vocabulary - Overview",
    bodyClass: "vocabulary-topic vocab-overview"
  },
  {
    number: 82,
    id: "vocab-similar",
    label: "Understanding Vocabulary - Synonyms and Antonyms",
    title: "Understanding Vocabulary - Synonyms and Antonyms",
    bodyClass: "vocabulary-topic vocab-similar"
  },
  {
    number: 83,
    id: "vocab-tricky",
    label: "Understanding Vocabulary - Homophones",
    title: "Understanding Vocabulary - Homophones",
    bodyClass: "vocabulary-topic vocab-tricky"
  },
  {
    number: 84,
    id: "vocab-meanings",
    label: "Understanding Vocabulary - Meaning in Context",
    title: "Understanding Vocabulary - Meaning in Context",
    bodyClass: "vocabulary-topic vocab-meanings"
  },
  {
    number: 85,
    id: "vocab-families",
    label: "Understanding Vocabulary - Word Families",
    title: "Understanding Vocabulary - Word Families",
    bodyClass: "vocabulary-topic vocab-families"
  },
  {
    number: 86,
    id: "vocab-links",
    label: "Understanding Vocabulary - Cloze and Analogies",
    title: "Understanding Vocabulary - Cloze and Analogies",
    bodyClass: "vocabulary-topic vocab-links"
  }
] as const satisfies readonly EnglishPageMeta[];
