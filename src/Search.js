import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState({});
  let [message, setMessage] = useState("false");

  function showTemperature(response) {
    setMessage(true);
    setTemperature({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://duckduckgo.com/assets/weather/svg/new/rain.svg`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = `2cb3ba8336ed4eae46f0658b42878aad`;
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(URL).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="search" />
    </form>
  );
  if (message) {
    return (
      <div>
        {form}
        <ul className="Forecast">
          <li> Temperature: {Math.round(temperature.temperature)}°C</li>
          <li> Humidity: {Math.round(temperature.humidity)}%</li>
          <li> Wind Speed: {Math.round(temperature.wind)}kmph</li>
          <li> Description: {temperature.description}</li>
          <li>
            {" "}
            <img src={temperature.icon} alt={temperature.description} />{" "}
          </li>
        </ul>
        <small><a class="coded-by" href="https://github.com/Ewarbs/react-weather" target="_blank" rel="noopener noreferrer">Open source code</a></small>
      </div>
    );
  } else {
    return form;
  }
}
