import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { flexCenter, fullWidthAndHeight } from "../../styles/mixin";

import Button from "../Shared/Button";
import { fetchIssues } from "../../store/issue/issueSlice";

function SearchBar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [inputURL, setInputURL] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();

    dispatch(fetchIssues({ url: inputURL, page: 1 }));
    const [_, owner, repository] = new URL(inputURL).pathname.split("/");

    history.push(`/${owner}/${repository}/issues`);
  };

  return (
    <Wrapper>
      <label htmlFor="search">
        <Input
          id="search"
          type="url"
          value={inputURL}
          autoComplete="off"
          placeholder="Enter Repository URL"
          onChange={(event) => setInputURL(event.target.value)}
          required
        />
      </label>
      <SearchButton handleClick={handleClick}>Search</SearchButton>
    </Wrapper>
  );
}

const Wrapper = styled.form`
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
