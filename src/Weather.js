import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';
import WeatherInfo from './WeatherInfo';
import DailyForecast from './DailyForecast';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({loaded: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
          loaded: true,
          date: new Date(response.data.dt * 1000),
          iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          temperature: Math.round(response.data.main.temp),
          feelsLike: Math.round(response.data.main.feels_like),
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          wind: Math.round(response.data.wind.speed),
          city: response.data.name,
          coordinates: response.data.coord
        });
    }

    function search() {
         const apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
         let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

         axios.get(apiUrl).then(handleResponse);
    }


    function handleSubmit(event) {
        event.preventDefault();
        search()
    }

    function handleCityChange(event) {
        setCity(event.target.value);
        
    }



    if (weatherData.loaded) {
        return (
          <div className="Weather">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCityChange}
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
            <WeatherInfo data={weatherData}/>
            <DailyForecast coordinates={weatherData.coordinates}/>
          </div>
        );
    } else {
        search(); // Initial search when component mounts
        return "Loading...";
    }
}