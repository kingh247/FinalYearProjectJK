import mongoose from 'mongoose';

const MyLoginSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    userType: { type: String},
  },
  {
    timestamps: true,
  }
);
const Users = mongoose.model('users', MyLoginSchema);
export default Users;
