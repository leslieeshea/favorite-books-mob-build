export function makeFooter() {
    const html = /*html*/ 
    ` <img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg">
    This product uses the TMDb API but is not endorsed or certified by TMDb.`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


const footerContainer = document.getElementById('footer-container');

export default function loadFooter() {
    const dom = makeFooter();
    footerContainer.appendChild(dom);
}