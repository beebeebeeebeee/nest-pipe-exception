import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestInterceptor } from './interceptor';
import { CustomValidatorPipe } from './validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(
  //   new CustomValidatorPipe({
  //     whitelist: true,
  //   }),
  // );
  app.useGlobalInterceptors(app.get(RequestInterceptor));

  await app.listen(3002);
}

void bootstrap();
