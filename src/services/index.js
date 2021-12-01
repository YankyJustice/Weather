import clouds from '../assets/image/clouds.jpg';
import snow from '../assets/image/snow.png';
import clear from '../assets/image/clear.jpg';
import rain from '../assets/image/rain.jpeg';

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
