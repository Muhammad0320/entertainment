import { createContext, useContext, useEffect, useState } from "react";
import { useBookmarks } from "../features/bookmark/useBookmarks";
import { useCreateBookmark } from "../features/bookmark/useCreateBookmark";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const { addMovieToBookmark } = useCreateBookmark();

  const { myBookmarks = [] } = useBookmarks();
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    if (myBookmarks?.length) {
      console.log(myBookmarks);

      setBookmark(myBookmarks);
    }
  }, [myBookmarks]);

  const addBookmark = (movie) => {
    setBookmark((bookmark) => [...bookmark, movie]);

    addMovieToBookmark({ movieId: movie._id });
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
