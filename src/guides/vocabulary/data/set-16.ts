import type { VocabSet } from "./types";

export const set16 = {
  id: "set-16",
  label: "Set 16",
  title: "Ten words to own",
  words: [
    {
      word: "close-knit",
      meaning: "joined by strong, friendly relationships",
      synonyms: ["united", "supportive", "tight"],
      antonyms: ["divided", "distant", "disconnected"],
      example: "Our close-knit team helped one another after the defeat."
    },
    {
      word: "diverse",
      meaning: "including many different kinds of people or things",
      synonyms: ["varied", "mixed", "wide-ranging"],
      antonyms: ["uniform", "similar", "limited"],
      example: "The festival offered a diverse range of food and music."
    },
    {
      word: "isolated",
      meaning: "far away from others or feeling alone",
      synonyms: ["remote", "separate", "lonely"],
      antonyms: ["connected", "included", "central"],
      example: "The isolated cottage stood miles from the nearest village."
    },
    {
      word: "multicultural",
      meaning: "including people and traditions from many cultures",
      synonyms: ["diverse", "mixed", "cosmopolitan"],
      antonyms: ["single-culture", "uniform", "homogeneous"],
      example: "Our multicultural fair featured dances from six countries."
    },
    {
      word: "urbanisation",
      meaning: "the growth of towns and cities as more people live there",
      synonyms: ["city growth", "development", "expansion"],
      antonyms: ["ruralisation", "depopulation", "decline"],
      example: "Urbanisation turned the small town into a busy city."
    },
    {
      word: "belonging",
      meaning: "the feeling of being accepted as part of a group",
      synonyms: ["acceptance", "connection", "inclusion"],
      antonyms: ["exclusion", "alienation", "isolation"],
      example: "Joining the choir gave Mia a sense of belonging."
    },
    {
      word: "collectively",
      meaning: "together as a group",
      synonyms: ["together", "jointly", "cooperatively"],
      antonyms: ["individually", "separately", "alone"],
      example: "The pupils collectively chose a charity to support."
    },
    {
      word: "embrace",
      meaning: "to accept an idea or change willingly",
      synonyms: ["accept", "welcome", "adopt"],
      antonyms: ["reject", "resist", "avoid"],
      example: "Nina decided to embrace the challenge of learning chess."
    },
    {
      word: "inclusive",
      meaning: "welcoming everyone and leaving nobody out",
      synonyms: ["welcoming", "open", "all-embracing"],
      antonyms: ["exclusive", "excluding", "restricted"],
      example: "The inclusive game had a role for every child."
    },
    {
      word: "civilisation",
      meaning: "an organised human society with its own culture and systems",
      synonyms: ["society", "culture", "community"],
      antonyms: ["barbarism", "disorder", "lawlessness"],
      example: "The ancient civilisation built roads, temples, and libraries."
    }
  ],
  paragraphs: [
    "Once isolated villages grew through urbanisation into one diverse, multicultural city. Its close-knit neighbourhoods kept their own celebrations while sharing a strong sense of belonging.",
    "Residents worked collectively to create an inclusive museum about their civilisation. They chose to embrace every community's stories, so nobody felt forgotten."
  ]
} as const satisfies VocabSet;
