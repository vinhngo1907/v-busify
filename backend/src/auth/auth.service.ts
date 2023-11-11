import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppConfigService } from 'src/config/app-config.service';
import { DatabaseService } from 'src/database/database.service';
import { AppLoggerService } from 'src/logger/logger.service';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class AuthService {
    private readonly logger = new AppLoggerService(AuthService.name);
    private loggerService: Logger
    constructor(
        private readonly prismaService: DatabaseService,
        private readonly redisService: RedisService,
        private readonly jwtService: JwtService,
        private readonly appConfig: AppConfigService,
        // private readonly bryptService: BcryptService,
      ) {}

    // async onModuleInit() {
    //     try {
    //         // ----------------- listening on topic update status exchange qoc --------------- //
    //         const consumerProfileUser = await this.kafkaService.GetUser('auth-microservice-profile');
    //         await consumerProfileUser.connect();
    //         await consumerProfileUser.subscribe({
    //             topic: 'profile_user',
    //             fromBeginning: true
    //         });
    //         await consumerProfileUser.run({
    //             eachMessage: async ({ topic, partition, message }) => {
    //                 try {
    //                     this.loggerService.log("receiver topic: " + topic);
    //                     console.log({ message: JSON.parse( message.value as any) });
    //                 } catch (err) {
    //                     this.loggerService.error("failed to listen topic: " + topic);
    //                 }
    //             }
    //         })
    //     } catch (err) {
    //         this.loggerService.error("An error while init the module exchange", err);
    //     }
    // }
    // showAllUser(
    //     page: number = 1,
    //     limit: number = 10,
    //     status: string = undefined,
    //     order_by: string = 'desc'
    // ) {
    //     try {
    //         const filderObj = { status: status };
    //         const obj = Object.keys(filderObj).length >= 1 ? { ...filderObj } : {}
    //         return from(this.datbaseService.user.findMany({
    //             where: obj,
    //             take: Number(limit),
    //             skip: (Number(page) - 1) * Number(limit),
    //             orderBy: {
    //                 id: order_by === 'desc' ? 'desc' : 'asc',
    //             },
    //         }));
    //     } catch (err: any) {
    //         throw err;
    //     }
    // }
}
