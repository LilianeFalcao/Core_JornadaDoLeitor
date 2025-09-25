export class Mangas{
    private constructor (
        readonly id: string,
        readonly img_URL: string,
        readonly titulo:string,
        readonly nome_autor: string,
        readonly genero: string,
        readonly total_capitulos: number
    ){  }
    static create(
        id: string,
        img_URL: string,
        titulo:string,
        nome_autor: string,
        genero: string,
        total_capitulos: number
    ): Mangas{
        return new Mangas(id, img_URL,titulo, nome_autor, genero, total_capitulos)
    }
}