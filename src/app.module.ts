import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService:ConfigService)=>({
        uri: configService.get<string>('MONGODB_URI'),
      }), 
      inject: [ConfigService]
    }),
    AuthModule,
    TasksModule
  ],
})
export class AppModule {}
