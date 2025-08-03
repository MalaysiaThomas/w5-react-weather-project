import React from "react";
import './DailyForecast.css';


export default function DailyForecast() {
    return (
      <div className="DailyForecast">
        <div className="row">
          <div className="col">
            <div className="DailyForecast-day">Mon</div>

            <div className="DailyForecast-icon">
              <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Sunny" />
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