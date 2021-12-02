import {Map, Placemark, YMaps} from 'react-yandex-maps';
import {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

import {getWeatherSagaCreator} from '../../redux/weather/actions';

import style from './maps.module.css'


export const Maps = () => {

	const [placemarkCoords, setPlacemarkCoords] = useState()
	const [initMap, setInitMap] = useState(false)
	const [mapCenter, setMapCenter] = useState([55.75, 37.57])

	const dispatch = useDispatch()
	const map = useRef()

	useEffect(() => {
		map.current?.events.add('click', (e) => {
			let coords = e.get('coords')
			setPlacemarkCoords(coords)
			setMapCenter(coords)
			dispatch(getWeatherSagaCreator(undefined, coords))
		})
	}, [dispatch, initMap])

	return (
		<YMaps>
			<div className={style.mapContainer}>
				<Map
					state={{center: mapCenter, zoom: 9, controls: []}}
					width={500}
					height={500}
					instanceRef={map}
					onLoad={() => setInitMap(true)}
				>
					<Placemark geometry={placemarkCoords}/>
				</Map>
			</div>
		</YMaps>
	)
}