import React, { useEffect, useState } from "react";
import { Checkbox, Col, Row } from "antd";
import DarkModeButton from "./DarkModeButton";
import TimeRangeFilter from "./TimeRangeFilter";
import Charts from "./Charts";
import WindyDays from "./WindyDays";
import TimeSeriesGraph from "./TimeSeriesGraph";
import { fetchAllDeviceData, fetchFilteredData } from "../service/apiHelper";
import "./Style.css";
function Dashboard() {
  const [timeRange, setTimeRange] = useState({ start: null, end: null });
  const [darkMode, setDarkMode] = useState(false);
  const [deviceData, setDeviceData] = useState([]);
  const [showTimeSeries, setShowTimeSeries] = useState(false);

  useEffect(() => {
    const asyncWrapper = async () => {
      const deviceDetails = await fetchAllDeviceData();
      setDeviceData(deviceDetails.data);
    };
    asyncWrapper();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const deviceData = await fetchFilteredData(
        timeRange.start,
        timeRange.end
      );
      console.log(deviceData.data);
      setDeviceData(deviceData.data);
    };
    if (timeRange.start !== null && timeRange.end !== null) {
      getData();
    }
  }, [timeRange]);

  return (
    <div
      className="dark-mode-header"
      style={{
        background: darkMode ? "#2a2b2d" : "#f2f2f2",
      }}
    >
      {/* Header */}
      <Row
        style={{
          background: darkMode ? "#2a2b2d" : "#f2f2f2",
          alignItems: "center",
        }}
      >
        <Col
          sm={8}
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: !darkMode ? "#2a2b2d" : "#f2f2f2",
          }}
        >
          Praan
        </Col>

        <Col sm={8}>
          <TimeRangeFilter setTimeRange={setTimeRange} darkMode={darkMode} />
        </Col>
        <Col sm={8} style={{ display: "flex", justifyContent: "end" }}>
          <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </Col>
      </Row>

      {/* Charts */}
      <div className="chart-container">
        <div
          className="chart-model"
          style={{
            background: darkMode ? "#2a2b2d" : "#f2f2f2",
          }}
        >
          {" "}
          <div className="time-series-model" style={{}}>
            <span
              style={{
                color: !darkMode ? "#2a2b2d" : "#f2f2f2",
                fontWeight: "bold",
                font: "16px",
              }}
            >
              {" "}
              Device Infromation Graph{" "}
            </span>
          </div>
          <Charts data={deviceData} />
        </div>
        <div
          className="time-series-container"
          style={{
            background: darkMode ? "#2a2b2d" : "#f2f2f2",
          }}
        >
          <div className="time-series-model">
            <span style={{ color: !darkMode ? "#2a2b2d" : "#f2f2f2" }}>
              {" "}
              Time-Series Graph{" "}
            </span>
            <Checkbox
              onChange={() => setShowTimeSeries(!showTimeSeries)}
              style={{ color: !darkMode ? "#2a2b2d" : "#f2f2f2" }}
            >
              {" "}
              Show Time Series
            </Checkbox>
          </div>
          <TimeSeriesGraph data={deviceData} showTimeSeries={showTimeSeries} />
        </div>
      </div>

      <WindyDays deviceData={deviceData} darkMode={darkMode}></WindyDays>
    </div>
  );
}

export default Dashboard;
