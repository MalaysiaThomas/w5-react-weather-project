import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [temperature, setTemperature] = useState(null);

  if (loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h2>Miami</h2>
        <ul>
          <li>Saturday 16:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row current-weather-container">
          <div className="col-6 align-center-horizontally">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
            />
            <span className="current-temperature">
              86<span className="unit">°F</span>
            </span>
          </div>
          <div className="col-6 current-details">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 60%</li>
              <li>Wind: 10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Miami";
    const apiKey = "94a112b0d141218038f31f41550f9de7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    return "Loading...";
  }
}