import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app-config.service';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe({
		transform: true,
		whitelist: true
	}
	));

	// app.useGlobalFilters(new HttpExceptionF)
	const appConfigService = app.get<AppConfigService>(AppConfigService);
	await app.listen(appConfigService.port);
}
bootstrap();
