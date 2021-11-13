import { ISSUES_PER_PAGE } from "../constants";

export const searchGithubIssues = async (githubURL, page) => {
  try {
    const [_, owner, repository] = new URL(githubURL).pathname.split("/");

    const GITHUB_URL = `https://api.github.com/search/issues?q=repo:${owner}/${repository}%20is:issue&per_page=${ISSUES_PER_PAGE}&page=${page}`;

    const res = await fetch(GITHUB_URL);

    if (!res.ok) {
      throw new Error("failed to find repository");
    }

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error("failed to find repository");
  }
};
