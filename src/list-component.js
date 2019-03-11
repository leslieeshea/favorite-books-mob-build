export function makeMovieTemplate(movie) {
    const html = /*html*/ `<li>
    <h2>${movie.title}</h2>
    <img class="poster" src="https://image.tmdb.org/t/p/w92${movie.poster_path}">
    <p>${movie.release_date.slice(0, 4)}</p>
</li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

