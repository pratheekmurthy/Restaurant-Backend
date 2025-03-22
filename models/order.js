const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      itemName: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ],
  tableNumber: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ["open", "preparing", "served", "completed", "cancelled"], 
    default: "open" 
  }
}, { timestamps: true }); // Adds createdAt & updatedAt fields

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;