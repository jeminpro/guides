import type { VocabSet } from "./types";

export const set20 = {
  id: "set-20",
  label: "Set 20",
  title: "Ten words to own",
  words: [
    {
      word: "devastation",
      meaning: "great damage or destruction",
      synonyms: ["destruction", "ruin", "wreckage"],
      antonyms: ["repair", "recovery", "restoration"],
      example: "The flood left devastation across the valley."
    },
    {
      word: "escalate",
      meaning: "to become or make something more serious or intense",
      synonyms: ["intensify", "increase", "worsen"],
      antonyms: ["ease", "reduce", "calm"],
      example: "A small disagreement can escalate if nobody listens."
    },
    {
      word: "perish",
      meaning: "to die or be completely destroyed",
      synonyms: ["die", "expire", "vanish"],
      antonyms: ["survive", "live", "thrive"],
      example: "Without water, the seedlings may perish."
    },
    {
      word: "wreckage",
      meaning: "the broken remains of something badly damaged",
      synonyms: ["debris", "ruins", "remains"],
      antonyms: ["whole", "structure", "creation"],
      example: "Rescuers searched the wreckage after the storm."
    },
    {
      word: "headline",
      meaning: "the title above a news report",
      synonyms: ["title", "heading", "caption"],
      antonyms: ["footnote", "small print"],
      example: "The bold headline announced the cup final result."
    },
    {
      word: "misinformation",
      meaning: "false or inaccurate information that is spread",
      synonyms: ["falsehood", "inaccuracy", "fake news"],
      antonyms: ["truth", "facts", "accuracy"],
      example: "The rumour was misinformation, not a proven fact."
    },
    {
      word: "source",
      meaning: "the person, place, or thing that information comes from",
      synonyms: ["origin", "reference", "informant"],
      antonyms: ["result", "destination", "recipient"],
      example: "The reporter checked the original source of the claim."
    },
    {
      word: "transparent",
      meaning: "open, clear, and honest about what is happening",
      synonyms: ["open", "honest", "clear"],
      antonyms: ["secretive", "deceptive", "hidden"],
      example: "The judges were transparent about how points were awarded."
    },
    {
      word: "verify",
      meaning: "to check that something is true or accurate",
      synonyms: ["confirm", "check", "prove"],
      antonyms: ["guess", "doubt", "disprove"],
      example: "Use a second website to verify the date."
    },
    {
      word: "authoritative",
      meaning: "trusted as accurate because of expert knowledge",
      synonyms: ["reliable", "expert", "definitive"],
      antonyms: ["unreliable", "doubtful", "uninformed"],
      example: "The museum guide was an authoritative voice on fossils."
    }
  ],
  paragraphs: [
    "A shocking headline claimed that every tree near the fire would perish. Before letting fear escalate, Noor searched for the source and found that the report contained misinformation.",
    "An authoritative map showed limited devastation and little wreckage. Officials remained transparent, and reporters worked to verify each update before sharing it."
  ]
} as const satisfies VocabSet;
