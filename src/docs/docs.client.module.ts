import { Module } from '@nestjs/common';
import { EndpointsController } from './endpoints/endpoints.client.controller';
import { TutorialController } from './tutorial/tutorial.client.controller';

@Module({
  controllers: [EndpointsController, TutorialController],
})
export class DocsModule {}
