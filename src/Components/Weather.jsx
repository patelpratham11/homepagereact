import '../Style/Weather.css'
import { useState, useEffect } from 'react';


const Weather = (props) => {
    const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.4406&lon=-79.9959&appid=23f7b63fd1c1d1a3b0dc5b97fc5c66af&units=imperial")
      .then(response => response.json())
      .then(json => {
        setData(json);
        console.log(json)
      })
      .catch(error => console.error(error));
  }, []);

    return (
        <div className="weather-container">
            <h1>{data != null ? data['name'] : "Error"}</h1>
            <div className="temperature">
                <p> <b>Temperature: </b> {data != null ? data['main']['temp_min'] : "Error" } - {data != null ? data['main']['temp_max'] : "Error" }</p>
                <p> <b>Feels Like: </b> {data != null ? data['main']['feels_like'] : "Error" } </p>
                <p> <b>Weather: </b> {data != null ? data['weather']['0']['main'] : "Error" } </p> 
            </div>
        </div>
    )
    
  };

export default Weather;