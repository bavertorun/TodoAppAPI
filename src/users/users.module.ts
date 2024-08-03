import { Inject, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService:ConfigService)=>({
        secret: configService.get<string>('JWT_SECRET_KEY'),
        signOptions: { expiresIn: '1h' }
      }),
      inject:[ConfigService]
    })
  ],
  controllers: [UsersController],
  providers: [UsersService,JwtStrategy],
})
export class UsersModule {}
