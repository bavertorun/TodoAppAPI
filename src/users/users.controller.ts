import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('register')
  async register(@Body() data: CreateUserDto) {
    return this.usersService.register(data);
  }
  @Post('login')
  async login(@Body() data: CreateUserDto) {
    return this.usersService.login(data);
  }
}
