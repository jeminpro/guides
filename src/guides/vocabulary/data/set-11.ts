import type { VocabSet } from "./types";

export const set11 = {
  id: "set-11",
  label: "Set 11",
  title: "Facing the wild",
  words: [
    {
      word: "discourage",
      meaning: "to make someone feel less willing or confident",
      synonyms: ["deter", "dishearten", "prevent"],
      antonyms: ["encourage", "inspire", "motivate"],
      example: "One wrong answer should not discourage you from trying."
    },
    {
      word: "dismiss",
      meaning: "to decide that something is unworthy of attention",
      synonyms: ["reject", "disregard", "ignore"],
      antonyms: ["consider", "accept", "value"],
      example: "Do not dismiss an idea before you understand it."
    },
    {
      word: "challenge",
      meaning: "a difficult task that tests ability or courage",
      synonyms: ["test", "trial", "obstacle"],
      antonyms: ["ease", "advantage", "certainty"],
      example: "Crossing the stream was our greatest challenge."
    },
    {
      word: "contradict",
      meaning: "to say the opposite of what someone else has said",
      synonyms: ["deny", "oppose", "dispute"],
      antonyms: ["agree", "confirm", "support"],
      example: "The new clues contradict our first guess."
    },
    {
      word: "criticise",
      meaning: "to point out faults or express disapproval",
      synonyms: ["fault", "condemn", "judge"],
      antonyms: ["praise", "approve", "commend"],
      example: "It is easy to criticise a plan but harder to improve it."
    },
    {
      word: "endurance",
      meaning: "the ability to continue through difficulty or tiredness",
      synonyms: ["stamina", "persistence", "resilience"],
      antonyms: ["weakness", "fragility", "exhaustion"],
      example: "The long-distance swim demanded great endurance."
    },
    {
      word: "expedition",
      meaning: "an organised journey made for a special purpose",
      synonyms: ["journey", "mission", "venture"],
      antonyms: ["stay", "retreat", "return"],
      example: "Our science club planned an expedition to the caves."
    },
    {
      word: "harsh",
      meaning: "unpleasantly rough, severe, or cruel",
      synonyms: ["severe", "rough", "cruel"],
      antonyms: ["gentle", "mild", "kind"],
      example: "Few plants survive the harsh desert climate."
    },
    {
      word: "inhabit",
      meaning: "to live in or occupy a place",
      synonyms: ["occupy", "live in", "reside in"],
      antonyms: ["vacate", "leave", "abandon"],
      example: "Rare bats inhabit the roof of the ancient barn."
    },
    {
      word: "navigate",
      meaning: "to find and follow a route",
      synonyms: ["steer", "guide", "direct"],
      antonyms: ["wander", "stray", "lose direction"],
      example: "We used a compass to navigate through the forest."
    }
  ],
  paragraphs: [
    "Our expedition faced a harsh wind, but the guide would not let it discourage us. The rocky path was a challenge of endurance, and we had to navigate towards the valley where mountain goats inhabit the cliffs.",
    "I did not dismiss the guide's warning or criticise our slow pace. When two maps seemed to contradict each other, we stopped, checked the compass, and chose safely."
  ]
} as const satisfies VocabSet;
