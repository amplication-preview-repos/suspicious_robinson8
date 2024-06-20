import { SortOrder } from "../../util/SortOrder";

export type AnalyticsRecordOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  likes?: SortOrder;
  postId?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
};
