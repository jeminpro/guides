import type { VocabSet } from "./types";

export const set02 = {
  id: "set-02",
  label: "Set 2",
  title: "Feelings and reactions",
  words: [
    {
      word: "amused",
      meaning: "finding something funny or entertaining",
      synonyms: ["entertained", "tickled", "delighted"],
      antonyms: ["bored", "annoyed", "unimpressed"],
      example: "We were amused by the puppy chasing its tail."
    },
    {
      word: "empathetic",
      meaning: "able to understand and share another person's feelings",
      synonyms: ["understanding", "compassionate", "sensitive"],
      antonyms: ["uncaring", "insensitive", "indifferent"],
      example: "Her empathetic reply helped Kai feel less alone."
    },
    {
      word: "expressive",
      meaning: "showing thoughts or feelings clearly",
      synonyms: ["animated", "emotional", "vivid"],
      antonyms: ["blank", "reserved", "expressionless"],
      example: "His expressive face revealed the surprise before he spoke."
    },
    {
      word: "exultant",
      meaning: "extremely happy and proud after a success",
      synonyms: ["triumphant", "jubilant", "overjoyed"],
      antonyms: ["dejected", "miserable", "defeated"],
      example: "The exultant team lifted the trophy together."
    },
    {
      word: "resolute",
      meaning: "firmly determined not to give up",
      synonyms: ["determined", "steadfast", "unwavering"],
      antonyms: ["uncertain", "wavering", "indecisive"],
      example: "Mina remained resolute despite the steep climb."
    },
    {
      word: "anxious",
      meaning: "worried or nervous about what may happen",
      synonyms: ["worried", "uneasy", "nervous"],
      antonyms: ["calm", "relaxed", "confident"],
      example: "I felt anxious while waiting for the results."
    },
    {
      word: "desolate",
      meaning: "empty, lonely, and without comfort",
      synonyms: ["forsaken", "bleak", "lonely"],
      antonyms: ["lively", "welcoming", "cheerful"],
      example: "The abandoned station looked desolate in the rain."
    },
    {
      word: "dismayed",
      meaning: "upset and disappointed by something unexpected",
      synonyms: ["distressed", "shocked", "disappointed"],
      antonyms: ["pleased", "encouraged", "reassured"],
      example: "She was dismayed to discover that her model had broken."
    },
    {
      word: "irritable",
      meaning: "easily annoyed or made cross",
      synonyms: ["grumpy", "touchy", "cranky"],
      antonyms: ["patient", "easy-going", "cheerful"],
      example: "Lack of sleep made him irritable all morning."
    },
    {
      word: "sullen",
      meaning: "silently bad-tempered and gloomy",
      synonyms: ["moody", "gloomy", "surly"],
      antonyms: ["cheerful", "friendly", "bright"],
      example: "The sullen child stared at the floor and would not speak."
    }
  ],
  paragraphs: [
    "Backstage, Leila felt anxious, while a sullen actor sat apart after forgetting a line. An empathetic friend offered encouragement, but the tired director grew irritable when a prop vanished. Everyone was dismayed until an expressive mime pointed beneath the curtain.",
    "The audience was amused by the quick rescue. Even though the empty stage had seemed desolate moments earlier, the cast stayed resolute and finished brilliantly. Their exultant bows brought the whole theatre to its feet."
  ]
} as const satisfies VocabSet;
