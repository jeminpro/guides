import type { VocabSet } from "./types";

export const set23 = {
  id: "set-23",
  label: "Set 23",
  title: "Courage under pressure",
  words: [
    {
      word: "intimidate",
      meaning: "to frighten someone into feeling less confident",
      synonyms: ["frighten", "bully", "daunt"],
      antonyms: ["reassure", "encourage", "comfort"],
      example: "The older players tried to intimidate the new team."
    },
    {
      word: "petrified",
      meaning: "extremely frightened",
      synonyms: ["terrified", "horrified", "aghast"],
      antonyms: ["fearless", "calm", "unafraid"],
      example: "Nia was petrified when thunder shook the windows."
    },
    {
      word: "assured",
      meaning: "confident and certain",
      synonyms: ["confident", "certain", "self-possessed"],
      antonyms: ["uncertain", "doubtful", "nervous"],
      example: "His assured voice helped everyone stay calm."
    },
    {
      word: "bold",
      meaning: "confident and willing to take risks",
      synonyms: ["brave", "daring", "fearless"],
      antonyms: ["timid", "cautious", "fearful"],
      example: "Her bold plan rescued the stranded hikers."
    },
    {
      word: "confide",
      meaning: "to share a secret or private worry with someone trusted",
      synonyms: ["reveal", "disclose", "entrust"],
      antonyms: ["conceal", "hide", "withhold"],
      example: "I confide in my sister when something troubles me."
    },
    {
      word: "poise",
      meaning: "calm confidence and graceful control",
      synonyms: ["composure", "balance", "confidence"],
      antonyms: ["panic", "awkwardness", "agitation"],
      example: "Mara answered the difficult questions with poise."
    },
    {
      word: "triumphantly",
      meaning: "in a proud, joyful way after winning",
      synonyms: ["victoriously", "proudly", "joyfully"],
      antonyms: ["dejectedly", "sadly", "unsuccessfully"],
      example: "The runners triumphantly crossed the finish line together."
    },
    {
      word: "apprehensive",
      meaning: "worried that something unpleasant may happen",
      synonyms: ["anxious", "uneasy", "nervous"],
      antonyms: ["confident", "relaxed", "unworried"],
      example: "She felt apprehensive before her first diving lesson."
    },
    {
      word: "jittery",
      meaning: "nervous and unable to keep still",
      synonyms: ["nervous", "twitchy", "restless"],
      antonyms: ["calm", "relaxed", "steady"],
      example: "Too much excitement made me feel jittery before the race."
    },
    {
      word: "restlessness",
      meaning: "the state of being unable to relax or stay still",
      synonyms: ["unease", "agitation", "impatience"],
      antonyms: ["calmness", "stillness", "peace"],
      example: "Her restlessness kept her awake on the long journey."
    }
  ],
  paragraphs: [
    "The tall microphone seemed to intimidate Amir, and for one petrified moment he forgot every line. Then his friend's assured nod inspired a bold choice: he would confide in the audience that he was nervous. That honesty restored his poise.",
    "Amir finished triumphantly, though he had arrived apprehensive and jittery. At last, his restlessness faded."
  ]
} as const satisfies VocabSet;
