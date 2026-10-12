import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import  type { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  await app.listen(process.env.PORT ?? 5000);
}
await bootstrap();
