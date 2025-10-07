import { User } from "../entity/User";
import { IUserRepository } from "../repositories/IUserRepository";

export class LoginUser {
    constructor(private readonly userRepository: IUserRepository ) { }

    async execute(params: {
        email: string;
        senha: string
    }): Promise<User>{
        const {email, senha} = params;

        const user = await this.userRepository.findByEmail(email);

        if(!user){
            throw new Error('Invalid credentials');
        }

        const isPasswordValid = await this.comparePassword(
            senha,
            user.senha.value
            );

            if (!isPasswordValid) {
            throw new Error('Invalid credentials');
            }

            return user;
        }

        private async comparePassword(
            senha: string,
            hashedPassword: string
        ): Promise<boolean> {
            return `hashed_${senha}` === hashedPassword;
        }

}