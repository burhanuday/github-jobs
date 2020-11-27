import * as React from "react";
import styled from "styled-components";

import headerBackgroundDesktop from "../../assets/desktop/bg-pattern-header.svg";

import logo from "../../assets/desktop/logo.svg";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Container = styled.header`
  background: url(${headerBackgroundDesktop});
  height: 160px;
  border-bottom-left-radius: 100px;
  position: relative;
`;

export const Logo = styled.img`
  position: absolute;
  top: 44px;
  left: 165px;
`;

const ThemeSwitcherContainer = styled.div`
  position: absolute;
  top: 44px;
  right: 165px;
`;

export interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <Container>
      <Logo src={logo} />
      <ThemeSwitcherContainer>
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </ThemeSwitcherContainer>
    </Container>
  );
};

export default Header;
