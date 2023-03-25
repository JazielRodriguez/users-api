import { Module } from '@nestjs/common';
import { UsersController } from './users.client.controller';

@Module({
  controllers: [UsersController],
})
export class UsersModule {}
