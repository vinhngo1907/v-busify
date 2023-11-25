// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { AppConfigService } from 'src/config/app-config.service';
// import { DatabaseService } from 'src/database/database.service';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//     constructor(
//         private readonly appConfig: AppConfigService,
//         private readonly databaseService: DatabaseService,
//         private readonly jwtService: JwtService
//     ) {
//         super({
//             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//             ignoreExpiration: false,
//             secretOrKey: appConfig.jwtSecret,
//         });
//     }
//     async validateToken(token: string) {
//         try {
//             const user = this.jwtService.verify(token);
//             console.log({user});
//             return user;
//         } catch (err) {
//             console.log(err)
//             throw new UnauthorizedException(
//                 'You are not logged in or there may be an error. Please log in again.'
//             );
//         }
//     }
// }