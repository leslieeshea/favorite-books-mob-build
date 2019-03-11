import { auth } from './firebase.js';

export function makeHeader() {
    const html = /*html*/
    `  <header>
    <img src="assets/alchemy-logo.png">
    <h1>Favorite Books</h1></header>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(user) {
    const html = /*html*/ `<div class="profile">
    <img src="http://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg">
    <span>Megan Marshall</span>
    <button>Sign Out</button>
</div>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

const dom = makeHeader();
headerContainer.appendChild(dom);