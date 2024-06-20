import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnalyticsRecordService } from "./analyticsRecord.service";
import { AnalyticsRecordControllerBase } from "./base/analyticsRecord.controller.base";

@swagger.ApiTags("analyticsRecords")
@common.Controller("analyticsRecords")
export class AnalyticsRecordController extends AnalyticsRecordControllerBase {
  constructor(protected readonly service: AnalyticsRecordService) {
    super(service);
  }
}
