import { IsNumber, IsString, IsUrl, IsUUID } from 'class-validator';
import { Book } from '../interfaces/book';

export class CreateBookDto implements Book {
  @IsUUID()
  readonly id!: string;
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
  @IsUrl()
  readonly cover!: string;
}
