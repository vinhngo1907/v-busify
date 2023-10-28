import { HttpException, HttpStatus, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { from, of } from 'rxjs';
import { DatabaseService } from 'src/database/database.service';
import { BusDTO } from './dto';
import { v4 as uuidv4 } from 'uuid';

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
        } catch (error: any) {
            throw new HttpException(error.message, error.status);
        }
    }

    async getConductors() {
        try {
            return this.databaseService.conductor.findMany({});
        } catch (error: any) {
            throw new HttpException(error.message, error.status);
        }
    }

    async createContractor(contractor: any) {
        return this.databaseService.contractor.create({
          data: {
            ...contractor,
            id: uuidv4(),
          },
        });
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
