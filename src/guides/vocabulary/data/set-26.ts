import type { VocabSet } from "./types";

export const set26 = {
  id: "set-26",
  label: "Set 26",
  title: "Sound and story",
  words: [
    {
      word: "resonate",
      meaning: "to produce a deep sound or create a strong feeling",
      synonyms: ["echo", "reverberate", "connect"],
      antonyms: ["deaden", "silence", "alienate"],
      example: "The drumbeats resonate throughout the hall."
    },
    {
      word: "rhythm",
      meaning: "a regular pattern of sounds or movements",
      synonyms: ["beat", "tempo", "pulse"],
      antonyms: ["stillness", "irregularity", "disorder"],
      example: "The dancers moved to the rhythm of the drums."
    },
    {
      word: "foreshadow",
      meaning: "to hint that something will happen later",
      synonyms: ["signal", "predict", "hint"],
      antonyms: ["conceal", "surprise", "hide"],
      example: "Dark clouds foreshadow the storm in the final chapter."
    },
    {
      word: "imagery",
      meaning: "descriptive language that creates pictures in the mind",
      synonyms: ["description", "word-pictures", "figurative language"],
      antonyms: ["plainness", "literalness", "vagueness"],
      example: "The poem's winter imagery made me picture sparkling frost."
    },
    {
      word: "opposition",
      meaning: "resistance or disagreement",
      synonyms: ["resistance", "disagreement", "rivalry"],
      antonyms: ["support", "agreement", "cooperation"],
      example: "The plan faced opposition from people who loved the old park."
    },
    {
      word: "plot",
      meaning: "the connected events that make up a story",
      synonyms: ["storyline", "narrative", "scheme"],
      antonyms: ["randomness", "disorder", "digression"],
      example: "A missing key drives the plot of the mystery."
    },
    {
      word: "tone",
      meaning: "the feeling or attitude expressed in speech or writing",
      synonyms: ["mood", "attitude", "manner"],
      antonyms: ["neutrality", "flatness", "indifference"],
      example: "The writer's playful tone made the article amusing."
    },
    {
      word: "dramatic",
      meaning: "exciting, striking, or full of strong emotion",
      synonyms: ["striking", "exciting", "theatrical"],
      antonyms: ["dull", "ordinary", "calm"],
      example: "A dramatic rescue ended the play."
    },
    {
      word: "portrayal",
      meaning: "the way a person or subject is shown",
      synonyms: ["depiction", "representation", "description"],
      antonyms: ["concealment", "distortion", "omission"],
      example: "The actor's portrayal of the inventor felt believable."
    },
    {
      word: "underlying",
      meaning: "hidden beneath the surface but important",
      synonyms: ["basic", "hidden", "fundamental"],
      antonyms: ["obvious", "surface", "visible"],
      example: "Kindness was the underlying message of the story."
    }
  ],
  paragraphs: [
    "Each bell seemed to resonate with the river's rhythm. Uneasy notes foreshadow trouble as vivid imagery describes a boat entering mist. The hero meets fierce opposition, pushing the plot towards danger.",
    "A tense tone builds to a dramatic rescue. The actor's portrayal reveals the story's underlying message about courage."
  ]
} as const satisfies VocabSet;
