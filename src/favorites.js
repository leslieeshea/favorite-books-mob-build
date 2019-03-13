import loadHeader from './header-component.js'
import { auth, favoritesByUserRef } from './firebase.js';
import convertObjectToArray from './convert-object-to-array.js';
import { updateMovies } from './list-component.js';
import loadMovies from './list-component.js';
import { makeMovieDetailUrl } from './movie-api.js';
import loadMovieDetail from './detail-component.js';

loadHeader();
loadMovies(movieId => {
    const url = makeMovieDetailUrl(movieId);
    fetch(url)
        .then(response => response.json())
        .then(movieDetail => {
            loadMovieDetail(movieDetail);
        });
});

auth.onAuthStateChanged(user => {
    const userId = user.uid;
    const userFavoritesRef = favoritesByUserRef.child(user.uid);

    userFavoritesRef.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            const favoriteMovies = convertObjectToArray(data);
            updateMovies(favoriteMovies); 
        });
});