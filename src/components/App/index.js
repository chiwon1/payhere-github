import React from "react";
import { Route, Switch } from "react-router";
import styled, { ThemeProvider } from "styled-components";

import theme from "../../styles/theme";
import GlobalStyle from "../../styles/globalStyle";

import Main from "../Main";
import Details from "../Details";

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/:repository" component={Details} />
        </Switch>
      </ThemeProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
