import React from "react";

export default function ForecastDate(props) { 
    console.log(props.data.time) 
    function day() {
        let days = ["Sun", "Mon", "Tues", "Wed", "Thu","Fri", "Sat"]
        let date = new Date(props.data.time * 1000)
        let day = date.getDay()
        return days[day]
    }
    
    return (
        <div className="DailyForecast">
            <div className="DailyForecast-day">{day()}</div>

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

