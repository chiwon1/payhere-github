import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import theme from "../../styles/theme";
import GlobalStyle from "../../styles/globalStyle";

import MainPage from "../MainPage";
import DetailsPage from "../DetailsPage";
import BookmarkPage from "../BookmarkPage";
import { flexCenter } from "../../styles/mixin";

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/issues" component={BookmarkPage} />
          <Route path="/:owner/:repository/issues" component={DetailsPage} />
          <Redirect to="/" />
        </Switch>
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
