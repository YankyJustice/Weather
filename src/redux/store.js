import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootSaga} from './sagas';
import {weatherReducer} from './weatherReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(weatherReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

export default store