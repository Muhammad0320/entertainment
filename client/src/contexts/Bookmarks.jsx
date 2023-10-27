import { createContext, useContext, useEffect, useState } from "react";
import { useBookmarks } from "../features/bookmark/useBookmarks";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const { myBookmarks = [] } = useBookmarks();
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    if (myBookmarks.length) {
      console.log(myBookmarks);
      console.log("okay");
      setBookmark(myBookmarks);
    }
  }, []);

  const addBookmark = (movie) => {
    setBookmark((bookmark) => [...bookmark, movie]);
  };

  const removeBookmark = (id) => {
    setBookmark((bookmark) => bookmark.filter((el) => el.movie._id !== id));
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
