const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const peopleSchema = new Schema({
    nombre: {type: String, trim: true},
    apellido: {type: String, trim: true}
})

const model = mongoose.model('peoples', peopleSchema);

module.exports = model;