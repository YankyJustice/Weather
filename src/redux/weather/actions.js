export const GETWEATHER = 'GET-WEATHER'
export const SETWEATHER = 'SET-WEATHER'
export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const INITAPP = 'INITAPP'

export const getWeatherSagaCreator = (payload) => {
	return {
		type: GETWEATHER,
		payload
	}
}

export const setWeatherAC = (payload) => {
	return {
		type: SETWEATHER,
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
		type: INITAPP,
		payload,
	}
}