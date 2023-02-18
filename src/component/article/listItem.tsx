import React, { useContext } from 'react';
import moment from 'moment';
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
  const time =
    moment(article.pubDate || moment.now())
      .fromNow()
      .slice(0, 1) === 'a'
      ? 1
      : moment(article.pubDate || moment.now())
          .fromNow()
          .slice(0, 1);

  const isBookmark = () => {
    return bookmarkState.bookmarkArticles.some(
      // (bookmarkArticle: Article) => bookmarkArticle.link === article.link
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
          {/* <a href={article.link} target="_blank" rel="noopener noreferrer"> */}
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <div className="item__title">
              <p>{article.title.slice(0, 50)}...</p>
            </div>
            <div className="item__source">
              <div className="item__source__icon">
                <BiLink />
              </div>
              <div className="item__source__lead">
                {/* <p>{article.link.slice(0, 40)}...</p> */}
                <p>{article.url.slice(0, 40)}...</p>
              </div>
            </div>
          </a>
          <div className="item__bottom">
            <p>
              {time}
              時間前
            </p>
            <div className="item__bookmark" onClick={handleBookmark}>
              {isBookmark() ? <MdFavorite /> : <GrFavorite />}
            </div>
            <div className="item__bookmark__like" onClick={handleBookmark}>
              <span>お気に入り登録</span>
            </div>
          </div>
        </div>
        {/* <div className='item__img'>
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            {article.image_url !== "null" && (
              <img
                src={article.image_url}
                className='item__img'
                alt={article.title}
              />
            )}
          </a>
        </div> */}
      </article>
    </>
  );
};

export default ListItem;
