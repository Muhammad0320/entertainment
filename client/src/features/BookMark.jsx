import GridItem from "../ui/GridItem";
import { StyledList } from "../ui/StyledList";
import Heading from "../ui/Heading";

import styled from "styled-components";
import { useBookmark } from "../contexts/Bookmarks.jsx";

const BookMarkContainer = styled.div`
  margin-bottom: 10rem;
`;

const Empty = styled.div`
  font-size: 2rem;
  text-align: center;
  color: var(--color-white);
  margin-top: 5rem;
`;

function BookMark() {
  const { bookmark } = useBookmark();

  const bookmarked = bookmark?.map((bookmark) => bookmark.movie);

  const bookmarkedTvSeries = bookmarked.filter(
    (data) => data.category !== "Movie"
  );

  const bookmarkedMovies = bookmarked.filter(
    (data) => data.category === "Movie"
  );

  if (!bookmark.length) {
    return (
      <Empty>
        {" "}
        There is no bookmark to display at the moment, Start by adding some
        movies to bookmark{" "}
      </Empty>
    );
  }

  return (
    <>
      <BookMarkContainer>
        <Heading> Bookmarked Movie </Heading>

        <StyledList layout="repeat(auto-fit, minmax(30rem, 35rem))">
          {bookmarkedMovies.map((bookmark) => (
            <GridItem data={bookmark} key={bookmark._id} />
          ))}
        </StyledList>
      </BookMarkContainer>

      <Heading> Bookmarked Tv Series </Heading>

      <StyledList layout="repeat(auto-fit, minmax(30rem, 35rem))">
        {bookmarkedTvSeries.map((data) => (
          <GridItem data={data} key={data._id} />
        ))}
      </StyledList>
    </>
  );
}

export default BookMark;
