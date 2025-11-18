import { useParams, Link } from 'react-router-dom';

function ArticleDetail({ articles }) {
  const { id } = useParams();
  const article = articles.find((a) => a.id.toString() === id);

  if (!article) return <p>Article non trouvé.</p>;

  return (
    <div>
      <h1>{article.titre}</h1>
      <p>{article.contenu}</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default ArticleDetail;
