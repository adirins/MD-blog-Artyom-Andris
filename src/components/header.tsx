import React, { FC } from 'react';
import Nav from './nav';

const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <div className="row middle-xs center-xs">
          <div className="col-xs-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Free_logo.svg/1200px-Free_logo.svg.png" alt="logo" width="100" />
          </div>
          <div className="col-xs-6">
            <Nav />
          </div>
          <div className="col-xs-3">
            <input type="text" placeholder="search for article" id="search" />
            <button type="button">Search</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;