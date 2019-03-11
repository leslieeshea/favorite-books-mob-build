import { writeSearchToQuery } from "./query-component";

const searchForm = document.getElementById('search');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(searchForm);

    const searchTerm = formData.get('search-input');
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
});