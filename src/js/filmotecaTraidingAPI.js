import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const paramsTraiding = 'trending/movie/week?';
const SEARCH_URL = 'search/movie?&query=';
const API_KEY = 'api_key=07a0b7347da6bb0b9ce66f00964e6e58';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

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
// ===========================================

// export default class NewsApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//     fetchNews() {
//       const API_KEY = '7281f54fc4a846d0af358ae732c3e7e2';

//       fetch(
//         `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=10&page=${this.page}&apiKey=${API_KEY}`
//       ).then(response =>
//         response.json().then(data => {
//           console.log(data);
//           this.incrementPage();
//         })
//       );
//     }

//   incrementPage() {
//     this.page += 1;
//   }

//   decrementPage() {
//     this.page -= 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
