import mongoose, { Schema, Document } from 'mongoose';

// Define the structure of each item
const ItemSchema = new Schema(
  {
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  },
  { _id: false } // prevent automatic _id for subdocuments to main order schema
);

// Define the main order schema
const OrderSchema = new Schema(
  {
    orderId: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    orderDate: { type: Date, required: true },
    status: {
      type: String,
      enum: ['Pending', 'Shipped', 'Delivered'],
      required: true
    },
    items: { type: [ItemSchema], required: true },
    totalAmount: { type: Number, required: true }
  },
  {
    timestamps: true // optional: adds createdAt and updatedAt
  }
);

// Export the Mongoose model
const Order = mongoose.model('Order', OrderSchema);
export default Order;
