import mongoose, { Types } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userName: {
      Type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      Type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      Type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const user = mongoose.model('User', userSchema);
