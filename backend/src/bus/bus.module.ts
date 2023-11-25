import { Module } from '@nestjs/common';
import { BusController } from './bus.controller';
import { BusService } from './bus.service';
import { DatabaseService } from 'src/database/database.service';
import { JwtModule } from '@nestjs/jwt';
import { AppConfigService } from 'src/config/app-config.service';

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
    controllers: [BusController],
    providers: [BusService, DatabaseService]
})
export class BusModule { }
