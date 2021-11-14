import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/mixin";

import Title from "../Shared/Title";
import SearchBar from "../SearchBar";
import Bookmark from "../Bookmark";

function Main() {
  return (
    <Wrapper>
      <MainTitle>Github Issues</MainTitle>
      <SearchBar />
      <Bookmark />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;

  > * {
    width: 600px;
  }
`;

const MainTitle = styled(Title)`
  margin: 0 0 1.6rem;
`;

export default Main;
