import { createContext, useState } from "react";
import { useBookmarks } from "../features/bookmark/useBookmarks";

const BookmarkContext = createContext();

function BookmarkProvider({ children }) {
  const { myBookmarks = [] } = useBookmarks();

  const [bookmark, setBookmark] = useState(myBookmarks);

  const addBookmark = (movie) => {
    setBookmark((bookmark) => [...bookmark, movie]);
  };

  const removeBookmark = (movie) => {
    setBookmark((bookmark) => bookmark.filter((el) => el.id !== movie.id));
  };

  return (
    <BookmarkContext.Provider value={{ addBookmark, removeBookmark, bookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkProvider;
