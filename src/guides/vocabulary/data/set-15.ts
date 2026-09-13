import type { VocabSet } from "./types";

export const set15 = {
  id: "set-15",
  label: "Set 15",
  title: "Culture and community",
  words: [
    {
      word: "rejuvenate",
      meaning: "to give new energy or life to someone or something",
      synonyms: ["refresh", "revive", "renew"],
      antonyms: ["exhaust", "drain", "weaken"],
      example: "A short rest can rejuvenate tired walkers."
    },
    {
      word: "wellness",
      meaning: "the state of being healthy in body and mind",
      synonyms: ["health", "well-being", "fitness"],
      antonyms: ["illness", "sickness", "distress"],
      example: "Sleep and friendship both support our wellness."
    },
    {
      word: "ancestral",
      meaning: "connected with family members from long ago",
      synonyms: ["inherited", "historic", "family"],
      antonyms: ["modern", "new", "unrelated"],
      example: "The family returned to its ancestral village."
    },
    {
      word: "custom",
      meaning: "a traditional way of behaving or doing something",
      synonyms: ["tradition", "practice", "ritual"],
      antonyms: ["novelty", "innovation", "exception"],
      example: "Sharing bread with visitors is a local custom."
    },
    {
      word: "folklore",
      meaning: "traditional stories and beliefs passed through a community",
      synonyms: ["legends", "myths", "traditions"],
      antonyms: ["fact", "history", "evidence"],
      example: "The storyteller filled the evening with island folklore."
    },
    {
      word: "festivity",
      meaning: "a cheerful celebration or festive activity",
      synonyms: ["celebration", "party", "merriment"],
      antonyms: ["mourning", "sadness", "solemnity"],
      example: "Music and lanterns added to the festivity."
    },
    {
      word: "heritage",
      meaning: "traditions, history, and treasures passed down over time",
      synonyms: ["legacy", "tradition", "inheritance"],
      antonyms: ["novelty", "future", "innovation"],
      example: "The museum protects the town's fishing heritage."
    },
    {
      word: "close-knit",
      meaning: "having strong, friendly relationships",
      synonyms: ["united", "supportive", "tight-knit"],
      antonyms: ["divided", "distant", "disconnected"],
      example: "Everyone helps one another in the close-knit village."
    },
    {
      word: "diverse",
      meaning: "including people or things of many different kinds",
      synonyms: ["varied", "mixed", "wide-ranging"],
      antonyms: ["uniform", "similar", "limited"],
      example: "Our diverse team brought many ideas to the project."
    },
    {
      word: "isolated",
      meaning: "far away from others or without contact",
      synonyms: ["remote", "separate", "lonely"],
      antonyms: ["connected", "central", "included"],
      example: "The isolated cottage stood beyond the hills."
    }
  ],
  paragraphs: [
    "Each spring, our close-knit but diverse neighbourhood holds a festivity beside the old hall. Families share ancestral recipes, local folklore, and one treasured custom, celebrating the heritage that connects generations.",
    "No one should feel isolated, so volunteers visit every home. Music, movement, and friendly conversation support wellness and rejuvenate the whole community."
  ]
} as const satisfies VocabSet;
