import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { DatabaseService } from 'src/database/database.service';
// import { KafkaService } from 'src/kafka/kafka.service';
// import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  imports:[DatabaseModule, DatabaseModule],
  providers: [AuthService, DatabaseService],
  controllers: [UserController]
})
export class UserModule {}
