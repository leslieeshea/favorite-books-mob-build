import { writeSearchToQuery, writePageToQuery, readFromQuery } from '../src/query-component.js';
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

test('add page to existing query', assert => {
    //Arrange
    const existingQuery = 'searchTerm=batman&page=3';
    const page = 4;
    //Act
    const result = writePageToQuery(existingQuery, page);
    const expected = 'searchTerm=batman&page=4';
    //Assert
    assert.equal(result, expected);
});

test('read options from query', assert => {
    const query = 'searchTerm=harry+potter&page=5';
    const expected = {
        searchTerm: 'harry potter',
        page: 5
    };
    const result = readFromQuery(query);
    assert.deepEqual(result, expected);
});

test('default to page 1 when no page is specified', assert => {
    const query = 'searchTerm=star+wars';
    const expected = {
        searchTerm: 'star wars',
        page: 1
    };
    const result = readFromQuery(query);
    assert.deepEqual(result, expected);
});