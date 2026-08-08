import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSpecialOrderDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  phone: string;

  @IsString()
  @IsNotEmpty()
  eventDate: string;

  @IsString()
  @IsNotEmpty()
  orderType: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  guests?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  flavor?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4000)
  message: string;
}
