export class UltimaAtualizacao {
    private constructor(readonly value: number) {}

    static create(value: number, capituloAtual: number): UltimaAtualizacao {
        if (!this.validate(value, capituloAtual)) {
            throw new Error(
                "A última atualização não pode ser menor que o capítulo atual."
            );
        }
        return new UltimaAtualizacao(value);
    }

    private static validate(value: number, capituloAtual: number): boolean {
        return value >= capituloAtual;
    }
}
