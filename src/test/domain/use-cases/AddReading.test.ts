import { AddReading } from "../../../domain/use-cases/AddReading";
import { Reading_Status, Readings } from "../../../domain/entity/Readings";
import { MockReadingsRepository } from "../../../infra/mocks/MockReadingsRepository";
import { MockUserRepository } from "../../../infra/mocks/MockUserRepository";
import { MockMangasRepository } from "../../../infra/mocks/MockMangasRepository";

describe("Add reading", () => {
    it("must add a new reading successfully", async () => {
        const readingRepository = MockReadingsRepository.getInstance();
        const userRepository = MockUserRepository.getInstance();
        const mangaRepository = MockMangasRepository.getInstance();

        const addReading = new AddReading(
            readingRepository,
            userRepository,
            mangaRepository
        )

        const userId = "user_1"; 
        const mangaId = "1"

        const result = await addReading.execute({
            id_user: userId,
            id_manga: mangaId,
            current_chapter: 50,
            notes: "Gostando até agora!"
        });

        expect(result).toBeInstanceOf(Readings);
        expect(result.id_user).toBe(userId);
        expect(result.id_manga).toBe(mangaId);
        expect(result.status).toBe(Reading_Status.READING);
        expect(result.progress).toBeCloseTo((50 / 220) * 100, 2);
    });

    it("should throw an error if user does not exist", async () => {
        const readingRepository = MockReadingsRepository.getInstance();
        const userRepository = MockUserRepository.getInstance();
        const mangaRepository = MockMangasRepository.getInstance();

        const addReading = new AddReading(
            readingRepository,
            userRepository,
            mangaRepository
        );

        await expect(
            addReading.execute({
                id_user: "non_existent_user",
                id_manga: "1",
                current_chapter: 10
            })
        ).rejects.toThrow("User not found");
    });

    it("should throw an error if manga does not exist", async () => {
        const readingRepository = MockReadingsRepository.getInstance();
        const userRepository = MockUserRepository.getInstance();
        const mangaRepository = MockMangasRepository.getInstance();

        const addReading = new AddReading(
            readingRepository,
            userRepository,
            mangaRepository
        );

        await expect(
            addReading.execute({
                id_user: "user_1",
                id_manga: "999",
                current_chapter: 10
            })
        ).rejects.toThrow("Manga not found");
    });
});
