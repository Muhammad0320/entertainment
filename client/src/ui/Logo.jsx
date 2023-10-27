import { styled } from "styled-components";

import { Link } from "react-router-dom";

import SVG from "react-inlinesvg";
import { IconLogo } from "../icons/icons";

const StyledLogo = styled.div`
  position: relative;

  margin-bottom: 0;
`;

function Logo() {
  return (
    <Link to="/home">
      <StyledLogo>
        <SVG src={IconLogo} />
      </StyledLogo>
    </Link>
  );
}

export default Logo;
