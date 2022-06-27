const mongoose = require("mongoose");

const orderDetailSchema = new mongoose.Schema(
  {
    orders: [{ type: Schema.Types.ObjectId, ref: "orders" }],
    books: [{ type: Schema.Types.ObjectId, ref: "books" }],
    price : {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
  },
  {
    versionKey: false,
  }
);

const OrderDetail = mongoose.model("orderDetails", orderDetailSchema);

module.exports = { OrderDetail };
