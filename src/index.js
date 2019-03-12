import loadHeader from './header-component.js';
import loadMovies from './list-component.js';
import './search-component.js';
import { readFromQuery } from './query-component.js';
import { updateSearchTerm } from './search-component.js';
import makeSearchMovieUrl from './movie-api.js';
import { updatePagingInfo } from './paging-component.js';
import { auth } from './firebase.js';

const prompt = document.getElementById('prompt');
const moviesSection = document.getElementById('movie-section');

loadHeader();

window.addEventListener('hashchange', loadQuery);

auth.onAuthStateChanged(() => {
    loadQuery();
});

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);

    const url = makeSearchMovieUrl(queryOptions);

    if(!url) {
        prompt.classList.remove('hidden');
        moviesSection.classList.add('hidden');
        return;
    }
    else {
        prompt.classList.add('hidden');
        moviesSection.classList.remove('hidden');
    }

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
}