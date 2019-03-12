import makeMovieDetail from '../src/detail-component.js';

const test = QUnit.test;

test('make movie detail template', assert => {
    const movie = {
        title: 'Out of the Past',
        backdrop_path: '/aO6MUtT9D1G0LkYHOrxG8itPjiU.jpg',
        overview: 'Jeff Bailey seems to be a mundane gas station owner in remote Bridgeport, CA. He is dating local girl Ann Miller and lives a quiet life. But Jeff has a secret past, and when a mysterious stranger arrives in town, Jeff is forced to return to the dark world he had tried to escape.'
    };

    const result = makeMovieDetail(movie);
    const expected = /*html*/
    `<article>
    <h2 id="detail-header">Out of the Past</h2>
    <img src="https://image.tmdb.org/t/p/w300/aO6MUtT9D1G0LkYHOrxG8itPjiU.jpg">
    <p>
        Jeff Bailey seems to be a mundane gas station owner in remote Bridgeport, CA. He is dating local girl Ann Miller and lives a quiet life. But Jeff has a secret past, and when a mysterious stranger arrives in town, Jeff is forced to return to the dark world he had tried to escape.
    </p>
    </article>
    `;

    assert.htmlEqual(result, expected);
});