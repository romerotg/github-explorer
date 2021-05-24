export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'default'}</strong>
      <p>{props.repository.description ?? 'default description'}</p>

      <a href={props.repository.link ?? '#'}>
        Acessar repositório
      </a>
    </li>
  );
}