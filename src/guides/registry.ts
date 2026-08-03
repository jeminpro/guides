import type { GuideMeta } from "./types";
import { withBase } from "../lib/base";
import {
  GUIDE_DESCRIPTION,
  GUIDE_ID,
  GUIDE_TITLE,
  PAGE_COUNT
} from "./maths-tutor/meta";

export const guides: readonly GuideMeta[] = [
  {
    id: GUIDE_ID,
    title: GUIDE_TITLE,
    description: GUIDE_DESCRIPTION,
    href: withBase(`${GUIDE_ID}/`),
    pageCount: PAGE_COUNT,
    status: "ready",
    icon: "∑"
  }
];

export function getGuide(id: string): GuideMeta | undefined {
  return guides.find((guide) => guide.id === id);
}
