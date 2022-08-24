import React, { useState } from 'react';
import Drawer from './drawer/drawer';
import { Props } from '../../types';
import BookmarkLink from './link/bookmarkLink';
import HomeLink from './link/homeLink';
import './header.scss';

const Header: React.FC<Props> = ({ screen }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <header className="header">
        <h1>Demo News Site</h1>
        <div className="header__bookmark">
          {screen === 'home' ? <BookmarkLink /> : <HomeLink />}
        </div>
        {screen === 'home' && (
          <nav className="header__nav" onClick={() => setVisible(!visible)}>
            <div className="header__open">
              <span className="header__open__bar"></span>
              <span className="header__open__bar"></span>
              <span className="header__open__bar"></span>
            </div>
          </nav>
        )}
      </header>
      <Drawer visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Header;
