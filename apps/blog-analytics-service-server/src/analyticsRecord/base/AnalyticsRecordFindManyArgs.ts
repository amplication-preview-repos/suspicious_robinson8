/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalyticsRecordWhereInput } from "./AnalyticsRecordWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AnalyticsRecordOrderByInput } from "./AnalyticsRecordOrderByInput";

@ArgsType()
class AnalyticsRecordFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AnalyticsRecordWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AnalyticsRecordWhereInput, { nullable: true })
  @Type(() => AnalyticsRecordWhereInput)
  where?: AnalyticsRecordWhereInput;

  @ApiProperty({
    required: false,
    type: [AnalyticsRecordOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AnalyticsRecordOrderByInput], { nullable: true })
  @Type(() => AnalyticsRecordOrderByInput)
  orderBy?: Array<AnalyticsRecordOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AnalyticsRecordFindManyArgs as AnalyticsRecordFindManyArgs };
