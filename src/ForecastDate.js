import React from "react";

export default function ForecastDate(props) {    
    return (
        <div className="DailyForecast">
            <div className="DailyForecast-day">{props.data.time}</div>

            <div className="DailyForecast-icon">
                <img src={props.data.condition.icon_url} alt={props.data.condition.icon} />
            </div>

            <div className="DailyForecast-temperatures">
                <span className="DailyForecast-temperature-max">
                    {Math.round(props.data.temperature.maximum)}°
                </span>
                <span className="DailyForecast-temperature-min">
                    {Math.round(props.data.temperature.minimum)}°
                </span>
            </div>
        </div>
    );
}

