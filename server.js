import {appendFileSync} from "node:fs";
import express from "express";

const books = [];

function validateInput(toAdd){
    if (toAdd.name && toAdd.isbn && toAdd.author && toAdd.year){

        for (const book of books) {
            if (toAdd.isbn == book.isbn){
                return false;
            }
        };

        books.push(toAdd);

        appendFileSync('books.txt', `${toAdd.name},${toAdd.isbn},${toAdd.author},${toAdd.year}\n`);
        return true;
    }
    return false;
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post("/add-book", (req, res) => {
    var success = validateInput(req.body);
    res.send({success: success});
});

app.get("/find-by-isbn-author", (req, res) => {
    for (const book of books){
        if(book.isbn === req.query.isbn && book.author === req.query.author){
            return res.send(book);
        }
    }
    return res.send("Book not found")
});

app.get("/find-by-author", (req, res) => {
    const found = []
    for (const book of books){
        if(book.author === req.query.author){
            found.push(book)
        }
    }
    if (found.length > 1){
        return res.send(found);
    }
    return res.send("No books from author");
});

app.listen(3000, () => {console.log('Server started at port 3000')});