const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BookSchema = new schema({
    name: String,
    genre: String,
    authorid: String
});

module.exports = mongoose.model('Book', BookSchema);