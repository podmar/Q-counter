import { Schema, model, models, Types } from 'mongoose';

const entrySchema = new Schema({
  date: String,
  number: Number,
  card: { type: Types.ObjectId , required: true, unique: true, ref: 'Card' },
}, {timestamps: true });

const Entry = models.Entry || model('Entry', entrySchema);

export default Entry;