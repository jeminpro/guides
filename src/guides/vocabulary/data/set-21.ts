import type { VocabSet } from "./types";

export const set21 = {
  id: "set-21",
  label: "Set 21",
  title: "Ten words to own",
  words: [
    {
      word: "charismatic",
      meaning: "having a natural charm that attracts people",
      synonyms: ["charming", "captivating", "magnetic"],
      antonyms: ["dull", "unappealing", "uncharismatic"],
      example: "The charismatic captain inspired the whole team."
    },
    {
      word: "decisive",
      meaning: "able to make choices quickly and confidently",
      synonyms: ["determined", "firm", "resolute"],
      antonyms: ["indecisive", "hesitant", "uncertain"],
      example: "Her decisive action stopped the leak spreading."
    },
    {
      word: "delegate",
      meaning: "to give a task or responsibility to someone else",
      synonyms: ["assign", "entrust", "appoint"],
      antonyms: ["retain", "withhold", "keep"],
      example: "A good leader can delegate jobs fairly."
    },
    {
      word: "steadfast",
      meaning: "firm, loyal, and unwilling to give up",
      synonyms: ["loyal", "resolute", "constant"],
      antonyms: ["wavering", "unreliable", "fickle"],
      example: "Ben remained steadfast despite the difficult climb."
    },
    {
      word: "commanding",
      meaning: "powerful and likely to attract attention or respect",
      synonyms: ["authoritative", "impressive", "powerful"],
      antonyms: ["timid", "weak", "unimpressive"],
      example: "Her commanding voice carried across the noisy hall."
    },
    {
      word: "driven",
      meaning: "strongly determined to achieve something",
      synonyms: ["motivated", "ambitious", "determined"],
      antonyms: ["unmotivated", "idle", "aimless"],
      example: "The driven athlete trained before school each day."
    },
    {
      word: "influential",
      meaning: "able to affect people's ideas or actions",
      synonyms: ["powerful", "persuasive", "important"],
      antonyms: ["powerless", "ineffective", "unimportant"],
      example: "The scientist wrote an influential book about oceans."
    },
    {
      word: "mentor",
      meaning: "an experienced person who guides someone less experienced",
      synonyms: ["guide", "adviser", "coach"],
      antonyms: ["pupil", "novice", "discourager"],
      example: "My mentor helped me improve my coding skills."
    },
    {
      word: "sway",
      meaning: "to influence someone's opinion or decision",
      synonyms: ["influence", "persuade", "convince"],
      antonyms: ["deter", "discourage", "repel"],
      example: "One clever speech may sway undecided voters."
    },
    {
      word: "awareness",
      meaning: "knowledge or understanding of a situation",
      synonyms: ["knowledge", "understanding", "consciousness"],
      antonyms: ["ignorance", "unawareness", "confusion"],
      example: "The posters raised awareness of online safety."
    }
  ],
  paragraphs: [
    "Our charismatic club leader was decisive but never tried to control everything. She would delegate each task, while a steadfast mentor offered advice to every driven volunteer.",
    "Her commanding speech helped sway an influential councillor. Together, they raised awareness of food waste and opened a community fridge."
  ]
} as const satisfies VocabSet;
