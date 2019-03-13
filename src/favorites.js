import loadHeader from './header-component.js'
import { auth, favoritesByUserRef } from './firebase.js';

loadHeader();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        const movies = 
    })
})