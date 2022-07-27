import React from 'react';
import './Sales.scss';
import Corporation from './Components/Corporation/Corporation';
import Manager from './Components/Manager/Manager';
import SalesTable from './Components/SalesTable/SalesTable';

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
            <div className="year-summit-amount">
              <span className="year-summit-amount-title">SUBMIT 금액</span>
              <span className="year-summit-amount-number">1,165,318,372</span>
            </div>
            <div className="year-target-percent">
              <span className="year-target-percent-title">달성률</span>
              <span className="year-target-percent-number">15.6%</span>
            </div>
            <div className="year-confirm">
              <span className="year-confirm-title">전체 컨펌률</span>
              <span className="year-confirm-number">10.4%</span>
            </div>
          </div>
        </div>

        <div className="month-target-whole-wrap">
          <div className="month-target-big-title">2022년 4월</div>

          <div className="month-target-data-wrap">
            <div className="month-target-wrap">
              <div className="month-target-title">목표금액</div>
              <div className="month-target-number">₩ 7,480,000,000</div>
            </div>
            <div className="month-submit-wrap">
              <div className="month-submit-title">써밋금액</div>
              <div className="month-submit-number">₩ 1,165,318,372</div>
            </div>
            <div className="month-target-percent-wrap">
              <div className="month-target-percent-title">달성률</div>
              <div className="month-target-percent-number">15.6%</div>
            </div>
            <div className="month-confirm-percent-wrap">
              <div className="month-confirm-percent-title">전체컨펌률</div>
              <div className="month-confirm-percent-number">10.4%</div>
            </div>
            <button className="more-button">자세히 보기</button>
          </div>
        </div>
      </div>
      <div className="weekly-target-wholewrap">
        <div className="weekly-left-wrap">
          <div className="weekly-target-graph-wrap">
            <div className="weekly-target-title">주간 목표와 달성률</div>
            <div className="weekly-target-graph">그래프넣기</div>
          </div>

          <div className="weekly-targer-data-wrap">
            <div className="weekly-number-wrap">
              <span className="weekly-get-number">
                현재 달성 금액:₩987.035,061
              </span>
              <span className="weekly-target-number">
                4월 총 목표 금액:₩6,160,000,000
              </span>
            </div>
            <div className="weekly-bar-graph">그래프 넣기 16%</div>
          </div>
        </div>
        <div className="weekly-list-wrap">
          <div className="weekly-top-wrap">
            <div className="weekly-list-title">4월 1주차</div>
            <div className="weekly-corporation-wrap">
              <Corporation
                corporationList="29cm"
                corporationNumber="32,409,327"
                corporationPercent="18%"
              />
              <Corporation
                corporationList="무신사_부티크"
                corporationNumber="851,184,094"
                corporationPercent="276%"
              />
            </div>
          </div>
          <div className="weekly-get">
            <Corporation
              corporationList="현재 달성액"
              corporationNumber="931,905,669"
              corporationPercent="18%"
            />
          </div>
        </div>
      </div>
      <div className="manager-target-big-title">매니저별 목표와 달성률</div>
      <div className="manager-target-wrap">
        <Manager managerName="HOON" detailButton="상세보기" />
        <Manager managerName="DEMIE" detailButton="상세보기" />
        <Manager managerName="HOON" detailButton="상세보기" />
      </div>
      <div className="popular-offer-wholewrap">
        <div className="popular-title-wrap">
          <div className="popular-offer-title">인기오퍼리스트</div>
          <button className="popular-button">자세히 보기</button>
        </div>
        <SalesTable />
      </div>
    </div>
  );
};

export default Sales;
