import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BusModule } from './bus/bus.module';
import { DatabaseModule } from './database/database.module';
// import { DatabaseService } from './database/database.service';
// import { AppConfigService } from './config/app-config.service';
// import { ConfigService } from '@nestjs/config';
import { AppConfigModule } from 'src/config/app-config.module';
import { LoggerMiddleware } from 'src/logger/logger.middleware';
import { RedisModule } from './redis/redis.module';

@Module({
	imports: [
		AuthModule,
		BusModule,
		DatabaseModule,
		AppConfigModule,
		RedisModule,
	],
	controllers: [],
	// providers: [
	// 	DatabaseService,
	// 	ConfigService,
	// 	AppConfigService
	// ],
})

export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('*');
	}
}
