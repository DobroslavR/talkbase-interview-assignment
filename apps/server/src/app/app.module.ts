import { Module } from '@nestjs/common';
import { CoreModule } from '@server/core';
import { EventModule } from '@server/feature/event';

@Module({
  imports: [CoreModule, EventModule],
})
export class AppModule {}
