
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Geners = require('./models/genere');
Books = require('./models/book');

app.use(bodyParser.json());
//connect to mongoose
mongoose.connect('mongodb://127.0.0.1:27017/bookstore');
var db = mongoose.Connection;

app.get('/', function(req, res) {
    res.send('use /api/books or /api/geners...');
});

app.get('/api/geners', function(req, res) {
    Geners.getGeners(function(err, geners) {
        if(err) {
            throw err;
        }
        res.json(geners);
    })
});

app.post('/api/geners', function(req, res) {
    var genere = req.body;
    Geners.addGenere(genere, function(err, genere) {
        if(err) {
            throw err;
        }
        res.json(genere);
    })
});

app.put('/api/geners/:_id', function(req, res) {
    var id = req.params._id
    var genere = req.body;
    Geners.updateGenere(id, genere, {}, function(err, genere) {
        if(err) {
            throw err;
        }
        res.json(genere);
    })
});


app.get('/api/books', function(req, res) {
    Books.getBooks(function(err, books) {
        if(err) {
            throw err;
        }
        res.json(books);
    })
});

app.post('/api/books', function(req, res) {
    var book = req.body;
    Books.addBook(book, function(err, book) {
        if(err) {
            throw err;
        }
        res.json(book);
    })
});

app.put('/api/books/:_id', function(req, res) {
    var id = req.params._id;
    var book = req.body;
    Books.updateBook(id, book, {}, function(err, book) {
        if(err) {
            throw err;
        }
        res.json(book);
    })
});

app.get('/api/books/:_id', function(req, res) {
    Books.getBookById(req.params._id, function(err, book) {
        if(err) {
            throw err;
        }
        res.json(book);
    })
});

app.listen(3000);
console.log('Application running on port 3000')