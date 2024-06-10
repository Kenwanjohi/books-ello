import { useState, useEffect } from "react";
import { Book } from "../types";

const useReadingList = () => {
  const [readingList, setReadingList] = useState<Book[]>([]);

  useEffect(() => {
    const storedList = localStorage.getItem("readingList");
    if (storedList) {
      setReadingList(JSON.parse(storedList));
    }
  }, []);

  const addToReadingList = (book: Book) => {
    const updatedList = [...readingList, book];
    setReadingList(updatedList);
    localStorage.setItem("readingList", JSON.stringify(updatedList));
  };

  const removeFromReadingList = (title: string) => {
    const updatedList = readingList.filter((book) => book.title !== title);
    setReadingList(updatedList);
    localStorage.setItem("readingList", JSON.stringify(updatedList));
  };

  const isBookInReadingList = (title: string) => {
    return readingList.some((book) => book.title === title);
  };

  return {
    readingList,
    addToReadingList,
    removeFromReadingList,
    isBookInReadingList,
  };
};

export default useReadingList;
