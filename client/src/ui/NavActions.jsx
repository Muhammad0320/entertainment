import Button from "./Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useGetMe } from "../features/user/useGetMe";
import { clampBuilder } from "../Styles/clampBuilder";
import { useLogout } from "../features/Auth/useLogout";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

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
  font-size: ${() => clampBuilder(320, 1200, 1.5, 2.5)};

  cursor: pointer;

  color: var(--color-white);

  transition: color 0.2s;

  &:hover {
    color: var(--color-red);
  }
`;

function NavActions() {
  const { logout } = useLogout();

  const { me, isLoading } = useGetMe();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout("", {
      onSuccess: () => {
        localStorage.removeItem("user");

        navigate("/login");
      },
    });
  };

  if (isLoading) return <span> Loading... </span>;

  return (
    <ActionsContainer>
      {me && !isLoading ? (
        <LogoutIcon onClick={handleLogout}>
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
