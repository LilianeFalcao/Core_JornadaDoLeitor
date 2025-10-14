import { IReadingsRepository } from "../domain/repositories/IReadingsRepository";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import { IMangasRepository } from "../domain/repositories/IMangasRepository";

import { AddReading } from "../domain/use-cases/AddReading";
import { DeleteReading } from "../domain/use-cases/DeleteReading";
import { FindByUserAndManga } from "../domain/use-cases/FindByUserAndManga";

import { MockReadingsRepository } from "../infra/mocks/MockReadingsRepository";
import { MockUserRepository } from "../infra/mocks/MockUserRepository";
import { MockMangasRepository } from "../infra/mocks/MockMangasRepository";
import { FindByStatus } from "../domain/use-cases/FindByStatus";
import { FindByUserId } from "../domain/use-cases/FindByUserId";

export function makeReadingUseCases() {
    const readingsRepository: IReadingsRepository = MockReadingsRepository.getInstance();
    const userRepository: IUserRepository = MockUserRepository.getInstance();
    const mangaRepository: IMangasRepository = MockMangasRepository.getInstance();

    const addReading = new AddReading(
        readingsRepository,
        userRepository,
        mangaRepository
    );

    const findByUserAndManga = new FindByUserAndManga(readingsRepository);
    const deleteReading = new DeleteReading(readingsRepository);
    const findByStatus = new FindByStatus(readingsRepository)
    const findByUserId = new FindByUserId(readingsRepository)


    return {
        addReading,
        findByUserAndManga,
        deleteReading,
    };
}
