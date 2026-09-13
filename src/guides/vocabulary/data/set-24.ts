import type { VocabSet } from "./types";

export const set24 = {
  id: "set-24",
  label: "Set 24",
  title: "Steady determination",
  words: [
    {
      word: "tremble",
      meaning: "to shake slightly, often from fear or cold",
      synonyms: ["shake", "quiver", "shiver"],
      antonyms: ["steady", "stabilise", "remain still"],
      example: "The puppy began to tremble during the fireworks."
    },
    {
      word: "uneasy",
      meaning: "worried, uncomfortable, or uncertain",
      synonyms: ["anxious", "troubled", "uncomfortable"],
      antonyms: ["comfortable", "calm", "secure"],
      example: "The strange silence made us uneasy."
    },
    {
      word: "fearless",
      meaning: "showing no fear",
      synonyms: ["brave", "bold", "undaunted"],
      antonyms: ["fearful", "timid", "afraid"],
      example: "The fearless climber crossed the narrow ledge."
    },
    {
      word: "determined",
      meaning: "firmly decided and unwilling to give up",
      synonyms: ["resolute", "committed", "driven"],
      antonyms: ["uncertain", "wavering", "uncommitted"],
      example: "Kai was determined to master the difficult tune."
    },
    {
      word: "perseverance",
      meaning: "continued effort despite difficulty",
      synonyms: ["persistence", "tenacity", "endurance"],
      antonyms: ["surrender", "quitting", "weakness"],
      example: "Solving the puzzle took patience and perseverance."
    },
    {
      word: "persist",
      meaning: "to keep going despite difficulty or delay",
      synonyms: ["continue", "persevere", "endure"],
      antonyms: ["quit", "stop", "surrender"],
      example: "If you persist, the new skill will become easier."
    },
    {
      word: "relentless",
      meaning: "continuing strongly without stopping",
      synonyms: ["unyielding", "persistent", "unremitting"],
      antonyms: ["gentle", "intermittent", "lenient"],
      example: "Relentless rain filled the stream overnight."
    },
    {
      word: "comfort",
      meaning: "a feeling of ease, or help that eases sadness",
      synonyms: ["ease", "solace", "reassurance"],
      antonyms: ["distress", "discomfort", "misery"],
      example: "Her kind message brought me comfort."
    },
    {
      word: "compassion",
      meaning: "kind concern for someone who is suffering",
      synonyms: ["sympathy", "kindness", "care"],
      antonyms: ["cruelty", "indifference", "coldness"],
      example: "We showed compassion by helping the injured bird."
    },
    {
      word: "considerate",
      meaning: "careful not to upset or inconvenience others",
      synonyms: ["thoughtful", "kind", "courteous"],
      antonyms: ["selfish", "thoughtless", "rude"],
      example: "It was considerate of Eli to lower his music."
    }
  ],
  paragraphs: [
    "Jules felt his hands tremble. He was uneasy about the deep-water test, but his fearless coach reminded him how determined he had been. With perseverance, Jules chose to persist against each relentless wave.",
    "Reaching shore brought comfort. His coach showed compassion, while a considerate teammate wrapped him in a warm towel."
  ]
} as const satisfies VocabSet;
