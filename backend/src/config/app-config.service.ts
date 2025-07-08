import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleConfig, RedisConfig } from 'src/redis/redis.types';
import { configKeys } from './constants';

@Injectable()
export class AppConfigService {
    constructor(private readonly configService: ConfigService) { }

    get port(): number {
        return this.configService.get('APP_PORT') || 3333;
    }

    get JwtExpiration(): number {
        return this.configService.get(configKeys.JWT_EXPIRATION) || 10 * 60 * 1000;
      }
    get jwtSecret(): string {
        return this.configService.get(configKeys.JWT_SECRET);
      }

    get redisConfig(): RedisConfig{
        return {
            url: process.env.REDIS_URL || 'redis://localhost:6379'
            // host: this.configService.get(configKeys.REDIS_HOST),
            // port: this.configService.get(configKeys.REDIS_PORT),
            // password: this.configService.get(configKeys.REDIS_PASSWORD),
            // db: this.configService.get(configKeys.REDIS_DB),
            // ex: this.configService.get(configKeys.REDIS_EX),
        }
    }

    get googleConfig(): GoogleConfig{
        return {
            GOOGLE_CLIENT_ID: this.configService.get(configKeys.GOOGLE_CLIENT_ID),
            GOOGLE_SECRET: this.configService.get(configKeys.GOOGLE_SECRET)
        }
    }
}