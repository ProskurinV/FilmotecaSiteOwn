import FilmotecaTradingAPI from './js/filmotecaTraidingAPI';
import { formEl, upBtn, hugeFilmContainer, filmCard } from './js/const-names';
import renderTraidingfFilms from './js/renderTraidingFilms';
import OnlyScroll from 'only-scrollbar';
import Notiflix from 'notiflix';
import { topFunction } from './js/upBtn';

const filmotecaTraidingAPI = new FilmotecaTradingAPI();

const scroll = new OnlyScroll(window, {
  damping: 0.5,
});

formEl.addEventListener('submit', onInputSearch);
upBtn.addEventListener('click', topFunction);
// filmCard.addEventListener('click', onHugeFilmClick);

function onInputSearch(event) {
  event.preventDefault();
  filmotecaTraidingAPI.searchQuery =
    event.currentTarget.elements.searchQuery.value.trim();
  // if (filmotecaTraidingAPI.searchQuery = '') {
  //   return Notiflix.Notify.warning('Write something');
  // }

  filmotecaTraidingAPI.resetPage();
  filmotecaTraidingAPI.fetchTraidingFilms().then(({ data }) => {
    if (data.total_results === 0) {
      Notiflix.Notify.info(
        `Sorry, there are no films matching your ${filmotecaTraidingAPI.searchQuery}. Please try again.`
      );
    }
    renderTraidingfFilms(data);
  });
}

// export function getGenres(genres, el) {
//   let genre = [];
//   for (const id of el.genre_ids) {
//     genres.data.genres.forEach(e => {
//       if (e.id === id) {
//         genre.push(e.name);
//       }
//     });
//   }
//   return genre.length === 1
//     ? `${genre[0]}`
//     : genre.length === 2
//     ? `${genre[0]}, ${genre[1]}`
//     : genre.length > 2
//     ? `${genre[0]}, ${genre[1]}, Other`
//     : '';
// }

// export function getGenres() {
//   filmotecaTraidingAPI.fetchGenres().then(({ data }) => {
//     data.genres.map(genre => {
//       return genre.name;
//     });
//   });
// }

// function onHugeFilmClick(event) {
//   event.preventDefault();
//   filmotecaTraidingAPI.fetchSearchFilms().then(({ data }) => {
//     renderHugeCardFilm(data);
//   });
// }

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
