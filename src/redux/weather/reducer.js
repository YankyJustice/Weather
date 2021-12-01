import {ERROR, INIT_APP, LOADING, SET_WEATHER} from './actions';

const initialState = {
	loading: false,
	error: '',
	main: {
		temp: 273.15,
	},
	weather: [{main: ''}],
	initApp: false,
}


export const weather = (state = initialState, action) => {
	switch (action.type) {
		case SET_WEATHER:
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
		case INIT_APP:
			return {
				...state,
				initApp: action.payload,
			}
		default:
			return state
	}
}
