import { app } from '../src/firebase.js';
import './html-equal.js';
import './header-component.test.js';
import './movie-list-template.test.js';
import './query-component.test.js';
import './movies-api.test.js';
import './detail-component.test.js';
import './convert-object-to-array.test.js';
QUnit.done(() => {
    app.delete();
});