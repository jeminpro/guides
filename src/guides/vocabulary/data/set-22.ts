import type { VocabSet } from "./types";

export const set22 = {
  id: "set-22",
  label: "Set 22",
  title: "Ten words to own",
  words: [
    {
      word: "defiance",
      meaning: "bold resistance or refusal to obey",
      synonyms: ["resistance", "rebellion", "disobedience"],
      antonyms: ["obedience", "submission", "cooperation"],
      example: "In an act of defiance, the prisoner refused the cruel order."
    },
    {
      word: "disobedient",
      meaning: "refusing to follow rules or instructions",
      synonyms: ["unruly", "rebellious", "defiant"],
      antonyms: ["obedient", "compliant", "well-behaved"],
      example: "The disobedient puppy ignored every command."
    },
    {
      word: "empower",
      meaning: "to give someone confidence, authority, or control",
      synonyms: ["enable", "strengthen", "authorise"],
      antonyms: ["weaken", "restrict", "discourage"],
      example: "The workshops empower children to share their ideas."
    },
    {
      word: "impartial",
      meaning: "fair and not favouring one side",
      synonyms: ["fair", "neutral", "unbiased"],
      antonyms: ["biased", "unfair", "partial"],
      example: "An impartial referee applies the same rules to both teams."
    },
    {
      word: "integrity",
      meaning: "the quality of being honest and doing what is right",
      synonyms: ["honesty", "principle", "uprightness"],
      antonyms: ["dishonesty", "corruption", "deceit"],
      example: "She showed integrity by returning the lost wallet."
    },
    {
      word: "lawful",
      meaning: "allowed by and following the law",
      synonyms: ["legal", "legitimate", "permitted"],
      antonyms: ["illegal", "unlawful", "forbidden"],
      example: "The march was peaceful and lawful."
    },
    {
      word: "righteous",
      meaning: "morally right and just",
      synonyms: ["just", "honourable", "virtuous"],
      antonyms: ["wicked", "unjust", "immoral"],
      example: "He felt righteous anger at the unfair punishment."
    },
    {
      word: "deceit",
      meaning: "dishonest behaviour meant to hide the truth",
      synonyms: ["dishonesty", "trickery", "fraud"],
      antonyms: ["honesty", "truthfulness", "openness"],
      example: "The friendship ended when the deceit was uncovered."
    },
    {
      word: "disloyal",
      meaning: "not faithful to a person, group, or cause",
      synonyms: ["unfaithful", "treacherous", "untrustworthy"],
      antonyms: ["loyal", "faithful", "devoted"],
      example: "Sharing the team's secret felt disloyal."
    },
    {
      word: "manipulation",
      meaning: "controlling someone unfairly, often without them noticing",
      synonyms: ["control", "influence", "exploitation"],
      antonyms: ["freedom", "fairness", "honesty"],
      example: "The advert used emotional manipulation to sell the toy."
    }
  ],
  paragraphs: [
    "The disobedient official used deceit and manipulation to silence complaints, calling every critic disloyal. In defiance, pupils organised a lawful meeting and asked an impartial teacher to listen.",
    "Their integrity gave them righteous courage to speak calmly. The teacher promised to empower the group to help create fairer rules."
  ]
} as const satisfies VocabSet;
