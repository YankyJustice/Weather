import {useSelector} from 'react-redux';

import {PreloaderHOC} from '../../hoc/preloader';
import {weatherImgGen} from '../../services';

import style from './weather.module.css'

const Weather = () => {

	const weatherState = useSelector((state) => state)

	const temp = Math.floor(weatherState.main.temp - 273.15)
	const weather = weatherImgGen(weatherState.weather[0].main)

	return (
		<div className={style.container}>
			{weatherState.initApp ?
				<div>
					<div className={style.header}>
						<h1>{weatherState.name}</h1>
					</div>
					<div className={style.data}>
				<span className={style.weather}>
				<img className={style.weatherIMG} src={weather}/>
				</span>
						<span>{temp}°C</span>
					</div>
				</div>
				:
				<div className={style.notInitApp}>
					<h1>Введите город</h1>
				</div>}
		</div>
	)
}


export const WeatherWithPreloader = PreloaderHOC(Weather)