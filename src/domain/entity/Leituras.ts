export class Leituras{
    private constructor(
        readonly id: string,
        readonly id_user: string,
        readonly id_manga: string,
        readonly data_inicio: Date,
        readonly ultima_atualizacao: number,
        readonly capitulo_atual: number

    ){  }
    static create(
        id: string,
        id_user: string,
        id_manga: string,
        data_inicio: Date,
        ultima_atualizacao: number,
        capitulo_atual: number
    ): Leituras {
        return new Leituras(id, id_user, id_manga, data_inicio, ultima_atualizacao, capitulo_atual)
    }
}