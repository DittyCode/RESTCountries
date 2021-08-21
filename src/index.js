import { countriesAPI } from './components/countriesAPI';
import { pagination } from './components/pagination';
import { searchCountries } from './components/searchCountry';
import { themeSwitch } from './components/themeSwitcher';
import { regionFilterCountries } from './components/regionFilter';
import './scss/styles.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

dom.i2svg();

countriesAPI();

const themeSwitcher = document.querySelector('[data-themeBtn]');
const buttonPagination = document.querySelector('[data-pagination]');
const searchInput = document.querySelector('[data-search]');
const regionFilter = document.querySelector('[data-regionFilter]');

regionFilter.addEventListener('change', e => regionFilterCountries(e.target));

searchInput.value = '';

searchInput.addEventListener('input', e => searchCountries(e.target));

document.body.dataset.theme = localStorage.getItem('theme');

themeSwitcher.addEventListener('click', themeSwitch);

// buttonPagination.addEventListener('click', pagination);
