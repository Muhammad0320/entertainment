import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import { IconLogo } from "../icons/icons";
import { styled } from "styled-components";

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
