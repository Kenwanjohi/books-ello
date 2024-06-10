import { useState } from "react";

import { Container, Divider } from "@mui/material";

import { useQuery, gql } from "@apollo/client";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import ReadingList from "./components/ReadingList";

import useReadingList from "./hooks/useReadingList";

import { Book } from "./types";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

function App() {
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [showReadingList, setShowReadingList] = useState(false);

  const {
    addToReadingList,
    removeFromReadingList,
    isBookInReadingList,
    readingList,
  } = useReadingList();

  const { loading } = useQuery(GET_BOOKS, {
    onCompleted: (data) => {
      setAllBooks(data.books);
      setFilteredBooks(data.books);
    },
  });

  const handleSearch = (query: string) => {
    if (query) {
      const filtered = allBooks.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(allBooks);
    }
  };

  return (
    <Container
      sx={{ textAlign: "left", paddingTop: "2rem", minHeight: "100vh" }}
    >
      <Header
        showReadingList={showReadingList}
        setShowReadingList={setShowReadingList}
        readingList={readingList}
      />
      <Divider sx={{ mb: 2 }} />
      {showReadingList ? (
        <ReadingList
          readingList={readingList}
          addToReadingList={addToReadingList}
          removeFromReadingList={removeFromReadingList}
          setShowReadingList={setShowReadingList}
        />
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <BookList
            books={filteredBooks}
            isLoading={loading}
            isBookInReadingList={isBookInReadingList}
            addToReadingList={addToReadingList}
          />
        </>
      )}
    </Container>
  );
}

export default App;
