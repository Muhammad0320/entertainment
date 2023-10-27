import { useState } from "react";
import GridItem from "../ui/GridItem";
import { StyledList } from "../ui/StyledList";
import Header from "../ui/Header";
import Heading from "../ui/Heading";
import data from "../ui/Test";
import { useGetMoviesByCategory } from "./movies/useGetMoviesByCategory";

function Movie() {
  const { movieCategory = [] } = useGetMoviesByCategory("Movie");

  const [searchQuery, setSearchQuery] = useState("");

  const movies = data.filter((data) => data.category === "Movie");

  const filteredMovie = searchQuery
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : movies;

  return (
    <>
      <Header
        placeholder="Search movies"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Heading>
        {" "}
        {searchQuery
          ? `Found ${filteredMovie.length} for '${searchQuery}' `
          : "Movies"}{" "}
      </Heading>

      <StyledList layout="repeat(auto-fit, minmax(25rem, 1fr))">
        {movieCategory.map((bookmark) => (
          <GridItem data={bookmark} key={bookmark.title} />
        ))}
      </StyledList>
    </>
  );
}

export default Movie;
