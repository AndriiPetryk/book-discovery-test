import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import { IBook } from '../../models/IBook';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './BookItem.module.css';

type BookItemProps = {
  book: IBook,
  isSingleItem: boolean;
}

const BookItem: FC<BookItemProps> = ({
  book: {
    id,
    title,
    author,
    pageCount,
    publisher,
    coverImageUrl,
    synopsis
  },
  isSingleItem
}) => {

  const maxWidth = !isSingleItem ? 100 + '%': 33 + '%';
  const synopsStyle = !isSingleItem ? styles.detail_info : '';
  const cardMedia = <CardMedia component='img' height='194' image={coverImageUrl} alt={title} />;

  return (
    <Card sx={{ maxWidth: maxWidth }}>
      <CardHeader className={styles.header} title={title} subheader={`${author} / Publisher: ${publisher}`} />
      {!isSingleItem ?
        <Link to={`/book/${id}`}>
          {cardMedia}
        </Link> : cardMedia
      }
      <CardContent>
        <Typography variant='body2' color='text.secondary' className={synopsStyle}>
          {synopsis}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography component="span" variant='inherit' color='text.secondary'>
          Page count: {pageCount}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default BookItem
