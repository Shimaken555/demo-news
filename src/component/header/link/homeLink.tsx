import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './link.scss';

const HomeLink: React.FC = () => {
  return (
    <Link to="/">
      <div className="link link__blue">
        <div className="link__icon">
          <FaHome />
        </div>
        <div className="link__lead">
          <span>Top Pageへ</span>
        </div>
      </div>
    </Link>
  );
};

export default HomeLink;
