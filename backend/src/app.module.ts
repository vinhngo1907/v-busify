import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BusModule } from './bus/bus.module';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';
import { AppConfigService } from './config/appConfigService';
import { ConfigService } from '@nestjs/config';

@Module({
	imports: [
		AuthModule, 
		BusModule,
		DatabaseModule,
	],
	controllers: [],
	providers: [
		DatabaseService,
		ConfigService,
		AppConfigService
	],
})

export class AppModule {}
