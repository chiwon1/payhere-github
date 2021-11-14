import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/mixin";

import Title from "../Shared/Title";
import SearchBar from "../SearchBar";
import Bookmark from "../Bookmark";

function MainPage({ history }) {
  return (
    <Wrapper>
      <MainTitle>Github Issues</MainTitle>
      <SearchBar history={history} />
      <Bookmark history={history} />
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

export default MainPage;
