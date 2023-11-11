import { IsInt, IsNotEmpty, IsString, isString } from "class-validator";

export class BusDTO {
    @IsString()
    @IsNotEmpty({ message: 'Bus number is required' })
    number: string;

    @IsInt()
    @IsNotEmpty()
    capacity: number;

    @IsString()
    @IsNotEmpty()
    contractorId: string;

    @IsString()
    @IsNotEmpty()
    conductorId: string;

    @IsString()
    @IsNotEmpty()
    busNumber: string;
}

export class BusCreateDTO {
    @IsString()
    @IsNotEmpty({ message: 'Bus number is required' })
    number: string;
}

export class ScheduleDTO {
    @IsString()
    @IsNotEmpty()
    busNumber: string;

    @IsString()
    @IsNotEmpty()
    from: string;
    to: string;
    departureTime: string;
    days: [];
    checkpoints: [];
    ticketPrice: number
}

export class ContractorDTO {
    @IsString()
    @IsNotEmpty({ message: "name field is required!" })
    name: string;

    @IsString()
    @IsNotEmpty({ message: "phone field is required!" })
    phone: string;
}