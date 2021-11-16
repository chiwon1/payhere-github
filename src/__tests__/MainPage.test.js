import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import { enableFetchMocks } from "jest-fetch-mock";
import mockResponse from "../__mock__/response.json";

import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { createMemoryHistory } from "history";

import store from "../store";
import theme from "../styles/theme";
import MainPage from "../components/MainPage";

const history = createMemoryHistory();

describe("[TEST] MainPage", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MainPage history={history} />
        </ThemeProvider>
      </Provider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  enableFetchMocks();

  test("[TEST] Rendering title, button, input", () => {
    const title = screen.getByRole("heading", { level: 1, name: "Github Issues" }).textContent;
    const button = screen.getByRole("button", { name: /search/i });
    const input = screen.getByPlaceholderText(/repository/i);

    expect(title).toBe("Github Issues");
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("Submitting url form test", async () => {
    fetch.once(JSON.stringify(mockResponse));

    const url = "https://github.com/facebook/react";

    const inputForm = screen.getByPlaceholderText(/repository/i);
    const submitButton = screen.getByRole("button", { name: /search/i });

    userEvent.type(inputForm, url);
    expect(inputForm.value).toBe(url);

    userEvent.click(submitButton);
    expect(history.location.pathname).toBe("/facebook/react/issues");

    expect(fetch).toHaveBeenCalledWith(
      "https://api.github.com/search/issues?q=repo:facebook/react%20is:issue&per_page=5&page=1"
    );
  });

  test("[TEST] Submitting wrong url", async () => {
    fetch.once(JSON.stringify(mockResponse));

    const url = "mockurl";

    const inputForm = screen.getByPlaceholderText(/repository/i);
    const submitButton = screen.getByRole("button", { name: /search/i });

    userEvent.type(inputForm, url);
    expect(inputForm.value).toBe(url);

    userEvent.click(submitButton);

    const alarm = await screen.findByText(/올바른 저장소 주소를 입력해주세요/);
    expect(alarm).toBeInTheDocument();
  });
});
