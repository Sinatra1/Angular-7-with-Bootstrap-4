export class Book {
  constructor(
    public id?: string,
    public name?: string,
    public created?: string,
    public updated?: string,
    public cover_image?: string,
    public created_user_id?: number,
    public deleted?: string,
    public description?: string,
    public is_deleted?: boolean,
    public is_my_book?: boolean,
    public isbn?: string,
    public year?: number
  ) {  }
}
