export type GuideStatus = "ready" | "draft";

export type GuideMeta = {
  id: string;
  title: string;
  description: string;
  href: string;
  pageCount: number;
  status: GuideStatus;
  icon: string;
};
