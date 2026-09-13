import type { VocabSet } from "./types";

export const set28 = {
  id: "set-28",
  label: "Set 28",
  title: "Work and money",
  words: [
    {
      word: "absent-minded",
      meaning: "often forgetting things because your thoughts are elsewhere",
      synonyms: ["forgetful", "distracted", "inattentive"],
      antonyms: ["attentive", "alert", "focused"],
      example: "The absent-minded professor left his keys in the fridge."
    },
    {
      word: "apprentice",
      meaning: "a beginner learning a skilled job from an expert",
      synonyms: ["trainee", "learner", "novice"],
      antonyms: ["expert", "master", "professional"],
      example: "The apprentice learned how to shape wood safely."
    },
    {
      word: "occupation",
      meaning: "a person's job or usual work",
      synonyms: ["job", "profession", "career"],
      antonyms: ["unemployment", "idleness", "leisure"],
      example: "Her occupation is designing safer bridges."
    },
    {
      word: "skilful",
      meaning: "good at doing something that needs ability",
      synonyms: ["able", "expert", "accomplished"],
      antonyms: ["unskilled", "clumsy", "inept"],
      example: "A skilful goalkeeper blocked the final shot."
    },
    {
      word: "workforce",
      meaning: "all the people available or employed to work",
      synonyms: ["employees", "staff", "workers"],
      antonyms: ["management", "unemployed", "nonworkers"],
      example: "The factory trained its workforce to use new machines."
    },
    {
      word: "affordable",
      meaning: "not too expensive for someone to buy",
      synonyms: ["inexpensive", "reasonable", "economical"],
      antonyms: ["expensive", "costly", "unaffordable"],
      example: "The café offers healthy food at affordable prices."
    },
    {
      word: "consumer",
      meaning: "a person who buys or uses goods and services",
      synonyms: ["buyer", "customer", "shopper"],
      antonyms: ["producer", "seller", "supplier"],
      example: "A careful consumer compares prices before buying."
    },
    {
      word: "investment",
      meaning: "money, time, or effort used in hope of future benefit",
      synonyms: ["funding", "stake", "commitment"],
      antonyms: ["withdrawal", "divestment", "waste"],
      example: "New books are an investment in the school's future."
    },
    {
      word: "supply",
      meaning: "an amount available for people to use",
      synonyms: ["stock", "store", "provision"],
      antonyms: ["shortage", "scarcity", "lack"],
      example: "The campsite kept a supply of clean water."
    },
    {
      word: "transaction",
      meaning: "an act of buying, selling, or exchanging something",
      synonyms: ["deal", "purchase", "exchange"],
      antonyms: ["cancellation", "refusal", "reversal"],
      example: "The card transaction appeared on Dad's receipt."
    }
  ],
  paragraphs: [
    "An absent-minded baker hired an apprentice. Baking became the learner's chosen occupation, and soon her skilful hands impressed the whole workforce. Together they made affordable bread for every consumer.",
    "An investment in a larger oven increased the daily supply. Each transaction then helped the bakery serve more neighbours."
  ]
} as const satisfies VocabSet;
