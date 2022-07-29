import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const ManagerPieChart = () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
  ];
  const COLORS = ['#0088FE', '#00C49F'];
  return (
    <PieChart width={400} height={100}>
      <Pie
        data={data}
        cx={250}
        cy={100}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default ManagerPieChart;
