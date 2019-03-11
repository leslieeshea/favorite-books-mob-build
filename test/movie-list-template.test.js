import { makeMovieTemplate } from '../src/list-component.js';

const test = QUnit.test;



test('Make movie list template', assert => {
    const movie = {
        title: 'Star Wars',
        poster_path: '/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg',
        release_date: '1977-05-25'
    }
    const result = makeMovieTemplate(movie);
    const expected = /*html*/ `<li>
    <h2>Star Wars</h2>
    <img class="poster" src="https://image.tmdb.org/t/p/w92/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg">
    <p>1977</p>
</li>
    `;
    assert.htmlEqual(result, expected);
});