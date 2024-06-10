import BookListItem from "./BookListItem";
import EmptyListState from "./EmptyListState";
import { Book } from "../types";

interface ReadingListProps {
  readingList: Book[];
  addToReadingList: (book: Book) => void;
  removeFromReadingList: (title: string) => void;
  setShowReadingList: (show: boolean) => void;
}

const ReadingList: React.FC<ReadingListProps> = ({
  readingList,
  addToReadingList,
  removeFromReadingList,
  setShowReadingList,
}) => {
  return (
    <>
      {readingList.length === 0 ? (
        <EmptyListState onAddBook={() => setShowReadingList(false)} />
      ) : (
        readingList.map((book, index) => (
          <BookListItem
            key={index}
            {...book}
            onReadingListPage={true}
            addToReadingList={addToReadingList}
            removeFromReadingList={removeFromReadingList}
          />
        ))
      )}
    </>
  );
};

export default ReadingList;
