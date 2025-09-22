import { Email } from "../value-objects/Email";
import { Senha } from "../value-objects/Senha";

export class Users{
    private constructor(
        readonly id: string,
        readonly nickname: string,
        readonly email: Email,
        readonly senha: Senha
    ){

    }

}