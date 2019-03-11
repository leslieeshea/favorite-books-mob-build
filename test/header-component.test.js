import { makeHeader, makeProfile } from '../src/header-component.js';

const test = QUnit.test;

test('make header', assert => {
    const dom = makeHeader();

    const expected = /*html*/
    `  <header>
        <img src="assets/alchemy-logo.png">
        <h1>Favorite Books</h1></header>`;

    assert.htmlEqual(dom, expected);
});

test('make user profile', assert => {
    const user = {
        displayName: 'Megan Marshall',
        photoUrl: 'http://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg'
    };


    const expected = /*html*/
    `  <div class="profile">
    <img src="http://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg">
    <span>Megan Marshall</span>
    <button>Sign Out</button>
</div>`;
    
    const dom = makeProfile(user);

    assert.htmlEqual(dom, expected);

});