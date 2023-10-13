import { Module } from '@nestjs/common';
import { BusController } from './bus.controller';
import { BusService } from './bus.service';
import { DatabaseService } from 'src/database/database.service';
// import { KafkaService } from 'src/kafka/kafka.service';

@Module({
  controllers: [BusController],
  providers: [BusService, DatabaseService]
})
export class BusModule {}
