// interfaceとかtypeでもいいがclassを使う
// バリデーションの時に便利らしい
// classでもinterfaceを作ることと同じことになる。
export class CreateUserDto {
  readonly username: string;
  readonly password: string;
}
