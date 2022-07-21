import activateLibraryView from './MyLibraryView';
import { renderFilmCard } from './renderText';

const headerEl = document.querySelector('.header');
const homeBtnEl = headerEl.querySelector('.js-home');
const libraryBtnEl = headerEl.querySelector('.js-library');
const headerFilmEl = headerEl.querySelector('.button__menu');
const inputEl = headerEl.querySelector('.search__form');
const logoEl = headerEl.querySelector('.navigation__logo');
const btnHome = headerEl.querySelector('.navigation__link.js-library');
const btnLibrary = headerEl.querySelector('.navigation__link.js-home');
const searchBtn = headerEl.querySelector('.search__icon');
const watchedBtnEl = headerEl.querySelector('.watched-button');
const queueBtnEl = headerEl.querySelector('.queue-button');
const parameterValueEl = document.querySelector('.parameter__value');

export const galleryContainerEl = document.querySelector(
  '.js-main-container-list'
);

headerEl.classList.add('header1');
btnLibrary.classList.add('library');

logoEl.addEventListener('click', onLogoBtnClick);
homeBtnEl.addEventListener('click', onHomeBtnClick);
libraryBtnEl.addEventListener('click', onLibraryBtnClick);
searchBtn.addEventListener('click', onSearchBtnClick);
watchedBtnEl.addEventListener('click', onWatchedBtnClick);
queueBtnEl.addEventListener('click', onQueueBtnClick);
inputEl.addEventListener('click', onInputElClick);

function onSearchBtnClick() {
  inputEl.reset();
}

function onInputElClick() {
  inputEl.classList.add('input-anime');
}

function onLogoBtnClick() {
  onHomeBtnClick();
}

function onHomeBtnClick() {
  headerFilmEl.classList.add('js-is-hidden');
  headerEl.classList.add('header1');
  headerEl.classList.remove('header2');
  inputEl.classList.remove('js-is-hidden');
  btnHome.classList.remove('home');
  btnLibrary.classList.add('library');

  watchedBtnEl.classList.add('accent');
  queueBtnEl.classList.remove('accent');
  watchedBtnEl.classList.add('blick');
  queueBtnEl.classList.remove('blick');
  parameterValueEl.classList.add('visually__hidden');

  renderFilmCard();
}

function onLibraryBtnClick() {
  headerFilmEl.classList.remove('js-is-hidden');
  headerEl.classList.add('header2');
  headerEl.classList.remove('header1');
  inputEl.classList.add('js-is-hidden');
  btnHome.classList.add('home');
  btnLibrary.classList.remove('library');
  parameterValueEl.classList.remove('visually__hidden');

  activateLibraryView();

  watchedBtnEl.classList.add('accent');
  watchedBtnEl.classList.add('blick');
}

function onWatchedBtnClick() {
  watchedBtnEl.classList.add('accent');
  queueBtnEl.classList.remove('accent');
  watchedBtnEl.classList.add('blick');
  queueBtnEl.classList.remove('blick');
}

function onQueueBtnClick() {
  watchedBtnEl.classList.remove('accent');
  queueBtnEl.classList.add('accent');
  watchedBtnEl.classList.remove('blick');
  queueBtnEl.classList.add('blick');
}

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// ---------------------

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); //add this
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); //add this
  }
}

const currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}
