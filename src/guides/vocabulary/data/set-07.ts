import type { VocabSet } from "./types";

export const set07 = {
  id: "set-07",
  label: "Set 7",
  title: "Ways to move",
  words: [
    {
      word: "glide",
      meaning: "to move smoothly and with little effort",
      synonyms: ["slide", "sail", "coast"],
      antonyms: ["jerk", "stumble", "jolt"],
      example: "The swan seemed to glide across the pond."
    },
    {
      word: "linger",
      meaning: "to stay somewhere longer than expected",
      synonyms: ["remain", "loiter", "delay"],
      antonyms: ["leave", "depart", "hurry"],
      example: "The smell of cinnamon continued to linger in the kitchen."
    },
    {
      word: "stroll",
      meaning: "to walk in a slow, relaxed way",
      synonyms: ["amble", "wander", "saunter"],
      antonyms: ["run", "rush", "sprint"],
      example: "We took a stroll along the beach."
    },
    {
      word: "trudge",
      meaning: "to walk slowly with heavy, tired steps",
      synonyms: ["plod", "slog", "shuffle"],
      antonyms: ["skip", "stride", "bound"],
      example: "The hikers had to trudge through deep mud."
    },
    {
      word: "wander",
      meaning: "to move around without a fixed route",
      synonyms: ["roam", "drift", "meander"],
      antonyms: ["hasten", "head directly", "stay"],
      example: "We love to wander through the old bookshop."
    },
    {
      word: "endure",
      meaning: "to suffer something difficult without giving up",
      synonyms: ["withstand", "bear", "tolerate"],
      antonyms: ["quit", "surrender", "escape"],
      example: "Desert plants endure months without rain."
    },
    {
      word: "propel",
      meaning: "to push or drive something forwards",
      synonyms: ["drive", "thrust", "push"],
      antonyms: ["halt", "restrain", "pull back"],
      example: "Powerful fins propel the dolphin through the sea."
    },
    {
      word: "robust",
      meaning: "strong, healthy, and unlikely to break",
      synonyms: ["sturdy", "tough", "durable"],
      antonyms: ["fragile", "weak", "delicate"],
      example: "The robust boots protected her feet on the rocky trail."
    },
    {
      word: "strain",
      meaning: "to make a great effort or stretch too hard",
      synonyms: ["struggle", "exert", "overstretch"],
      antonyms: ["relax", "rest", "ease"],
      example: "Do not strain your back when lifting the box."
    },
    {
      word: "tense",
      meaning: "tight, nervous, or unable to relax",
      synonyms: ["anxious", "strained", "rigid"],
      antonyms: ["relaxed", "calm", "loose"],
      example: "The room grew tense as the final score appeared."
    }
  ],
  paragraphs: [
    "We began with a gentle stroll, stopping to wander beside the canal and watch narrowboats glide past. Soon the path steepened, and we had to trudge uphill. Nobody wanted to linger beneath the darkening clouds.",
    "Our robust raft could endure rough water, and two paddles would propel it downstream. Even so, I felt tense as we launched; I had to strain against the current until the river became calm."
  ]
} as const satisfies VocabSet;
