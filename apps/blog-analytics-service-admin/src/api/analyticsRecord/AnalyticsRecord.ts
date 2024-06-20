export type AnalyticsRecord = {
  createdAt: Date;
  id: string;
  likes: number | null;
  postId: string | null;
  updatedAt: Date;
  views: number | null;
};
