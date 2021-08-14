import { countriesAPI } from './components/countriesAPI';
import { pagination } from './components/pagination';
import { themeSwitch } from './components/themeSwitcher';
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

document.body.dataset.theme = localStorage.getItem('theme');

const theme = localStorage.getItem('theme');

themeSwitcher.addEventListener('click', () => themeSwitch(theme));

buttonPagination.addEventListener('click', pagination);
