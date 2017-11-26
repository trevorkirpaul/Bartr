const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: String,
  description: String,
  price: String,
  createdBy: String
});

module.exports = mongoose.model('Item', ItemSchema);