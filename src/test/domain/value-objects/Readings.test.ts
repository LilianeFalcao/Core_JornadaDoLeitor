import { Readings } from "../../../domain/value-objects/Readings";

describe("Readings", () => {
    it("should create a valid readings", () => {
        const reading = Readings.create(10, 12);
        expect(reading.current_chapter.value).toBe(10);
        expect(reading.last_update.value).toBe(12);
    });

    it("Gerar erro se o capítulo atual for inválido", () => {
        expect(() => Readings.create(-1, 5)).toThrow("O capítulo atual é inválido.");
    });

    it("Gerar erro se a última atualização for menor que o capítulo atual", () => {
        expect(() => Readings.create(10, 5)).toThrow(
            "A última atualização não pode ser menor que o capítulo atual."
        );
    });
});