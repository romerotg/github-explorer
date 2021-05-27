import { useState, useEffect } from 'react';
import { RepositoryItem as Repository } from "./RepositoryItem";

import '../styles/repositories.scss'

interface Repository {
  id: string,
  name: string,
  description: string,
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <Repository key={repository.id} repository={repository} />
        })}
      </ul>
    </section>
  );
}