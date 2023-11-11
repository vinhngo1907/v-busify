import { Module } from '@nestjs/common';
import { BusController } from './bus.controller';
import { BusService } from './bus.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
    controllers: [BusController],
    providers: [BusService, DatabaseService]
})
export class BusModule { }
