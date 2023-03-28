import { Controller, Get, Render } from '@nestjs/common';

@Controller('docs')
export class TutorialController {
  @Get('tutorial')
  @Render('docs/tutorial')
  root() {
    return { title: 'working!!!' };
  }
}
