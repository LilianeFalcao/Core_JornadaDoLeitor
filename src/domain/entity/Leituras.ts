export class Leituras{
    private constructor(
        readonly id: string,
        readonly data_inicio: Date,
        readonly ultima_atualizacao: Date,
        readonly capitulo_atual: number

    ){  }
    static create(
        id: string,
        data_inicio: Date,
        ultima_atualizacao: Date,
        capitulo_atual: number
    ): Leituras {
        return new Leituras(id, data_inicio, ultima_atualizacao, capitulo_atual)
    }
}