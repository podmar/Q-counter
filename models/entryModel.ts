import { Schema, model, models } from 'mongoose';

const entrySchema = new Schema({
  date: String,
  number: Number
});

const Entry = models.Entry || model('Entry', entrySchema);

export default Entry;