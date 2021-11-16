import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import theme from "../../styles/theme";
import { flexCenter } from "../../styles/mixin";
import GlobalStyle from "../../styles/globalStyle";

import LoadingSpinner from "../LoadingSpinner";
const MainPage = React.lazy(() => import("../MainPage"));
const DetailsPage = React.lazy(() => import("../DetailsPage"));
const BookmarkPage = React.lazy(() => import("../BookmarkPage"));

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/issues" component={BookmarkPage} />
            <Route path="/:owner/:repository/issues" component={DetailsPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexCenter};

  width: 100vw;
  height: 100vh;
`;

export default App;
