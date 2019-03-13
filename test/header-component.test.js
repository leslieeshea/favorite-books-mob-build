import { makeHeader, makeProfile } from '../src/shared/header-component.js';

const test = QUnit.test;

test('make header', assert => {
    const dom = makeHeader();

    const expected = /*html*/
    `  <header>
        <img id="logo-image" src="assets/alchemy-logo.png">
        <h1>Favorite Movies</h1></header>`;

    assert.htmlEqual(dom, expected);
});

test('make user profile', assert => {
    const user = {
        displayName: 'Megan Marshall',
        photoURL: 'http://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg'
    };


    const expected = /*html*/
    `  <div class="profile">
    <img id="user-image" src="http://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg">
    <span>Megan Marshall</span>
    <p><a href="/favorites.html">My Favorite Movies</a></p>
    <p><button>Sign Out</button></p>
</div>`;
    
    const dom = makeProfile(user);

    assert.htmlEqual(dom, expected);

});