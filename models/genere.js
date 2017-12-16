var mongoose = require('mongoose');

//Genere Schema
var genereSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Genere = module.exports = mongoose.model('Geners', genereSchema);

/**
 * Get Geners
 * 
 * @param {Function} callback 
 * @param {Integer} limit 
 */
module.exports.getGeners = function(callback, limit) {
    Genere.find(callback).limit(limit);
}

/**
 * Add a Genere
 * 
 * @param {Object} genere 
 * @param {Function} callback 
 */
module.exports.addGenere = function(genere, callback) {
    Genere.create(genere, callback)
}

/**
 * Update a Genere
 * 
 * @param {String} id 
 * @param {Object} genere 
 * @param {Object} options 
 * @param {Function} callback 
 */
module.exports.updateGenere = function(id, genere, options, callback) {
    var query = {_id: id };
    var update = {
        name: genere.name
    }
    Genere.findOneAndUpdate(query, update, options, callback)
}

/**
 * Delete a genere
 * 
 * @param {String} id 
 * @param {Function} callback 
 */
module.exports.deleteGenere = function(id, callback) {
    var query = { _id: id };
    Genere.remove(query, callback);
}