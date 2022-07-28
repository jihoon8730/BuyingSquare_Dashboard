import React from 'react';
import BrandTable from './components/BrandTable/BrandTable.js';
import BuyerGroupTable from './components/BuyerGroupTable/BuyerGroupTable.js';
import Rechart from './components/Rechart/Rechart.js';
import './Management.scss';

const Management = () => {
  return (
    <div className="wrap">
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
      <div className="transactionamount">
        <div className="year">
          <div className="year-price">
            <div className="price-title">
              <p className="title">
                연간 목표 거래액
                <span className="color-blue">(21/01/01 - 22/07/01)</span>
              </p>
              <p>미달성 금액</p>
            </div>
            <div className="amount-display">
              <p className="total-amount">₩92,261,000</p>
              <p className="outstanding-amount">₩20,345,641</p>
            </div>
            <div className="gauge-full">
              <div className="gauge" />
            </div>
          </div>

          <div className="attainment-rate">
            <p className="title">달성률</p>
            <p className="percent">77.9%</p>
          </div>
        </div>
        <div className="month">
          <div className="month-price">
            <div className="price-title">
              <p className="title">
                당월 목표 거래액
                <span className="color-blue">(20022 / 07)</span>
              </p>
              <p>미달성 금액</p>
            </div>
            <div className="amount-display">
              <p className="total-amount">₩15,400,000</p>
              <p className="outstanding-amount">₩9,707,105</p>
            </div>
            <div className="gauge-full">
              <div className="gauge" />
            </div>
          </div>
          <div className="attainment-rate">
            <p className="title">달성률</p>
            <p className="percent">37%</p>
          </div>
        </div>
      </div>
      <div className="type-price">
        <div className="submit">
          <div className="title">
            <p>써밋 금액</p>
            <i className="fa-solid fa-circle-question" />
          </div>
          <h4 className="price">₩ 68,352,347,350</h4>
        </div>
        <div className="confirmation">
          <div className="title">
            <p>컨펌 금액</p>
            <i className="fa-solid fa-circle-question" />
          </div>
          <h4 className="price">₩ 37,197,538,509</h4>
        </div>
        <div className="fullout">
          <div className="title">
            <p>풀아웃 금액</p>
            <i className="fa-solid fa-circle-question" />
          </div>
          <h4 className="price">₩ 9,025,365,478</h4>
        </div>
        <div className="waiting">
          <div className="title">
            <p>웨이팅 금액</p>
            <i className="fa-solid fa-circle-question" />
          </div>
          <h4 className="price">₩ 13,608,542,455</h4>
        </div>
        <div className="cancel">
          <div className="title">
            <p>캔슬 금액</p>
            <i className="fa-solid fa-circle-question" />
          </div>
          <h4 className="price">₩ 6,520,900,909</h4>
        </div>
      </div>
      <div className="type-count">
        <div className="submit-count">
          <p className="title">써밋 건수</p>
          <p className="count">807 건</p>
        </div>
        <div className="confirmation-count">
          <p className="title">컨펌 건수</p>
          <p className="count">564 건</p>
        </div>
        <div className="all-confirmation-count">
          <p className="title">전체 컨펌률</p>
          <p className="count">72.8%</p>
        </div>
        <div className="waiting-count">
          <p className="title">웨이팅 건수</p>
          <p className="count">131 건</p>
        </div>
        <div className="cancel-count">
          <p className="title">캔슬 건수</p>
          <p className="count">112 건</p>
        </div>
      </div>
      <h4 className="salesrank-title">매출액 현황</h4>
      <div className="sales-rank">
        <div className="brand-ranking">
          <div className="title">
            <p>BRAND TOP 10</p>
          </div>
          <div className="brand-table">
            <BrandTable />
          </div>
          <div className="brand-view">더보기</div>
        </div>

        <div className="suppliers-ranking">
          <div className="title">
            <p>공급사 TOP 10</p>
          </div>
          <div className="suppliers-chart">
            <Rechart />
          </div>
        </div>
        <div className="buyer-ranking">
          <div className="title">
            <p>바이어 그룹별 매출 Top 10</p>
          </div>
          <div className="buyer-table">
            <BuyerGroupTable />
          </div>
          <div className="buyer-view">더보기</div>
        </div>
      </div>
    </div>
  );
};

export default Management;
