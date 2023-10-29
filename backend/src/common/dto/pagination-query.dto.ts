// import { ApiPropertyOptional } from '@nestjs/swagger';

import { Type } from "class-transformer";
import { IsNumber, IsOptional, Min } from "class-validator";

export class PaginationQueryDTO {
    @IsNumber()
    @IsOptional()
    @Min(1)
    @Type(() => Number)
    limit: number;

    @IsNumber()
    @IsOptional()
    @Min(0)
    @Type(() => Number)
    offset: number
}