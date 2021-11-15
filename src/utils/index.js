export function isValidGithubUrl(repoUrl) {
  return repoUrl.indexOf("github.com") === -1 ? false : true;
}
