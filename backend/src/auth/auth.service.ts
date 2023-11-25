import { Injectable, Logger, NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppConfigService } from 'src/config/app-config.service';
import { DatabaseService } from 'src/database/database.service';
import { AppLoggerService } from 'src/logger/logger.service';
import { RedisService } from 'src/redis/redis.service';
import { Response } from 'express';
import axios from 'axios';
import TokenUtil from './utils/token';

@Injectable()
export class AuthService {
	private readonly logger = new AppLoggerService(AuthService.name);
	private loggerService: Logger
	constructor(
		private readonly prismaService: DatabaseService,
		private readonly redisService: RedisService,
		private readonly jwtService: JwtService,
		private readonly appConfig: AppConfigService,
		private readonly tokenUtil: TokenUtil,
	) { }

	async googlLoginCallback(code: string, res: Response) {
		try {
			const { id_token } = await this.getGoogleAuthToken(code);
			const decodedUser: any = this.jwtService.decode(id_token); // TODO: fix any with interface
			const { token } = this.tokenUtil.createToken(decodedUser.email, decodedUser.sub);
			// Check user exist
			const user = await this.prismaService.users.findUnique({
				where: {
					email: decodedUser.email
				}
			});
			if (user) {
				return res.status(202)
					.cookie('jwt', token, {
						httpOnly: true,
					}).send(user);
			}

			const newUser = await this.prismaService.users.create({
				data: {
					email: decodedUser.email,
					name: decodedUser.name,
					id: decodedUser.sub,
					picture: decodedUser.picture,
				}
			});

			res.status(202).cookie('jwt', token, {
				httpOnly: true,
				maxAge: 60 * 1000,
			}).send(newUser);
		} catch (err) {
			console.log(err);
			this.loggerService.error("An error while init the module exchange", err);
		}
	}

	async getGoogleAuthToken(code: string) {
		const url = 'https://oauth2.googleapis.com/token';
		const values = {
			code,
			client_id: this.appConfig.googleConfig.GOOGLE_CLIENT_ID,
			client_secret: this.appConfig.googleConfig.GOOGLE_SECRET,
			redirect_uri: 'http://localhost:5173/google',
			grant_type: 'authorization_code',
		};
		try {
			const response = await axios.post(url, new URLSearchParams(values), {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});
			console.log({response});
			return response.data;
		} catch (error) {
			throw new NotAcceptableException(error?.message || error); //TODO: fix error type
		}
	}

	async getCurrentUser(req: any) {
		if (!req.user) {
			throw new UnauthorizedException('You are not logged in or there may be an error. Please login again!');
		}

		const user = await this.prismaService.users.findUnique({
			where: {
				id: req.user.id
			}
		});

		return user;
	}

	async logout(res: Response) {
		res.clearCookie('jwt').status(200).send({ message: "Successfully logged out." })
	}
}
