import { createHTMLElement, createContainer } from './countriesAPI';
import { error } from './errorApi';

const modalContainer = document.querySelector('.main');

export const eachCity = async cityName => {
	try {
		const URL = `https://restcountries.eu/rest/v2/name/${cityName}`;
		const response = await fetch(URL);
		const data = await response.json();
		await managementContainer('none');
		await renderModal(data[0]);
	} catch {
		await managementContainer('flex');
		await error();
		console.warn(`API dont have data about this country.`);
	}
};

const managementContainer = style => {
	const containerItems = [...modalContainer.children];
	containerItems.map(item => (item.style.display = style));
};

const borderCountries = () => {
	const borderButtons = [...document.querySelectorAll('.details__button')];
	borderButtons.forEach(borderButton =>
		borderButton.addEventListener('click', e => {
			eachCity(e.target.dataset.countrycode);
			document.querySelector('.countries__detail').remove();
		})
	);
};

const renderModal = data => {
	const {
		nativeName,
		population,
		capital,
		region,
		flag,
		name,
		subregion,
		currencies,
		languages,
		topLevelDomain,
		borders,
	} = data;

	const { name: currenciesName } = currencies[0];

	const modalDescription = document.createElement('div');
	modalDescription.classList.add('details__description');

	const modalDescriptionInfo = document.createElement('div');
	modalDescriptionInfo.classList.add('details__informations');

	const modalLeftDescription = document.createElement('div');
	modalLeftDescription.classList.add('details__left');

	const modalRightDescription = document.createElement('div');
	modalRightDescription.classList.add('details__right');

	const modalCountriesContainer = document.createElement('div');
	modalCountriesContainer.classList.add('details__buttons');

	const modalImg = document.createElement('img');
	modalImg.setAttribute('src', flag);
	modalImg.classList.add('countries__detail-img');

	const modalName = createHTMLElement('h2', 'countries__detail-name', name);
	const modalNativeName = createHTMLElement(
		'p',
		'countries__details-nativeName',
		nativeName,
		'Native Name: '
	);

	const modalPopulation = createHTMLElement(
		'p',
		'countries__detail-population',
		population,
		'Population: '
	);

	const modalRegion = createHTMLElement(
		'p',
		'countries__detail-region',
		region,
		'Region: '
	);

	const modalSubRegion = createHTMLElement(
		'p',
		'countries__detail-subregion',
		subregion,
		'Sub Region: '
	);
	const modalCapital = createHTMLElement(
		'p',
		'countries__detail-capital',
		capital,
		'Capital: '
	);

	const modalBackButton = createHTMLElement(
		'button',
		'countries__detail-back',
		'Back'
	);

	const modalTopLevelDomain = createHTMLElement(
		'p',
		'countries__detail-domain',
		topLevelDomain[0],
		'Top Level Domain: '
	);

	const modalCurrencies = createHTMLElement(
		'p',
		'countries__detail-currencies',
		currenciesName,
		'Currencies : '
	);

	const modalLanguages = createHTMLElement(
		'p',
		'countries__detail-languages',
		languages.map(language => language.name).join(', '),
		'Languages: '
	);
	modalCountriesContainer.innerHTML = `
		<p class="details__buttons-title special">Border countries: </p>
		${borders
			.map(
				border =>
					`<button class="details__button" data-countryCode=${border}>${border}</button>`
			)
			.join('')}
	`;

	modalBackButton.addEventListener('click', () => {
		managementContainer('flex');
		document.querySelector('.countries__detail').remove();
	});

	const modal = document.createElement('div');
	modal.classList.add('countries__detail');
	modalLeftDescription.appendChild(modalName);
	modalLeftDescription.appendChild(modalNativeName);
	modalLeftDescription.appendChild(modalPopulation);
	modalLeftDescription.appendChild(modalRegion);
	modalLeftDescription.appendChild(modalSubRegion);
	modalLeftDescription.appendChild(modalCapital);
	modalRightDescription.appendChild(modalTopLevelDomain);
	modalRightDescription.appendChild(modalCurrencies);
	modalRightDescription.appendChild(modalLanguages);
	modalDescriptionInfo.appendChild(modalLeftDescription);
	modalDescriptionInfo.appendChild(modalRightDescription);
	modalDescription.appendChild(modalDescriptionInfo);
	modalDescription.appendChild(modalCountriesContainer);

	modal.appendChild(modalImg);
	modal.appendChild(modalDescription);
	modal.appendChild(modalBackButton);
	modalContainer.appendChild(modal);

	borderCountries();
};
