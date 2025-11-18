import ArticleList from '../components/ArticleList';

function Accueil({ articles }) {
  return (
    <div>
      <h2>Articles récents</h2>
      <ArticleList articles={articles} />
    </div>
  );
}

export default Accueil;
