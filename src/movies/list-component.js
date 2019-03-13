import { auth, favoritesByUserRef } from '../firebase.js';

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
let selectCallback = null; 

export default function loadMovies(callback) {
    selectCallback = callback;
}

let selectedMovie = null;
export function updateMovies(movies) {
    while(movieListContainer.firstChild) {
        movieListContainer.firstChild.remove();
    }
    movies.forEach(movie => {
        const dom = makeMovieTemplate(movie);
        const li = dom.querySelector('li');
        li.addEventListener('click', () => {
            if(selectedMovie) {
                selectedMovie.classList.remove('selected');
            }
            li.classList.add('selected');
            selectedMovie = li;
            selectCallback(movie.id);
        });
        const favoriteStar = dom.querySelector('.favorite-star');
    
        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteMovieRef = userFavoritesRef.child(movie.id);
        userFavoriteMovieRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                let isFavorite = false;
                if(value) {
                    addFavorite();
                }
                else {
                    removeFavorite();
                }

                function addFavorite() {
                    isFavorite = true;
                    favoriteStar.classList.add('favorite');
                }

                function removeFavorite() {
                    isFavorite = false;
                    favoriteStar.classList.remove('favorite');
                }
                
                favoriteStar.addEventListener('click', () => {
                    if(isFavorite) {
                        userFavoriteMovieRef.remove();
                        removeFavorite();
                    }
                    else {
                        userFavoriteMovieRef.set({
                            id: movie.id,
                            title: movie.title,
                            poster_path: movie.poster_path,
                            release_date: movie.release_date
                        });
                        addFavorite();
                    }
                });
            });
        movieListContainer.appendChild(dom);
    });
}