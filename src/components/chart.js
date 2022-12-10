import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';
import { data } from '../assets/data';

export default function Chart() {
  return (
    // <ResponsiveContainer width="100%" height="100vh">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" isAnimationActive={false} fill="#8884d8" background={{ fill: '#eee' }} />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    // </ResponsiveContainer>
  );
}