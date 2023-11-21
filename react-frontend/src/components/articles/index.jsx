function Articles(props) {
  return (
    <div>
      <h1>Articles</h1>
        {props.articles.map((article) => {
          return (
            <div key={article.id}>
              <h2>{article.id} - {article.title}</h2>
              <p>{article.content}</p>
              <p>{article.user.username}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Articles;