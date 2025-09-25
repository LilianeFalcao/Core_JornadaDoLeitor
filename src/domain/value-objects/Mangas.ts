export class Mangas{
    private constructor (
        readonly value: string,
        readonly img_URL: string,
        readonly total_capitulos: number
    ) {   }

    static create(mangas: string, img_URL:string, total_capitulos: number): Mangas {
        if (!this.validateManga(mangas)) {
            throw new Error("Título da Obra é Inválido.");
        }
        if(!this.validateUrl(img_URL)) {
            throw new Error("A Url da imagem passada é Inválida");
        }

        if(!this.validateTotalCap(total_capitulos) ) {
            throw new Error ("Capítulo passado não é válido")
        }
        return new Mangas(mangas, img_URL, total_capitulos);
    }

    private static validateManga(mangas: string): boolean{
        if (!mangas) return false; 
        if (mangas.trim().length === 0) return false;
        if (mangas.length > 200) return false; 
        return true;
    }

    private static validateUrl(img_URL: string): boolean{
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(img_URL);
    }

    private static validateTotalCap(total_capitulos: number): boolean{
        return total_capitulos >= 0
    }
}