const pages = [
    "home.html",
    "about.html",
    "portfolio.html",
    "socialmedia.html",
    "contact.html"
];

const pagesCopy = [...pages];

console.log('Array original: ', pagesCopy);

const pagesSort = pagesCopy.sort();
//reverse sort
const pagesSortReverse = pagesCopy.reverse();

console.log('Array Sort:', pagesSort);

console.log('Array original-post: ', pages);

console.log('Array Sort-Reverse ', pagesSortReverse);