const test = QUnit.test;

function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}
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

