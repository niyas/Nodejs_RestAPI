var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    Genere: {
        type: String
    },
    description: {
        type: String
    },
    author: {
        type: String,
        require: true
    },
    publisher: {
        type: String
    },
    pages: {
        type: Number
    },
    image_url: {
        type: String
    },
    buy: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback) {
    Book.findById(id,callback);
}