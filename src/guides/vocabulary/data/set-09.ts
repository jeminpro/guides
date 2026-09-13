import type { VocabSet } from "./types";

export const set09 = {
  id: "set-09",
  label: "Set 9",
  title: "Voices and qualities",
  words: [
    {
      word: "factual",
      meaning: "based on facts rather than opinions",
      synonyms: ["accurate", "true", "objective"],
      antonyms: ["false", "imaginary", "biased"],
      example: "The report gave a factual account of the storm."
    },
    {
      word: "gentle",
      meaning: "kind, calm, or not rough",
      synonyms: ["tender", "mild", "soft"],
      antonyms: ["rough", "harsh", "fierce"],
      example: "Use a gentle touch when holding the tiny chick."
    },
    {
      word: "menacing",
      meaning: "seeming likely to cause harm or danger",
      synonyms: ["threatening", "sinister", "frightening"],
      antonyms: ["friendly", "reassuring", "harmless"],
      example: "A menacing growl came from behind the gate."
    },
    {
      word: "sharp",
      meaning: "having a fine edge or a sudden, intense quality",
      synonyms: ["pointed", "keen", "piercing"],
      antonyms: ["blunt", "dull", "mild"],
      example: "A sharp crack of thunder startled the hikers."
    },
    {
      word: "warm",
      meaning: "showing kindness or friendly feeling",
      synonyms: ["friendly", "welcoming", "affectionate"],
      antonyms: ["cold", "unfriendly", "distant"],
      example: "The coach gave every new player a warm welcome."
    },
    {
      word: "murmur",
      meaning: "to speak in a quiet, soft voice",
      synonyms: ["whisper", "mumble", "breathe"],
      antonyms: ["shout", "yell", "roar"],
      example: "We heard her murmur the answer to herself."
    },
    {
      word: "mutter",
      meaning: "to speak unclearly in a low voice, often in annoyance",
      synonyms: ["mumble", "grumble", "murmur"],
      antonyms: ["announce", "declare", "enunciate"],
      example: "Ben began to mutter when asked to tidy his desk."
    },
    {
      word: "proclaim",
      meaning: "to announce something publicly and clearly",
      synonyms: ["declare", "announce", "broadcast"],
      antonyms: ["conceal", "withhold", "deny"],
      example: "The mayor will proclaim the festival officially open."
    },
    {
      word: "ramble",
      meaning: "to talk for too long without a clear direction",
      synonyms: ["wander", "digress", "babble"],
      antonyms: ["focus", "summarise", "clarify"],
      example: "I tend to ramble when I tell an exciting story."
    },
    {
      word: "snarl",
      meaning: "to speak angrily or make a fierce growling sound",
      synonyms: ["growl", "snap", "scowl"],
      antonyms: ["smile", "soothe", "praise"],
      example: "The guard dog began to snarl at the shadow."
    }
  ],
  paragraphs: [
    "For our radio play, Mina wrote a factual news report while I created a menacing villain. A sharp bell opened the scene, followed by the gentle voice of our hero and the warm welcome of the mayor.",
    "I had to murmur a secret, then mutter a complaint. Theo would proclaim the good news, but he started to ramble until our pretend guard gave a comic snarl."
  ]
} as const satisfies VocabSet;
