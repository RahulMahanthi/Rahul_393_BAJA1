
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  numbers: [String],
  alphabets: [String],
  highest_alphabet: String,
  createdAt: { type: Date, default: Date.now },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
