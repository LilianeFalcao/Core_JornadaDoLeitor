export class CapituloAtual {
    private constructor(readonly value: number) {}

    static create(value: number): CapituloAtual {
        if (!this.validate(value)) {
            throw new Error("O capítulo atual é inválido.");
        }
        return new CapituloAtual(value);
    }

    private static validate(value: number): boolean {
        return value >= 0;
    }
}
