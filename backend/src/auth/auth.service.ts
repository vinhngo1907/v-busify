import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppConfigService } from 'src/config/app-config.service';
import { DatabaseService } from 'src/database/database.service';
import { AppLoggerService } from 'src/logger/logger.service';
import { RedisService } from 'src/redis/redis.service';
import { Response } from 'express';
import axios from 'axios';

@Injectable()
export class AuthService {
	private readonly logger = new AppLoggerService(AuthService.name);
	private loggerService: Logger
	constructor(
		private readonly prismaService: DatabaseService,
		private readonly redisService: RedisService,
		private readonly jwtService: JwtService,
		private readonly appConfig: AppConfigService,
		// private readonly bryptService: BcryptService,
	) { }

	async googlLoginCallback(code: string, res: Response) {
		try {
		} catch (err) {
			this.loggerService.error("An error while init the module exchange", err);
		}
	}
	async getGoogleAuthToken(code: string) {
		try {
			
		} catch (err: any) {
			throw err;
		}
	}
}
