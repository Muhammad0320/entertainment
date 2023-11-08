import styled, { css } from "styled-components";
import { clampBuilder } from "../Styles/clampBuilder";

const Button = styled.button`
  background-color: var(--color-red);

  color: var(--color-white);

  font-size: ${() => clampBuilder(350, 1200, 1, 1.7)};

  text-align: center;

  outline: transparent;

  border: none;

  border-radius: ${() => clampBuilder(350, 1200, 0.7, 1)};

  padding: 1.2rem 2rem;

  transition: all 0.2s;

  &:hover {
    color: var(--color-blue-dark);

    background-color: var(--color-white);
  }

  ${(props) =>
    props.variation === "auth" &&
    css`
      margin-top: 2rem;
    `}

  ${(props) =>
    props.variation === "signup" &&
    css`
      border: 1px solid var(--color-white);

      background-color: transparent;

      &:hover {
       
        background-color: var(--color-white);

        color: var(--color-primary);
      }
    `}

    ${(props) =>
    props.variation === "login" &&
    css`
      color: var(--color-white);

      &:hover {
        color: var(--color-primary);
      }
    `}

    ${(props) =>
    props.size === "small" &&
    css`
      padding: 1rem 1.3rem;

      font-size: ${() => clampBuilder(350, 1200, 0.8, 1.4)};
    `}
`;

export default Button;
