export interface IBook {
  book: any
  id: string
  title: string
  author: string
  coverImageUrl: string
  pageCount?: number
  publisher?: string
  synopsis: string
}

export interface IDataBooks {
  books: IBook[]
}
