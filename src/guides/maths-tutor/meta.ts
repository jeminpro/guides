export type MathsTutorPageMeta = {
  number: number;
  id: string;
  label: string;
  title: string;
  bodyClass: string;
};

export const GUIDE_ID = "maths-tutor" as const;
export const GUIDE_TITLE = "Maths Guide - Tutor";
export const GUIDE_DESCRIPTION =
  "Primary & 11+ maths cheat sheets — place value through word problems.";
export const PAGE_COUNT = 20 as const;

export const pages = [
  {
    number: 1,
    id: "place-value",
    label: "Place value",
    title: "Place value & number sense",
    bodyClass: "p1"
  },
  {
    number: 2,
    id: "odd-even-mental",
    label: "Odd, even &amp; mental maths",
    title: "Odd, even & clever tricks",
    bodyClass: "p2"
  },
  {
    number: 3,
    id: "add-takeaway",
    label: "Add &amp; take-away facts",
    title: "Add & take away facts",
    bodyClass: "p3"
  },
  {
    number: 4,
    id: "times-tables",
    label: "Times tables",
    title: "Times tables & quick tricks",
    bodyClass: "p4"
  },
  {
    number: 5,
    id: "positive-negative",
    label: "Positive &amp; negative numbers",
    title: "Positive & negative numbers",
    bodyClass: "p5"
  },
  {
    number: 6,
    id: "bidmas-algebra",
    label: "BIDMAS &amp; algebra",
    title: "BIDMAS & solving for x",
    bodyClass: "p6"
  },
  {
    number: 7,
    id: "sequences-algebra",
    label: "Sequences &amp; algebra",
    title: "Sequences & algebra extras",
    bodyClass: "p7"
  },
  {
    number: 8,
    id: "factors-primes",
    label: "Factors, multiples &amp; primes",
    title: "Factors, multiples & primes",
    bodyClass: "p8"
  },
  {
    number: 9,
    id: "divisibility",
    label: "Divisibility rules",
    title: "Divisibility rules",
    bodyClass: "p9"
  },
  {
    number: 10,
    id: "squares-cubes",
    label: "Squares &amp; cubes",
    title: "Squares & cubes",
    bodyClass: "p10"
  },
  {
    number: 11,
    id: "fractions-pct",
    label: "Fractions, decimals &amp; %",
    title: "Fractions, decimals & %",
    bodyClass: "p11"
  },
  {
    number: 12,
    id: "fraction-skills",
    label: "Fraction skills",
    title: "Fraction skills",
    bodyClass: "p12"
  },
  {
    number: 13,
    id: "ratio",
    label: "Ratio &amp; proportion",
    title: "Ratio & proportion",
    bodyClass: "p13"
  },
  {
    number: 14,
    id: "measures",
    label: "Measures, time &amp; SDT",
    title: "Measures, time & SDT",
    bodyClass: "p14"
  },
  {
    number: 15,
    id: "2d-shapes",
    label: "2D shapes",
    title: "Shape cheats",
    bodyClass: "audit-15"
  },
  {
    number: 16,
    id: "angle-rules",
    label: "Angle rules",
    title: "Angle rules",
    bodyClass: "audit-16"
  },
  {
    number: 17,
    id: "3d-volume",
    label: "3D shapes &amp; volume",
    title: "3D shapes & volume",
    bodyClass: "audit-17"
  },
  {
    number: 18,
    id: "coordinates",
    label: "Coordinates &amp; transformations",
    title: "Coordinates & transformations",
    bodyClass: "audit-18"
  },
  {
    number: 19,
    id: "averages",
    label: "Averages &amp; charts",
    title: "Averages & charts",
    bodyClass: "audit-19"
  },
  {
    number: 20,
    id: "word-problems",
    label: "Word problems &amp; Venns",
    title: "Word problems, tables & Venns",
    bodyClass: "audit-20"
  }
] as const satisfies readonly MathsTutorPageMeta[];
