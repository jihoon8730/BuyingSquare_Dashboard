import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Rechart = () => {
  const data = [
    {
      name: 'IC',
      price: 100,
      '단위 : 1(억)': 99,
    },
    {
      name: 'BT',
      '단위 : 1(억)': 70,
    },
    {
      name: 'GB',
      '단위 : 1(억)': 50,
    },
    {
      name: 'SR',
      '단위 : 1(억)': 45,
    },
    {
      name: 'SK',
      '단위 : 1(억)': 40,
    },
    {
      name: 'CC',
      '단위 : 1(억)': 30,
    },
    {
      name: 'CL',
      '단위 : 1(억)': 25,
    },
    {
      name: 'CL',
      '단위 : 1(억)': 25,
    },
  ];
  return (
    <BarChart
      width={500}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 5,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="price" />
      <Tooltip />
      <Legend />
      <Bar dataKey="단위 : 1(억)" fill="#43B5F4" />
    </BarChart>
  );
};
export default Rechart;
