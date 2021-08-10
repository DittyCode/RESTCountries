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

const themeSwitcher = document.querySelector('[data-themeBtn]');
const buttonPagination = document.querySelector('[data-pagination]');

themeSwitcher.addEventListener('click', themeSwitch);

buttonPagination.addEventListener('click', pagination);

countriesAPI();
