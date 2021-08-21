import { eachCity } from './cityModal';

const countriesContainer = document.querySelector('.countries');

const countriesAPI = async (pagination = 0) => {
	try {
		const URL = `https://restcountries.eu/rest/v2/all`;
		const response = await fetch(URL);
		const data = await response.json();
		data.forEach(async (el, i) => {
			if (i < 12) await renderCountries(el);
		});
		const cities = [...document.querySelectorAll('[data-country]')];
		cities.forEach(city => {
			city.addEventListener('click', () => eachCity(city.dataset.country));
		});
	} catch (error) {
		console.warn(error);
	}
};

const createHTMLElement = (element, className, name, before = '') => {
	const HTMLElement = document.createElement(element);
	HTMLElement.classList.add(className);
	HTMLElement.innerHTML = `<span class="special">${before}</span>${name}`;
	return HTMLElement;
};

const createContainer = className => {
	const container = document.createElement('div');
	container.classList.add(className);
	return container;
};

const renderCountries = async ({ flag, name, population, region, capital }) => {
	const countriesCountry = createContainer('countries__country');
	countriesCountry.dataset.country = name;
	countriesCountry.dataset.region = region;
	const countryImage = createContainer('countries__image');
	const countryFlag = document.createElement('img');
	countryFlag.classList.add('countries__image-flag');
	countryFlag.setAttribute('src', flag);
	const countryDescription = createContainer('countries__description');
	const countryName = createHTMLElement('h2', 'countries__name', name);
	const countryPopulation = createHTMLElement(
		'p',
		'countries__population',
		population,
		'Population: '
	);

	const countryRegion = createHTMLElement(
		'p',
		'countries__region',
		region,
		'Region: '
	);
	const countryCapital = createHTMLElement(
		'p',
		'countries__capital',
		capital,
		'Capital: '
	);

	countryImage.appendChild(countryFlag);
	countryDescription.appendChild(countryName);
	countryDescription.appendChild(countryPopulation);
	countryDescription.appendChild(countryRegion);
	countryDescription.appendChild(countryCapital);

	countriesCountry.appendChild(countryImage);
	countriesCountry.appendChild(countryDescription);

	countriesContainer.appendChild(countriesCountry);
};

export { countriesAPI, createHTMLElement };
