import loadHeader from '../shared/header-component.js';
import { auth, favoritesByUserRef } from '../firebase.js';
import convertObjectToArray from '../convert-object-to-array.js';
import { updateMovies } from '../movies/list-component.js';
import loadMovies from '../movies/list-component.js';
import { makeMovieDetailUrl } from '../movie-api.js';
import loadMovieDetail from '../movie-detail/detail-component.js';
import loadFooter from '../shared/footer-component.js';

loadHeader();
loadFooter();

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
    const userFavoritesRef = favoritesByUserRef.child(userId);

    userFavoritesRef.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            const favoriteMovies = convertObjectToArray(data);
            updateMovies(favoriteMovies); 
        });
});