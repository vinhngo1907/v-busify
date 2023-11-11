import { HttpException, HttpStatus, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { from, of } from 'rxjs';
import { DatabaseService } from 'src/database/database.service';
import { BusDTO } from './dto';
import { v4 as uuidv4 } from 'uuid';
import { BusBadRequestException } from './bus.exception';

@Injectable()
export class BusService {
    private readonly logger: Logger = new Logger(BusService.name);
    constructor(private databaseService: DatabaseService,) { }

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
            // throw new HttpException(error.message, error.status);
            throw new BusBadRequestException('create');
        }
    }

    async getConductors() {
        try {
            return this.databaseService.conductor.findMany({});
        } catch (error: any) {
            throw new HttpException('Conductor not found', 404);
        }
    }

    async createContractor(contractor: any){
        return this.databaseService.contractor.create({
            data:{
                ...contractor,
                id: uuidv4()
            }
        })
    }

    async reomveContractor(contractorId: any){
        return this.databaseService.contractor.delete({
            where:{
                id: contractorId
            }
        })
    }

    async createConductor(conductor: any) {
        return this.databaseService.contractor.create({
            data: {
                ...conductor,
                id: uuidv4(),
            },
        });
    }

    async removeConductor(conductorId: string) {
        return this.databaseService.conductor.delete({
            where: {
                id: conductorId
            }
        });
    }

    async getBookedTickets() { }
}
