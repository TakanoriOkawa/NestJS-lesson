// バリデーションを使う
import { IsString, MinLength, MaxLength } from 'class-validator';

// interfaceとかtypeでもいいがclassを使う
// バリデーションの時に便利らしい
// classでもinterfaceを作ることと同じことになる。
export class CreateUserDto {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  readonly username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  readonly password: string;
}
