export class Senha {
    private constructor(readonly value: string) { }

    static create(senha: string): Senha {
        this.validate(senha)
        return new Senha(senha)
    }

    private static validate(senha: string): boolean {
        if (senha.length < 8) {
            throw new Error("A senha deve ter pelo menos 8 caracteres")
        } else if (!/[A-Z]/.test(senha)) {
            throw new Error("A senha deve ter pelo menos uma letra maiúscula")
        } else if (!/[a-z]/.test(senha)) {
            throw new Error("A senha deve ter pelo menos uma letra minúscula")
        } else if (!/[0-9]/.test(senha)) {
            throw new Error("A senha deve ter pelo menos uma letra minúscula")
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
            throw new Error("A senha deve conter pelo menos um caractere especial");
        }
        return true
    }
}