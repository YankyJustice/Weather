import React from "react";

import {SearchCity} from './components/SearchCity';
import {WeatherWithPreloader} from "./components/Weather/Weather";

import style from './app.module.css'
import {Maps} from "./components/Maps/Maps";


function App() {
  return (
    <div className={style.container}>
      <Maps/>
      <div>
      <WeatherWithPreloader/>
      <SearchCity/>
      </div>
    </div>
  );
}

export default App;
