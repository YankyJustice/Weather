import style from './app.module.css'

import {SearchCity} from './components/SearchCity';
import {WeatherWithPreloader} from './components/Weather/Weather';

function App() {
  return (
    <div className={style.container}>
      <WeatherWithPreloader/>
      <SearchCity/>
    </div>
  );
}

export default App;
