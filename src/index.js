import FilmotecaTradingAPI from './js/filmotecaTraidingAPI';
import { formEl, upBtn } from './js/const-names';
import renderTraidinfFilms from './js/renderTraidingFilms';
import OnlyScroll from 'only-scrollbar';
import Notiflix from 'notiflix';

const filmotecaTraidingAPI = new FilmotecaTradingAPI();

const scroll = new OnlyScroll(window, {
  damping: 0.5,
});

formEl.addEventListener('submit', onInputSearch);
// upBtn.addEventListener('click', topFunction);

function onInputSearch(event) {
  event.preventDefault();
  filmotecaTraidingAPI.searchQuery =
    event.currentTarget.elements.searchQuery.value.trim();
  filmotecaTraidingAPI.resetPage();
  filmotecaTraidingAPI.fetchTraidingFilms().then(({ data }) => {
    renderTraidinfFilms(data);
  });
}

// function onLoadMore() {
//   filmotecaTraidingAPI.fetchSearchFilms().then(results => {
//     console.log(results);
//   });
// }

// function onFetchError(error) {
//   Notiflix.Notify.warning('Oops, there is no country with that name');
// }

// ===========================================================
// import NewsApiService from './js/filmotecaTraidingAPI';

// const form = document.querySelector('.search__form');

// const newsApiService = new NewsApiService();

// form.addEventListener('submit', onSearch);

// function onSearch(event) {
//   event.preventDefault();
//   console.dir(event.currentTarget.elements.searchQuery.value);

//   const searchQuery = event.currentTarget.elements.searchQuery.value;

//   newsApiService.fetchNews(searchQuery);
// }
