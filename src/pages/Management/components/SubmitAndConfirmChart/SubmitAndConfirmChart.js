import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const SubmitAndConfirmChart = () => {
  const data = [
    {
      name: '21년 5월',
      SUBMIT: 1090,
      CONFIRM: 500,
      '???': 800,
    },
    {
      name: '21년 6월',
      SUBMIT: 868,
      CONFIRM: 300,
      '???': 567,
    },
    {
      name: '21년 7월',
      SUBMIT: 1297,
      CONFIRM: 600,
      '???': 498,
    },
    {
      name: '21년 8월',
      SUBMIT: 1180,
      CONFIRM: 200,
      '???': 1100,
    },
    {
      name: '21년 9월',
      SUBMIT: 820,
      CONFIRM: 800,
      '???': 1008,
    },
    {
      name: '21년 10월',
      SUBMIT: 1020,
      CONFIRM: 500,
      '???': 500,
    },
    {
      name: '21년 11월',
      SUBMIT: 620,
      CONFIRM: 300,
      '???': 200,
    },
    {
      name: '21년 12월',
      SUBMIT: 920,
      CONFIRM: 1000,
      '???': 500,
    },
    {
      name: '22년 1월',
      SUBMIT: 1020,
      CONFIRM: 1300,
      '???': 600,
    },
    {
      name: '22년 2월',
      SUBMIT: 1320,
      CONFIRM: 1100,
      '???': 300,
    },
    {
      name: '22년 3월',
      SUBMIT: 520,
      CONFIRM: 300,
      '???': 800,
    },
    {
      name: '22년 4월',
      SUBMIT: 1520,
      CONFIRM: 1000,
      '???': 1108,
    },
  ];
  return (
    <ComposedChart
      width={1600}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="???" barSize={20} fill="#43B5F4" />
      <Bar dataKey="CONFIRM" barSize={20} fill="#0088FE" />
      <Line type="monotone" dataKey="SUBMIT" stroke="#ff7300" />
    </ComposedChart>
  );
};

export default SubmitAndConfirmChart;
