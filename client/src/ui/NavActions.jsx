import styled from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";
import { useGetMe } from "../features/user/useGetMe";

import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;

  align-items: center;

  column-gap: ${() => clampBuilder(320, 1200, 1.2, 2)};
`;

const LogoutIcon = styled.span`
  font-size: ${() => clampBuilder(320, 1200, 1, 2)};

  color: var(--color-white);

  transition: color 0.2s;

  &:hover {
    color: var(--color-red);
  }
`;

function NavActions() {
  const { me, isLoading } = useGetMe();

  const navigate = useNavigate();

  if (isLoading) return <span> Loading... </span>;

  return (
    <ActionsContainer>
      {me && !isLoading ? (
        <LogoutIcon>
          {" "}
          <HiArrowRightOnRectangle />{" "}
        </LogoutIcon>
      ) : (
        <ButtonContainer>
          <Button
            variation="signup"
            size="small"
            onClick={() => navigate("/signup")}
          >
            {" "}
            signup{" "}
          </Button>

          <Button
            variation="login"
            size="small"
            onClick={() => navigate("/login")}
          >
            {" "}
            Login{" "}
          </Button>
        </ButtonContainer>
      )}
    </ActionsContainer>
  );
}

export default NavActions;