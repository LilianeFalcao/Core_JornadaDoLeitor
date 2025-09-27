export class Readings{
    private constructor(
        readonly id: string,
        readonly id_user: string,
        readonly id_manga: string,
        readonly start_date: Date,
        readonly last_update: number,
        readonly current_chapter: number

    ){  }
    static create(
        id: string,
        id_user: string,
        id_manga: string,
        start_date: Date,
        last_update: number,
        current_chapter: number
    ): Readings {
        return new Readings(id, id_user, id_manga, start_date, last_update, current_chapter)
    }
}