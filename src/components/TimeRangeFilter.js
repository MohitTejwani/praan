
import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import "./Style.css";

const { RangePicker } = DatePicker;

function TimeRangeFilter({ setTimeRange, darkMode }) {

  const handleTimeRangeChange = (
    value,
    dateString,
  ) => {
    setTimeRange({start:dateString[0], end:dateString[1]})
  };
  
  return (
    <div className="time-range-filter-container">
      <RangePicker
        style={{
          backgroundColor: darkMode ? "#2a2b2d" : "#f2f2f2",
        }}
        format="YYYY-MM-DD HH:mm"
        onChange={handleTimeRangeChange} />
    </div>
  );
}

export default TimeRangeFilter;