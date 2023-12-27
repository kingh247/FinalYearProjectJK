import mongoose from 'mongoose';

const MyProductSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', MyProductSchema);
export default Product;
