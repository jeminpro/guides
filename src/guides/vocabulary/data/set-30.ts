import type { VocabSet } from "./types";

export const set30 = {
  id: "set-30",
  label: "Set 30",
  title: "Truth and reflection",
  words: [
    {
      word: "reflect",
      meaning: "to think carefully about something",
      synonyms: ["consider", "ponder", "review"],
      antonyms: ["ignore", "disregard", "rush"],
      example: "Take a moment to reflect on what you learned."
    },
    {
      word: "reinforce",
      meaning: "to make an idea, feeling, or structure stronger",
      synonyms: ["strengthen", "support", "confirm"],
      antonyms: ["weaken", "undermine", "reduce"],
      example: "Steel bars reinforce the concrete wall."
    },
    {
      word: "ultimately",
      meaning: "finally, after everything has been considered",
      synonyms: ["finally", "eventually", "in the end"],
      antonyms: ["initially", "firstly", "temporarily"],
      example: "Ultimately, the team chose the safest route."
    },
    {
      word: "tuxedo",
      meaning: "a formal suit, usually black, worn for special events",
      synonyms: ["dinner suit", "formalwear"],
      antonyms: ["casualwear", "sportswear"],
      example: "The violinist wore a neat black tuxedo."
    },
    {
      word: "fabricated",
      meaning: "invented to deceive rather than true",
      synonyms: ["invented", "false", "made-up"],
      antonyms: ["true", "genuine", "factual"],
      example: "The detective proved that the excuse was fabricated."
    },
    {
      word: "apprehended",
      meaning: "caught and arrested by the authorities",
      synonyms: ["arrested", "captured", "detained"],
      antonyms: ["released", "freed", "escaped"],
      example: "Police apprehended the thief near the station."
    },
    {
      word: "amateur",
      meaning: "a person doing an activity for enjoyment, not as a job",
      synonyms: ["nonprofessional", "hobbyist", "beginner"],
      antonyms: ["professional", "expert", "specialist"],
      example: "An amateur astronomer spotted the unusual comet."
    },
    {
      word: "remarkable",
      meaning: "unusual or impressive enough to deserve attention",
      synonyms: ["extraordinary", "notable", "amazing"],
      antonyms: ["ordinary", "unremarkable", "common"],
      example: "Her remarkable memory amazed the audience."
    },
    {
      word: "relish",
      meaning: "to greatly enjoy or look forward to something",
      synonyms: ["enjoy", "savour", "delight in"],
      antonyms: ["dislike", "dread", "avoid"],
      example: "I relish the chance to explore a new trail."
    },
    {
      word: "ponder",
      meaning: "to think carefully about something",
      synonyms: ["consider", "reflect", "contemplate"],
      antonyms: ["ignore", "dismiss", "rush"],
      example: "We paused to ponder the riddle's final clue."
    }
  ],
  paragraphs: [
    "An amateur reporter paused to reflect on clues and reinforce her timeline. She ultimately found that one photograph of a muddy tuxedo exposed a fabricated alibi. The suspect was apprehended that evening.",
    "It was a remarkable result. She could relish her success, then ponder which mystery to solve next."
  ]
} as const satisfies VocabSet;
