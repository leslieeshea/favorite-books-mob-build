export function makeHeader() {
    const html = /*html*/
    `  <header>
    <img src="assets/alchemy-logo.png">
    <h1>Favorite Books</h1></header>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

const dom = makeHeader();
headerContainer.appendChild(dom);