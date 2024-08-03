import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from './schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Post('register')
    async register(@Body() data:CreateUserDto){
        return this.usersService.register(data)
    }

}
