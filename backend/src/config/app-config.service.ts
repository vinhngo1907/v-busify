import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RedisConfig } from 'src/redis/redis.types';
import { configKeys } from './constants';

@Injectable()
export class AppConfigService {
    constructor(private readonly configService: ConfigService) { }

    get port(): number {
        return this.configService.get('PORT') || 3333;
    }

    get redisConfig(): RedisConfig{
        return {
            host: this.configService.get(configKeys.REDIS_HOST),
            port: this.configService.get(configKeys.REDIS_PORT),
            password: this.configService.get(configKeys.REDIS_PASSWORD),
            db: this.configService.get(configKeys.REDIS_DB),
            ex: this.configService.get(configKeys.REDIS_EX),
        }
    }
}