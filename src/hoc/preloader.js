import {connect} from 'react-redux';

import {Preloader} from '../components/Preloader/Preloader';

export const PreloaderHOC = (Component) => {


	const preloader = ({loading}) => {

		if (loading) {
			return <Preloader/>
		}
		return <Component/>
	}

	let MapStateToProps = (state) => {
		return {
			loading: state.loading
		}
	}

	let connected = connect(MapStateToProps)(preloader)
	return connected
}