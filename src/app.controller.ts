import { Get, Controller, Render } from '@nestjs/common';
@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { author: 'https://github.com/JazielRodriguez/users-api' };
  }
}
