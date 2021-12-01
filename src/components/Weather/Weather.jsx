import React from "react";
import {useSelector} from 'react-redux';

import {PreloaderHOC} from '../../hoc/preloader';
import {weatherImgGen} from '../../services';

import style from './weather.module.css'
import {getApp, getCurrentTemp, getInfo, getName} from "../../redux/weather/selectors";

const Weather = () => {
  const currentTemp = useSelector(getCurrentTemp)
  const name = useSelector(getName)
  const app = useSelector(getApp)
  const info = useSelector(getInfo)

  const temp = Math.floor(currentTemp - 273.15)
  const weather = weatherImgGen(info)

  return (
    <div className={style.container}>
      {
        app ?
          <div>
            <div className={style.header}>
              <h1>{name}</h1>
            </div>
            <div className={style.data}>
				    <span className={style.weather}>
				     <img
               className={style.weatherIMG}
               src={weather}
               alt='weather'
             />
				    </span>
              <span>{temp}°C</span>
            </div>
          </div>
          :
          <div className={style.notInitApp}>
            <h1>Input city name</h1>
          </div>
      }
    </div>
  )
}


export const WeatherWithPreloader = PreloaderHOC(Weather)
