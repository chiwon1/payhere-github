import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { enableFetchMocks } from "jest-fetch-mock";

import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { createMemoryHistory } from "history";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import theme from "../../styles/theme";
import BookmarkPage from "../../components/BookmarkPage";
import IssuesList from "../../components/IssuesList";
import issuesReducer, { resetState } from "../../store/issue/issuesSlice";

const history = createMemoryHistory();

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
  issue: {
    page: 1,
    list: [],
    error: null,
    issuesLength: 0,
  },
});

const location = {
  pathname: "/issues",
};

describe("[TEST] Bookmark Page", () => {
  afterEach(() => {
    cleanup();
  });

  enableFetchMocks();

  test("[TEST] Redux reset state dispatch", async () => {
    const temp = {
      page: 11,
      list: [],
      error: null,
      issuesLength: 11,
    };

    const actual = issuesReducer(temp, resetState());

    expect(actual.page).toBe(1);
    expect(actual.issuesLength).toBe(0);
  });

  test("[TEST] Rendering title, button", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BookmarkPage history={history} location={location} />
        </ThemeProvider>
      </Provider>
    );

    const title = screen.getByRole("heading", { level: 1 }).textContent;
    const button = screen.getByRole("button", { name: /home/i });

    expect(title).toBe("Issues 모아보기");
    expect(button).toBeInTheDocument();
  });

  test("[TEST] render list items", () => {
    const list = [
      {
        repository_url: "https://api.github.com/repos/facebook/react",
        html_url: "https://github.com/facebook/react/issues/22758",
        number: 22758,
        title: "Facebook Title",
      },
      {
        repository_url: "https://api.github.com/repos/airbnb/javascript",
        html_url: "https://github.com/airbnb/javascript/issues/2504",
        number: 2504,
        title: "Airbnb Title",
      },
    ];

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <IssuesList issues={list} showRepo />
        </ThemeProvider>
      </Provider>
    );

    const facebookItem = screen.getByText(/facebook title/i);
    const airbnbItem = screen.getByText(/airbnb title/i);

    expect(facebookItem).toBeInTheDocument();
    expect(airbnbItem).toBeInTheDocument();
  });
});
