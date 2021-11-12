export const searchGithubIssues = async (githubURI) => {
  const [, , , owner, repository] = githubURI.split("/");

  const GITHUB_URI = `https://api.github.com/repos/${owner}/${repository}/issues`;

  const res = await fetch(GITHUB_URI);
  const data = await res.json();

  return data;
};
