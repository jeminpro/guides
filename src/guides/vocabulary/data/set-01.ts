import type { VocabSet } from "./types";

export const set01 = {
  id: "set-01",
  label: "Set 1",
  title: "Ten words to own",
  words: [
    {
      word: "reluctant",
      meaning: "not wanting to do something; hesitant",
      synonyms: ["unwilling", "hesitant", "loath"],
      antonyms: ["eager", "willing", "keen"],
      example: "She was reluctant to jump into the cold lake."
    },
    {
      word: "evoke",
      meaning: "to bring a feeling, memory, or picture to mind",
      synonyms: ["recall", "stir", "summon"],
      antonyms: ["suppress", "stifle"],
      example: "The smell of rain can evoke memories of summer camp."
    },
    {
      word: "bewildered",
      meaning: "completely confused and unsure",
      synonyms: ["puzzled", "confused", "baffled", "perplexed"],
      antonyms: ["certain", "clear"],
      example: "Maya looked bewildered when the map showed two paths."
    },
    {
      word: "penultimate",
      meaning: "last but one; second from the end",
      synonyms: ["second-last", "next-to-last"],
      antonyms: ["first", "final", "last"],
      example: "He scored in the penultimate minute of the match."
    },
    {
      word: "timid",
      meaning: "shy and easily frightened",
      synonyms: ["shy", "nervous", "meek"],
      antonyms: ["bold", "confident", "brave"],
      example: "A timid knock sounded at the door."
    },
    {
      word: "significant",
      meaning: "important enough to matter",
      synonyms: ["important", "notable", "considerable"],
      antonyms: ["minor", "trivial", "insignificant"],
      example: "There was a significant drop in temperature overnight."
    },
    {
      word: "hostile",
      meaning: "unfriendly or showing dislike",
      synonyms: ["unfriendly", "aggressive", "antagonistic"],
      antonyms: ["friendly", "welcoming", "kind"],
      example: "The cat gave a hostile hiss when a stranger reached out."
    },
    {
      word: "vital",
      meaning: "absolutely necessary",
      synonyms: ["essential", "crucial", "indispensable"],
      antonyms: ["unnecessary", "optional", "unimportant"],
      example: "Sleep is vital if you want to think clearly the next day."
    },
    {
      word: "substantial",
      meaning: "large in amount, size, or importance",
      synonyms: ["considerable", "sizeable", "large"],
      antonyms: ["slight", "meagre", "paltry"],
      example: "They raised a substantial sum for the new library."
    },
    {
      word: "abundant",
      meaning: "existing in large amounts; more than enough",
      synonyms: ["plentiful", "ample", "copious"],
      antonyms: ["scarce", "sparse", "rare"],
      example: "Wildflowers were abundant along the coastal path."
    }
  ],
  paragraphs: [
    "The new girl paused at the hall door, reluctant to walk in. A timid smile hid how bewildered she felt by the sea of faces. Nothing in the room could evoke the welcome she needed, and one boy's hostile stare made her want to turn back.",
    "Finding a seat felt vital; the penultimate chair in the back row was free. By lunch she had made a significant friend, and that kindness made a substantial difference. Later, in a garden abundant with blossom, easy talk finally replaced her fear."
  ]
} as const satisfies VocabSet;
