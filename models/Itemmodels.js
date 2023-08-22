// npm packeges
const mongoose = require("mongoose");

// Mongose vew of data
const ItemSchema = mongoose.Schema({
  titel: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("item", ItemSchema);
