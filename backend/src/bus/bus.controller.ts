import { 
    Controller,
    Get, Post, Delete, Put, Patch, Body, Query, Param, 
    HttpException 
} from '@nestjs/common';
import { BusService } from './bus.service';
import { map, of, switchMap } from 'rxjs';
import { BusDTO } from './dto';

@Controller('bus')
export class BusController {
    constructor(
        private readonly busService: BusService
    ) { }
    @Get()
    getBusSchedule(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Query('page') order_by: string = 'desc',
    ) {
        return [];
        // this.client.emit('hello','Hello from RabbitMQ')
        // return this.productService.all();
        // return (this.busService.all(page, limit, order_by)).pipe(
        //     switchMap(data => {
        //         return of({
        //             msg: 'Successfully',
        //             data: data
        //         })
        //     })
        // )
    }
    // @Get(':id')
    // async get(@Param('id') id: number) {
    //     return this.productService.get(id)
    // }
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
    // @Put('/:id')
    // async update(
    //     @Param('id') id: number,
    //     @Body('title') title: string, @Body('image') image: string) {
    //     // this.client.emit('product_created', product)
    //     return (await this.productService.update(id, { title, image })).pipe(
    //         map(data => {
    //             return of({
    //                 msg: "Updated product in successfully",
    //                 data: data
    //             });
    //         })
    //     );
    // }
    // @Delete('/:id')
    // async delete(@Param('id') id: number) {
    //     // const product = await this.productService.create({ title, image })
    //     // this.client.emit('product_created', product)
    //     return (await this.productService.delete(id)).pipe(
    //         map(data => {
    //             return of({
    //                 msg: "Deleted product in successfully",
    //                 data: data
    //             });
    //         })
    //     );
    // }

    // @Post('/:id/like')
    // async like(@Param('id') id: number) {
    //     const product = await this.productService.get(id)
    //     console.log(product);

    //     return this.productService.update(id, {
    //         // likes: product.likes + 1
    //     })

    // }
}
