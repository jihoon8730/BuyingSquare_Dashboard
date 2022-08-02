import React from 'react';
import './Alert.scss';

const Alert = ({
  alertTitle,
  allButton,
  alertLineTitle,
  alertContent,
  alertTime,
  alertLineTitle2,
  alertContent2,
  alertTime2,
}) => {
  return (
    <div className="Alert">
      <div className="alert-wrap">
        <div className="alert-title">{alertTitle}</div>
        <button className="all-button">{allButton}</button>
      </div>
      <div className="alert-list-wrap">
        <div className="alert-line-wrap">
          <div className="alert-line-left-wrap">
            <span className="alert-line-title"> {alertLineTitle} </span>
            <span className="alert-content"> {alertContent} </span>
          </div>
          <span className="alert-time"> {alertTime} </span>
        </div>
        <div className="alert-line-wrap">
          <div className="alert-line-left-wrap">
            <span className="alert-line-title"> {alertLineTitle2} </span>
            <span className="alert-content"> {alertContent2} </span>
          </div>
          <span className="alert-time"> {alertTime2} </span>
        </div>
      </div>
      <div className="more-tap-wrap">
        <span className="more-tap">더 보기</span>
        <i class="fa-solid fa-chevron-down" />
      </div>
    </div>
  );
};

export default Alert;
