import React from 'react';
import './Sales.scss';

const Sales = () => {
  return (
    <div className="sales-dashboard">
      <div className="sales-title-wrap">
        <span className="workspace-title">HOON’s Workspace</span>
        <span className="workspace-border" />
        <span className="workspace-subtitle">
          (미승인 오더 및 테스트 오더 제외)
        </span>
      </div>
      <div className="sales-input-box-wrap">
        <div className="order-wrap">
          <div className="order-type">전체 오더 타입</div>
          <i class="fa-solid fa-chevron-down" />
        </div>
        <div className="order-year">
          <span>2020</span>
          <span>2021</span>
          <span>2022</span>
          <span>2023</span>
          <span>2024</span>
        </div>
        <div className="date-input">
          <span>날짜 입력</span> <i class="fa-solid fa-chevron-down" />
        </div>
        <button className="sales-button">확인</button>
      </div>
      <div className="year-month-target-wrap">
        <div className="year-target-wrap">
          <div className="year-target-graph">그래프넣기</div>

          <div className="year-target-data">
            <div className="year-target-amount">
              <div className="year-target-amount-title-wrap">
                <span className="year-target-amount-title">목표 거래액</span>
                <span className="year-target-amount-date">
                  (22/04/01 - 22/04/31)
                </span>
              </div>
              <span className="year-target-number">7,480,000,000 </span>
            </div>
            <div className="year-summit-amount">aa</div>
            <div className="year-target-percent">aa</div>
            <div className="year-confirm">aa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
