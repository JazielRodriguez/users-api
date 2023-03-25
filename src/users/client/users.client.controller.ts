import { Controller, Get, Render } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('get')
  @Render('users/get-users')
  root() {
    return { title: 'Get Users', route: '/users/get-users' };
  }
}
