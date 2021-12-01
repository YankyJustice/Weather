import {all} from 'redux-saga/effects'
import {weatherWatcher} from './weather/saga';

export default function* rootSaga() {
	yield all([weatherWatcher()])
}
