// import FilmotecaTradingAPI from './js/filmotecaTraidingAPI';
// import { formEl } from './js/const-names';
// import renderTraidinfFilms from './js/renderTraidingFilms';
// import OnlyScroll from 'only-scrollbar';
// import Notiflix from 'notiflix';

// const scroll = new OnlyScroll(window, {
//   damping: 0.4,
// });

// const filmotecaTraidingAPI = new FilmotecaTradingAPI();

// const scroll = new OnlyScroll(window, {
//   damping: 0.5,
// });

// formEl.addEventListener('submit', onInputSearch);

// function onInputSearch(event) {
//   try {
//     event.preventDefault();
//     filmotecaTraidingAPI.searchQuery =
//       event.currentTarget.elements.searchQuery.value.trim();
//     filmotecaTraidingAPI
//       .fetchTtaidingFilms()
//       .then(({ data }) => renderTraidinfFilms(data));
//   } catch (onFetchError) {}
// }

// function onFetchError(error) {
//   Notiflix.Notify.warning('Oops, there is no country with that name');
// }
