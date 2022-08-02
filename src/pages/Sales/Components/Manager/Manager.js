import React from 'react';
import { ResponsiveContainer } from 'recharts';
import './Manager.scss';
import './Manager.scss';

const Manager = ({
  managerName,
  detailButton,
  managerGraph,
  managerAmount,
  managerGet,
  managerPeriod,
  managerGetTitle,
  managerPeriodTitle,
}) => {
  return (
    <div className="Manager">
      <div className="manager-title-wrap">
        <div className="manager-name">{managerName}</div>
        <button className="detail-button">{detailButton}</button>
      </div>
      <div className="manager-graph-wrap">{managerGraph}</div>
      <div className="manager-target-amount">{managerAmount}</div>
      <div className="manager-get-title">{managerGetTitle}</div>
      <div className="manager-get-bar-graph">{managerGet}</div>
      <div className="manager-period-title">{managerPeriodTitle}</div>
      <div className="manager-period-bar-graph">{managerPeriod}</div>
    </div>
  );
};

export default Manager;
