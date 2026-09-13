import type { VocabSet } from "./types";

export const set04 = {
  id: "set-04",
  label: "Set 4",
  title: "Ideas and city life",
  words: [
    {
      word: "resourceful",
      meaning: "good at finding clever ways to solve problems",
      synonyms: ["inventive", "capable", "adaptable"],
      antonyms: ["helpless", "impractical", "unprepared"],
      example: "The resourceful campers repaired the tent with string."
    },
    {
      word: "scholar",
      meaning: "a person who studies a subject deeply",
      synonyms: ["academic", "student", "researcher"],
      antonyms: ["novice", "amateur", "non-expert"],
      example: "The young scholar spent hours studying Roman coins."
    },
    {
      word: "visionary",
      meaning: "a person with original ideas about the future",
      synonyms: ["innovator", "dreamer", "pioneer"],
      antonyms: ["traditionalist", "follower", "realist"],
      example: "The visionary imagined buses powered by sunlight."
    },
    {
      word: "bustling",
      meaning: "full of busy activity",
      synonyms: ["lively", "busy", "thriving"],
      antonyms: ["quiet", "deserted", "still"],
      example: "Vendors filled the bustling market square."
    },
    {
      word: "haphazardly",
      meaning: "in a careless way without order or planning",
      synonyms: ["randomly", "carelessly", "untidily"],
      antonyms: ["carefully", "systematically", "neatly"],
      example: "Shoes were piled haphazardly beside the door."
    },
    {
      word: "metropolis",
      meaning: "a very large and important city",
      synonyms: ["city", "capital", "megacity"],
      antonyms: ["village", "hamlet", "countryside"],
      example: "Millions of people travel through the metropolis each day."
    },
    {
      word: "opulent",
      meaning: "rich, luxurious, and expensive-looking",
      synonyms: ["luxurious", "lavish", "grand"],
      antonyms: ["plain", "modest", "poor"],
      example: "Gold ceilings decorated the opulent palace."
    },
    {
      word: "overcrowding",
      meaning: "the condition of having too many people in one place",
      synonyms: ["congestion", "cramming", "overpopulation"],
      antonyms: ["spaciousness", "emptiness", "roominess"],
      example: "Extra trains helped reduce overcrowding at rush hour."
    },
    {
      word: "canopy",
      meaning: "a covering above something, such as branches or cloth",
      synonyms: ["covering", "shelter", "roof"],
      antonyms: ["opening", "exposure", "uncovering"],
      example: "A leafy canopy shaded the woodland path."
    },
    {
      word: "majestic",
      meaning: "grand, powerful, and impressive",
      synonyms: ["magnificent", "stately", "splendid"],
      antonyms: ["ordinary", "humble", "unimpressive"],
      example: "A majestic eagle circled above the cliffs."
    }
  ],
  paragraphs: [
    "A resourceful scholar entered a competition to redesign her bustling metropolis. This visionary noticed that overcrowding worsened where stalls were placed haphazardly, while an opulent shopping centre stood nearly empty.",
    "Her model replaced one concrete roof with a green canopy and opened a broad public square. At its centre, a majestic fountain collected rainwater for nearby gardens."
  ]
} as const satisfies VocabSet;
