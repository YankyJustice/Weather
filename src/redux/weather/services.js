import ajaxWrapper from '../../api/api';

const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather'
const APP_ID = 'be45e15d31f64a3694793fbbae2df768'
const LANG = 'en'

export const getWeather = (coords = undefined, city = undefined) => {

	const url = coords ?
	`${WEATHER_API}?lat=${coords[0]}&lon=${coords[1]}&appid=${APP_ID}&lang=${LANG}`
	:
	`${WEATHER_API}?q=${city}&appid=${APP_ID}&lang=${LANG}`;

	return ajaxWrapper({
		method: 'GET',
		url,
	});
};
