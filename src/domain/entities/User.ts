import { Email } from "../value-objects/Email";
import { Senha } from "../value-objects/Senha";

export class User{
    private constructor(
        readonly id: string,
        readonly nickname: string,
        readonly email: Email,
        readonly senha: Senha
    ){  }
    static create(
        id: string,
        nickname: string,
        email: Email,
        senha: Senha
    ): User {
        return new User(id, nickname, email, senha)
    }
}