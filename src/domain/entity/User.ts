import { Email } from "../value-objects/Email";
import { Password } from "../value-objects/Password";

export class User{
    private constructor(
        readonly id: string,
        readonly nickname: string,
        readonly email: Email,
        readonly senha: Password
    ){  }
    static create(
        id: string,
        nickname: string,
        email: Email,
        senha: Password
    ): User {
        return new User(id, nickname, email, senha)
    }
}