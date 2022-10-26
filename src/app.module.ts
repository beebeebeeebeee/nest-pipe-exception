import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from './service';
import { RequestInterceptor } from './interceptor';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { CustomValidatorPipe } from './validator';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RequestInterceptor],
})
export class AppModule {}
