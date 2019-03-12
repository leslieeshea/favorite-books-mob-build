import { auth } from './firebase.js';

export function makeHeader() {
    const html = /*html*/
    `  <header>
    <img id="logo-image" src="assets/alchemy-logo.png">
    <h1>Favorite Movies</h1></header>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(user) {
    const avatar = user.photoURL || '../assets/smiley.png';
    const html = /*html*/ `<div class="profile">
    <img id="user-image" src="${avatar}">
    <span>${user.displayName}</span>
    <p><button>Sign Out</button></p>
</div>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader(options) {

    const dom = makeHeader();
    const header = dom.querySelector('header');
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }

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