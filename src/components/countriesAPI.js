const countriesContainer = document.querySelector('.countries');

const countriesAPI = async (pagination = 0) => {
	try {
		const URL = `https://restcountries.eu/rest/v2/all`;
		const response = await fetch(URL);
		const data = await response.json();
		for (let i = pagination; i < pagination + 12; i++) {
			await renderCountries(data[i]);
		}
	} catch (error) {
		console.warn(error);
	}
};

const createHTMLElement = (element, className, name, before = '') => {
	const HTMLElement = document.createElement(element);
	HTMLElement.classList.add(className);
	HTMLElement.textContent = `${before}${name}`;
	return HTMLElement;
};

const renderCountries = async ({ flag, name, population, region, capital }) => {
	const countriesCountry = document.createElement('div');
	countriesCountry.classList.add('countries__country');

	const countryFlag = document.createElement('img');
	countryFlag.classList.add('country__flag');
	countryFlag.setAttribute('src', flag);

	const countryDescription = document.createElement('div');
	countryDescription.classList.add('countries__description');

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

	countriesCountry.appendChild(countryFlag);
	countryDescription.appendChild(countryName);
	countryDescription.appendChild(countryPopulation);
	countryDescription.appendChild(countryRegion);
	countryDescription.appendChild(countryCapital);

	countriesCountry.appendChild(countryDescription);

	countriesContainer.appendChild(countriesCountry);
};

export { countriesAPI };
