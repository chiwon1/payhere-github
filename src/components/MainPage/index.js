import React, { Suspense } from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/mixin";

import Title from "../Shared/Title";
import SearchBar from "../SearchBar";

const Bookmark = React.lazy(() => import("../Bookmark"));

function MainPage({ history }) {
  return (
    <Wrapper>
      <MainTitle>Github Issues</MainTitle>
      <SearchBar history={history} />
      <Suspense fallback={<div>loading...</div>}>
        <Bookmark history={history} />
      </Suspense>
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
