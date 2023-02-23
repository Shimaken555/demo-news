import React from 'react';
import ListItem from './listItem';
import { Article } from '../../types';

type Props = {
  articles: Articles;
};

type Articles = Article[];

const ArticleList: React.FC<Props> = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      {articles.map((article: Article) => (
        <ListItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
