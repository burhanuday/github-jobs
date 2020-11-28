import styled from "styled-components";

export interface ButtonProps {}

const Button = styled.button<ButtonProps>`
  outline: none;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  margin: 0;
  height: 48px;
  width: 141px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.white};
  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.75;
  }
`;

export default Button;
