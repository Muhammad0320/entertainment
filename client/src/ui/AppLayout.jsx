import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";

const StyledApp = styled.div`
  min-height: 100dvh;

  padding-inline-end: 0;
  display: grid;

  grid-template-columns: none;

  row-gap: ${() => clampBuilder(350, 950, 1.5, 3)};

  padding-inline: ${() => clampBuilder(350, 950, 1.5, 2.5)};

  padding-block: ${() => clampBuilder(350, 1200, 1, 2)};

  grid-template-rows: 5rem 1fr;

  @media (max-width: 500px) {
    padding: 0;
  }
`;

const StyledMain = styled.main`
  padding: 2.5rem;
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  overflow: auto;
`;

function AppLayout() {
  return (
    <StyledApp>
      <NavBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledApp>
  );
}

export default AppLayout;
