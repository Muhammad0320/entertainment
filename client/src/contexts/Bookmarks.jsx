import { createContext, useState } from "react";
import { useBookmarks } from "../features/bookmark/useBookmarks";

const BookmarkContext = createContext();

function BookmarkPrivider() {
  const { myBookmarks = [] } = useBookmarks();

  const [bookmark, setBookmark] = useState(myBookmarks);

  return <BookmarkContext.Provider></BookmarkContext.Provider>;
}

export default BookmarkPrivider;
