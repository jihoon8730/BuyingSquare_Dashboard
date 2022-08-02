import React from 'react';
import './Corporation.scss';

const Corporation = ({
  corporationList,
  corporationNumber,
  corporationPercent,
}) => {
  return (
    <div className="Corporation">
      <span className="cor-list">{corporationList}</span>
      <span className="cor-number">{corporationNumber}</span>
      <span className="cor-percent">{corporationPercent}</span>
    </div>
  );
};

export default Corporation;
