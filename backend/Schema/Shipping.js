import mongoose from 'mongoose';

const MyShippingSchema = new mongoose.Schema(
  {
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
const Shipping = mongoose.model('Shipping', MyShippingSchema);
export default Shipping;
