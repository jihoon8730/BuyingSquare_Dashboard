import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <>
      {' '}
      <div className="navbar">
        <div className="dashboard-logo">
          <div className="logo">logo</div>
          <div className="title">BUYING SQUARE DASHBOARD</div>
        </div>
        <div className="dashboard-type">
          <div className="title">EVAN CHOI</div>
          <i className="fa-solid fa-chevron-down" />
        </div>
      </div>
      <div className="header">
        <div className="header-list">
          <ul className="lists">
            <li className="list-all">전체</li>
            <li>세일즈</li>
            <li>소싱</li>
            <li>오퍼레이션</li>
          </ul>
        </div>
        <div className="header-search">
          <i className="fa-solid fa-magnifying-glass search-icon" />
          <input className="search-input" type="text" placeholder="Search" />
        </div>
      </div>
    </>
  );
};

export default Nav;
