import { auth } from '../firebase.js';

export function makeHeader() {
    let headerText = null;
    if(window.location.pathname === '/favorites.html') {
        headerText = 'My Favorite Movies';
    }
    else {
        headerText = 'Favorite Movies';
    }
    const html = /*html*/
    `  <header>
    <img id="logo-image" src="assets/alchemy-logo.png">
    <h1>${headerText}</h1></header>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(user) {
    let link = null;
    let linkText = null;
    if(window.location.pathname === '/favorites.html') {
        link = '/';
        linkText = 'Back to Movie Search';
    }
    else {
        link = '/favorites.html';
        linkText = 'My Favorite Movies';
    }
    const avatar = user.photoURL || '../assets/smiley.png';
    const html = /*html*/ `<div class="profile">
    <img id="user-image" src="${avatar}">
    <span>${user.displayName}</span>
    <p><a href="${link}">${linkText}</a></p>
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