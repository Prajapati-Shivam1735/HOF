const books = [
    { title: "Book 1", author: "author 1", publicationYear: 2005 },
    { title: "Book 2", author: "author 2", publicationYear: 2012 },
    { title: "Book 3", author: "author 3", publicationYear: 2008 },
    { title: "Book 4", author: "author 4", publicationYear: 2015 }
];

function filterBooks(books) {
    return books.filter(book => book.publicationYear <= 2010)
        .map(book => {
            return {
                title: book.title,
                author: book.author.toUpperCase(),
                publicationYear: book.publicationYear
            };
        });
}

const filteredBooks = filterBooks(books);

console.log(filteredBooks);
