const mongoose = require("mongoose");
const { Schema } = mongoose;
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 30
    },
    image: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 0
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    description: {
      type: String,
      required: true
    },
    categories: [{type: Schema.Types.ObjectId, ref:'categories'}],
  },
  {
    versionKey: false,
  }
);

const Book = mongoose.model("books", bookSchema);

module.exports = {
  Book,
};
