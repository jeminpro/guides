import type { VocabSet } from "./types";

export const set19 = {
  id: "set-19",
  label: "Set 19",
  title: "Ten words to own",
  words: [
    {
      word: "conservation",
      meaning: "the protection of nature, wildlife, and resources",
      synonyms: ["protection", "preservation", "care"],
      antonyms: ["destruction", "waste", "neglect"],
      example: "The reserve supports conservation of rare birds."
    },
    {
      word: "eco-friendly",
      meaning: "causing little or no harm to the environment",
      synonyms: ["green", "sustainable", "low-impact"],
      antonyms: ["polluting", "wasteful", "harmful"],
      example: "We chose an eco-friendly bottle that can be reused."
    },
    {
      word: "preserve",
      meaning: "to protect something and keep it in good condition",
      synonyms: ["protect", "conserve", "save"],
      antonyms: ["destroy", "damage", "neglect"],
      example: "The glass case will preserve the ancient letter."
    },
    {
      word: "renewable",
      meaning: "able to be naturally replaced as it is used",
      synonyms: ["replenishable", "sustainable", "replaceable"],
      antonyms: ["finite", "non-renewable", "exhaustible"],
      example: "Wind is a renewable source of energy."
    },
    {
      word: "articulate",
      meaning: "able to express ideas clearly and effectively",
      synonyms: ["eloquent", "clear", "expressive"],
      antonyms: ["inarticulate", "unclear", "tongue-tied"],
      example: "Leo gave an articulate explanation of his design."
    },
    {
      word: "bias",
      meaning: "an unfair preference for or against someone or something",
      synonyms: ["prejudice", "favouritism", "partiality"],
      antonyms: ["fairness", "neutrality", "impartiality"],
      example: "Judges must avoid bias when scoring the contest."
    },
    {
      word: "counterargument",
      meaning: "a reason or idea that challenges another argument",
      synonyms: ["objection", "rebuttal", "opposing view"],
      antonyms: ["support", "agreement", "confirmation"],
      example: "Her counterargument showed why the first plan might fail."
    },
    {
      word: "evidence",
      meaning: "facts or signs that help prove something",
      synonyms: ["proof", "facts", "testimony"],
      antonyms: ["guesswork", "rumour", "disproof"],
      example: "Footprints provided evidence that a fox had visited."
    },
    {
      word: "justify",
      meaning: "to give good reasons for a choice or belief",
      synonyms: ["explain", "defend", "support"],
      antonyms: ["condemn", "disprove", "challenge"],
      example: "Use facts to justify your answer."
    },
    {
      word: "collapse",
      meaning: "to fall down suddenly or fail completely",
      synonyms: ["fall", "crumble", "fail"],
      antonyms: ["stand", "rise", "succeed"],
      example: "The soggy cardboard bridge began to collapse."
    }
  ],
  paragraphs: [
    "In an articulate speech, Ava used evidence to justify an eco-friendly energy plan. She explained how renewable power and conservation could preserve the marsh.",
    "A judge noticed his own bias and invited a counterargument. The opposing team warned that costs might cause the scheme to collapse, so both sides improved it together."
  ]
} as const satisfies VocabSet;
