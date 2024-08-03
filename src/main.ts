import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('To-Do Application Backend API')
    .setDescription(
      'This project provides a backend API for a To-Do (task management) application. The project includes features such as user management and authentication, going beyond basic CRUD operations.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  await app.listen(3000);
  console.log(`Applicaton running on ${await app.getUrl()}`);
}
bootstrap();
