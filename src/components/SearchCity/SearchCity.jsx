import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getWeatherSagaCreator} from '../../redux/weather/actions';
import {getError} from "../../redux/weather/selectors";

import style from './searchCity.module.css'

export const SearchCity = () => {

  const dispatch = useDispatch()

  const [city, setCity] = useState('')
  const errorMessage = useSelector(getError)

  const getWeather = () => {
    dispatch(getWeatherSagaCreator(city))
  }

  const handleChange = (event) => {
    const {value} = event.target
    setCity(value)
  }

  const setDefaultName = () => setCity('Moscow')

  const handleEnterClick = (event) => {
    const {keyCode, which} = event
    if ((keyCode || which) === 13) getWeather()
  }

  return (
    <div className={style.container}>
      <div className={style.form}>
        <input
          className={style.city}
          type='text'
          value={city}
          onChange={handleChange}
          onKeyPress={handleEnterClick}
        />
        <button
          className={style.find}
          onClick={getWeather}
        >
          Search
        </button>
      </div>
      {errorMessage &&
      <div className={style.errorBlock}>
        {errorMessage} for example
        <span className={style.defaultName} onClick={setDefaultName}> Moscow</span>
      </div>
      }
    </div>
  )
}
