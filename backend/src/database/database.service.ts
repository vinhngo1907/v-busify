import { Injectable, OnModuleInit, Logger, INestApplication } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { camelCase, flattenDeep, snakeCase } from 'lodash';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
    private logger: Logger;

    constructor() {
        super();
        this.logger = new Logger(DatabaseService.name);
    }

    async onModuleInit() {
        await this.$connect();
        this.logger.log('Database connected');
    }

    async enableShutdownHooks(app: INestApplication) {
        this.$on('beforeExit', async () => {
            await app.close();
            this.logger.log('Primsa disconnected');
        });
    }

    async close() {
        await this.$disconnect();
    }
    async cleanDatabse(){
        if(process.env.NODE_ENV !== 'test') return;
        const models = Reflect.ownKeys(this).filter(key => key[0] !== "_");
        return Promise.all(models.map((modelKey) => this[modelKey].deleteMany()));
    }
    
    // async dropDatabase() {
    //     if (process.env.NODE_ENV === 'production') {
    //         throw new Error('Cannot drop database in production');
    //     }

    //     const modelKeys = Prisma.dmmf.datamodel.models.map((m) => m.name);
    //     return Promise.all(
    //         modelKeys.map((modelName) => this[camelCase(modelName)].deleteMany()),
    //     );
    // }
//     async seedDatabase() {
//         if (process.env.NODE_ENV === 'production') {
//             throw new Error('Cannot seed database in production');
//         }

//         const modelKeys = Prisma.dmmf.datamodel.models.map((m) => m.name);

//         await Promise.all(
//             modelKeys.map((model) => {
//                 const files = fs.readdirSync(
//                     path.resolve(__dirname, `../${snakeCase(model)}/mocks`),
//                 );

//                 const modelData = [];

//                 files.forEach((file) => {
//                     const fileName = path.resolve(
//                         __dirname,
//                         `../${snakeCase(model)}/mocks`,
//                         file,
//                     );
//                     const data = fs.readFileSync(fileName, 'utf8');

//                     modelData.push(JSON.parse(data));
//                 });

//                 return this[camelCase(model)].createMany({
//                     data: flattenDeep(modelData),
//                     skipDuplicates: true,
//                 });
//             }),
//         );
//     }
}