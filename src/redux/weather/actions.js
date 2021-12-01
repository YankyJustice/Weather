export const GET_WEATHER = 'GET_WEATHER'
export const SET_WEATHER = 'SET_WEATHER'
export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const INIT_APP = 'INIT_APP'

export const getWeatherSagaCreator = (payload) => {
	return {
		type: GET_WEATHER,
		payload
	}
}

export const setWeatherAC = (payload) => {
	return {
		type: SET_WEATHER,
		payload
	}
}

export const loadingAC = (payload) => {
	return {
		type: LOADING,
		payload,
	}
}

export const errorAC = (payload) => {
	return {
		type: ERROR,
		payload,
	}
}

export const initAppAC = (payload) => {
	return {
		type: INIT_APP,
		payload,
	}
}
