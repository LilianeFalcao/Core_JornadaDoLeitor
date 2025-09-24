import { Mangas } from "../../../domain/value-objects/Mangas";

describe("Mangas", () => {
    it("Adicionar título válido", () => {
        const mangas = Mangas.create("One Piece", "https://site.com/onepiece.jpg", 2);
        expect(mangas.value).toBe("One Piece");
    });

    it("Adicionar URL válida", () => {
        const mangas = Mangas.create("One Piece", "https://site.com/onepiece.jpg", 2);
        expect(mangas.img_URL).toBe("https://site.com/onepiece.jpg");
    });

    it("Não permite título inválido", () => {
        expect(() => Mangas.create("", "https://site.com/onepiece.jpg", 2))
            .toThrow("O título do mangá é inválido.");
    });

    it("Não permite URL inválida", () => {
        expect(() => Mangas.create("Naruto", "invalid-url", 2))
            .toThrow("A URL da imagem é inválida.");
    });
    
    it("Título vazio, por favor, preencher o campo", () => {
        expect(() => Mangas.create("          ", "https://site.com/onepiece.jpg", 2))
            .toThrow("Título da Obra é inválido.");
    });
    it("Não permite título muito longo", () => {
        const longTitle = "a".repeat(201);
        expect(() => Mangas.create(longTitle, "https://site.com/onepiece.jpg", 2))
            .toThrow("O nome da obra é inválido.");
    });

    it("Número de cápitulos não pode ser menor que zero", () => {
        expect(() => Mangas.create("Naruto", "https://site.com/onepiece.jpg", -2 ))
            .toThrow("Quantidade de cápitulos inválido");
    });

});