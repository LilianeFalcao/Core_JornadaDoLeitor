import { Senha } from "../../../domain/value-objects/Senha";

describe("Senha", () => {
    it('Deve criar a senha válida', () => {
        const value = "'Valid12!'"
        const pass = Senha.create(value)
        if (pass) {
            expect(pass.value).toBe(value)
        }
    })
    it("Deve lançar um erro de menos de 8 caracteres", () => {
        expect(() => Senha.create('123')).toThrow()
    })
    it("Deve lançar um erro se não tiver letra maiúscula", () => {
        expect(() => Senha.create('12345678')).toThrow()
    })
    it("Deve lançar um erro se não tiver letra minúscula", () => {
        expect(() => Senha.create('1234567A')).toThrow()
    })
    it("Deve lançar um erro se não tiver número", () => {
        expect(() => Senha.create('abcDEFGH')).toThrow()
    })
    it("Deve lançar um erro se não tiver caracter especial", () => {
        expect(() => Senha.create('abcDEF12')).toThrow()
    })
})