import React from 'react';
import './Management.scss';

const Management = () => {
  return (
    <div className="container">
      <div className="workspace">
        <div className="title">
          <h4 className="title-head">Workspace</h4>
          <p className="title-text">(미승인 오더 및 테스트 오더 제외)</p>
        </div>
        <div className="content">(기본값 1000만 단위)</div>
      </div>
      <div className="ordertype">
        <div className="order-all">
          <p className="type">전체 오더 타입</p>
          <i className="type-downarrow fa-solid fa-chevron-down" />
        </div>
        <div className="order-date">
          <ul className="dates">
            <li>오늘부터</li>
            <li>3일</li>
            <li>1주일</li>
            <li>1개월</li>
            <li>3개월</li>
            <li>6개월</li>
            <li>1년</li>
          </ul>
        </div>
        <div className="date-input">
          <div className="date-selct">
            <i className="icon fa-regular fa-calendar" />
            <p className="input">날짜 입력</p>
          </div>
          <i className="input-downarrow fa-solid fa-chevron-down" />
        </div>
        <button className="order-check-button">확인</button>
      </div>
    </div>
  );
};

export default Management;
