export const searchCountries = ({ value }) => {
	const cities = [...document.querySelectorAll('[data-country]')];
	for (const city of cities) {
		const text = city.dataset.country;
		city.style.setProperty(
			'display',
			`${text.toLowerCase().includes(value.toLowerCase()) ? '' : 'none'}`
		);
	}
};
