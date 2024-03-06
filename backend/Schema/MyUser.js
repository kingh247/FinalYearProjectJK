import mongoose from 'mongoose';

// const MyUserSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: 'User',
//     },
//     MyName: {
//       type: String,
//       required: true,
//     },
//     MyEmail: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     MyPassword: {
//       type: String,
//       required: true,
//     },
//     IsAdmin: {
//       type: Boolean,
//       required: true,
//       default: false,
//     },
//   },
//   {
//     timestamp: true,
//   }
// );
const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    userType: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('user', userSchema);

export default User;
