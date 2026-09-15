import type { GuideMeta } from "./types";
import { withBase } from "../lib/base";
import {
  GUIDE_DESCRIPTION as MATHS_STUDENT_DESCRIPTION,
  GUIDE_ID as MATHS_STUDENT_ID,
  GUIDE_TITLE as MATHS_STUDENT_TITLE,
  PAGE_COUNT as MATHS_STUDENT_PAGE_COUNT
} from "./maths-student/meta";
import {
  GUIDE_DESCRIPTION,
  GUIDE_ID,
  GUIDE_TITLE,
  PAGE_COUNT
} from "./maths-tutor/meta";
import {
  GUIDE_DESCRIPTION as HOME_FITNESS_DESCRIPTION,
  GUIDE_ID as HOME_FITNESS_ID,
  GUIDE_TITLE as HOME_FITNESS_TITLE,
  PAGE_COUNT as HOME_FITNESS_PAGE_COUNT
} from "./home-fitness/meta";
import {
  GUIDE_DESCRIPTION as VOCABULARY_DESCRIPTION,
  GUIDE_ID as VOCABULARY_ID,
  GUIDE_TITLE as VOCABULARY_TITLE,
  PAGE_COUNT as VOCABULARY_PAGE_COUNT
} from "./vocabulary/meta";

export const guides: readonly GuideMeta[] = [
  {
    id: MATHS_STUDENT_ID,
    title: MATHS_STUDENT_TITLE,
    description: MATHS_STUDENT_DESCRIPTION,
    href: withBase(`${MATHS_STUDENT_ID}/`),
    pageCount: MATHS_STUDENT_PAGE_COUNT,
    status: "ready",
    icon: "÷"
  },
  {
    id: GUIDE_ID,
    title: GUIDE_TITLE,
    description: GUIDE_DESCRIPTION,
    href: withBase(`${GUIDE_ID}/`),
    pageCount: PAGE_COUNT,
    status: "ready",
    icon: "∑"
  },
  {
    id: HOME_FITNESS_ID,
    title: HOME_FITNESS_TITLE,
    description: HOME_FITNESS_DESCRIPTION,
    href: withBase(`${HOME_FITNESS_ID}/`),
    pageCount: HOME_FITNESS_PAGE_COUNT,
    status: "ready",
    icon: "▲"
  },
  {
    id: VOCABULARY_ID,
    title: VOCABULARY_TITLE,
    description: VOCABULARY_DESCRIPTION,
    href: withBase(`${VOCABULARY_ID}/`),
    pageCount: VOCABULARY_PAGE_COUNT,
    status: "ready",
    icon: "Aa"
  }
];

export function getGuide(id: string): GuideMeta | undefined {
  return guides.find((guide) => guide.id === id);
}
