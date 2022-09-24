import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IBook, IDataBooks } from '../models/IBook';
import { apiServer } from '../constants'

export const bookAPI = createApi({
  reducerPath: 'bookAPI',
  baseQuery: fetchBaseQuery({ baseUrl: apiServer }),
  tagTypes: ['Book'],
  endpoints: (build) => ({
    fetchAllBooks: build.query<IDataBooks, string>({
      query: (query = '') => ({
        url: '/books',
        params: {
          q: query,
        },
      }),
    }),
    getBook: build.query<IBook, string>({
      query: (id = '') => ({
        url: `/books/${id}`,
      }),
    }),
  }),
})
