import React, { useContext } from 'react';
import moment from 'moment';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { Article } from '../../types';
import { BookmarkContext } from '../../App';
import { addBookmark, deleteBookmark } from '../../bookmark/bookmarkAction';
import { GrFavorite } from 'react-icons/gr';
import { MdFavorite } from 'react-icons/md';
import { BiLink } from 'react-icons/bi';
import './listItem.scss';

type Props = {
  article: Article;
};

const ListItem: React.FC<Props> = ({ article }) => {
  const { bookmarkState, bookmarkDispatch } = useContext(BookmarkContext);
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const formatDate = (date) => {
    const formattedDate = dayjs
      .utc(date)
      .tz('Asia/Tokyo')
      .format('YYYY/MM/DD HH:mm:ss');
    return formattedDate;
  };

  console.log(formatDate(article.publishedAt));

  const time = formatDate(article.publishedAt);

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
      <article className="item">
        <div className="item__main">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <div className="item__title">
              <p>{article.description.slice(0, 50)}...</p>
            </div>
            <div className="item__source">
 
              <div className="item__source__lead">
                <p>- {article.source.name}</p>
              </div>
            </div>
          </a>
          <div className="item__bottom">
            <p>{time}</p>
            <div className="item__bookmark" onClick={handleBookmark}>
              {isBookmark() ? <MdFavorite /> : <GrFavorite />}
            </div>
            <div className="item__bookmark__like" onClick={handleBookmark}>
              <span>お気に入り登録</span>
            </div>
          </div>
        </div>
        <div className="item__img">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.image !== 'null' && (
              <img
                src={article.image}
                className="item__img"
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
