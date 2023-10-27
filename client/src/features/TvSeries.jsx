import { useState } from "react";
import GridItem from "../ui/GridItem";
import { StyledList } from "../ui/StyledList";
import Heading from "../ui/Heading";

import Header from "../ui/Header";
import { useGetMoviesByCategory } from "./movies/useGetMoviesByCategory";

function TvSeries() {
  const { movieCategory = [] } = useGetMoviesByCategory("Tv");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredTv = searchQuery
    ? movieCategory.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : movieCategory;

  return (
    <>
      <Header
        placeholder="Search TV Series"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Heading>
        {" "}
        {searchQuery
          ? `Found ${filteredTv.length} for '${searchQuery}' `
          : "TV Series"}{" "}
      </Heading>

      <StyledList layout="repeat(auto-fit, minmax(25rem, 1fr))">
        {filteredTv.map((tv) => (
          <GridItem data={tv} key={tv.title} />
        ))}
      </StyledList>
    </>
  );
}

export default TvSeries;
