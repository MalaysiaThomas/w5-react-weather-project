import React, { useState, useEffect } from "react";
import './DailyForecast.css';
import axios from 'axios';
import ForecastDate from "./ForecastDate"

export default function DailyForecast(props) { 
  let [loaded, setLoaded] = useState(false)  
  let [forecast, setForecast] = useState(null)  

  useEffect(() => {
    setLoaded(false)
  }, [props.coordinates])

  function handleResponse(response) {
       setForecast(response.data.daily)
       setLoaded(true)
  }

  if (loaded) {
    console.log(forecast)
    return (
      <div className="DailyForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index} >
                  <ForecastDate data={dailyForecast}/>
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  } else {
        let apiKey = "34a0b3608792f91t1oc6463e450b7ab0";
        let lat = props.coordinates.lat; 
        let lon = props.coordinates.lon; 
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=imperial`
        

        axios.get(apiUrl).then(handleResponse)

        return null;
  }
}
