import { styled } from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import Avatar from "./NavActions";
import { clampBuilder } from "../Styles/clampBuilder";
import NavActions from "./NavActions";

const StyledSidebar = styled.aside`
  text-align: center;

  grid-column: 1 / 2;
  border-radius: ${() => clampBuilder(950, 1200, 1, 2)};

  background-color: var(--color-blue-dark);
  /* display: grid;
  grid-template-rows: 3.2rem repeat(4, min-content) 1fr; */

  margin: 2rem 0 0 2rem;
  /* justify-content: center; */

  display: flex;
  align-items: center;
  height: max-content;
  justify-content: space-between;
  grid-row: 1 / 2;
  padding: ${() => clampBuilder(350, 950, 1, 1.5)}
    ${() => clampBuilder(350, 950, 1.2, 2)};

  @media (max-width: 950px) {
  }

  @media (max-width: 500px) {
    margin: 0;
    border-radius: 0;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      <NavActions />
    </StyledSidebar>
  );
}

export default Sidebar;
