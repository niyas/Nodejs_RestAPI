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

//Get Geners
module.exports.getGeners = function(callback, limit) {
    Genere.find(callback).limit(limit);
}

//add Genere
module.exports.addGenere = function(genere, callback) {
    Genere.create(genere, callback)
}