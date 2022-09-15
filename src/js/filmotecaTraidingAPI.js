import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week?';
// const API_KEY = 'api_key=07a0b7347da6bb0b9ce66f00964e6e58';

export default class FilmotecaTradingAPI {
  constructor() {
    this.query = '';
    this.page = 1;
    this.perPage = 20;
  }

  async fetchTtaidingFilms() {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=07a0b7347da6bb0b9ce66f00964e6e58'
    );
  }

  get searchQuery() {
    return this.query;
  }
}
