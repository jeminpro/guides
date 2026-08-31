import type { GuideMeta } from "./types";
import { withBase } from "../lib/base";
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

export const guides: readonly GuideMeta[] = [
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
  }
];

export function getGuide(id: string): GuideMeta | undefined {
  return guides.find((guide) => guide.id === id);
}
