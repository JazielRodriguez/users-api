import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersApiModule } from './users/api/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/client/users.client.module';
@Module({
  imports: [
    UsersApiModule,
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: ['.env', 'env.development.local', 'env.development'],
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
