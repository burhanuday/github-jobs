import * as React from "react";
import styled from "styled-components";

import headerBackgroundDesktop from "../../assets/desktop/bg-pattern-header.svg";

import logo from "../../assets/desktop/logo.svg";

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

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
};

export default Header;
