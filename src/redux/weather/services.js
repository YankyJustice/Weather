import ajaxWrapper from '../../api/api';

const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather'
const APP_ID = 'be45e15d31f64a3694793fbbae2df768'
const LANG = 'en'

export const getWeather = (data) => {
	const url = `${WEATHER_API}?q=${data}&appid=${APP_ID}&lang=${LANG}`;
	return ajaxWrapper({
		method: 'GET',
		url,
	});
};
