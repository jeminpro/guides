import type { GuideMeta } from "./types";
import { withBase } from "../lib/base";
import {
  GUIDE_DESCRIPTION,
  GUIDE_ID,
  GUIDE_TITLE,
  PAGE_COUNT
} from "./maths-tutor/meta";
import {
  GUIDE_DESCRIPTION as VOCABULARY_DESCRIPTION,
  GUIDE_ID as VOCABULARY_ID,
  GUIDE_TITLE as VOCABULARY_TITLE,
  PAGE_COUNT as VOCABULARY_PAGE_COUNT
} from "./vocabulary/meta";

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
