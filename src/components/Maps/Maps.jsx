import {Map, Placemark, YMaps} from "react-yandex-maps";
import style from './maps.module.css'
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {getWeatherSagaCreator} from "../../redux/weather/actions";

export const Maps = () => {
	const [placemarkCoords, setPlacemarkCoords] = useState()
	const [initMap, setInitMap] = useState(false)
	const [mapCenter, setMapCenter] = useState([55.75, 37.57])

	const dispatch = useDispatch()
	const map = useRef()

	useEffect(()=>{
				map.current?.events.add('click', function (e) {
				let coords = e.get('coords');
					setPlacemarkCoords([coords[0].toPrecision(6), coords[1].toPrecision(6)])
				dispatch(getWeatherSagaCreator(undefined, coords))
			})
	},[initMap])


	return (
		<YMaps>
			<div className={style.mapContainer}>
				<Map
					state={{center: mapCenter, zoom: 9, controls: []}}
					width={500}
					height={500}
					instanceRef={map}
					onLoad={()=>setInitMap(true)}
				>
					<Placemark geometry={placemarkCoords}/>
				</Map>
			</div>
		</YMaps>
	)
}