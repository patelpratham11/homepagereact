import '../Style/Weather.css'
import Snow from '../Assets/snow.png'
import Rain from '../Assets/rain.png'
import Storm from '../Assets/storm.png'
import Hot from '../Assets/summer.png'
import Cold from '../Assets/winter.png'
import Wind from '../Assets/wind.png'
import Cloudy from '../Assets/clouds.png'
import Normal from '../Assets/partly-cloudy-day.png'

import { useState, useEffect } from 'react';


const Weather = (props) => {
    const [data, setData] = useState(null);
    const [imageVal, setImageVal] = useState();
    const imgSelection = (json) => {
      if(json['weather']['0']['main'] === "Rain" || json['weather']['0']['main'] === "Mist" || json['weather']['0']['main'] === "Drizzle"){
        setImageVal(Rain); // RAIN TYPE
      } else if (json['weather']['0']['main'] === "Thunderstorm"){
        setImageVal(Storm);
      } else if (json['main']['wind_speed'] > 7){
        setImageVal(Wind);
      }else if (json['weather']['0']['main'] === "Clouds"){
        setImageVal(Cloudy);
      } else if (json['weather']['0']['main'] === "Snow"){
        setImageVal(Snow);
      }else if (json['main']['feels_like'] >= 70){
        setImageVal(Hot);
      } else if (json['main']['feels_like'] < 40){
        setImageVal(Cold);
      } else{
        setImageVal(Normal);
      }
    }
  // useEffect(() => {
  //   fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.4406&lon=-79.9959&appid=23f7b63fd1c1d1a3b0dc5b97fc5c66af&units=imperial")
  //     .then(response => response.json())
  //     .then(json => {
  //       setData(json);
  //       imgSelection(json);
  //       console.log(json)
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  if(data != null){
    return (

        <div className="weather-container">
            <h1>{data != null ? data['name'] : "Error"}</h1>
            <div className="temperature">
                <p> <b>Temperature: </b> {data != null ? data['main']['temp_min'] : "Error" } - {data != null ? data['main']['temp_max'] : "Error" }</p>
                <p> <b>Feels Like: </b> {data != null ? data['main']['feels_like'] : "Error" } </p>
                <p> <b>Weather: </b> {data != null ? data['weather']['0']['description'] : "Error" } </p> 
            </div>
            <div className="img">
              <img src={imageVal} alt="" />
            </div>
        </div>
    )
  } else{
    return (

      <div className="weather-container">
          <h1>PITT</h1>
          <div className="temperature">
              <p> <b>Temperature: </b> 20 - 50</p>
              <p> <b>Feels Like: </b> 40 </p>
              <p> <b>Weather: </b> CLOUDY </p> 
          </div>
          <div className="img">
            <img src={Hot} alt="" />
          </div>
      </div>
  )
  }
    
    
  };

export default Weather;