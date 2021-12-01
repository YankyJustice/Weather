import React from "react";

import {SearchCity} from './components/SearchCity';
import {WeatherWithPreloader} from './components/Weather/Weather';

import style from './app.module.css'

function App() {
  return (
    <div className={style.container}>
      <WeatherWithPreloader/>
      <SearchCity/>
    </div>
  );
}

export default App;
