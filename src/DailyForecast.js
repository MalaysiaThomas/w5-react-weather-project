import React from "react";
import './DailyForecast.css';
import axios from 'axios';


export default function DailyForecast() {
    function handleResponse(response) {
       console.log(response.data);
     }

    const apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
    let lat = 40.7128; // Example latitude for New York
    let lon = -74.0060; // Example longitude for New York
    // Replace with actual latitude and longitude from weatherData if available
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
   

    axios.get(apiUrl).then(handleResponse)

    return (
      <div className="DailyForecast">
        <div className="row">
          <div className="col">
            <div className="DailyForecast-day">Mon</div>

            <div className="DailyForecast-icon">
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt="Sunny"
              />
            </div>

            <div className="DaiyForecast-temperatures">
              <span className="DailyForecast-temperature-max">72°</span>
              <span className="DailyForecast-temperature-min">55°</span>
            </div>
          </div>
          
        </div>
      </div>
    );
}