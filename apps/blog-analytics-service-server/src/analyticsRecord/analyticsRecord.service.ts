import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticsRecordServiceBase } from "./base/analyticsRecord.service.base";

@Injectable()
export class AnalyticsRecordService extends AnalyticsRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
