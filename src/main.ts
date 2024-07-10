import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Bookmark API')
    .setDescription('API for managing bookmarks')
    .setVersion('1.0')
    .addTag('bookmarks')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Strips away unknown properties from DTOs
  }));

  // Start the application
  await app.listen(3333);
}

bootstrap();
