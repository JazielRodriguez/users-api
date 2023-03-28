import { Controller, Get, Render } from '@nestjs/common';

@Controller('docs')
export class EndpointsController {
  @Get('endpoints')
  @Render('docs/endpoints')
  root() {
    return { title: 'Endpoints' };
  }
}
