import type { VocabSet } from "./types";

export const set10 = {
  id: "set-10",
  label: "Set 10",
  title: "Making a strong case",
  words: [
    {
      word: "acknowledge",
      meaning: "to accept or show that something is true",
      synonyms: ["admit", "recognise", "accept"],
      antonyms: ["deny", "ignore", "reject"],
      example: "We should acknowledge both sides of the argument."
    },
    {
      word: "align",
      meaning: "to place things in agreement or a straight line",
      synonyms: ["match", "agree", "coordinate"],
      antonyms: ["conflict", "differ", "misalign"],
      example: "Our choices should align with our promise to save energy."
    },
    {
      word: "dissent",
      meaning: "to disagree with an accepted opinion or decision",
      synonyms: ["disagree", "object", "protest"],
      antonyms: ["agree", "consent", "approve"],
      example: "Two pupils chose to dissent from the class decision."
    },
    {
      word: "oppose",
      meaning: "to disagree with or act against something",
      synonyms: ["resist", "challenge", "reject"],
      antonyms: ["support", "approve", "assist"],
      example: "Residents oppose plans to remove the old trees."
    },
    {
      word: "support",
      meaning: "to agree with, help, or provide evidence for",
      synonyms: ["back", "assist", "uphold"],
      antonyms: ["oppose", "hinder", "undermine"],
      example: "Three clear facts support her conclusion."
    },
    {
      word: "appeal",
      meaning: "to make a serious request for help or change",
      synonyms: ["plead", "request", "petition"],
      antonyms: ["demand", "refuse", "reject"],
      example: "The team will appeal for more sports equipment."
    },
    {
      word: "convince",
      meaning: "to cause someone to believe or agree",
      synonyms: ["persuade", "assure", "sway"],
      antonyms: ["dissuade", "confuse", "discourage"],
      example: "Can you convince me that your plan will work?"
    },
    {
      word: "emphasise",
      meaning: "to give special importance to something",
      synonyms: ["stress", "highlight", "underline"],
      antonyms: ["downplay", "minimise", "ignore"],
      example: "The poster will emphasise the need to recycle."
    },
    {
      word: "exaggerate",
      meaning: "to make something seem greater than it really is",
      synonyms: ["overstate", "embellish", "magnify"],
      antonyms: ["understate", "minimise", "report accurately"],
      example: "Do not exaggerate how difficult the walk was."
    },
    {
      word: "persuade",
      meaning: "to lead someone to do or believe something through reasoning",
      synonyms: ["convince", "influence", "sway"],
      antonyms: ["deter", "dissuade", "discourage"],
      example: "Lena tried to persuade her family to travel by train."
    }
  ],
  paragraphs: [
    "At the council, I had to acknowledge that the playground needed repairs. Most pupils support a new climbing frame, but a few dissent because they oppose its cost. Our ideas align on one point: the space must remain safe.",
    "We will appeal for local help and emphasise the benefits without trying to exaggerate them. Honest figures may convince the council and persuade volunteers to join us."
  ]
} as const satisfies VocabSet;
