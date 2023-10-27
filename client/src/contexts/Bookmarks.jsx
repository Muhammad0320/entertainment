import { createContext, useContext, useEffect, useState } from "react";
import { useBookmarks } from "../features/bookmark/useBookmarks";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const { myBookmarks = [] } = useBookmarks();
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    if (bookmark) {
      setBookmark(myBookmarks);
    }
  }, []);

  const addBookmark = (movie) => {
    setBookmark((bookmark) => [...bookmark, movie]);
  };

  const removeBookmark = (movie) => {
    setBookmark((bookmark) =>
      bookmark.filter((el) => el.movie._id !== movie.movie)
    );
  };

  return (
    <BookmarkContext.Provider value={{ addBookmark, removeBookmark, bookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmark = () => {
  const context = useContext(BookmarkContext);

  if (!context)
    throw new Error("Bookmark context was used outside bookmark provider");

  return context;
};
