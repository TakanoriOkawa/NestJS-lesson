import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // ルーティングテスト
  @Get('hello')
  greeting() {
    return 'hello';
  }
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // thisを使っている。インスタンスのプロパティ
    return this.appService.getHello();
  }
}
