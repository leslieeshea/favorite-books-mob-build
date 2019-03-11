import { writeSearchToQuery } from '../src/query-component.js';
const test = QUnit.test;

test('add search to empty query', assert => {
    //Arrange
    const existingQuery = '';
    const searchTerm = 'Harry Potter';
    //Act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    const expected = 'searchTerm=Harry+Potter&page=1';
    //Assert
    assert.equal(result, expected);
});

test('add search to existing query and update search url and resets page', assert => {
    //Arrange
    const existingQuery = 'searchTerm=batman&page=3';
    const searchTerm = 'Harry Potter';
    //Act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    const expected = 'searchTerm=Harry+Potter&page=1';
    //Assert
    assert.equal(result, expected);
});