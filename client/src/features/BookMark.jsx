import GridItem from "../ui/GridItem";
import { StyledList } from "../ui/StyledList";
import Heading from "../ui/Heading";
import data from "../ui/Test";
import { useBookmark } from "../contexts/bookmarks";
import { useGetMovies } from "./movies/useGetMovies";

function BookMark() {
  const { bookmark } = useBookmark();

  const bookmarkedTvSeries = bookmark.filter(
    (data) => data.category !== "Movie"
  );

  const bookmarkedMovies = bookmark.filter((data) => data.category === "Movie");

  return (
    <>
      <Heading> Bookmarked Movie </Heading>

      <StyledList layout="repeat(auto-fit, minmax(25rem, 1frrem))">
        {bookmarkedMovies.map((bookmark) => (
          <GridItem data={bookmark} key={bookmark.title} />
        ))}
      </StyledList>

      <Heading> Bookmarked Tv Series </Heading>

      <StyledList layout="repeat(auto-fit, minmax(26rem, 1fr))">
        {bookmarkedTvSeries.map((data) => (
          <GridItem data={data} key={data.title} />
        ))}
      </StyledList>
    </>
  );
}

export default BookMark;
