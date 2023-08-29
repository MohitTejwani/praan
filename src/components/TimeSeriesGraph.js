import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { fetchAllDeviceData, fetchFilteredData } from '../service/apiHelper';

function TimeSeriesGraph({ data,showTimeSeries }) {
  // Implement the logic to overlay the time-series data
  return (
      <div>
        <div>
        </div>
      {showTimeSeries && (
        <LineChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="t" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="p1" stroke="#8884d8" name="PM 1.0" />
          <Line type="monotone" dataKey="p25" stroke="#82ca9d" name="PM 2.5" />
          <Line type="monotone" dataKey="p10" stroke="#ffc658" name="PM 10" />
        </LineChart>
      )}
    </div>
  );
}

export default TimeSeriesGraph;
