import React, { useContext } from 'react';
import moment from 'moment';
import { Article } from '../../types';
import { BookmarkContext } from '../../App';
import { addBookmark, deleteBookmark } from '../../bookmark/bookmarkAction';
import { GrFavorite } from 'react-icons/gr';
import { MdFavorite } from 'react-icons/md';
import './listItem.scss';

type Props = {
  article: Article;
};

const ListItem: React.FC<Props> = ({ article }) => {
  const { bookmarkState, bookmarkDispatch } = useContext(BookmarkContext);
  const time =
    moment(article.publishedAt || moment.now())
      .fromNow()
      .slice(0, 1) === 'a'
      ? 1
      : moment(article.publishedAt || moment.now())
          .fromNow()
          .slice(0, 1);

  const isBookmark = () => {
    return bookmarkState.bookmarkArticles.some(
      (bookmarkArticle: Article) => bookmarkArticle.url === article.url
    );
  };

  const handleBookmark = () => {
    if (isBookmark()) {
      bookmarkDispatch(deleteBookmark({ bookmarkArticle: article }));
    } else {
      bookmarkDispatch(addBookmark({ bookmarkArticle: article }));
    }
  };

  return (
    <>
      <article className='item'>
        <div className='item__main'>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <div className='item__title'>
              <p>{article.title.slice(0, 80)}...</p>
            </div>
          </a>
          <div className='item__bottom'>
            <p>
              {time}
              時間前
            </p>
            <div className='item__bookmark' onClick={handleBookmark}>
              {isBookmark() ? <MdFavorite /> : <GrFavorite />}
            </div>
            <div
              className='item__bookmark__like'
              onClick={handleBookmark}
            >
              <span>お気に入り登録</span>
            </div>
          </div>
        </div>
        <div className='item__img'>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.urlToImage !== "null" && (
              <img
                src={article.urlToImage}
                className='item__img'
                alt={article.title}
              />
            )}
          </a>
        </div>
      </article>
    </>
  );
};

export default ListItem;
