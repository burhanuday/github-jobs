import * as React from "react";
import styled from "styled-components";

import searchIcon from "../../assets/Shape.png";

export interface SearchBarProps {
  query: string;
  setQuery: (query: any) => void;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -40px;
`;

const SearchBarContainer = styled.div`
  position: relative;
  height: 80px;
  background-color: ${({ theme }) => theme.searchBackground};
  border-radius: 6px;
  width: 327px;
  padding-left: 72px;

  @media (min-width: 768px) {
    width: 689px;
  }

  @media (min-width: 1440px) {
    width: 1100px;
  }
`;

const StyledSearchBar = styled.input`
  padding: 32px;
  color: ${({ theme }) => theme.heading};
  font-size: 16px;
  width: 100%;
  height: 100%;
  z-index: 2;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.searchBackground};
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 32px;
  top: 28px;
  height: 24px;
  width: 24px;
`;

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <Container>
      <SearchBarContainer>
        <SearchIcon src={searchIcon} />
        <StyledSearchBar
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by title, companies, expertise…"
        />
      </SearchBarContainer>
    </Container>
  );
};

export default SearchBar;
