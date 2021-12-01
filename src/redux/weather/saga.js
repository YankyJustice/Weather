import {call, put, takeEvery,} from 'redux-saga/effects';

import {getWeather} from './services';
import {errorAC, GET_WEATHER, initAppAC, loadingAC, setWeatherAC} from './actions';

function* weatherWorker(action) {
	try {
		yield put(loadingAC(true))
		const weatherData = yield call(() => getWeather(action.payload).then(res => res.data))
		yield put(setWeatherAC(weatherData))
		yield put(loadingAC(false))
		yield put(errorAC(''))
		yield put(initAppAC(true))
	} catch (e) {
		yield put(errorAC('Change you city name'))
		yield put(loadingAC(false))
	}
}

export function* weatherWatcher() {
	yield takeEvery(GET_WEATHER, weatherWorker)
}
