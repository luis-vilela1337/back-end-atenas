import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { RootModule } from './di/root.module';

const configClassValidator = (app: INestApplication) =>
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  const payloadSize = Number(process.env.PAYLOAD_SIZE_MB);
  app.use(bodyParser.json({ limit: `${payloadSize}mb` }));
  app.use(bodyParser.urlencoded({ limit: `${payloadSize}mb`, extended: true }));
  app.enableCors({})
  configClassValidator(app);

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
