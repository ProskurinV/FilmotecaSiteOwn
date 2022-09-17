import { traidingFilmContainer } from './const-names';

export default function renderTraidinfFilms({ results }) {
  const markupTraidingFilms = results
    .map(
      ({
        poster_path,
        title,
        genre_ids,
        release_date,
      }) => `<div class="film__card">
            <img scr="${poster_path}" alt="${title}"
            />
            <div class="film__card-description">
                  <h2 class="film__title">${title}</h2>
                  <p class="film__set film__genre film__year">${genre_ids} ${release_date}</p>
                </div>
                  </div>`
    )
    .join('');
  traidingFilmContainer.insertAdjacentHTML('beforeend', markupTraidingFilms);
}
