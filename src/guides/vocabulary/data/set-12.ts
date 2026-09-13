import type { VocabSet } from "./types";

export const set12 = {
  id: "set-12",
  label: "Set 12",
  title: "Solving the mystery",
  words: [
    {
      word: "defeat",
      meaning: "to win against someone or overcome a problem",
      synonyms: ["beat", "overcome", "conquer"],
      antonyms: ["lose", "surrender", "yield"],
      example: "The team worked together to defeat the champions."
    },
    {
      word: "precision",
      meaning: "great accuracy and careful exactness",
      synonyms: ["accuracy", "exactness", "care"],
      antonyms: ["inaccuracy", "carelessness", "roughness"],
      example: "The model must be cut with precision."
    },
    {
      word: "resilient",
      meaning: "able to recover quickly after difficulty",
      synonyms: ["tough", "strong", "adaptable"],
      antonyms: ["fragile", "vulnerable", "weak"],
      example: "These resilient plants grow back after winter."
    },
    {
      word: "rivalry",
      meaning: "competition between people or groups",
      synonyms: ["competition", "contest", "opposition"],
      antonyms: ["cooperation", "friendship", "alliance"],
      example: "A friendly rivalry made both runners train harder."
    },
    {
      word: "strive",
      meaning: "to try very hard to achieve something",
      synonyms: ["endeavour", "work", "attempt"],
      antonyms: ["quit", "neglect", "surrender"],
      example: "We strive to improve with every practice."
    },
    {
      word: "conceal",
      meaning: "to hide something or keep it secret",
      synonyms: ["hide", "cover", "disguise"],
      antonyms: ["reveal", "expose", "display"],
      example: "Clouds began to conceal the moon."
    },
    {
      word: "elusive",
      meaning: "difficult to find, catch, or understand",
      synonyms: ["evasive", "slippery", "puzzling"],
      antonyms: ["obvious", "accessible", "clear"],
      example: "The elusive butterfly vanished among the leaves."
    },
    {
      word: "obscure",
      meaning: "not well known or difficult to understand",
      synonyms: ["unclear", "unknown", "hidden"],
      antonyms: ["clear", "famous", "obvious"],
      example: "An obscure symbol was carved into the stone."
    },
    {
      word: "revelation",
      meaning: "a surprising fact that has been revealed",
      synonyms: ["discovery", "disclosure", "surprise"],
      antonyms: ["secret", "mystery", "concealment"],
      example: "The final clue brought a startling revelation."
    },
    {
      word: "unravel",
      meaning: "to solve something complicated or separate tangled threads",
      synonyms: ["solve", "untangle", "explain"],
      antonyms: ["tangle", "complicate", "confuse"],
      example: "The detectives worked together to unravel the mystery."
    }
  ],
  paragraphs: [
    "Nia and Arun had a playful rivalry as they tried to unravel an obscure riddle. They would strive for precision, because one tiny mark might conceal the answer. Even an elusive clue could not defeat the resilient pair.",
    "At last, a mirrored letter led to a revelation: the message named the library's oldest book. Their competition ended in cooperation and a shared cheer."
  ]
} as const satisfies VocabSet;
