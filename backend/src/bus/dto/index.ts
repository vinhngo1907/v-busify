import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class BusDTO {
    @IsString()
    @IsNotEmpty({message: 'Bus number is required'})
    number: string;  

    @IsInt()
    @IsNotEmpty()
    capacity: number;

    @IsString()
    @IsNotEmpty()
    constructorId: string;    
    
    @IsString()
    @IsNotEmpty()
    conductorId: string;    
    
    @IsString()
    @IsNotEmpty()
    busNumber: string;    
}