import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import theme from "../../styles/theme";
import GlobalStyle from "../../styles/globalStyle";

import Main from "../Main";
import Details from "../Details";
import { flexCenter } from "../../styles/mixin";

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/:owner/:repository/issues" component={Details} />
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
