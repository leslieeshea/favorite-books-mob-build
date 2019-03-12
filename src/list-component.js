import { auth, favoritesByUserRef } from './firebase.js';

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
    <span class="favorite-star">★</span>
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
        const favoriteStar = dom.querySelector('.favorite-star');
        favoriteStar.addEventListener('click', () => {
            const userId = auth.currentUser.uid;
            const userFavoritesRef = favoritesByUserRef.child(userId);
            const userFavoriteMovieRef = userFavoritesRef.child(movie.id);
            userFavoriteMovieRef.set({
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                release_date: movie.release_date
            });
        });
        movieListContainer.appendChild(dom);
    });
}