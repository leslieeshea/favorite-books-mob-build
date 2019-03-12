const config = {
    apiKey: "AIzaSyCG9hvPEpNECaGX7GOSvZrrYZQ2txN76Uc",
    authDomain: "favorite-books-38a30.firebaseapp.com",
    databaseURL: "https://favorite-books-38a30.firebaseio.com",
    projectId: "favorite-books-38a30"
 
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();
export const usersRef = db.ref('users');
export const favoritesByUserRef = db.ref('favorites-by-user');