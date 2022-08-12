import getColor from 'github-lang-colors';
import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_ACCESS_TOKEN || ''
});

export const fetchRepositories = async () => {
  let repos = [];

  await octokit.rest.repos
    .listForUser({
      username: 'aytacmalkoc',
      sort: 'updated',
      per_page: 7,
      page: 1
    })
    .then((res) => {
      res.data.forEach((repo) => {
        if (!repo.fork) {
          repos.push({
            id: repo.id,
            nameWithOwner: repo.full_name,
            url: repo.html_url,
            description: repo.description,
            language: {
              name: repo.language,
              color: getColor(repo.language)
            },
            archived: repo.archived
          });
        }
      });
    });

  return repos;
};
