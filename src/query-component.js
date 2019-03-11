export function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}


export function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const pageString = searchParams.get('page');
    let page = 1;
    if(pageString) {
        page = parseInt(pageString);
    }
    const options = {
        searchTerm: searchParams.get('searchTerm'),
        page: page
    };
    return options;
}