import * as graphql from "@nestjs/graphql";
import { AnalyticsRecordResolverBase } from "./base/analyticsRecord.resolver.base";
import { AnalyticsRecord } from "./base/AnalyticsRecord";
import { AnalyticsRecordService } from "./analyticsRecord.service";

@graphql.Resolver(() => AnalyticsRecord)
export class AnalyticsRecordResolver extends AnalyticsRecordResolverBase {
  constructor(protected readonly service: AnalyticsRecordService) {
    super(service);
  }
}
