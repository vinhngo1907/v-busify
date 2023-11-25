import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app-config.service';
import { DatabaseService } from './database/database.service';
import { AppLoggerService } from 'src/logger/logger.service';
import { HttpExceptionFilter } from './common/error/http-exception.filter';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: ['http://localhost:3000'],
		credentials: true,
	});

	app.useGlobalPipes(new ValidationPipe({
		transform: true,
		whitelist: true
	}
	));

	app.useGlobalFilters(new HttpExceptionFilter());

	const appConfigService = app.get(AppConfigService);

	const databaseSerivce = app.get(DatabaseService);
	databaseSerivce.$connect();

	const logger = app.get(AppLoggerService);
	app.useLogger(logger);

	const port = appConfigService.port;

	// setupSwagger(app);

	await app.listen(port, () => {
		logger.log(`Server is running on port ${port}`, 'Bootstrap');
	});

	await databaseSerivce.enableShutdownHooks(app);
}
bootstrap();
