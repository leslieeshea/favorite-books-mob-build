import makeSearchMovieUrl from '../src/movie-api.js';
const test = QUnit.test;

test('make url that includes search term and page', assert => {
    const queryOptions = {
        searchTerm: 'harry potter',
        page: 4
    };
    const expected = 'https://api.themoviedb.org/3/search/movie?api_key=cb74bb60617505504abd12bd45490b45&language=en-us&include_adult=false&query=harry+potter&page=4';
    const result = makeSearchMovieUrl(queryOptions);

    assert.equal(result, expected);
})