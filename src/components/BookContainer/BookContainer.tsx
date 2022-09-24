import React, { FC, useState } from 'react'
import { IBook } from '../../models/IBook'
import { useDebounce } from '../../hooks/useDebounce'
import { bookAPI } from '../../services/BookService'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Main from '../Main/Main'
import BookItem from '../BookItem/BookItem'
import CircularIndeterminate from '../Progress/Progress'
import { AlertComponent } from '../Error/Error'
import { Search } from '../Search/Search';

type ChangeEvent = { name?: string; value: string; };

const BookContainer: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const debouncedSearchQuery = useDebounce(searchQuery, 500)
  const { data, error, isLoading } = bookAPI.useFetchAllBooksQuery(debouncedSearchQuery)

  const handleChange = ({ target }: React.ChangeEvent<ChangeEvent>): void => {
    setSearchQuery(target.value)
  }

  if (error) {
    return <AlertComponent />;
  }

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  return (
    <Main>
      <Search searchQuery={searchQuery} handleChange={handleChange} />
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data?.books.map((bookData: IBook) => (
            <Grid xs={2} sm={4} md={4} key={bookData.id}>
              <BookItem book={bookData} isSingleItem={false} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Main>
  )
}

export default BookContainer
