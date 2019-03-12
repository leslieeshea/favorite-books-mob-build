const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';

const API_KEY = 'cb74bb60617505504abd12bd45490b45';

export default function makeSearchMovieUrl(queryOptions) {
    const searchTerm = queryOptions.searchTerm;
    if(!searchTerm) {
        return '';
    }
    const url = new URL(SEARCH_MOVIE_URL);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('language', 'en-us');
    url.searchParams.set('include_adult', false);
    url.searchParams.set('query', searchTerm);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}