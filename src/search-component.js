import { writeSearchToQuery } from './query-component.js';

const searchForm = document.getElementById('search');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(searchForm);

    const searchTerm = formData.get('search-input');
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
});

export function updateSearchTerm(searchTerm) {
    searchInput.value = searchTerm;
}