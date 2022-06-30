const mongoose = require("mongoose");
const { Schema } = mongoose;
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
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
    createdDate:{
      type: Date,
      default: Date.now
    },
    updatedDate:{
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      default: "active"
    },
    categories: [{type: Schema.Types.ObjectId, ref:'categories'}],
  },
  {
    versionKey: false,
  }
);

bookSchema.plugin(aggregatePaginate);
const Book = mongoose.model("books", bookSchema);
module.exports = {
  Book,
};
