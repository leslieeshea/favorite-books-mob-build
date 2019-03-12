export function makeMovieDetail(movie) {
    let backdropPath = null;
    if(movie.backdrop_path) {
        backdropPath = `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`;
    }
    else {
        backdropPath = '../assets/backdrop-placeholder.png';
    }
    const html = /*html*/
    `<article>
        <h2 id="detail-header">${movie.title}</h2>
        <img src="${backdropPath}">
        <p>
            ${movie.overview}
        </p>
    </article>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const detailContainer = document.getElementById('detail-container');
export default function loadMovieDetail(movie) {
    while(detailContainer.firstChild) {
        detailContainer.firstChild.remove();
    }
    const dom = makeMovieDetail(movie);
    detailContainer.appendChild(dom);
}