import { Leitura } from "../../../domain/value-objects/Leituras";

describe("Leitura", () => {
    it("Deve criar uma leitura válida", () => {
        const leitura = Leitura.create(10, 12);
        expect(leitura.capitulo_atual.value).toBe(10);
        expect(leitura.ultima_atualizacao.value).toBe(12);
    });

    it("Gerar erro se o capítulo atual for inválido", () => {
        expect(() => Leitura.create(-1, 5)).toThrow("O capítulo atual é inválido.");
    });

    it("Gerar erro se a última atualização for menor que o capítulo atual", () => {
        expect(() => Leitura.create(10, 5)).toThrow(
            "A última atualização não pode ser menor que o capítulo atual."
        );
    });
});