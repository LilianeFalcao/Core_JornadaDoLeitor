import { IMangasRepository } from "../../domain/repositories/IMangasRepository";
import { Mangas } from "../../domain/entity/Mangas";

export class MockMangasRepository implements IMangasRepository{
    private mangas: Mangas[] = [
    Mangas.create(
        "1",
        "https://example.com/vinland.jpg",
        "Vinland Saga",
        "Makoto Yukimura",
        "Seinen",
        220
    ),
    Mangas.create(
        "2",
        "https://example.com/naruto.jpg",
        "Naruto",
        "Masashi Kishimoto",
        "Shonen",
        720
    ),
    Mangas.create(
        "3",
        "https://example.com/bleach.jpg",
        "Bleach",
        "Tite Kubo",
        "Shounen",
        686
    ),
    ];

    async findByAuthorName(author_name: string): Promise<Mangas[]> {
        return this.mangas.filter( 
            (mangas) => mangas.author_name === author_name
        )
    }

    async findByTitle(title: string): Promise<Mangas | null> {
        const manga = this.mangas.find(
            (m) => m.title === title
        )
        
        return manga ?? null
    }

    async findAll(): Promise<Mangas[]> {
        return [...this.mangas];
    }


}