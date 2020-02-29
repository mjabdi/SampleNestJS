import { Module } from '@nestjs/common';
import { LoggerModule } from "nestjs-pino";
import { MongooseModule } from '@nestjs/mongoose';
import * as config from 'config';
import { UserModule } from './User/user.module';

@Module({
  imports: [LoggerModule.forRoot(),
  MongooseModule.forRoot(config.get('db')),
  UserModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
