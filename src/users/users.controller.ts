import { Controller, Get, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('get')
  findAll() {
    return this.usersService.getAll();
  }
  @Get('update')
  updateUser() {
    return this.usersService.updateUser();
  }
}
