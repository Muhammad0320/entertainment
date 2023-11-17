import Input from "./Input";
import SVG from "react-inlinesvg";
import { styled } from "styled-components";
import { IconSearch } from "../icons/icons";

const StyledHeader = styled.header`
  padding: 2rem 0;

  display: flex;
  align-items: center;
  column-gap: 2rem;
`;

function Header({ placeholder, value, onChange }) {
  return (
    <StyledHeader>
      <SVG src={IconSearch} />
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </StyledHeader>
  );
}

export default Header;
