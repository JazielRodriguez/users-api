import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsNumberString } from 'class-validator';
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  userId: string;
  @IsNumberString()
  age: number;
}
