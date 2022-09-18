import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const paramsTraiding = 'trending/movie/week?';
const SEARCH_URL = 'search/movie?&query=';
const API_KEY = 'api_key=07a0b7347da6bb0b9ce66f00964e6e58';
const GENRES = 'genre/movie/list?';
const LANGUAGE = 'language=en-US';

export default class FilmotecaTradingAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 20;
  }

  fetchTraidingFilms() {
    const response = axios.get(
      `${BASE_URL}${paramsTraiding}${API_KEY}&page=${this.page}`
    );
    this.incrementPage();
    return response;
  }

  fetchSearchFilms() {
    const response = axios.get(
      `${BASE_URL}${SEARCH_URL}${this.searchQuery}&${API_KEY}&page=${this.page}`
    );
    this.incrementPage();
    return response;
  }

  fetchGenres() {
    const response = axios.get(`${BASE_URL}${GENRES}${API_KEY}&${LANGUAGE}`);
    return response;
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
