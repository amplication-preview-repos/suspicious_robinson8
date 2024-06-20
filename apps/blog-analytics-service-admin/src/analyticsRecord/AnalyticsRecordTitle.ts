import { AnalyticsRecord as TAnalyticsRecord } from "../api/analyticsRecord/AnalyticsRecord";

export const ANALYTICSRECORD_TITLE_FIELD = "postId";

export const AnalyticsRecordTitle = (record: TAnalyticsRecord): string => {
  return record.postId?.toString() || String(record.id);
};
