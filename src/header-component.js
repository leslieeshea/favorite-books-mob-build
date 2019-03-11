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
    <img src="${user.photoURL}">
    <span>${user.displayName}</span>
    <button>Sign Out</button>
</div>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadHeader(options) {
    const headerContainer = document.getElementById('header-container');

    const dom = makeHeader();
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }

    const header = dom.querySelector('header');
    auth.onAuthStateChanged(user => {
        if(user) {  
            const userDom = makeProfile(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
            });
            header.appendChild(userDom);
        }
        else {
            window.location = '/auth.html';
        }
    });
}