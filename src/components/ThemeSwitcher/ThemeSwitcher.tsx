import * as React from "react";
import styled from "styled-components";

import dayIcon from "../../assets/desktop/icon-sun.svg";
import nightIcon from "../../assets/desktop/icon-moon.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  height: 14px;
  width: 14px;
  object-fit: contain;

  margin: 0px 16px;
`;

const Switch = styled.div<{ isSwitchedOn: boolean }>`
  width: 48px;
  height: 24px;
  border-radius: 12px;
  background-color: white;
  cursor: pointer;

  position: relative;

  &::before {
    transition: all 0.3s ease-in-out;
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    top: 5px;
    border-radius: 7px;

    background: ${({ theme }) => theme.primary};

    left: ${(props) => (props.isSwitchedOn ? "29px" : "5px")};
  }
`;

export interface ThemeSwitcherProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  theme,
  toggleTheme,
}) => {
  return (
    <Container>
      <Icon src={dayIcon} />
      <Switch isSwitchedOn={theme === "dark"} onClick={toggleTheme} />
      <Icon src={nightIcon} />
    </Container>
  );
};

export default ThemeSwitcher;
