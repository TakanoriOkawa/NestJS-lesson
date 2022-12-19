import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    console.log(createUser);
    return this.usersService.create(createUser);
  }
  // ユーザーIDをパスパラメーターから取得
  @Get(':id')
  getId(@Param('id') id: number) {
    console.log(`ユーザーID ${id}を表示`);
    return id;
  }
}
