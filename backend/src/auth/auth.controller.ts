import { Controller, Get, Inject, Query, UseGuards, OnModuleInit } from '@nestjs/common';
import { pipe, switchMap, of } from 'rxjs';
// import { AuthGuard } from 'src/redis/redis.module';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { DatabaseService } from 'src/database/database.service';
import { HttpService } from '@nestjs/axios';
import { Logger } from 'kafkajs';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private userService: AuthService,
        // @Inject('CLIENT_SERVICE') private readonly client: ClientProxy
    ) { }
    
    @Get()
    // @UseGuards(new AuthGuard())
    showAllUser(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Query('status') status: string = undefined,
        @Query('order_by') order_by: string = 'desc',
    ) {
        try {
           return [];
        } catch (err: any) {
            throw err;
        }
    }
}
