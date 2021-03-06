import activateLibraryView from './MyLibraryView';
import { renderFilmCard } from './renderText';
import {moveBtnFilmotekaToFirstPage} from './renderText';


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
const voteValueEl = document.querySelector('.hero__votes');

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

// ...Andriy suggested a solution of the problem... (comment by Kostiantyn)
// 
function onSearchBtnClick() {
  inputEl.reset();
}

function onInputElClick() {
  inputEl.classList.add('input-anime');
}

function onLogoBtnClick() {
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

  moveBtnFilmotekaToFirstPage();
 
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
 
  renderFilmCard();


  // voteValueEl.classList.add('visually__hidden');
}

function onLibraryBtnClick() {
  headerFilmEl.classList.remove('js-is-hidden');
  headerEl.classList.add('header2');
  headerEl.classList.remove('header1');
  inputEl.classList.add('js-is-hidden');
  btnHome.classList.add('home');
  btnLibrary.classList.remove('library');
  
  activateLibraryView();

  watchedBtnEl.classList.add('accent');
  watchedBtnEl.classList.add('blick');

  // voteValueEl.classList.remove('visually__hidden');
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
