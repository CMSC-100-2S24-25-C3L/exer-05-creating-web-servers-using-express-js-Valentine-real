import needle from "needle";

needle.post(
    'http://localhost:3000/add-book',
    {
        name: "Harry Potter and the Philosopher’s Stone",
        isbn: "978-0-7475-3269-9",
        author: "J.K Rowling",
        year: 1997
    },
    (err, res) => {
        console.log(res.body);
    }
);

needle.post(
    'http://localhost:3000/add-book',
    {
        name: "Harry Potter and the Chamber of Secrets",
        isbn: "0-7475-3849-2",
        author: "J.K Rowling",
        year: 1998
    },
    (err, res) => {
        console.log(res.body);
    }
);

needle.post(
    'http://localhost:3000/add-book',
    {
        name: "The Little Prince",
        isbn: "978-0156012195",
        author: "Antoine Saint-Exupery",
        year: 1943
    },
    (err, res) => {
        console.log(res.body);
    }
);

needle.get(
    "http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling",
    (err,res) => {
        console.log(res.body);
    }
);

needle.get(
    "http://localhost:3000/find-by-author?author=J.K+Rowling",
    (err,res) => {
        console.log(res.body);
    }
);