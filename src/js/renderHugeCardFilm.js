import { hugeFilmContainer } from './const-names';

function renderHugeCardFilm({ results }) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const markupTraidingFilms = results
    .map(
      ({
        poster_path,
        title,
        vote_average,
        vote_count,
        popularity,
        original_title,
        genre_ids,
        overview,
      }) => `<div class="huge__film--card">
                <img class="huge__film--poster" src="${
                  IMG_URL + poster_path
                }" alt="${title}" />
                <h2 class="huge__film--title">${title}</h2>
                <div class="huge__film--card-description">
                    <ul class="huge__film--list">
                        <li class="huge__film--list-item">Vote / Votes <span class="huge__film--list-value">${vote_average} / ${vote_count}</span></li>
                        <li class="huge__film--list-item">Popularity<span class="huge__film--list-value">${popularity}</span></li>
                        <li class="huge__film--list-item">Original Title <span class="huge__film--list-value">${original_title}</span></li>
                        <li class="huge__film--list-item">Genre <span class="huge__film--list-value">${genre_ids}</span></li>
                    </ul>
                    <p class="huge__film--overview">${overview}</p>
                </div>
              <div class="header__btn">
                <button type="button" class="header__btn--item watched">Watched</button>
                <button type="button" class="header__btn--item queue">queue</button>
              </div>
              </div>`
    )
    .join('');
  hugeFilmContainer.insertAdjacentHTML('beforeend', markupTraidingFilms);
}
export default renderHugeCardFilm;
