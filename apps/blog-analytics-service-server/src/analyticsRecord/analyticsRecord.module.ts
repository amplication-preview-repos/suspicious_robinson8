import { Module } from "@nestjs/common";
import { AnalyticsRecordModuleBase } from "./base/analyticsRecord.module.base";
import { AnalyticsRecordService } from "./analyticsRecord.service";
import { AnalyticsRecordController } from "./analyticsRecord.controller";
import { AnalyticsRecordResolver } from "./analyticsRecord.resolver";

@Module({
  imports: [AnalyticsRecordModuleBase],
  controllers: [AnalyticsRecordController],
  providers: [AnalyticsRecordService, AnalyticsRecordResolver],
  exports: [AnalyticsRecordService],
})
export class AnalyticsRecordModule {}
