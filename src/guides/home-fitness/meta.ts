export type HomeFitnessPageMeta = {
  number: number;
  id: string;
  label: string;
  title: string;
  bodyClass: string;
};

export const GUIDE_ID = "home-fitness" as const;
export const GUIDE_TITLE = "Home Fitness";
export const GUIDE_DESCRIPTION =
  "No-gym fitness plan — weekly routine, exercise how-tos, nutrition & habits.";
export const PAGE_COUNT = 14 as const;

export const pages = [
  {
    number: 1,
    id: "contents",
    label: "Start here",
    title: "Your plan at a glance",
    bodyClass: "f1"
  },
  {
    number: 2,
    id: "weekly-plan",
    label: "The week",
    title: "Your weekly routine",
    bodyClass: "f2"
  },
  {
    number: 3,
    id: "workout-a",
    label: "Workout A — Push",
    title: "Monday — full body, push focus",
    bodyClass: "f3"
  },
  {
    number: 4,
    id: "workout-b",
    label: "Workout B — Pull",
    title: "Wednesday — full body, pull focus",
    bodyClass: "f4"
  },
  {
    number: 5,
    id: "workout-c",
    label: "Workout C — Legs &amp; core",
    title: "Friday — legs & core",
    bodyClass: "f5"
  },
  {
    number: 6,
    id: "cardio-running",
    label: "Cardio &amp; running",
    title: "Cardio, skipping & the running plan",
    bodyClass: "f6"
  },
  {
    number: 7,
    id: "lib-push",
    label: "Exercise guide — Push",
    title: "Push exercises",
    bodyClass: "f7"
  },
  {
    number: 8,
    id: "lib-pull",
    label: "Exercise guide — Pull",
    title: "Pull & grip exercises",
    bodyClass: "f8"
  },
  {
    number: 9,
    id: "lib-legs",
    label: "Exercise guide — Legs",
    title: "Leg exercises",
    bodyClass: "f9"
  },
  {
    number: 10,
    id: "lib-core",
    label: "Exercise guide — Core",
    title: "Core exercises",
    bodyClass: "f10"
  },
  {
    number: 11,
    id: "flexibility",
    label: "Flexibility",
    title: "The daily 10-minute stretch",
    bodyClass: "f11"
  },
  {
    number: 12,
    id: "calisthenics",
    label: "Calisthenics milestones",
    title: "Bodyweight strength — the ladder",
    bodyClass: "f12"
  },
  {
    number: 13,
    id: "nutrition",
    label: "Nutrition",
    title: "Food — where the fat loss happens",
    bodyClass: "f13"
  },
  {
    number: 14,
    id: "habits",
    label: "Habits &amp; tracking",
    title: "Habits, tracking & tips",
    bodyClass: "f14"
  }
] as const satisfies readonly HomeFitnessPageMeta[];
