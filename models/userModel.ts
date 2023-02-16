import { Schema, model, models, Types } from 'mongoose';

const userSchema = new Schema({
  userName: String,
  activeCard: { type: Types.ObjectId , required: true, unique: true, ref: 'Card' },
}, {timestamps: true });

const User = models.User || model('User', userSchema);

export default User;