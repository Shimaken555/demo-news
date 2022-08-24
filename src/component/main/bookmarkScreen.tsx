import React, { useContext } from 'react';
import { BookmarkContext } from '../../App';
import ArticleList from '../article/articleList';
import Weather from '../sidebar/weather/weather';
import Header from '../header/header';
import './screen.scss';

const BookmarkScreen: React.FC = () => {
  const { bookmarkState } = useContext(BookmarkContext);

  return (
    <>
      <Header screen="bookmark" />
      <div className="screen">
        <div className="screen__left">
          <div className="screen__left__title title__red">Favorite</div>
          <ArticleList articles={bookmarkState.bookmarkArticles} />
        </div>
        <div className="screen__right">
          <Weather />
        </div>
      </div>
    </>
  );
};

export default BookmarkScreen;
