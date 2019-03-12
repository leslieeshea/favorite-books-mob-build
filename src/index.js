import loadHeader from './header-component.js';
import loadMovies from './list-component.js';
import movies from '../data/movies.js';
import './search-component.js';
import { readFromQuery } from './query-component.js';
import { updateSearchTerm } from './search-component.js';
import makeSearchMovieUrl from './movie-api.js';
import { updatePagingInfo } from './paging-component.js';

loadHeader();

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);

    const url = makeSearchMovieUrl(queryOptions);
    fetch(url)
        .then(response => response.json())
        .then(movies => {
            loadMovies(movies.results);
            const pagingInfo = {
                page: movies.page,
                totalPages: movies.total_pages
            };
            updatePagingInfo(pagingInfo);
        })
        .catch(err => {
            /* eslint-disable-next-line */
            console.error('fetch error:', err);
        });
});
