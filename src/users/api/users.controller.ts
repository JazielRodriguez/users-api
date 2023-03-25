import {
  Controller,
  Get,
  Header,
  Patch,
  Req,
  Post,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('get')
  findAllUsers() {
    return this.usersService.getAll();
  }

  @Post('add')
  @Header('content-type', 'application/json')
  addUser(@Req() request: Request) {
    const { name, age } = request.body;
    return this.usersService.addUser(name, age);
  }

  @Delete('user/delete')
  deleteUser(@Req() request: Request) {
    const { userId } = request.body;
    return this.usersService.deleteUser(userId);
  }
  @Patch('update')
  @Header('content-type', 'application/json')
  updateUser(@Req() request: Request) {
    const { userId, age } = request.body;
    return this.usersService.updateUser(userId, age);
  }
}
