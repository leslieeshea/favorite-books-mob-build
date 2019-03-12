export function makeMovieTemplate(movie) {
    let posterPath = null;
    if(movie.poster_path) {
        posterPath = `https://image.tmdb.org/t/p/w92${movie.poster_path}`;
    }
    else {
        posterPath = '../assets/image.png';
    }
    const html = /*html*/ `<li>
    <h2>${movie.title}</h2>
    <img class="poster" src="${posterPath}">
    <p>${movie.release_date.slice(0, 4)}</p>
</li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
const movieListContainer = document.getElementById('movie-list');

export default function loadMovies(movies) {
    while(movieListContainer.firstChild) {
        movieListContainer.firstChild.remove();
    }
    movies.forEach(movie => {
        const dom = makeMovieTemplate(movie);
        movieListContainer.appendChild(dom);
    });
}