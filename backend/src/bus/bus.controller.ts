import {
    Controller,
    Get, Post, Delete, Put, Patch, Body, Query, Param,
    HttpException,
    UseGuards
} from '@nestjs/common';
import { BusService } from './bus.service';
import { BusDTO, ContractorDTO } from './dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('bus')
export class BusController {
    constructor(
        private readonly busService: BusService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get('schedule')
    getBusSchedule(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Query('page') order_by: string = 'desc',
    ) {
        return this.busService.findBusSchedule(page, limit, order_by);
    }

    @UseGuards(JwtAuthGuard)
    @Get('conductor')
    getAllCondutors() {
        try {
            return this.busService.getConductors();
        } catch (error) {
            if (error instanceof HttpException) {
                throw new HttpException(error.message, error.getStatus());
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('booked-tickets')
    async getBookedTickets() {
        return this.busService.getBookedTickets();
    }

    @UseGuards(JwtAuthGuard)
    @Get('contractor')
    async getAllContractors() {
        try {
            return this.busService.getContractors();
        } catch (error) {
            if (error instanceof HttpException) {
                throw new HttpException(error.message, error.getStatus());
            }
        }
    }

    @UseGuards(JwtAuthGuard)
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

    @UseGuards(JwtAuthGuard)
    @Get("contractor/:id")
    async getContractorById(@Param('id') contractorId: string) {
        try {
            return this.busService.findContractorsById(contractorId);
        } catch (error) {
            if (error instanceof HttpException) {
                throw new HttpException(error.message, error.getStatus());
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('contractor/:id')
    async removeContractor(
        @Param('id') id: string,
        @Body('title') title: string, @Body('image') image: string) {

        return await this.busService.reomveContractor(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('conductor/:id')
    async removeConductor(@Param('id') id: string) {
        return await this.busService.removeConductor(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('conductor')
    async createConductor(@Body() conductor: ContractorDTO) {
        return this.busService.createConductor(conductor);

    }

    @UseGuards(JwtAuthGuard)
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
