import ajaxWrapper from '../../api/api';

export const getWeather = (data) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=be45e15d31f64a3694793fbbae2df768&lang=ru`;
	return ajaxWrapper({
		method: 'GET',
		url,
	});
};