import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("fahrenheit");

} 

// if (unit === "farenheit") {
//     return (
//         <div className="WeatherTemperature">
//             <span className="currentTemperature">
//             {props.fahrenheit}
//             <span className="unit">°F | <a href="/">°C</a></span>
//             </span>
//         </div>
//     );