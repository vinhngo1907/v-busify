import { HttpException, HttpStatus, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { from, of } from 'rxjs';
import { DatabaseService } from 'src/database/database.service';
import { BusDTO } from './dto';
// import { KafkaService } from 'src/kafka/kafka.service';

@Injectable()
export class BusService implements OnModuleInit {
    private readonly logger: Logger = new Logger(BusService.name);
    constructor(
        private databaseService: DatabaseService,
        // private kafkaService: KafkaService
    ) { }

    async findBusSchedule(page: number = 1, limit: number = 10, order_by: string = 'desc') {
        return {
            today: new Date(),
            schedule: await this.databaseService.bus.findMany({})
        }
    }

    async createBus(bus: BusDTO) {
        try {
            const busData = await this.databaseService.bus.findFirst({
                where: { number: bus.number }
            });

            if (busData) {
                throw new HttpException('Bus already exist', 400);
            }

            return this.databaseService.bus.create({
                data: {
                    ...bus,
                },
            });
        } catch (error) {

        }
        // const newProduct = await this.databaseService.product.create({
        //     data: { ...data, likes: 0 }
        // });
        // await this.kafkaService.SendMessage('product_created', {
        //     // type: 'sub',
        //     id: newProduct.id,
        //     step_count: 0,
        //     status: "created product",
        //     statusToUpdated: JSON.stringify(newProduct),
        //     steps: [
        //         'product_created'
        //     ]
        // });

        return {}
    }

    async get(id: number) {
        try {
            const product = await this.databaseService.product.findUnique({ where: { id: Number(id) } });
            if (!product) {
                throw new HttpException('This product does not exist!', HttpStatus.BAD_REQUEST);
            }
            return of({
                product
            })
        } catch (err: any) {
            console.log(err);
            throw err
        }
    }

    async update(id: number, data): Promise<any> {
        try {
            const updatedProduct = await this.databaseService.product.update({
                where: {
                    id: Number(id)
                },
                data: {
                    ...data
                }
            });
            if (!updatedProduct) {
                throw new HttpException('This product does not exist!', HttpStatus.BAD_REQUEST);
            }
            return of({
                product: updatedProduct
            })
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(id: number): Promise<any> {
        try {
            const deletedProduct = await this.databaseService.product.delete({ where: { id: Number(id) } });
            if (!deletedProduct) {
                throw new HttpException('This product does not exist!', HttpStatus.BAD_REQUEST);
            }
            return of({
                product: deletedProduct
            })
        } catch (error) {
            console.log(error);
            throw error;
        }

    }
}
