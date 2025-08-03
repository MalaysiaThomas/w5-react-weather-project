import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h2>{props.data.city}</h2>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row current-weather-container">
          <div className="col-6 align-center-horizontally">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <span className="currentTemperature">
              {props.data.temperature}
              <span className="unit">°F</span>
            </span>
          </div>
          <div className="col-6 current-details">
            <ul>
              <li>Feels Like: {props.data.feelsLike}°</li>
              <li>Humidity: {props.data.humidity}% </li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
    }