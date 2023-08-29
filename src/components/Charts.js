import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./Style.css";

function Charts({ data }) {
  return (
    <div id="chart-main-conatiner">
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="t" />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="p1" stroke="blue" />
      <Line type="monotone" dataKey="p10" stroke="green" />
      <Line type="monotone" dataKey="p25" stroke="red" />
    </LineChart>
    </div>
  );
}

export default Charts;

