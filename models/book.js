var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    genere: {
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

/**
 * Get Books
 * 
 * @param {Function} callback 
 * @param {Integer} limit 
 */
module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}

/**
 * Get a book by Id
 * 
 * @param {Integer} id 
 * @param {Function} callback 
 */
module.exports.getBookById = function(id, callback) {
    Book.findById(id,callback);
}

/**
 * Add a new book
 * 
 * @param {Object} book 
 * @param {Function} callback 
 */
module.exports.addBook = function(book, callback) {
    Book.create(book, callback);
}


/**
 * Update a book
 * 
 * @param {Integer} id 
 * @param {Object} book 
 * @param {Object} options 
 * @param {Object} callback 
 */
module.exports.updateBook = function(id, book, options, callback) {
    var query = { _id: id };
    var update = {
        title: book.title,
        genere: book.genere,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy: book.buy
    }
    Book.findOneAndUpdate(query, update, options, callback);
}