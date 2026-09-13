import type { VocabSet } from "./types";

export const set05 = {
  id: "set-05",
  label: "Set 5",
  title: "Weather and water",
  words: [
    {
      word: "serene",
      meaning: "calm, peaceful, and untroubled",
      synonyms: ["peaceful", "tranquil", "calm"],
      antonyms: ["agitated", "stormy", "chaotic"],
      example: "The lake looked serene beneath the morning mist."
    },
    {
      word: "thrive",
      meaning: "to grow, develop, or succeed well",
      synonyms: ["flourish", "prosper", "blossom"],
      antonyms: ["struggle", "decline", "wither"],
      example: "Tomato plants thrive in warm sunshine."
    },
    {
      word: "drift",
      meaning: "to move slowly, carried by air or water",
      synonyms: ["float", "glide", "wander"],
      antonyms: ["anchor", "stay", "settle"],
      example: "White clouds drift across the blue sky."
    },
    {
      word: "foamy",
      meaning: "covered with or full of small bubbles",
      synonyms: ["frothy", "bubbly", "fizzy"],
      antonyms: ["still", "flat", "clear"],
      example: "Foamy waves curled around our boots."
    },
    {
      word: "surge",
      meaning: "to move forward suddenly and powerfully",
      synonyms: ["rush", "swell", "burst"],
      antonyms: ["retreat", "subside", "ebb"],
      example: "The crowd began to surge towards the open gates."
    },
    {
      word: "breeze",
      meaning: "a light, gentle wind",
      synonyms: ["waft", "draught", "zephyr"],
      antonyms: ["calm", "stillness", "gale"],
      example: "A cool breeze stirred the curtains."
    },
    {
      word: "chilly",
      meaning: "uncomfortably cool or cold",
      synonyms: ["cold", "cool", "nippy"],
      antonyms: ["warm", "hot", "balmy"],
      example: "The evening became chilly after sunset."
    },
    {
      word: "drizzle",
      meaning: "light rain made of very small drops",
      synonyms: ["sprinkle", "mist", "light rain"],
      antonyms: ["downpour", "dryness", "sunshine"],
      example: "A fine drizzle dampened the pavement."
    },
    {
      word: "scorching",
      meaning: "extremely hot",
      synonyms: ["blazing", "sweltering", "searing"],
      antonyms: ["freezing", "icy", "frigid"],
      example: "We rested in the shade during the scorching afternoon."
    },
    {
      word: "tempest",
      meaning: "a violent storm with strong winds",
      synonyms: ["storm", "gale", "squall"],
      antonyms: ["calm", "stillness", "tranquillity"],
      example: "The fishing boats returned before the tempest arrived."
    }
  ],
  paragraphs: [
    "Our serene island can feel scorching at noon, yet a chilly breeze often arrives by dusk. A silver drizzle helps the gardens thrive, and fishing boats drift home across foamy water.",
    "One evening, dark clouds warned of a tempest. We watched the sea surge over the rocks, but by morning the storm had passed and the harbour was calm again."
  ]
} as const satisfies VocabSet;
