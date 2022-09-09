import { traidingFilmContainer } from './const-names';

export default function renderTraidinfFilms({ results }) {
  const markupTraidingFilms = results
    .map(
      ({
        title,
        genre_ids,
        release_date,
      }) => `<li class="film__item film__border">
        <article class="film__card">
          <div class="film__card-thumb">
            <img
              srcset="
                ./images/images-portfolio/img1.jpg     370w,
                ./images/images-portfolio/img1-x2.jpg  740w,
                ./images/images-portfolio/img1-x3.jpg 1110w
              "
              src="./images/images-portfolio/img1.jpg"
              alt="набор фото"
              sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, (min-width: 480px) 100vw, 100vw"
            />
          </div>
          <div class="film__card-content">
            <h2 class="film__title">${title}</h2>
            <p class="film__genre film__year">${genre_ids} ${release_date}</p>
          </div>
        </article>
      </li>`
    )
    .join('');
  traidingFilmContainer.insertAdjacentHTML('beforeend', markupTraidingFilms);
}
