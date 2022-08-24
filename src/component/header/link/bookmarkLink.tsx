import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './link.scss';

const BookmarkLink: React.FC = () => {
  return (
    <Link to="/bookmark">
      <div className='link link__red'>
        <div className='link__icon'>
          <MdFavorite />
        </div>
        <div className='link__lead'>
          <span>Favoriteへ</span>
        </div>
      </div>
    </Link>
  );
};

export default BookmarkLink;
