const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  location: String,
  email: String,
  username: String,
  password: String 
},{ collection: 'accounts' });

module.exports = mongoose.model('Account', AccountSchema);