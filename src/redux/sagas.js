import {all} from 'redux-saga/effects'
import {weatherWatcher} from './weather/weatherSaga';

export function* rootSaga() {
	yield all([weatherWatcher()])
}