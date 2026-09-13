import type { VocabSet } from "./types";

export const set17 = {
  id: "set-17",
  label: "Set 17",
  title: "Ten words to own",
  words: [
    {
      word: "dynasty",
      meaning: "a line of rulers from the same family",
      synonyms: ["royal line", "house", "ruling family"],
      antonyms: ["republic", "common rule"],
      example: "The dynasty ruled the kingdom for three hundred years."
    },
    {
      word: "era",
      meaning: "a particular period of history",
      synonyms: ["age", "period", "epoch"],
      antonyms: ["instant", "moment"],
      example: "Steam engines transformed travel during that era."
    },
    {
      word: "monarchy",
      meaning: "a system in which a king or queen is head of state",
      synonyms: ["royal rule", "kingdom", "sovereignty"],
      antonyms: ["republic", "democracy"],
      example: "In a monarchy, the crown passes according to set rules."
    },
    {
      word: "revolution",
      meaning: "a major change, often when people replace a government",
      synonyms: ["uprising", "overthrow", "transformation"],
      antonyms: ["stability", "continuity", "order"],
      example: "The revolution ended the ruler's control of the country."
    },
    {
      word: "commemorate",
      meaning: "to honour and remember an important person or event",
      synonyms: ["honour", "remember", "celebrate"],
      antonyms: ["forget", "ignore", "overlook"],
      example: "A parade will commemorate the town's rescue."
    },
    {
      word: "factor",
      meaning: "one thing that helps cause or affect a result",
      synonyms: ["cause", "element", "influence"],
      antonyms: ["result", "consequence"],
      example: "Regular practice was a major factor in her improvement."
    },
    {
      word: "outcome",
      meaning: "the final result of an action or event",
      synonyms: ["result", "consequence", "end"],
      antonyms: ["cause", "beginning", "origin"],
      example: "We waited eagerly to learn the outcome of the vote."
    },
    {
      word: "repercussion",
      meaning: "an indirect, usually unwelcome result of an action",
      synonyms: ["consequence", "after-effect", "result"],
      antonyms: ["cause", "source", "benefit"],
      example: "One repercussion of the storm was a week without power."
    },
    {
      word: "trigger",
      meaning: "to cause an event or reaction to begin",
      synonyms: ["cause", "spark", "set off"],
      antonyms: ["prevent", "halt", "stop"],
      example: "A sudden noise can trigger the alarm."
    },
    {
      word: "alliance",
      meaning: "an agreement between groups to support one another",
      synonyms: ["partnership", "union", "coalition"],
      antonyms: ["rivalry", "conflict", "division"],
      example: "The two clubs formed an alliance to protect the park."
    }
  ],
  paragraphs: [
    "During one troubled era, a powerful dynasty controlled the monarchy. A food shortage was the final factor needed to trigger a revolution, and an alliance of towns demanded change.",
    "The outcome brought fairer laws, but one repercussion was years of uncertainty. Today, people commemorate the event while remembering that every choice has consequences."
  ]
} as const satisfies VocabSet;
