import { Controller, Get } from '@nestjs/common';
import { UsersPrivateService } from './users-private.service';

@Controller('api/users-private')
export class UsersPrivateController {
  constructor(private readonly usersPrivateService: UsersPrivateService) {}

  @Get()
  findAll() {
    return this.usersPrivateService.getAll();
  }
}
