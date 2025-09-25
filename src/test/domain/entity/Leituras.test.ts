import { UltimaAtualizacao } from "../../../domain/value-objects/UltimaAtualizacao";
import { CapituloAtual } from "../../../domain/value-objects/CapituloAtual";
import { Leituras } from "../../../domain/entity/Leituras";

describe ('Leituras', () => {
    it("should create a valid readings", () => {
        const data_leitura = new Date()

        const leitura = Leituras.create(
            '1',
            'user-1',
            'manga-24',
            data_leitura,
            25,
            15
        );

        expect(leitura.id).toBe('1');
        expect(leitura.id_user).toBe('user-1');
        expect(leitura.id_manga).toBe('manga-24');
        expect(leitura.data_inicio).toBe(data_leitura);
        expect(leitura.ultima_atualizacao).toBe(25);
        expect(leitura.capitulo_atual).toBe(15);
    })
})