import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUser: CreateUserDto) {
    console.log(createUser);
    return createUser;
  }
  // ユーザーIDをパスパラメーターから取得
  @Get(':id')
  getId(@Param('id') id: number) {
    console.log(`ユーザーID ${id}を表示`);
    return id;
  }
}
