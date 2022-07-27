import React from 'react';
import './Manager.scss';

const Manager = ({ managerName, detailButton }) => {
  return (
    <div className="Manager">
      <div className="manager-title-wrap">
        <div className="manager-name">{managerName}</div>
        <button className="detail-button">{detailButton}</button>
      </div>
    </div>
  );
};

export default Manager;
