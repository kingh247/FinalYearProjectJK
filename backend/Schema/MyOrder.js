import mongoose from 'mongoose';

const MyOrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    MyOrderItems: [
      {
        MyName: { type: String, required: true },
        MyQty: { type: Number, required: true },
        MyPrice: { type: Number, required: true },
        MyImage: { type: String, required: true },
        MyProduct: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    DeleiveryAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postcode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResults: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      emailAddress: { type: String },
    },
    productPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    delieveryPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model('Order', MyOrderSchema);

export default Order;
