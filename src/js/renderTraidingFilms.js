import { traidingFilmContainer } from './const-names';

import { getGenres } from '../index';

function renderTraidingfFilms({ results }) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  getGenres();

  const markupTraidingFilms = results
    .map(
      ({
        poster_path,
        title,
        genre_ids,
        release_date,
        vote_average,
      }) => `<div class="film__card">
                <img class="film__poster" src="${
                  IMG_URL + poster_path
                }" alt="${title}" />
                <div class="film__card-description">
                  <h2 class="film__title">${title}</h2>
                  <p class="film__set">${genre_ids} | ${release_date}<span class="film__vote">${vote_average}</span></p>
                  
                </div>
              </div>`
    )
    .join('');
  traidingFilmContainer.insertAdjacentHTML('beforeend', markupTraidingFilms);
}
export default renderTraidingfFilms;
