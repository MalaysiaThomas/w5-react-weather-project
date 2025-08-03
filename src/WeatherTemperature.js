import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("fahrenheit");


    function convertToCelcius(event) {
        event.preventDefault();
        setUnit("celcius");
    }

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if (unit === "fahrenheit") {
        return (
          <div className="WeatherTemperature">
            <span className="currentTemperature">
              {props.fahrenheit}{" "}
              <span className="unit">
                °F | <a href="/" onClick={convertToCelcius}>°C</a>
              </span>{" "}
            </span>
          </div>
        );
    } else {
        let celcius = Math.round((props.fahrenheit - 32) * 5 / 9);
        return (
          <div className="WeatherTemperature">
            <span className="currentTemperature">
              {celcius}{" "}
              <span className="unit">
                <a href="/" onClick={convertToFahrenheit}>
                  °F </a>| °C
              </span>{" "}
            </span>
          </div>
        );
    }

    
} 
