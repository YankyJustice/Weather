import {call, put, takeEvery,} from 'redux-saga/effects';

import {getWeather} from './service';
import {errorAC, GETWEATHER, initAppAC, loadingAC, setWeatherAC} from './actions';

function* weatherWorker(action) {
	try {
		yield put(loadingAC(true))
		const weatherData = yield call(() => getWeather(action.payload).then(res => res.data))
		yield put(setWeatherAC(weatherData))
		yield put(loadingAC(false))
		yield put(errorAC(''))
		yield put(initAppAC(true))
	} catch (e) {
		yield put(errorAC('Введите другой город'))
		yield put(loadingAC(false))
	}
}

export function* weatherWatcher() {
	yield takeEvery(GETWEATHER, weatherWorker)
}