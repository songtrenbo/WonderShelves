const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    users: [{ type: Schema.Types.ObjectId, ref: "users" }],
    totalPrice : {
        type: Number,
        required: true
    },
    totalQuantity: {
        type: Number,
        required: true
    }
  },
  {
    versionKey: false,
  }
);

const Order = mongoose.model("orders", orderSchema);

module.exports = { Order };
