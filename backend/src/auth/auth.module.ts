import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { DatabaseService } from 'src/database/database.service';
import { JwtModule } from '@nestjs/jwt';
import { AppConfigService } from 'src/config/app-config.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
	imports: [
		JwtModule.registerAsync({
			useFactory: async (appConfig: AppConfigService) => ({
				secret: appConfig.jwtSecret,
				signOptions: {
					expiresIn: appConfig.JwtExpiration,
				},
			}),
			inject: [AppConfigService],
		}),
	],
	providers: [AuthService, DatabaseService, JwtStrategy],
	controllers: [AuthController]
})
export class AuthModule { }
