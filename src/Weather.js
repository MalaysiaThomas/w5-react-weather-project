import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';
import FormattedDate from './FormattedDate';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({loaded: false});

    function handleResponse(response) {
        console.log(response.data.timezone);
        setWeatherData({
            loaded: true,
            date: new Date(response.data.dt * 1000),
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            temperature: Math.round(response.data.main.temp),
            feelsLike: Math.round(response.data.main.feels_like),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed),
            city: response.data.name
        });
    }

    if (weatherData.loaded) {
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
              <li><FormattedDate date={weatherData.date} /></li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row current-weather-container">
              <div className="col-6 align-center-horizontally">
                <img src={weatherData.iconUrl} alt={weatherData.description} />
                <span className="currentTemperature">
                  {weatherData.temperature}
                  <span className="unit">°F</span>
                </span>
              </div>
              <div className="col-6 current-details">
                <ul>
                  <li>Feels Like: {weatherData.feelsLike}°</li>
                  <li>Humidity: {weatherData.humidity}% </li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
        );
    } else {
        let city = "Miami";
        const apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}