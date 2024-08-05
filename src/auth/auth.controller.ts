import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async register(@Body() data: CreateUserDto) {
    return this.authService.register(data);
  }
  @Post('login')
  async login(@Body() data: CreateUserDto) {
    return this.authService.login(data);
  }
}
