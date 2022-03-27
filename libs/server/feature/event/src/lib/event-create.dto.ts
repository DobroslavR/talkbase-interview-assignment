import { IsDateString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EventCreateDto {
  @IsString()
  @ApiProperty({ default: 'Europe/Prague' })
  timezone!: string;

  @IsString()
  @IsDateString()
  @ApiProperty({ default: '2019-09-07T15:50-04:00' })
  utcDate!: string;
}
