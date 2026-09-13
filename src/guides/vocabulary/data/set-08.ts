import type { VocabSet } from "./types";

export const set08 = {
  id: "set-08",
  label: "Set 8",
  title: "Balance and body language",
  words: [
    {
      word: "stagger",
      meaning: "to walk unsteadily as if about to fall",
      synonyms: ["sway", "lurch", "totter"],
      antonyms: ["stride", "balance", "steady"],
      example: "He began to stagger under the weight of the box."
    },
    {
      word: "stumble",
      meaning: "to trip or lose balance while moving",
      synonyms: ["trip", "slip", "falter"],
      antonyms: ["balance", "steady", "stride"],
      example: "I stumble if I run over the uneven stones."
    },
    {
      word: "tentative",
      meaning: "uncertain and not fully decided or confident",
      synonyms: ["hesitant", "uncertain", "cautious"],
      antonyms: ["confident", "definite", "bold"],
      example: "She gave a tentative answer to the difficult question."
    },
    {
      word: "unsteadiness",
      meaning: "a lack of balance or firmness",
      synonyms: ["instability", "wobbliness", "shakiness"],
      antonyms: ["stability", "balance", "steadiness"],
      example: "The deck's unsteadiness made walking difficult."
    },
    {
      word: "waver",
      meaning: "to become uncertain or move unsteadily",
      synonyms: ["hesitate", "falter", "sway"],
      antonyms: ["decide", "persist", "steady"],
      example: "Do not waver when you know your choice is fair."
    },
    {
      word: "shrug",
      meaning: "to raise your shoulders to show doubt or indifference",
      synonyms: ["gesture", "dismiss", "signal doubt"],
      antonyms: ["commit", "respond", "show concern"],
      example: "He gave a shrug because he did not know the answer."
    },
    {
      word: "nod",
      meaning: "to move your head down and up, often to show agreement",
      synonyms: ["agree", "signal", "acknowledge"],
      antonyms: ["disagree", "refuse", "shake"],
      example: "Mum gave a nod to show that we could begin."
    },
    {
      word: "wince",
      meaning: "to make a small movement or expression because of pain",
      synonyms: ["flinch", "grimace", "recoil"],
      antonyms: ["smile", "relax", "remain calm"],
      example: "I wince whenever the nurse cleans the cut."
    },
    {
      word: "fidget",
      meaning: "to make small restless movements",
      synonyms: ["squirm", "twitch", "wriggle"],
      antonyms: ["settle", "relax", "sit still"],
      example: "Some pupils fidget when they have waited too long."
    },
    {
      word: "clench",
      meaning: "to close or tighten something firmly",
      synonyms: ["grip", "tighten", "squeeze"],
      antonyms: ["release", "relax", "open"],
      example: "Try not to clench your fists when you feel nervous."
    }
  ],
  paragraphs: [
    "My first steps on the rope were tentative. Its unsteadiness made me stagger, and I began to fidget while the crowd watched. I tried not to clench my hands or wince when the rope rubbed my ankle.",
    "The coach gave a calm nod, but my confidence started to waver. I answered with a shrug, took another step, and managed not to stumble before reaching the platform."
  ]
} as const satisfies VocabSet;
