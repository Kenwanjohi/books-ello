import { List, Typography } from "@mui/material";
import BookListItem from "./BookListItem";
import { Book } from "../types";

interface BookListProps {
  books: Book[];
  isLoading: boolean;
  isBookInReadingList: (title: string) => boolean;
  addToReadingList: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({
  books,
  isLoading,
  isBookInReadingList,
  addToReadingList,
}) => {
  return (
    <>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : books.length === 0 ? (
        <Typography>No results found</Typography>
      ) : (
        <List>
          {books.map((book, index) => (
            <BookListItem
              key={index}
              {...book}
              isBookInReadingList={isBookInReadingList}
              addToReadingList={addToReadingList}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default BookList;
