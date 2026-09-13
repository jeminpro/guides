import type { VocabSet } from "./types";

export const set18 = {
  id: "set-18",
  label: "Set 18",
  title: "Ten words to own",
  words: [
    {
      word: "diplomatic",
      meaning: "careful and polite when dealing with difficult situations",
      synonyms: ["tactful", "careful", "discreet"],
      antonyms: ["tactless", "blunt", "insulting"],
      example: "Her diplomatic reply calmed both arguing teams."
    },
    {
      word: "negotiate",
      meaning: "to discuss something in order to reach an agreement",
      synonyms: ["bargain", "discuss", "settle"],
      antonyms: ["dictate", "refuse", "dispute"],
      example: "The captains met to negotiate new match rules."
    },
    {
      word: "treaty",
      meaning: "a formal agreement between countries or groups",
      synonyms: ["agreement", "pact", "accord"],
      antonyms: ["conflict", "disagreement", "war"],
      example: "Both nations signed a treaty to protect the river."
    },
    {
      word: "truce",
      meaning: "an agreement to stop fighting for a time",
      synonyms: ["ceasefire", "pause", "armistice"],
      antonyms: ["battle", "conflict", "hostilities"],
      example: "The rivals called a truce and shared the playground."
    },
    {
      word: "campaign",
      meaning: "an organised series of actions aimed at a goal",
      synonyms: ["drive", "movement", "crusade"],
      antonyms: ["inaction", "idleness", "withdrawal"],
      example: "Our campaign persuaded the council to add bike racks."
    },
    {
      word: "equality",
      meaning: "the state of having the same rights and opportunities",
      synonyms: ["fairness", "parity", "equal rights"],
      antonyms: ["inequality", "unfairness", "discrimination"],
      example: "The new rule promoted equality for every player."
    },
    {
      word: "protest",
      meaning: "to show strong disagreement with something",
      synonyms: ["object", "oppose", "demonstrate"],
      antonyms: ["accept", "approve", "support"],
      example: "Residents gathered to protest against closing the library."
    },
    {
      word: "reform",
      meaning: "a change made to improve a system",
      synonyms: ["improvement", "change", "correction"],
      antonyms: ["decline", "damage", "regression"],
      example: "The school introduced a reform to make lunch choices healthier."
    },
    {
      word: "transformative",
      meaning: "causing a great and lasting change",
      synonyms: ["life-changing", "revolutionary", "powerful"],
      antonyms: ["unchanging", "minor", "ineffective"],
      example: "Access to clean water had a transformative effect on the village."
    },
    {
      word: "compost",
      meaning: "decayed food and plants used to improve soil",
      synonyms: ["fertiliser", "humus", "soil improver"],
      antonyms: ["waste", "rubbish", "pollutant"],
      example: "We spread compost around the young tomato plants."
    }
  ],
  paragraphs: [
    "The eco-club began a campaign for equality in access to green spaces. Its members planned a peaceful protest, then used a diplomatic tone to negotiate with the council.",
    "Their truce with critics led to a treaty promising garden reform. The transformative plan turned food scraps into compost and gave every neighbourhood a place to grow."
  ]
} as const satisfies VocabSet;
