import { Schema, model, models, Types } from 'mongoose';

const userSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    activeCard: { type: Types.ObjectId, ref: 'Card' },
}, {timestamps: true });

const User = models.User || model('User', userSchema);

export default User;