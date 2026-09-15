export type MathsStudentPageMeta = {
  number: number;
  id: string;
  label: string;
  title: string;
  bodyClass: string;
};

export const GUIDE_ID = "maths-student" as const;
export const GUIDE_TITLE = "Maths Guide - Student";
export const GUIDE_DESCRIPTION =
  "Quick Primary & 11+ maths sheets — the rules kids need, one example each.";
export const PAGE_COUNT = 10 as const;

export const pages = [
  {
    number: 1,
    id: "place-value",
    label: "Place value",
    title: "Place value & rounding",
    bodyClass: "s1"
  },
  {
    number: 2,
    id: "number-facts",
    label: "Number facts",
    title: "Number facts & times tables",
    bodyClass: "s2"
  },
  {
    number: 3,
    id: "negatives-bidmas",
    label: "Negatives & BIDMAS",
    title: "Negatives & BIDMAS",
    bodyClass: "s3"
  },
  {
    number: 4,
    id: "algebra",
    label: "Algebra",
    title: "Algebra & sequences",
    bodyClass: "s4"
  },
  {
    number: 5,
    id: "factors-squares",
    label: "Factors & squares",
    title: "Factors, primes & squares",
    bodyClass: "s5"
  },
  {
    number: 6,
    id: "fractions-pct",
    label: "Fractions & %",
    title: "Fractions, decimals & %",
    bodyClass: "s6"
  },
  {
    number: 7,
    id: "ratio-measures",
    label: "Ratio & measures",
    title: "Ratio, measures & time",
    bodyClass: "s7"
  },
  {
    number: 8,
    id: "2d-shapes",
    label: "2D shapes",
    title: "2D shapes & area",
    bodyClass: "s8"
  },
  {
    number: 9,
    id: "angles-3d",
    label: "Angles & 3D",
    title: "Angles, 3D & coordinates",
    bodyClass: "s9"
  },
  {
    number: 10,
    id: "data-problems",
    label: "Data & problems",
    title: "Averages & word problems",
    bodyClass: "s10"
  }
] as const satisfies readonly MathsStudentPageMeta[];
