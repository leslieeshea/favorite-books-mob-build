import loadHeader from './header-component.js';
import loadMovies from './list-component.js';
import movies from '../data/movies.js';
import './search-component.js';
import { readFromQuery } from './query-component.js';
import { updateSearchTerm } from './search-component.js';

loadHeader();

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);
});
