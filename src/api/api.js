import axios from 'axios';

export default function ajaxWrapper(params) {
	let defautlHeaders = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	};

	const headers = {
		...defautlHeaders,
		...params.headers,
	};

	return axios({
		headers,
		method: params.method,
		url: params.url,
		data: params.data,
	})
}