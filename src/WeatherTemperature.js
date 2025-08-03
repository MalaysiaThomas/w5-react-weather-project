import React from "react";

export default function WeatherTemperature(props) {
    return (
        <div className="WeatherTemperature">
            <span className="currentTemperature">
              {props.fahrenheit}
              <span className="unit">°F</span>
            </span>
        </div>
    );
}