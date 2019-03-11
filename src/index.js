import loadHeader from './header-component.js';
import loadMovies from './list-component.js';
import movies from '../data/movies.js';

loadHeader();

loadMovies(movies);