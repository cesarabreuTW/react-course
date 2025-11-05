import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateAuthorDto {
    @IsString()
    readonly name!: string;
    @IsNumber()
    age!: number;
    @IsString()
    country!: string;
    @IsString()
    bio!: string;
    @IsArray()
    @IsString({ each: true })
    books!: string[];
}
