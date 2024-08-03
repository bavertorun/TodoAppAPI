import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  async register(data: CreateUserDto) {
    data.password = await bcrypt.hash(data.password, 10);
    const registeredUser = await this.userModel.create(data);
    return this.createToken(registeredUser);
  }
  async createToken(data: CreateUserDto) {
    return this.jwtService.sign({ data });
  }
}
