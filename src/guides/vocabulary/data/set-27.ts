import type { VocabSet } from "./types";

export const set27 = {
  id: "set-27",
  label: "Set 27",
  title: "Ideas and prosperity",
  words: [
    {
      word: "contrast",
      meaning: "a clear difference between things",
      synonyms: ["difference", "distinction", "opposition"],
      antonyms: ["similarity", "likeness", "agreement"],
      example: "The white sail made a sharp contrast with the dark sea."
    },
    {
      word: "imaginative",
      meaning: "full of new and creative ideas",
      synonyms: ["creative", "inventive", "original"],
      antonyms: ["uncreative", "ordinary", "dull"],
      example: "Her imaginative costume used leaves and recycled paper."
    },
    {
      word: "inventive",
      meaning: "skilled at creating original ideas or objects",
      synonyms: ["innovative", "creative", "resourceful"],
      antonyms: ["unoriginal", "conventional", "imitative"],
      example: "The inventive student built a fan powered by sunlight."
    },
    {
      word: "resulting",
      meaning: "happening because of something else",
      synonyms: ["following", "consequent", "ensuing"],
      antonyms: ["preceding", "causing", "unrelated"],
      example: "The pipe burst, and the resulting flood soaked the carpet."
    },
    {
      word: "whimsical",
      meaning: "playfully unusual or fanciful",
      synonyms: ["playful", "fanciful", "quirky"],
      antonyms: ["serious", "practical", "ordinary"],
      example: "Whimsical creatures danced across the book cover."
    },
    {
      word: "affluent",
      meaning: "having plenty of money and possessions",
      synonyms: ["wealthy", "prosperous", "well-off"],
      antonyms: ["poor", "needy", "deprived"],
      example: "The affluent town funded a free museum."
    },
    {
      word: "asset",
      meaning: "something useful or valuable",
      synonyms: ["advantage", "resource", "strength"],
      antonyms: ["burden", "liability", "drawback"],
      example: "Her patience was a valuable asset during the project."
    },
    {
      word: "boom",
      meaning: "a sudden period of rapid growth or success",
      synonyms: ["surge", "upswing", "expansion"],
      antonyms: ["slump", "decline", "crash"],
      example: "The new railway caused a boom in local business."
    },
    {
      word: "flourish",
      meaning: "to grow or develop successfully",
      synonyms: ["thrive", "prosper", "blossom"],
      antonyms: ["decline", "struggle", "wither"],
      example: "Tomato plants flourish in the sunny greenhouse."
    },
    {
      word: "prosperity",
      meaning: "the state of being successful and well-off",
      synonyms: ["success", "wealth", "well-being"],
      antonyms: ["poverty", "hardship", "failure"],
      example: "The busy harbour brought prosperity to the town."
    }
  ],
  paragraphs: [
    "In contrast to the grey streets, an imaginative inventor built an inventive garden tower; the resulting harvest filled every rooftop. A whimsical festival attracted visitors from an affluent district.",
    "The tower became a community asset and started a business boom. Soon local shops began to flourish, bringing prosperity to the neighbourhood."
  ]
} as const satisfies VocabSet;
