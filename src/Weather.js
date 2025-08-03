import React from "react";
import './Weather.css';

export default function Weather() {
  return (
    <div className="Weather">
      <h2>Current Weather</h2>
      <p>Temperature: 20°C</p>
      <p>Condition: Sunny</p>
      <p>Humidity: 50%</p>
      <p>Wind Speed: 10 km/h</p>
    </div>
  );
}