import {ERROR, INITAPP, LOADING, SETWEATHER} from './weather/actions';

const initialState = {
	loading: false,
	error: '',
	main: {
		temp: 273.15,
	},
	weather: [{main: ''}],
	initApp: false,
}


export const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case SETWEATHER:
			return {
				...state,
				...action.payload
			}
		case LOADING:
			return {
				...state,
				loading: action.payload,
			}
		case ERROR:
			return {
				...state,
				error: action.payload,
			}
		case INITAPP:
			return {
				...state,
				initApp: action.payload,
			}
		default:
			return state
	}
}