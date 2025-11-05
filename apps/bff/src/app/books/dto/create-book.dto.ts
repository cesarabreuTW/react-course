import { IsNumber, IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    readonly title!: string;
    @IsNumber()
    readonly authorId!: number;
    @IsNumber()
    readonly pages!: number;
    @IsNumber()
    readonly year!: number;
    @IsString()
    readonly description!: string;
}
