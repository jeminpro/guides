import type { VocabSet } from "./types";

export const set25 = {
  id: "set-25",
  label: "Set 25",
  title: "Kindness and art",
  words: [
    {
      word: "impactful",
      meaning: "having a strong or important effect",
      synonyms: ["powerful", "effective", "influential"],
      antonyms: ["ineffective", "weak", "insignificant"],
      example: "Her short speech was simple but impactful."
    },
    {
      word: "thoughtful",
      meaning: "showing careful thought or care for others",
      synonyms: ["considerate", "caring", "reflective"],
      antonyms: ["thoughtless", "careless", "selfish"],
      example: "The class made a thoughtful gift for their teacher."
    },
    {
      word: "abstract",
      meaning: "using shapes or ideas rather than realistic details",
      synonyms: ["non-realistic", "conceptual", "symbolic"],
      antonyms: ["realistic", "concrete", "literal"],
      example: "The abstract painting looked like a storm of colour."
    },
    {
      word: "balance",
      meaning: "an even and pleasing arrangement of parts",
      synonyms: ["harmony", "stability", "proportion"],
      antonyms: ["imbalance", "instability", "unevenness"],
      example: "The artist used balance by placing a tree on each side."
    },
    {
      word: "depict",
      meaning: "to show something in a picture or words",
      synonyms: ["portray", "represent", "illustrate"],
      antonyms: ["hide", "conceal", "misrepresent"],
      example: "The mural will depict life beneath the ocean."
    },
    {
      word: "symmetry",
      meaning: "matching shape and size on opposite sides",
      synonyms: ["evenness", "proportion", "regularity"],
      antonyms: ["asymmetry", "unevenness", "irregularity"],
      example: "A butterfly's wings are a clear example of symmetry."
    },
    {
      word: "texture",
      meaning: "how a surface feels or appears to feel",
      synonyms: ["feel", "surface", "finish"],
      antonyms: ["smoothness", "flatness"],
      example: "Thick paint gave the waves a rough texture."
    },
    {
      word: "echo",
      meaning: "a sound repeated after bouncing off a surface",
      synonyms: ["repetition", "reverberation", "reflection"],
      antonyms: ["silence", "quiet", "original sound"],
      example: "Our shout returned as an echo from the cave."
    },
    {
      word: "harmony",
      meaning: "notes sounding pleasantly together",
      synonyms: ["accord", "agreement", "tunefulness"],
      antonyms: ["discord", "clashing", "conflict"],
      example: "The two singers blended in perfect harmony."
    },
    {
      word: "melody",
      meaning: "a sequence of notes that forms a tune",
      synonyms: ["tune", "air", "theme"],
      antonyms: ["noise", "discord", "silence"],
      example: "I hummed the cheerful melody all afternoon."
    }
  ],
  paragraphs: [
    "Noor designed an impactful mural from a thoughtful plan. It used abstract shapes, but careful balance made it peaceful. Bright lines depict hope, while symmetry joins the two walls.",
    "Sandy texture surrounds a painted bell whose ripples seem to echo. Nearby musicians add harmony and a gentle melody."
  ]
} as const satisfies VocabSet;
