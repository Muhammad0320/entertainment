import GridItem from "../ui/GridItem";
import { StyledList } from "../ui/StyledList";
import Heading from "../ui/Heading";

import Header from "../ui/Header";

import TrendingGridLayout from "../ui/TrendingGridLayout";
import { useState } from "react";

import styled from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";
import { useGetMovies } from "./movies/useGetMovies";
import { useGetMe } from "./user/useGetMe";

const ContainerHomePage = styled.div`
  margin-block-start: ${() => clampBuilder(350, 1200, 3, 4.5)};
`;

const Welcome = styled.span`
  font-size: ${() => clampBuilder(320, 1200, 1.5, 2.5)};
`;

function HomePage() {
  const { allMovies = [] } = useGetMovies();

  const { me = {} } = useGetMe();

  const firstName = me?.name?.split(" ")[0];

  const [searchQuery, setSearchQuery] = useState("");

  const movieData = searchQuery
    ? allMovies.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allMovies;

  return (
    <>
      {firstName && (
        <Welcome> Welcome back, {firstName.toUpperCase()} </Welcome>
      )}

      <Header
        placeholder="Search for movies or TV series"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {!searchQuery && <TrendingGridLayout />}

      <ContainerHomePage>
        <Heading>
          {" "}
          {searchQuery
            ? `Found ${movieData.length} for '${searchQuery}' `
            : "Recommended for you"}{" "}
        </Heading>
      </ContainerHomePage>

      <StyledList layout="repeat(auto-fill, minmax(25rem, 1fr))">
        {movieData.map((item) => (
          <GridItem data={item} key={item.title} />
        ))}
      </StyledList>
    </>
  );
}

export default HomePage;
