import { CapituloAtual } from "../value-objects/CapituloAtual";
import { UltimaAtualizacao } from "../value-objects/UltimaAtualizacao";

export class Leitura {
    private constructor(
        readonly capitulo_atual: CapituloAtual,
        readonly ultima_atualizacao: UltimaAtualizacao
    ) {}

    static create(capitulo: number, ultima: number): Leitura {
        const capituloAtual = CapituloAtual.create(capitulo);
        const ultimaAtualizacao = UltimaAtualizacao.create(ultima, capitulo);
        return new Leitura(capituloAtual, ultimaAtualizacao);
    }
}