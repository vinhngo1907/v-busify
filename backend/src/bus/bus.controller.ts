import {
    Controller,
    Get, Post, Delete, Put, Patch, Body, Query, Param,
    HttpException
} from '@nestjs/common';
import { BusService } from './bus.service';
import { map, of, switchMap } from 'rxjs';
import { BusDTO, ContractorDTO } from './dto';

@Controller('bus')
export class BusController {
    constructor(
        private readonly busService: BusService
    ) { }
    @Get('schedule')
    getBusSchedule(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Query('page') order_by: string = 'desc',
    ) {
        return this.busService.findBusSchedule(page, limit, order_by);
    }
    @Post('bus')
    async createBus(@Body() bus: BusDTO) {
        try {
            return this.busService.createBus(bus);
        } catch (error) {
            if (error instanceof HttpException) {
                throw new HttpException(error.message, error.getStatus());
            }
        }
    }
    @Delete('/:id')
    async removeContractor(
        @Param('id') id: string,
        @Body('title') title: string, @Body('image') image: string) {

        return await this.busService.reomveContractor(id);
    }
    @Delete('/:id')
    async removeConductor(@Param('id') id: string) {
        return await this.busService.removeConductor(id);
    }

    @Post('conductor')
    async createConductor(@Body() conductor: ContractorDTO) {
        return this.busService.createConductor(conductor);

    }

    @Post('contractor')
    async createContractor(@Body() contractor: ContractorDTO) {
        try {
            return this.busService.createContractor(contractor);
        } catch (error) {
            if (error instanceof HttpException) {
                throw new HttpException(error.message, error.getStatus());
            }
        }
    }
}
