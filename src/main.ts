import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

const start = async () => {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)

  const PORT = config.get<number>('PORT');
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  
  await app.listen(PORT || 3050, () => {
    console.log(`Server started at ${PORT}`);
  });
};
start();
