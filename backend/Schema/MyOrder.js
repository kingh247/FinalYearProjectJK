import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },

    MyName: {
      type: String,
      required: true,
    },
    MyImage: {
      type: String,
      required: true,
    },
    MyBrand: {
      type: String,
      required: true,
    },
    MyCategory: {
      type: String,
      required: true,
    },
    MyDescription: {
      type: String,
      required: true,
      default: 0,
    },
    MyRating: {
      type: Number,
      required: true,
      default: 0,
    },
    MyNumReivews: {
      type: Number,
      required: true,
      default: 0,
    },
    MyPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    ProductCount: {
      type: Number,
      required: true,
      default: 0,
    },
    fullName: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
      default: 0,
    },
    country: {
      type: String,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('order', orderSchema);

export default Order;
