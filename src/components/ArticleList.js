import { Link } from 'react-router-dom';

function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link to={`/article/${article.id}`}>{article.titre}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
