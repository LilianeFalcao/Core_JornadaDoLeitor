import { MockMangasRepository } from "../../../infra/mocks/MockMangasRepository";

describe ('MockMangasRepository', () => {
    let repo: MockMangasRepository;

    beforeEach(() => {
        repo = new MockMangasRepository();
    })

    it("must return manga by the author", async () => {
    const result = await repo.findByAuthorName("Makoto Yukimura");

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Vinland Saga");
    });

    it("must return manga by title", async () => {
        const result = await repo.findByTitle("Naruto");

        expect(result).not.toBeNull();
        expect(result?.author_name).toBe("Masashi Kishimoto");
    });

    it("must return all manga", async () => {
        const result = await repo.findAll();

        expect(result).toHaveLength(3); 
    });

});