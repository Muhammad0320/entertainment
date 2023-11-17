import { styled } from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";

import { clampBuilder } from "../Styles/clampBuilder";
import NavActions from "./NavActions";

const StyledNavBar = styled.aside`
  text-align: center;

  border-radius: ${() => clampBuilder(950, 1200, 1, 2)};

  background-color: var(--color-blue-dark);

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: max-content;
  grid-row: 1 / 2;
  padding-block: ${() => clampBuilder(350, 950, 1, 1.5)};

  padding-inline: ${() => clampBuilder(350, 950, 1.2, 2)};

  @media (max-width: 950px) {
  }

  @media (max-width: 500px) {
    margin: 0;
    border-radius: 0;
  }
`;

function NavBar() {
  return (
    <StyledNavBar>
      <Logo />
      <MainNav />
      <NavActions />
    </StyledNavBar>
  );
}

export default NavBar;
