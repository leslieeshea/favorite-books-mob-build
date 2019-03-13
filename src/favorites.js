import loadHeader from './header-component.js'
import { auth, favoritesByUserRef } from './firebase.js';
import convertObjectToArray from './convert-object-to-array.js';
import { updateMovies } from './list-component.js';

loadHeader();

auth.onAuthStateChanged(user => {
    const userId = user.uid;
    const userFavoritesRef = favoritesByUserRef.child(user.uid);

    userFavoritesRef.on('value')
        .then(snapshot => {
            const data = snapshot.val();
            const favoriteMovies = convertObjectToArray(data);
            updateMovies(favoriteMovies); 
        });
});