import type { VocabSet } from "./types";

export const set14 = {
  id: "set-14",
  label: "Set 14",
  title: "Inventing for tomorrow",
  words: [
    {
      word: "artificial",
      meaning: "made by people rather than occurring naturally",
      synonyms: ["synthetic", "manufactured", "fake"],
      antonyms: ["natural", "real", "organic"],
      example: "The film set used artificial snow."
    },
    {
      word: "device",
      meaning: "an object made for a particular purpose",
      synonyms: ["tool", "machine", "gadget"],
      antonyms: ["obstacle", "hindrance", "malfunction"],
      example: "This small device measures the room's temperature."
    },
    {
      word: "groundbreaking",
      meaning: "very new and likely to change how things are done",
      synonyms: ["innovative", "pioneering", "revolutionary"],
      antonyms: ["ordinary", "conventional", "outdated"],
      example: "The team revealed a groundbreaking way to clean water."
    },
    {
      word: "innovate",
      meaning: "to introduce a new idea, method, or product",
      synonyms: ["invent", "modernise", "pioneer"],
      antonyms: ["imitate", "repeat", "stagnate"],
      example: "Young engineers innovate by testing unusual solutions."
    },
    {
      word: "sustainable",
      meaning: "able to continue without badly harming the environment",
      synonyms: ["renewable", "lasting", "eco-friendly"],
      antonyms: ["wasteful", "harmful", "unsustainable"],
      example: "Cycling is a sustainable way to travel."
    },
    {
      word: "adaptation",
      meaning: "a change that makes something better suited to its conditions",
      synonyms: ["adjustment", "modification", "alteration"],
      antonyms: ["rigidity", "resistance", "unchanged form"],
      example: "Thick fur is an adaptation to cold weather."
    },
    {
      word: "erosion",
      meaning: "the gradual wearing away of soil or rock",
      synonyms: ["wearing away", "weathering", "decay"],
      antonyms: ["build-up", "growth", "deposition"],
      example: "Tree roots can protect the riverbank from erosion."
    },
    {
      word: "substance",
      meaning: "a particular kind of material",
      synonyms: ["material", "matter", "compound"],
      antonyms: ["vacuum", "emptiness", "nothingness"],
      example: "The scientist tested the unknown substance safely."
    },
    {
      word: "fatigue",
      meaning: "extreme physical or mental tiredness",
      synonyms: ["exhaustion", "weariness", "tiredness"],
      antonyms: ["energy", "vigour", "alertness"],
      example: "Regular breaks can prevent fatigue during a long hike."
    },
    {
      word: "recover",
      meaning: "to return to a healthy or normal state",
      synonyms: ["heal", "improve", "regain"],
      antonyms: ["worsen", "decline", "deteriorate"],
      example: "The injured bird will recover at the wildlife centre."
    }
  ],
  paragraphs: [
    "Our class had to innovate a sustainable way to slow soil erosion. We designed a device that sprayed an artificial, harmless substance over bare ground while seeds took root. The groundbreaking plan copied a clever plant adaptation.",
    "After hours of testing, fatigue set in, so we rested. We returned ready to recover our focus, improve the model, and present it at the eco-fair."
  ]
} as const satisfies VocabSet;
