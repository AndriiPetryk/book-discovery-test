import React, {FC} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

type ChangeEvent = { name?: string; value: string; };

type SearchType = {
  searchQuery: string,
  handleChange: (e: React.ChangeEvent<ChangeEvent>) => void
}

export const Search: FC<SearchType> = ({searchQuery , handleChange}) => {
  return <Box
    component="div"
    display="flex"
    justifyContent="center"
    sx={{ p: 5 }}
  >
    <TextField
      name="book-search"
      label="Search book"
      variant="outlined"
      value={searchQuery}
      onChange={(e) => handleChange(e)}
    />
  </Box>
}
