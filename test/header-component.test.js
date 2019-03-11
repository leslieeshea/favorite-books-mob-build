import { makeHeader } from '../src/header-component.js';

const test = QUnit.test;



test('make header', assert => {
    const dom = makeHeader();

    const expected = /*html*/
    `  <header>
        <img src="assets/alchemy-logo.png">
        <h1>Favorite Books</h1></header>`;

    assert.htmlEqual(dom, expected);
});