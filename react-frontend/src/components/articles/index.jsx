function Articles(props) {
  return (
    <div>
      <h1>Articles from Rails API</h1>
        {props.articles.map((article) => {
          return (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Articles;