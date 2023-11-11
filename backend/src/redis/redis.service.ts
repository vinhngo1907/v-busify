import { Injectable } from "@nestjs/common";
import Redis from "ioredis";
import { AppLoggerService } from "src/common/logger/logger.service";
import { AppConfigService } from "src/config/app-config.service";
@Injectable()
export class RedisService {
    client: Redis
    private logger: AppLoggerService;
    constructor(private readonly appConfig: AppConfigService) {
        this.logger = new AppLoggerService(RedisService.name);
        this.client = new Redis({
            host: this.appConfig.redisConfig.host,
            port: this.appConfig.redisConfig.port,
            db: this.appConfig.redisConfig.db,
            password: this.appConfig.redisConfig.password
        });

        this.logger.log(`Redis Connected`);
    }

    async close() {
        this.client.quit();
    }
}