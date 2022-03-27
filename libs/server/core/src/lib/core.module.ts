import { Module } from '@nestjs/common';
import { ConfigurationModule } from '@server/configuration';
import { DatabaseModule } from '@server/database';

@Module({
  imports: [ConfigurationModule, DatabaseModule],
  exports: [],
})
export class CoreModule {}
