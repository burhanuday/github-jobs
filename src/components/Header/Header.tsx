import * as React from "react";
import styled from "styled-components";

import headerBackgroundDesktop from "../../assets/desktop/bg-pattern-header.svg";
import headerBackgroundMobile from "../../assets/mobile/bg-pattern-header.svg";
import headerBackgroundTablet from "../../assets/tablet/bg-pattern-header.svg";

import logo from "../../assets/desktop/logo.svg";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Container = styled.header`
  height: 160px;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${headerBackgroundMobile});

  @media (min-width: 768px) {
    border-bottom-left-radius: 100px;
    background-image: url(${headerBackgroundTablet});
  }

  @media (min-width: 1440px) {
    background-image: url(${headerBackgroundDesktop});
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 32px;
  left: 24px;

  @media (min-width: 768px) {
    top: 42px;
    left: 29px;
  }

  @media (min-width: 1440px) {
    top: 44px;
    left: 165px;
  }
`;

const ThemeSwitcherContainer = styled.div`
  position: absolute;

  top: 32px;
  right: 24px;

  @media (min-width: 768px) {
    top: 42px;
    right: 29px;
  }

  @media (min-width: 1440px) {
    top: 44px;
    right: 165px;
  }
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
