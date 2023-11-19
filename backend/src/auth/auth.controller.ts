import { Controller, Get, Inject, Query, UseGuards, OnModuleInit, Post, Res, Body, Req } from '@nestjs/common';
import { pipe, switchMap, of } from 'rxjs';
// import { AuthGuard } from 'src/redis/redis.module';
// eslint-disable-next-line node/no-extraneous-import
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,) { }

    @Post('google')
    async googleAuthRedirect(@Body('code') code: string, @Res() res: Response) {
        return await this.authService.googlLoginCallback(code, res);
    }

    @UseGuards(JwtAuthGuard)
    @Get('logout')
    async logout(@Res() res: Response) {
        // return await this.authService.logout(res);
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    async getCurrentUser(@Req() req: Request) {
        // const user = await this.authService.getCurrentUser(req);
        // return user;
    }
}
