import clouds from '../assets/clouds.jpg';
import snow from '../assets/snow.png';
import clear from '../assets/clear.jpg';
import rain from '../assets/rain.jpeg';

export const weatherImgGen = (weather) => {
	switch (weather) {
		case 'Clouds':
			return clouds
		case 'Snow':
			return snow
		case 'Clear':
			return clear
		case 'Rain':
			return rain
		default:
			return undefined
	}

}