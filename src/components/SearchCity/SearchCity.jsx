import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getWeatherSagaCreator} from '../../redux/weather/actions';

import style from './searchCity.module.css'

export const SearchCity = () => {

	const [city, setCity] = useState('')
	const dispatch = useDispatch()
	const errorMessage = useSelector((state) => state.error)

	const getWeather = () => {
		dispatch(getWeatherSagaCreator(city))
	}

	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={(e) => e.preventDefault()}>
				<input
					className={style.city}
					type='text'
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<button className={style.find} onClick={getWeather}>Search</button>
			</form>
			{errorMessage}
		</div>
	)
}