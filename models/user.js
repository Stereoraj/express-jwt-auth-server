import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: v => /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v),
      message: props => `${props.value} is not a valid email id!`,
    },
  },
  password: {
    type: String,
    required: true,
    min: [6, 'Password too small'],
  },
  name: {
    type: String,
    required: true,
  },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

const User = mongoose.model('User', userSchema);

export default User;
