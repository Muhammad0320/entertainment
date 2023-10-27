import { createContext, useState } from "react";

const BookmarkContext = createContext();

function BookmarkPrivider() {
  const [bookmark, setBookmark] = useState([]);

  return <BookmarkContext.Provider></BookmarkContext.Provider>;
}

export default BookmarkPrivider;
