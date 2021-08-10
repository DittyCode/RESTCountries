import { countriesAPI } from './countriesAPI';

localStorage.setItem('paginationNumber', 0);

export const pagination = () => {
	let paginationNumber = parseInt(
		localStorage.getItem('paginationNumber') || 0
	);
	localStorage.setItem('paginationNumber', (paginationNumber += 12));
	countriesAPI(paginationNumber);
};
