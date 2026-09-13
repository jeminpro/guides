import type { VocabSet } from "./types";

export const set13 = {
  id: "set-13",
  label: "Set 13",
  title: "Ideas and discovery",
  words: [
    {
      word: "breakthrough",
      meaning: "an important discovery or sudden advance",
      synonyms: ["advance", "discovery", "success"],
      antonyms: ["setback", "failure", "stagnation"],
      example: "The new treatment was a major medical breakthrough."
    },
    {
      word: "observation",
      meaning: "something noticed by watching carefully",
      synonyms: ["remark", "finding", "inspection"],
      antonyms: ["oversight", "neglect", "guess"],
      example: "Her observation about the ants led to a new question."
    },
    {
      word: "pioneer",
      meaning: "a person who is among the first to explore or develop something",
      synonyms: ["trailblazer", "innovator", "explorer"],
      antonyms: ["follower", "imitator", "latecomer"],
      example: "The engineer was a pioneer of solar-powered flight."
    },
    {
      word: "revolutionary",
      meaning: "causing a complete and dramatic change",
      synonyms: ["groundbreaking", "radical", "transformative"],
      antonyms: ["traditional", "conventional", "ordinary"],
      example: "The revolutionary design used almost no electricity."
    },
    {
      word: "theory",
      meaning: "an idea that explains facts and can be tested",
      synonyms: ["explanation", "idea", "hypothesis"],
      antonyms: ["fact", "certainty", "proof"],
      example: "The class tested a theory about which objects would float."
    },
    {
      word: "inquisitive",
      meaning: "eager to learn and ask questions",
      synonyms: ["curious", "questioning", "interested"],
      antonyms: ["indifferent", "uninterested", "incurious"],
      example: "The inquisitive child wanted to know how every tool worked."
    },
    {
      word: "logical",
      meaning: "based on clear and sensible reasoning",
      synonyms: ["reasonable", "rational", "sound"],
      antonyms: ["illogical", "unreasonable", "confused"],
      example: "Sorting the clues by date was a logical first step."
    },
    {
      word: "observant",
      meaning: "quick to notice details",
      synonyms: ["watchful", "alert", "attentive"],
      antonyms: ["unobservant", "careless", "inattentive"],
      example: "An observant walker spotted paw prints in the mud."
    },
    {
      word: "practical",
      meaning: "useful, sensible, and likely to work",
      synonyms: ["useful", "sensible", "realistic"],
      antonyms: ["impractical", "useless", "unrealistic"],
      example: "A waterproof bag was a practical choice for the trip."
    },
    {
      word: "tireless",
      meaning: "showing great energy and effort without giving up",
      synonyms: ["untiring", "energetic", "persistent"],
      antonyms: ["weary", "idle", "exhausted"],
      example: "The tireless volunteers planted hundreds of trees."
    }
  ],
  paragraphs: [
    "Our inquisitive science club studied a pond with a tireless local pioneer. One observant pupil made an important observation about the water level, then offered a logical theory to explain the change.",
    "We needed a practical test, so we built a simple rain gauge. The results produced a breakthrough and inspired a revolutionary idea: a garden that could store rainwater for dry weeks."
  ]
} as const satisfies VocabSet;
