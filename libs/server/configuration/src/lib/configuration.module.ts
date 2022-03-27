import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

export interface ConfigSchema {
  POSTGRES_HOST: string;
  POSTGRES_PORT: number;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
  POSTGRES_DB_SYNC: boolean;
  PORT: number;
  NODE_ENV: 'development' | 'production' | 'test';
  POSTGRES_DB_SSL_REJECT_UNAUTHORIZED: boolean;
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().positive(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB_SYNC: Joi.boolean(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number().default(3000).positive(),
        POSTGRES_DB_SSL_REJECT_UNAUTHORIZED: Joi.boolean(),
      }),
    }),
  ],
  exports: [ConfigModule],
})
export class ConfigurationModule {}
