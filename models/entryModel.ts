import { Schema, model, models, Types } from 'mongoose';

const entrySchema = new Schema({
  date: { type: Date, default: Date.now() },
  card: { type: Types.ObjectId , required: true, unique: true, ref: 'Card' },
}, {timestamps: true });

const Entry = models.Entry || model('Entry', entrySchema);

export default Entry;