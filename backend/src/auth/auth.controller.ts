import { Controller, Get, Inject, Query, UseGuards, OnModuleInit, Post, Res, Body, Req, Options } from '@nestjs/common';
import { pipe, switchMap, of } from 'rxjs';
// import { AuthGuard } from 'src/redis/redis.module';
// eslint-disable-next-line node/no-extraneous-import
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './utils/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,) { }

    @Options('google')
    handleOptions(@Res() res: Response) {
        // Add necessary headers for CORS
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.status(204).end();
    }

    @Get("")
    async test(@Req() req: Request, @Res() res: Response) {
        res.status(200).json({ message: "Success" });
    }

    @Post('google')
    async googleAuthRedirect(@Body('code') code: string, @Res() res: Response) {
        return await this.authService.googlLoginCallback(code, res);
    }

    @UseGuards(JwtAuthGuard)
    @Get('logout')
    async logout(@Res() res: Response) {
        return await this.authService.logout(res);
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    async getCurrentUser(@Req() req: Request) {
        const user = await this.authService.getCurrentUser(req);
        return user;
    }
}
