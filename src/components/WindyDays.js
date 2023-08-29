
import React from 'react';

function WindyDays({ deviceData,darkMode }) {
  const getDayOfWeek = (dateString) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  // Function to find the windiest days
  const findWindiestDays = () => {
    const windData = deviceData.map(entry => ({
      day: getDayOfWeek(entry.t),
      wind: entry.w, // Assuming 'w' represents wind speed
    }));

    const daysMap = {};
    windData.forEach(entry => {
      if (!daysMap[entry.day]) {
        daysMap[entry.day] = [];
      }
      daysMap[entry.day].push(entry.wind);
    });

    const windyDaies = Object.keys(daysMap).map(day => ({
      day,
      averageWind: daysMap[day].reduce((sum, wind) => sum + wind, 0) / daysMap[day].length,
    }));

    return windyDaies;
  };

  const windyDay = findWindiestDays();
  return (
    <div
      style={{
        margin: "20px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "20vh",
          width: "30%",
          background: darkMode ? "#2a2b2d" : "#f2f2f2",
          boxShadow: "0px 0px 5px 0px rgba(150,144,150,1)",
          borderRadius: 5,
        }}
      >
        <div
          style={{
            height: 40,
            fontSize: 16,
            padding: "5px 10px",
            fontWeight: "bold",
            borderBottom: "1px solid gray",
            textAlign: "center",
            color: !darkMode ? "#2a2b2d" : "#f2f2f2",
          }}
        >
          Windy Days
        </div>
        <ul>
          {windyDay.map((day) => (
            <li key={0} style={{color: !darkMode ? "#2a2b2d" : "#f2f2f2"}} >{day.day}: {day.averageWind.toFixed(2)} km/h</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WindyDays;

