import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AppErrorExceptionFilter } from './modules/ErrorHandling';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AppErrorExceptionFilter());
  const port = process.env.PORT || 5000;
  await app.listen(port);
}
bootstrap();
