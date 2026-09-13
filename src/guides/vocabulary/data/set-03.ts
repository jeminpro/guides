import type { VocabSet } from "./types";

export const set03 = {
  id: "set-03",
  label: "Set 3",
  title: "Character and courage",
  words: [
    {
      word: "astute",
      meaning: "quick to notice and understand things",
      synonyms: ["shrewd", "clever", "perceptive"],
      antonyms: ["foolish", "unobservant", "naive"],
      example: "Her astute question revealed a flaw in the plan."
    },
    {
      word: "diligent",
      meaning: "careful and hard-working",
      synonyms: ["industrious", "thorough", "attentive"],
      antonyms: ["careless", "lazy", "neglectful"],
      example: "The diligent pupil checked every calculation twice."
    },
    {
      word: "generous",
      meaning: "willing to give or share more than expected",
      synonyms: ["giving", "kind", "charitable"],
      antonyms: ["selfish", "stingy", "greedy"],
      example: "A generous neighbour donated books to the school."
    },
    {
      word: "champion",
      meaning: "a winner or a person who strongly supports a cause",
      synonyms: ["winner", "defender", "advocate"],
      antonyms: ["opponent", "critic", "loser"],
      example: "The chess champion taught beginners after the match."
    },
    {
      word: "courage",
      meaning: "the strength to face fear or difficulty",
      synonyms: ["bravery", "boldness", "nerve"],
      antonyms: ["cowardice", "fear", "timidity"],
      example: "It took courage to admit the mistake."
    },
    {
      word: "guardian",
      meaning: "a person who protects or cares for someone or something",
      synonyms: ["protector", "keeper", "carer"],
      antonyms: ["attacker", "threat", "enemy"],
      example: "The museum guardian watched over the ancient vase."
    },
    {
      word: "persevere",
      meaning: "to keep trying despite difficulty",
      synonyms: ["persist", "continue", "endure"],
      antonyms: ["quit", "surrender", "abandon"],
      example: "If you persevere, the tricky tune will become easier."
    },
    {
      word: "selfless",
      meaning: "caring more about others than yourself",
      synonyms: ["unselfish", "giving", "altruistic"],
      antonyms: ["selfish", "greedy", "self-centred"],
      example: "His selfless act gave another runner a chance to finish."
    },
    {
      word: "discern",
      meaning: "to notice or understand something that is not obvious",
      synonyms: ["detect", "recognise", "distinguish"],
      antonyms: ["miss", "overlook", "confuse"],
      example: "In the fog, we could barely discern the lighthouse."
    },
    {
      word: "ingenious",
      meaning: "cleverly designed or unusually inventive",
      synonyms: ["inventive", "clever", "resourceful"],
      antonyms: ["unimaginative", "clumsy", "ordinary"],
      example: "Their ingenious trap caught rainwater for the garden."
    }
  ],
  paragraphs: [
    "Our diligent team hoped to champion cleaner parks. An astute classmate could discern which bins filled fastest, while a generous shopkeeper supplied gloves. Our guardian reminded us that real courage includes asking for help.",
    "One selfless volunteer made an ingenious litter-picker from old tubes. We had to persevere through heavy rain, but by sunset the riverside looked transformed."
  ]
} as const satisfies VocabSet;
