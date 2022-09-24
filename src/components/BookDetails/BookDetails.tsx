import React from 'react'
import {useParams} from 'react-router-dom'
import {bookAPI} from '../../services/BookService'

import Main from '../Main/Main'
import BookItem from '../BookItem/BookItem'
import { BoxItemWrapper } from '../BoxItemWrapper';
import { AlertComponent } from '../Error/Error';
import CircularIndeterminate from '../Progress/Progress';

export const BookDetails = () => {
  const {id} = useParams()
  const {data, error, isLoading} = bookAPI.useGetBookQuery(String(id));

  if (error) {
    return <AlertComponent />;
  }

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  return (
    <Main>
      <BoxItemWrapper>
        <BookItem book={data?.book} isSingleItem={true} />
      </BoxItemWrapper>
    </Main>
  )
}
