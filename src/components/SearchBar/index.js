import React from "react";
import styled from "styled-components";
import { flexCenter, fullWidthAndHeight } from "../../styles/mixin";
import Button from "../Shared/Button";

function SearchBar() {
  return (
    <Wrapper>
      <label htmlFor="search">
        <Input id="search" autoComplete="off" placeholder="Enter Repository URL" />
      </label>
      <SearchButton>Search</SearchButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexCenter}
  height: 50px;

  label {
    ${fullWidthAndHeight}
  }
`;

const Input = styled.input`
  ${flexCenter}
  ${fullWidthAndHeight}

  padding: 0.5rem;
  font-size: 1.1rem;
  text-align: center;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.color.lightOrange};
  background-color: ${({ theme }) => theme.color.background};

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled(Button)`
  margin: 0 0 0 5px;
  width: 100px;
  font-size: 1.1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.lightOrange};
`;

export default SearchBar;
