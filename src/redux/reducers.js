import { combineReducers } from 'redux';

import {weather} from './weather/reducer';

const reducers = combineReducers({
  weather,
});

export default reducers;
