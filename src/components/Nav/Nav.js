import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [pageSelct, setPageSelct] = useState(0);
  const naviGate = useNavigate();
  const onGotoManagementPage = () => {
    naviGate('/management');
    setPageSelct(0);
  };
  const onGotoSalesPage = () => {
    naviGate('/sales');
    setPageSelct(1);
  };
  const onGotoSourcingPage = () => {
    naviGate('/sourcing');
    setPageSelct(2);
  };
  const onGotoOperation = () => {
    naviGate('/operation');
    setPageSelct(3);
  };

  return (
    <>
      {' '}
      <div className="navbar">
        <div className="dashboard-logo">
          <div className="logo">
            <img className="logo-top" src="/images/logo1.png" alt="nono!!" />
            <img className="logo-bottom" src="/images/logo2.png" alt="nono!!" />
          </div>
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
            <li
              className={pageSelct === 0 ? 'list-all' : 'couser-pointer'}
              onClick={onGotoManagementPage}
            >
              전체
            </li>
            <li
              className={pageSelct === 1 ? 'list-all' : 'couser-pointer'}
              onClick={onGotoSalesPage}
            >
              세일즈
            </li>
            <li
              className={pageSelct === 2 ? 'list-all' : 'couser-pointer'}
              onClick={onGotoSourcingPage}
            >
              소싱
            </li>
            <li
              className={pageSelct === 3 ? 'list-all' : 'couser-pointer'}
              onClick={onGotoOperation}
            >
              오퍼레이션
            </li>
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
