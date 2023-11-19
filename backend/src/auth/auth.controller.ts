import { Controller, Get, Inject, Query, UseGuards, OnModuleInit, Post, Res, Body } from '@nestjs/common';
import { pipe, switchMap, of } from 'rxjs';
// import { AuthGuard } from 'src/redis/redis.module';
// eslint-disable-next-line node/no-extraneous-import
import {Request, Response} from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,) { }

    @Post('google')
    async googleAuthRedirect(@Body('code') code: string, @Res() res: Response) {
        return await this.authService.googlLoginCallback(code, res);
    }
}
