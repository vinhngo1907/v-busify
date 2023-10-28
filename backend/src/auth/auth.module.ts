import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports:[DatabaseModule, DatabaseModule],
  providers: [AuthService, DatabaseService],
  controllers: [AuthController]
})
export class AuthModule {}
