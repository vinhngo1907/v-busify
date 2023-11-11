import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BusModule } from './bus/bus.module';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';
import { AppConfigService } from './config/app-config.service';
import { ConfigService } from '@nestjs/config';
import { AppConfigModule } from 'src/config/app-config.module';
import { LoggerMiddleware } from './common/logger/logger.middleware';

@Module({
	imports: [
		AuthModule,
		BusModule,
		DatabaseModule,
		AppConfigModule
	],
	controllers: [],
	providers: [
		DatabaseService,
		ConfigService,
		AppConfigService
	],
})

export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('*');
	}
}
