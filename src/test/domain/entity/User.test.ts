import { Email } from "../../../domain/value-objects/Email";
import { Senha } from "../../../domain/value-objects/Senha";
//Entities
import { User } from "../../../domain/entity/User";


describe('User', () => {
    it('should create a valid user', () => {
        const user = User.create(
            '1',
            "Hawks",
            Email.create("linnYohan@gmail.com"),
            Senha.create ('P@ssword1'),
        );

        expect(user.id).toBe('1');
        expect(user.nickname).toBe("Hawks");
        expect(user.email.value).toBe('linnYohan@gmail.com');
        expect(user.senha.value).toBe('P@ssword1');
    });
});