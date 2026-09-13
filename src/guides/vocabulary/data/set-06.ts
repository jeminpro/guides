import type { VocabSet } from "./types";

export const set06 = {
  id: "set-06",
  label: "Set 6",
  title: "Movement in a flash",
  words: [
    {
      word: "ascend",
      meaning: "to move or climb upwards",
      synonyms: ["climb", "rise", "mount"],
      antonyms: ["descend", "drop", "fall"],
      example: "We watched the balloon ascend above the trees."
    },
    {
      word: "creep",
      meaning: "to move slowly and quietly",
      synonyms: ["sneak", "crawl", "tiptoe"],
      antonyms: ["rush", "stride", "charge"],
      example: "The cat began to creep towards the garden bird."
    },
    {
      word: "dip",
      meaning: "to move briefly downwards or put into liquid",
      synonyms: ["lower", "dunk", "sink"],
      antonyms: ["raise", "lift", "rise"],
      example: "The kite gave a sudden dip before rising again."
    },
    {
      word: "glint",
      meaning: "to give a small, quick flash of light",
      synonyms: ["gleam", "sparkle", "flash"],
      antonyms: ["dull", "darken", "fade"],
      example: "We saw a coin glint at the bottom of the pool."
    },
    {
      word: "glow",
      meaning: "to shine with a steady, gentle light",
      synonyms: ["shine", "gleam", "radiate"],
      antonyms: ["dim", "fade", "darken"],
      example: "The lanterns glow warmly after sunset."
    },
    {
      word: "bolt",
      meaning: "to run away suddenly and very quickly",
      synonyms: ["dash", "flee", "sprint"],
      antonyms: ["stay", "linger", "approach"],
      example: "The startled rabbit began to bolt across the field."
    },
    {
      word: "dart",
      meaning: "to move suddenly and quickly in one direction",
      synonyms: ["dash", "shoot", "zip"],
      antonyms: ["crawl", "linger", "amble"],
      example: "Small fish dart between the reeds."
    },
    {
      word: "lunge",
      meaning: "to make a sudden, forceful move forwards",
      synonyms: ["thrust", "leap", "charge"],
      antonyms: ["retreat", "recoil", "withdraw"],
      example: "The goalkeeper had to lunge for the ball."
    },
    {
      word: "scurry",
      meaning: "to move quickly with short, hurried steps",
      synonyms: ["hurry", "scamper", "bustle"],
      antonyms: ["stroll", "saunter", "linger"],
      example: "Ants scurry back to their nest with crumbs."
    },
    {
      word: "zoom",
      meaning: "to move very quickly",
      synonyms: ["speed", "race", "whizz"],
      antonyms: ["crawl", "creep", "slow"],
      example: "Cyclists zoom down the smooth track."
    }
  ],
  paragraphs: [
    "At dawn, we watched the sun glow and saw a window glint high in the tower. To reach it, we had to ascend a winding staircase, creep past a sleeping guard, then dip beneath a low beam.",
    "A mouse began to scurry as a cat made a lunge. It managed to dart through a crack just before the cat could bolt after it. Outside, delivery drones zoom between the rooftops."
  ]
} as const satisfies VocabSet;
