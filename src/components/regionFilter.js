export const regionFilterCountries = ({ value }) => {
	const cities = [...document.querySelectorAll('[data-country]')];
	if (!value) {
		cities.forEach(city => city.style.setProperty('display', ''));
	} else {
		for (const city of cities) {
			const text = city.dataset.region;
			city.style.setProperty('display', `${text === value ? '' : 'none'}`);
		}
	}
};
