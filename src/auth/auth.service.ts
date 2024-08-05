import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  async register(data: CreateUserDto) {
    data.password = await bcrypt.hash(data.password, 10);
    const registeredUser = await this.userModel.create(data);
    return this.createToken(registeredUser.username);
  }
  async login(data: CreateUserDto) {
    const user = await this.userModel
      .findOne({ username: data.username })
      .exec();
    if (!user) throw new Error('Username or password incorrect!');

    const isPassword = await bcrypt.compare(data.password, user.password);
    if (!isPassword) throw new Error('Username or password incorrect!');

    return this.createToken(user.username);
  }
  async createToken(username: string) {
    return this.jwtService.sign({ username });
  }
}
