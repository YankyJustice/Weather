import clouds from '../assets/image/clouds.svg';
import snow from '../assets/image/snow.svg';
import clear from '../assets/image/clear.svg';
import rain from '../assets/image/rain.svg';

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
