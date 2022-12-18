import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  users: CreateUserDto[] = [];
  create(user: CreateUserDto) {
    console.log('作成');
    this.users.push(user);
  }

  findAll() {
    return this.users;
  }
}
