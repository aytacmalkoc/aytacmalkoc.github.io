import React, { useState, useEffect } from 'react';
import { useStorage } from '@aytacmalkoc/react-use-storage';
import { fetchRepositories as fetchRepos } from '../utils';

import RepositoryItem from './RepositoryItem';

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const [cachedRepositories, setCachedRepositories] = useStorage('repositories', true);

  const fetchRepositories = async () => {
    if (cachedRepositories) {
      setRepositories(cachedRepositories);
    } else {
      const repos = await fetchRepos();

      setRepositories(repos);
      setCachedRepositories(repos);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <div className="vea-portfolio vea-portfolio-2 sec-spacer scroll-mt-mbl" id="portfolio">
      <div className="container">
        <div className="sec-heading-4 text-left mb-60">
          <h2 className="sec-title">Repositories</h2>
        </div>
        <div className="portfolio-works">
          {repositories.map((repo) => (
            <RepositoryItem key={repo.id} repository={repo} />
          ))}
        </div>
        <div className="col-12 text-center mt-60">
          <a
            href="https://github.com/aytacmalkoc"
            className="btn btn-outline-dark"
            target={'_blank'}
          >
            see more on github
          </a>
        </div>
      </div>
    </div>
  );
}
