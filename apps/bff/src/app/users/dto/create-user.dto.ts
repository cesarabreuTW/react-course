import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsUrl,
  IsUUID,
} from 'class-validator';
import { User } from '../interfaces/user';

export class CreateUserDto implements User {
  @IsUUID()
  readonly id!: string;
  @IsBoolean()
  isActive!: boolean;
  @IsString()
  balance!: string;
  @IsUrl()
  picture!: string;
  @IsNumber()
  age!: number;
  @IsString()
  name!: string;
  @IsString()
  gender!: string;
  @IsString()
  company!: string;
  @IsString()
  @IsEmail()
  email!: string;
  @IsString()
  @IsPhoneNumber('CL')
  phone!: string;
  @IsString()
  address!: string;
  @IsString()
  registered!: string;
}
