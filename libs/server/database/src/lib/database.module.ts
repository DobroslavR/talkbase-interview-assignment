import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigSchema } from '@server/configuration';

const getSSLConfiguratuion = (configService: ConfigService<ConfigSchema>) => {
  const env = configService.get('NODE_ENV');
  if (env === 'production') {
    return {
      ssl: {
        rejectUnauthorized: Boolean(
          configService.get('POSTGRES_DB_SSL_REJECT_UNAUTHORIZED')
        ),
      },
    };
  }
  return {};
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<ConfigSchema>) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [__dirname + '/../**/*.entity.ts'],
        autoLoadEntities: true,
        synchronize: configService.get('POSTGRES_DB_SYNC'),
        ...getSSLConfiguratuion(configService),
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
