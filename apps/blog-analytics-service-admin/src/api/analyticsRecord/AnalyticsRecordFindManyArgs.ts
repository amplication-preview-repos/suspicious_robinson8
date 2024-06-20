import { AnalyticsRecordWhereInput } from "./AnalyticsRecordWhereInput";
import { AnalyticsRecordOrderByInput } from "./AnalyticsRecordOrderByInput";

export type AnalyticsRecordFindManyArgs = {
  where?: AnalyticsRecordWhereInput;
  orderBy?: Array<AnalyticsRecordOrderByInput>;
  skip?: number;
  take?: number;
};
